import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaSearchLocation } from 'react-icons/fa'

function ContactInfo() {
  return (
    <section className='my-0 mx-auto flex flex-col items-center gap-8 w-full bg-secondary bg-opacity-70 p-4 pt-8 lg:p-16 '> 
      <div className='flex flex-col lg:flex-row justify-center items-start flex-wrap'>

        <div className="flex flex-col gap-4 justify-center items-center p-8 text-center w-72">
          <FaPhone className="text-8xl"/>
          <h5 className="text-bold text-3xl">Kontakt Telefoniczny</h5>
          <ul>
            <li className="text-xl">+32 724 03 30</li>
            <li className="text-xl">+48 668 312 122</li>

          </ul>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center p-8 text-center w-72">
          <FaSearchLocation className="text-8xl"/>
          <h5 className="text-bold text-3xl">Adres przychodni</h5>
          <ul>
            <li className="text-xl">Jastrzębie-Zdrój</li>
            <li className="text-xl">Mazowiecka 8</li>
            <li className="text-xl">44-335</li>

          </ul>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center p-8 text-center w-72">
          <FaEnvelope className="text-8xl"/>
          <h5 className="text-bold text-3xl">Adres Email</h5>
          <ul>
            <li className="text-xl whitespace-nowrap">przychodnia@merkury-medica.pl</li>


          </ul>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center p-8 text-center w-72">
          <FaEnvelope className="text-8xl"/>
          <h5 className="text-bold text-3xl">Media Społecznościowe</h5>
          <ul className='flex gap-8'>
            <li className="text-xl whitespace-nowrap"><a href="https://www.facebook.com/profile.php?id=100095243081767"><FaFacebook className='text-4xl'/></a></li>
            <li className="text-xl whitespace-nowrap"><a href="https://www.facebook.com/profile.php?id=100095243081767"><FaInstagram className='text-4xl'/></a></li>


          </ul>
        </div>

      </div>
    </section>
  )
}

export default ContactInfo