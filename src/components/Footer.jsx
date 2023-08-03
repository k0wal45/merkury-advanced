import React from 'react'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer class="flex flex-col lg:flex-row text-center lg:justify-between p-4 bg-base-300 text-base-content text-lg gap-4">
        <p>Copyright © {year} - Wszystkie prawa należą do Merkury Medica</p>
        <p>
          Strona Stworzona przez: <a href="https://lunarisweb.pl/" className='link'> LunarisWeb</a>
        </p>
    </footer>
  )
}

export default Footer
