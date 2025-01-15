import sickoMode from "../imgs/scoopsSickomode.jpg"


export const Started = () => {
  return (
    <div className="grid h-full w-full items-center justify-center text-center">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img className="h-100 w-96 rounded-lg" src={sickoMode} alt="Sicko Mode" />
          <h3 className='text-xl absolute inset-0 flex items-center justify-center bg-opacity-50  text-white'>Our History</h3>
        </div>
        <div className="text-lg w-1/2">
          our story starts in the coming age of fixie bikes and OFWGKTA, in 2005 mad scientist tai kim opened up a quaint 
          ice cream parlor in east LA on melrose and heliotrope. Not only were the street lights on those streets confusing as hell, but so were the flavors that tai was
          whipping up. With a prowess for culinary creativity coupled with his alumni status from CalArts tai broke the boundaries of flavor by combining 
        </div>
      </div>
    </div>
  )
}