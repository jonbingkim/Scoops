import sickoMode from "../imgs/scoopsSickomode.jpg"

export const Mission = ()=>  {
  return (
    //container for entire section
      <section className="font-fredoka grid sm:flex md:flex text-center items-center justify-center gap-10">
      
       
      <div className="w-full p-4 justify-center text-center text-xl sm:max-lg:w-1/3 lg:w-1/3 max-w-screen-lg order-2 sm:order-1">
          We've always put <span className="text-blue-400">Expanding your tasting pallete</span> and <span className="text-pink-400">Affordability</span> at the forefront of our agenda.
          Ice cream shouldn't cost an arm and a leg, It should be accessible to everyone that wants great flavors, at an affordable price.
        </div>
        
        <div className="grid align-center text-center items-center justify-center order-1 sm:order-2">
          <img className="h-200 w-96 min-h-200 rounded-lg" src={sickoMode} alt="Sicko Mode" />
        </div>
  
      </section>
  
  )
}