import { useState } from 'react'
import Card from './Card'

const Preview = ({cardData}) => {
  const [previewData, setPreviewData] = useState([...cardData]);

  const defineRarity = () => {
    const rarity = (Math.floor(Math.random() * 10))+1;
    if (rarity === 10) return 'legendary'
    else if (rarity <= 4) return 'normal'
    else if (rarity <= 7) return 'rare'
    else if (rarity <= 9) return 'epic'
  };

  const newData = previewData.map((card) => ({...card, rarity: defineRarity()}))

  return (
    <section className="flex flex-col justify-between gap-4 mt-6">
      {/* Inptus */}
      <section className="flex justify-around">
        <div className="space-x-2">
          <span className="text-md self-center">Filtros:</span>
          <input type="text" className="form-input"/>
        </div>
        <label htmlFor="filtroRaridade" className="space-x-2 self-center">
          <span>Raridade:</span>
          <select name="filtroRaridade" id="filtroRaridade">
            <option value="normal">Normal</option>
            <option value="rare">Raro</option>
            <option value="epic">Epico</option>
            <option value="legendary">Lendario</option>
          </select>
        </label>
        <label htmlFor="filter-trunfo" className="space-x-2 self-center">
          <input type="checkbox" className="input-checkbox self-center focus:ring-0" />
          <span>Super Trunfo</span>
        </label>
      </section>
      {/* Preview */}
      <section className='flex flex-wrap justify-center gap-4 p-6'>
        {newData.map((card)=> {
          return <Card key={card.name} data={card} />
        })}
      </section>
    </section>  
  )
}

export default Preview