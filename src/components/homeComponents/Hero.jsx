import { Link } from 'react-router-dom'
import {FaPhone} from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="hero min-h-screen bg-main pt-24 lg:pt-0" >
      <div className="hero-overlay bg-primary bg-opacity-80"></div>
      <div className='w-full flex justify-end p-4 lg:p-32'>
        <div className=" flex flex-col md:w-1/2 text-center md:text-right text-white gap-10">
          <h1 className="text-green-400 text-7xl font-black">Merkury Medica</h1>
          <p className="text-4xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, iusto!</p>
          <div className='flex flex-col lg:flex-row gap-4 justify-center lg:justify-end'>
              <a href="tel:++48 668 312 122">
                <button className="btn btn-secondary font-bold rounded-full text-xl">
                  <FaPhone /> +48 668 312 122
                </button>
              </a>
              <Link to='/kontakt'>
                <button className="btn btn-secondary rounded-full text-xl">Skontaktuj się z nami</button>
              </Link>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Hero
