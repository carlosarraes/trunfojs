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
  const [query, setQuery] = useState([]);

  const handleChange = (e) => {
    console.log('change');
  };

  return (
    <>
      <Header />
      <Form data={data} />
      <Card />
      <Preview />
      <Footer />
    </>
  )
}

export default App
