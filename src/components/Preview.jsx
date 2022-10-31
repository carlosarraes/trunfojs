import Card from './Card'

const Preview = ({sortedData, handleFilter, handleRarityFilter, handleDelete, handleSent}) => {
  return (
    <section className="flex flex-col justify-between gap-4 mt-6">
      {/* Inptus */}
      <section className="flex justify-center items-center flex-col gap-4 md:flex-row md:justify-evenly">
        <div className="space-x-2">
          <span className="text-md self-center">Filtros:</span>
          <input type="text" className="form-input" name='filtroName' onChange={handleFilter} />
        </div>
        <label htmlFor="filtroRaridade" className="space-x-2 self-center">
          <span>Raridade:</span>
          <select name="filtroRaridade" id="filtroRaridade" onChange={handleRarityFilter} >
            <option value="todos">Todos</option>
            <option value="normal">Normal</option>
            <option value="rare">Raro</option>
            <option value="epic">Epico</option>
            <option value="legendary">Lendario</option>
          </select>
        </label>
        <label htmlFor="filterTrunfo" className="space-x-2 self-center">
          <input type="checkbox" name="filterTrunfo" className="input-checkbox self-center focus:ring-0" onChange={handleSent} />
          <span>Enviada pelo usuário</span>
        </label>
      </section>
      {/* Preview */}
      <section className='flex flex-wrap justify-center gap-4 p-6'>
        {sortedData.map((card)=> {
          return <Card key={card.name} data={card} handleDelete={handleDelete} />
        })}
      </section>
    </section>  
  )
}

export default Preview