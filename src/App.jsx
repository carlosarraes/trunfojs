import { useState, useEffect } from 'react'
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
    rarity: 'normal',
    trunfo: false,
    saved: [],
  });
  const [sbmtBtn, setSbmtBtn] = useState(true);

  const validateForm = () => {
    const { name, hp, mana, attack, armor, speed, image } = data;
    if (name && hp && mana && attack && armor && speed && image) { 
      setSbmtBtn(false);
    } else {
      setSbmtBtn(true);
    }
  };
  
  useEffect(()=> {
    validateForm();
  }, [data])

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }))
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <>
      <Header />
      <section className='flex justify-between gap-12' >  
        <Form
          data={data}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          sbmtBtn={sbmtBtn}
        />
        <Card data={data} />
      </section>
      <Preview />
      <Footer />
    </>
  )
}

export default App
