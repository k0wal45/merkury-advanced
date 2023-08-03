import React from 'react'
import { Link } from 'react-router-dom'

const SwiperItem = ({imie, tytul, zdjecie, link}) => {
  return (
    <div className=" mx-auto card w-96 bg-base-100 shadow-xl my-12" key={link}>
      <figure className="px-10 pt-10">
        <img src={zdjecie} alt="Zdjęcie Lekarza" className="rounded-xl aspect-square object-cover" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="font-bold text-primary text-2xl">{tytul}</h2>
        <h3 className="card-title text-4xl">{imie}</h3>
        <div className="card-actions">
          <Link to={`/lekarze/${link}`}>
            <button className="btn btn-primary">Umów się</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SwiperItem
