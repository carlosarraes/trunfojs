import { data as data } from '../data/dataDummy'
import Card from './Card'

const Preview = () => {
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
      <section className='flex flex-wrap gap-4'>
        {data.map((card)=> <Card key={card.name} data={card} /> )}
      </section>
    </section>  
  )
}

export default Preview