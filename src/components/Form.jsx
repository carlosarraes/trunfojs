import { GiCrossedSwords, GiAbdominalArmor, GiMagicPotion, GiWalkingBoot, GiHealthPotion } from 'react-icons/gi'
import { AiOutlineLink } from 'react-icons/ai'

const Form = ({ data, handleChange, handleSubmit, sbmtBtn }) => {
  const { 
    name,
    hp,
    mana,
    attack,
    armor,
    speed,
    image,
    rarity,
  } = data;

  return (
    <section className='max-w-sm'>
      <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
        <label htmlFor="name" className='flex justify-between gap-3'>
          <span className="font-bold self-center">Nome:</span>
          <input value={name} onChange={handleChange} type="text" name="name" className="form-input border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" />
        </label>
        {/* Stats */}
        <section>
          <label htmlFor="hp" className="flex w-full justify-between gap-3">
            <span className="font-bold text-red-800 self-center">
              <GiHealthPotion className='text-2xl self-center' />
            </span>
            <input value={hp} onChange={handleChange} type="number" name="hp" id="hp" className="form-input w-3/4 border-0 border-b-2 text-center text-sm border-gray-200 focus:ring-0 focus:border-black" />
          </label>

          <label htmlFor="mana" className="flex w-full justify-between gap-3">
            <span className="font-bold text-purple-800 self-center">
              <GiMagicPotion className='text-2xl self-center' />
            </span>
            <input value={mana} onChange={handleChange} type="number" name="mana" id="mana" className="form-input w-3/4 border-0 border-b-2 text-center text-sm border-gray-200 focus:ring-0 focus:border-black" />
          </label>

          <label htmlFor="attack" className="flex w-full justify-between gap-3">
            <span className="font-bold text-orange-400 self-center">
              <GiCrossedSwords className='text-2xl self-center' />
            </span>
            <input value={attack} onChange={handleChange} type="number" name="attack" id="attack" className="form-input w-3/4 border-0 border-b-2 text-center text-sm border-gray-200 focus:ring-0 focus:border-black" />
          </label>

          <label htmlFor="armor" className="flex w-full justify-between gap-3">
            <span className="font-bold text-blue-800 self-center">
              <GiAbdominalArmor className='text-2xl self-center' />
            </span>
            <input value={armor} onChange={handleChange} type="number" name="armor" id="armor" className="form-input w-3/4 border-0 border-b-2 text-center text-sm border-gray-200 focus:ring-0 focus:border-black" />
          </label>

          <label htmlFor="speed" className="flex w-full justify-between gap-3">
            <span className="font-bold text-green-600 self-center">
              <GiWalkingBoot className='text-2xl self-center' />
            </span>
            <input value={speed} onChange={handleChange} type="number" name="speed" id="speed" className="form-input w-3/4 border-0 border-b-2 text-center text-sm border-gray-200 focus:ring-0 focus:border-black" />
          </label>
        </section>
        {/* Imagem e Select */}
        <label htmlFor="image" className='relative flex justify-between gap-3'>
          <AiOutlineLink className='pointer-events-none absolute top-3 right-2 w-6 h-6' />
          <span className="font-bold self-center">Imagem:</span>
          <input value={image} onChange={handleChange} type="text" name="image" className="form-input border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" />
        </label>
        <label htmlFor="rarity" className='flex justify-between gap-3'>
          <span className="font-bold self-center">Raridade:</span>
          <select
            name="rarity"
            id="rarity"
            value={rarity}
            onChange={handleChange} 
            className="form-select border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black w-full text-center"
          >
            <option value="normal">Normal</option>
            <option value="rare">Raro</option>
            <option value="epic">Epico</option>
            <option value="legendary">Lendario</option>
          </select>
          {/* <input  type="text" name="rarity" className="form-input border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" /> */}
        </label>
        {/* Trunfo e Botao */}
        <section className='text-center'>
          <button
            className='border w-full py-2 px-4 bg-green-500 shadow-md rounded-md text-white opacity-90 disabled:opacity-40 enabled:hover:opacity-100 enabled:hover:bg-green-600 duration-300'
            type="submit"
            disabled={sbmtBtn}
          >
            Salvar
          </button>
        </section>
      </form>
    </section>
  )
}

export default Form