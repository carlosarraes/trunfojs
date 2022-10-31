import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Form from "./components/Form"
import Card from "./components/Card"
import Preview from "./components/Preview"
import Footer from "./components/Footer"
import { data as cardData } from './data/data'


function App() {
  const defineRarity = () => {
    const rarity = (Math.floor(Math.random() * 100))+1;
    if (rarity <= 60) return 'normal'
    else if (rarity <= 80) return 'rare'
    else if (rarity <= 94) return 'epic'
    else if (rarity <= 100) return 'legendary'
  };

  const rarityData = cardData.map((card) => ({...card, rarity: defineRarity()}))

  const [data, setData] = useState({
    name: '',
    hp: '',
    mana: '',
    attack: '',
    armor: '',
    speed: '',
    image: '',
    fromSubmit: true,
    rarity: 'normal',
    trunfo: false,
    saved: rarityData,
    query: rarityData,
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
    const { 
      name,
      hp,
      mana,
      attack,
      armor,
      speed,
      trunfo,
      rarity,
      image,
      query,
      fromSubmit,
    } = data;

    const newEntry = {
      name,
      hp,
      mana,
      attack,
      rarity,
      armor,
      speed,
      trunfo,
      image, 
      fromSubmit,
    }

    setData((prevData) => ({...prevData , saved: [...query, newEntry] ,query: [...query, newEntry]}))
  };

  
  const handleFilter = (e) => {
    const { value } = e.target;
    const { query } = data;
    const filteredSearch = query.filter((card) => card.name.includes(value));
    setData(prevState => ({...prevState, saved: filteredSearch}))
  };
  
  const handleRarityFilter = (e) => {
    const { value } = e.target;
    const { query } = data;
    const filteredSearch = query.filter((card) => card.rarity === value);
    if (value === 'todos'){
      setData(prevState => ({...prevState, saved: query}))
    } else {
      setData(prevState => ({...prevState, saved: filteredSearch}))
    }
  }
  
  const { saved } = data;

  const sortedSave = saved.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);

  return (
    <>
      <Header />
      <section className='flex justify-evenly gap-12' >  
        <Form
          data={data}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          sbmtBtn={sbmtBtn}
        />
        <Card data={data} />
      </section>
      <Preview sortedData={sortedSave} handleFilter={handleFilter} handleRarityFilter={handleRarityFilter} />
      <Footer />
    </>
  )
}

export default App
