import { GiCrossedSwords, GiAbdominalArmor, GiMagicPotion, GiWalkingBoot, GiHealthPotion } from 'react-icons/gi'

const Card = ({ data }) => {
  const {
    name,
    rarity,
    image,
    hp,
    mana,
    attack,
    armor,
    trunfo,
    speed,
    fromSubmit,
    imgName,
  } = data
  
  return (
  <section className={`flex flex-col shadow-xl max-w-sm rounded-md border-none p-2 ${rarity}`}>
    <div className='rounded-md'>
      <h3 className={`text-center mb-2 font-bold ${rarity} text-black`}>{ name }</h3>
      {fromSubmit ?
      <img src={image} alt={name} className="w-72" />
      : imgName ? 
        <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${imgName}_0.jpg`}alt={name} className="w-72" /> 
        : <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_0.jpg`} alt={name} className="w-72" />
      }
    </div>
    <div className={`${rarity}-back text-center space-y-2 mt-5`}>
      <div className='flex flex-col justify-center items-center space-y-2 my-3'>
        <div className='flex gap-5 text-red-800 w-20 justify-between'>
          <GiHealthPotion  className='text-2xl drop-shadow-md self-center'/>
          <span className='self-center drop-shadow-md'>{hp}</span>
        </div>
        <div className='flex gap-5 text-purple-800 w-20 justify-between'>
          <GiMagicPotion  className='text-2xl self-center drop-shadow-md'/>
          <span className='self-center drop-shadow-md'>{mana}</span>
        </div>
        <div className='flex gap-5 text-orange-400 w-20 justify-between'>
          <GiCrossedSwords  className='text-2xl self-center drop-shadow-md'/>
          <span className='self-center drop-shadow-md'>{attack}</span>
        </div>
        <div className='flex gap-5 text-blue-800 w-20 justify-between'>
          <GiAbdominalArmor  className='text-2xl self-center drop-shadow-md'/>
          <span className='self-center drop-shadow-md'>{armor}</span>
        </div>
        <div className='flex gap-5 text-green-600 w-20 justify-between'>
          <GiWalkingBoot  className='text-2xl self-center drop-shadow-md'/>
          <span className='self-center drop-shadow-md'>{speed}</span>
        </div>
      </div>
    </div>
    <div className='mt-2'>
      {trunfo && <h4 className='text-center text-grey-200 trunfo animate-pulse'>Super Trunfo</h4>}
    </div>
  </section>
  )
}

export default Card