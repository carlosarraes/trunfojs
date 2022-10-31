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
    fromPreview: true,
    rarity: 'normal',
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
      rarity,
      image,
      query,
    } = data;

    const newEntry = {
      name,
      hp,
      mana,
      attack,
      rarity,
      armor,
      speed,
      image, 
      fromSubmit: true,
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
  
  const handleDelete = (e, str) => {
    const { query } = data;
    const newQuery = query.filter((card) => card.name !== str)
    setData(prevState => ({...prevState, saved: newQuery, query: newQuery}))
  }

  const handleSent = (e) => {
    const { query } = data;
    const { checked } = e.target;
    let newQuery = [];
    if (checked) {
      newQuery = query.filter((card) => card.fromSubmit === checked)
    } else {
      newQuery = query.filter((card) => card.fromSubmit !== checked)
    }
    setData(prevState => ({...prevState, saved: newQuery}))
  };

  const { saved } = data;

  const sortedSave = saved.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);

  return (
    <>
      <Header />
      <section className='flex justify-center items-center gap-12 flex-col md:flex-row md:justify-evenly' >  
        <Form
          data={data}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          sbmtBtn={sbmtBtn}
        />
        <Card data={data} handleDelete={handleDelete}/>
      </section>
      <Preview sortedData={sortedSave} handleFilter={handleFilter} handleRarityFilter={handleRarityFilter} handleDelete={handleDelete} handleSent={handleSent} />
      <Footer />
    </>
  )
}

export default App
