import { Link } from "react-router-dom"
import logo from '../assets/img/logoMerkury.webp'
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../db";

function Navbar() {

  const [doctors, setDoctors] = useState([])

  useEffect(() => {
    const fetchListings = async () => {
      try {

        const querySnap = await getDocs(collection(db, "lekarze"));
        const doctors = []
        querySnap.forEach((doc) => {
          return doctors.push({
            id: doc.id,
            data: doc.data()
          })
        })
        setDoctors(doctors)
      } catch (error) {
        console.log(error)
      }
    }

    fetchListings()
  }, [])


  return (
  <nav className={`navbar fixed z-30 font-bold bg-base-100`}>
    <section class="navbar-start lg:hidden dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="grey"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-none w-52">
      <li><Link to='/'>Strona Główna</Link></li>
        <li><Link to='/onas'>O Nas</Link></li>
        <li>

            <summary>
              Specjaliści
            </summary>
            <ul>
              {
                doctors.map((doc) => (
                  <li><Link to={`/lekarze/${doc.id}`}>{doc.id.charAt(0).toUpperCase() + doc.id.slice(1)}</Link></li>
                ))
              }
            </ul>

        </li>

        <li>
          <Link to='/kontakt'><div className="btn btn-outline btn-primary border-[2px]">Kontakt</div></Link>
        </li>
        
      </ul>
    </section>
    <section className="mr-[4px] navbar-end sm:navbar-end md:mr-0 md:navbar-start">
      <Link to='/' className="flex justify-center items-center p-4 gap-4">
        <img src={logo} alt="Logo Lunaris Web" width='70px'/>
        <h2 className="whitespace-nowrap hidden lg:block text-5xl font-logo text-primary">Merkury Medica</h2>
      </Link>
    </section>
    <section className="navbar-end hidden lg:flex">
      <ul className="menu menu-horizontal px-1 justify-center items-center gap-4">
        <li className=" text-lg"><Link to='/'>Strona Główna</Link></li>
        <li className=" text-lg"><Link to='/onas'>O Nas</Link></li>
        <li>
          <details>
            <summary className=" text-lg hover:">
              Specjaliści
            </summary>
            <ul className="rounded-none text-lg">
              {
                doctors.map((doc) => (
                  <li className="border-b-[1px] border-black"><Link to={`/lekarze/${doc.id}`}>{doc.id.charAt(0).toUpperCase() + doc.id.slice(1)}</Link></li>
                ))
              }
            </ul>
          </details>
        </li>
        <li>
        <Link to='/kontakt'><div className="btn btn-primary">Kontakt</div></Link>
        </li>
        
      </ul>
    </section>
  </nav>
  )
}

export default Navbar