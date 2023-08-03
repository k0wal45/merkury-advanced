import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../db'



const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phoneNum: '',
    email: '',
    residency: '',
  })

  const {
    name,
    surname,
    phoneNum,
    email,
    residency
  } = formData

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

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(formData)

    setFormData({
      name: '',
      surname: '',
      phoneNum: '',
      email: '',
      residency: '',
    })
  }

  const onMutate = (e) => {
    let boolean = null

    if (e.target.value === 'true') {
      boolean = true
    }
    if (e.target.value === 'false') {
      boolean = false
    }

      if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }))
    }
  }
  return (
    <form className='flex flex-col gap-4 p-4 bg-base-300 w-full lg:w-1/2'>
      <div className="flex flex-col lg:flex-row gap-4">
        <input type="text" placeholder="Tu Wpisz Imię" className="input text-md lg:text-xl w-full" onChange={onMutate} value={name} id='name'/>
        <input type="text" placeholder="Tu Wpisz Nazwisko" className="input text-md lg:text-xl w-full" onChange={onMutate} value={surname} id='surname'/>
      </div>
      <input type="text" placeholder="Tu Wpisz Lekarza" className="input text-md lg:text-xl w-full" onChange={onMutate} id='doctor'/>
      <input type="text" placeholder="Tu Wpisz Numer Telefonu" className="input text-md lg:text-xl w-full" onChange={onMutate} value={phoneNum} id='phoneNum'/>
      <input type="email" placeholder="Tu Wpisz Adres Email" className="input text-md lg:text-xl w-full" onChange={onMutate} value={email} id='email'/>
      <input type="text" placeholder="Tu Wpisz Adres Zamieszkania" className="input text-md lg:text-xl w-full" onChange={onMutate} value={residency} id='residency'/>
      <button className='btn btn-secondary text-3xl font-bold' type="submit" onClick={handleSubmit}> Prześlij dane</button>
    </form>

  )
}

export default Form
