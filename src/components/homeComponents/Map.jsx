
const Map = ({header, text}) => {
  return (
    <section className='flex flex-col justify-center items-center w-full py-4 lg:py-16 gap-4'>
      <h5 className="font-black text-3xl lg:text-5xl p-4">{header}</h5>
      <p className="p-4 text-xl">{text}</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2567.445862819763!2d18.5990154!3d49.9467382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711533fe4e9889f%3A0x9e92d1628d834c!2sMazowiecka%208%2C%2044-335%20Jastrz%C4%99bie-Zdr%C3%B3j!5e0!3m2!1spl!2spl!4v1691018387402!5m2!1spl!2spl" title="mapa merkury" className='h-96 w-full' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
  )
}

export default Map