
import sickoMode from "../imgs/scoopsSickomode.jpg"

export const Mission = ()=>  {
  return (
    //container for entire section
      <section className="flex items-center justify-center gap-10">
      
       
      <div className="justify-center text-left text-xl w-1/3 ">
          We've always put <strong>Expanding your tasting pallete</strong> and <strong>Affordable to all</strong> at the forefront of our agenda.
          Ice cream shouldn't cost an arm and a leg, It should be accessible to everyone that wants to try different cultures, great flavors, at an affordable price.
        </div>
        
        <div className="grid align-center text-center">
          
          <div className='bg-opacity-70 text-white text-xl font-bold '>Our Mission</div>
          <img className="h-200 w-96 rounded-lg" src={sickoMode} alt="Sicko Mode" />
        </div>
  
      </section>
  
  )
}