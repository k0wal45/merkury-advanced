import {useEffect, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../db';
import SwiperItem from './subcomponents/SwiperItem';

function SwiperItems() {  
  const [dimensions, setDimensions] = useState(window.innerWidth);
  const [doctors, setDoctors] = useState([])

  useEffect(() => {
    const handleResize = () => {
      setDimensions(window.innerWidth);
    };
    window.addEventListener("load", handleResize, false);
    window.addEventListener("resize", handleResize, false);
  });

  

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
  <section className='mx-auto flex justify-center items-center'>

    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={dimensions > 1020 ? 3 : dimensions > 768 ? 2 : 1}
      pagination={{ clickable: true }}
      autoplay={{delay: 5000}}
    >
      {
        doctors.map((doc) => (  
          <SwiperSlide>
            <SwiperItem 
              imie={doc.data.name}
              tytul={doc.id.charAt(0).toUpperCase() + doc.id.slice(1)}
              zdjecie={doc.data.photo}
              link={doc.id}
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
  </section>

  )
}

export default SwiperItems