import { useState } from 'react'
import Header from "./components/Header"
import Form from "./components/Form"
import Card from "./components/Card"
import Preview from "./components/Preview"
import Footer from "./components/Footer"

function App() {
  const [data, setData] = useState({
    name: '',
    hp: '',
    mana: '',
    attack: '',
    armor: '',
    speed: '',
    image: '',
    rarity: '',
    trunfo: false,
    saved: [],
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  };

  return (
    <>
      <Header />
      <section className='flex justify-between gap-12' >  
        <Form data={data} handleChange={handleChange} />
        <Card data={data} />
      </section>
      <Preview />
      <Footer />
    </>
  )
}

export default App
