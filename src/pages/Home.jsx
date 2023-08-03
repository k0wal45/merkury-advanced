import {Helmet} from "react-helmet-async";
import Hero from "../components/homeComponents/Hero";
import Swiper from "../components/homeComponents/Swiper";
import ContactDesign from "../components/homeComponents/ContactDesign";
import Map from "../components/homeComponents/Map";
import ContactInfo from "../components/homeComponents/ContactInfo";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <>
        <Helmet>
          <title>Merkury Medica | Pzychodnia w Jastrzębie-Zdrój</title>
        </Helmet>

        <main className="w-screen overflow-x-hidden">
          <Hero />
          <Swiper />
          <ContactInfo />
          <ContactDesign />
          <Map 
            header='Przychodnia Merkury Medica w Jastrzębie-Zdrój'
            text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem quo at aspernatur porro perspiciatis nisi sunt ab vel repellat nihil.'
          />
          <ContactForm />
          
        </main>
    </>
  )
}

export default Home
