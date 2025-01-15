import sickoMode from "../imgs/scoopsSickomode.jpg"


export const Started = () => {
  return (
    <div className="grid h-full w-full items-center justify-center text-center">
      <div className="flex items-center justify-center">
        <div className="">
          
          <div className='bg-opacity-70 text-white text-lg font-bold '>Our Story</div>
          <img className="h-100 w-96 rounded-lg" src={sickoMode} alt="Sicko Mode" />
        </div>
        <div className="justify-center text-center text-lg w-1/2 ">
          In 2005, Owner Tai kim opened a quaint ice cream parlor on the cross section of 
          melrose and helitrope in east hollywood. His concept was simple, embedding diverse flavors
          of different cultures into your every day scoop of ice cream.
        </div>
      </div>
    </div>
  )
}