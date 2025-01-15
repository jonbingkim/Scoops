
import sickoMode from "../imgs/scoopsSickomode.jpg"

export const Mission = ()=>  {
  return (
    <div className="grid h-full w-full items-center justify-center text-center">
      <div className="flex items-center justify-center">
      <div className="justify-center text-center text-lg w-1/2 ">
          We've always put <strong>Expanding your tasting pallete</strong> and <strong>Affordable to all</strong> at the forefront of our agenda.
          Ice cream shouldn't cost an arm and a leg, It should be accessible to everyone that wants to try different cultures, great flavors, at an affordable price.
        </div>
        <div className="">
          
          <div className='bg-opacity-70 text-white text-lg font-bold '>Our Mission</div>
          <img className="h-100 w-96 rounded-lg" src={sickoMode} alt="Sicko Mode" />
        </div>
  
      </div>
    </div>
  )
}