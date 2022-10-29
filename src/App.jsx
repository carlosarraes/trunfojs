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
    magic: '',
    speed: '',
    image: '',
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
      <Form data={data} handleChange={handleChange} />
      <Card />
      <Preview />
      <Footer />
    </>
  )
}

export default App
