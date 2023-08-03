import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Doctor from "./pages/Doctor";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";



function App() {



  return (
    <>
      <Router>
        <HelmetProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/kontakt' element={<Contact />}/>
            <Route path='/onas' element={<About />}/>
            <Route path='/lekarz/:lekarzId' element={<Doctor />}/>
            <Route path='/notfound' element={<NotFound />}/>
            <Route path='/*' element={<NotFound />}/>
          </Routes>
          <Footer />
        </HelmetProvider>
      </Router>
    </>
  );
}

export default App;
