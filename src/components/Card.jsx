import {data} from '../data/data'
import { GiCrossedSwords, GiAbdominalArmor, GiMagicPotion, GiWalkingBoot, GiHealthPotion } from 'react-icons/gi'

const Card = () => {
  const {
    name,
    rarity,
    hp,
    mana,
    attack,
    armor,
    speed
  } = data[0]
  
  return (
  <section className={`flex flex-col shadow-xl max-w-sm rounded-md overflow-hidden border-none p-2 ${rarity}`}>
    <div className='rounded-md'>
      <h3 className={`text-center font-bold ${rarity} text-white`}>{ name }</h3>
      <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_0.jpg`} alt={name} className="w-72" />
    </div>
    <div className={`${rarity}-back text-center space-y-2 my-3`}>
      <div className='flex flex-col justify-center items-center space-y-2 my-3'>
        <div className='flex gap-5 text-red-800 w-20 justify-between'>
          <GiHealthPotion  className='text-2xl self-center'/>
          <span className='self-center'>{hp}</span>
        </div>
        <div className='flex gap-5 text-purple-800 w-20 justify-between'>
          <GiMagicPotion  className='text-2xl self-center'/>
          <span className='self-center'>{mana}</span>
        </div>
        <div className='flex gap-5 text-orange-400 w-20 justify-between'>
          <GiCrossedSwords  className='text-2xl self-center'/>
          <span className='self-center'>{attack}</span>
        </div>
        <div className='flex gap-5 text-blue-800 w-20 justify-between'>
          <GiAbdominalArmor  className='text-2xl self-center'/>
          <span className='self-center'>{armor}</span>
        </div>
        <div className='flex gap-5 text-green-600 w-20 justify-between'>
          <GiWalkingBoot  className='text-2xl self-center'/>
          <span className='self-center'>{speed}</span>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Card