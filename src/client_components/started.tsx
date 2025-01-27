import sickoMode from "../imgs/uncletai.jpg"


export const Started = () => {
  return (
    
      <section className="font-fredoka grid sm:flex md:flex text-center items-center justify-center gap-10">
        <div className="grid text-center align-center items-center justify-center">
          <img className="h-100 w-96 rounded-lg" src={sickoMode} alt="Sicko Mode" />
          </div>
        <div className="w-full p-4 justify-center text-center text-xl sm:max-lg:w-1/3 lg:w-1/3 max-w-screen-lg">
          In 2005, Owner Tai kim opened a quaint ice cream parlor on the cross section of 
          Melrose and Helitrope in East Hollywood. His concept was simple—flavors for the community, something <span className="text-emerald-500">unique, yet familiar.</span>
       
        </div>
      </section>

  )
}