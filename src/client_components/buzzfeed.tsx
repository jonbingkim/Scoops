export const Buzzfeed = () => {
  return (
    <div className="h-auto w-auto grid items-center justify-center align-center text-center p-6">
      <div className="flex justify-center font-fredoka text-xl">
        As Featured on Buzzfeed Worth it :)
      </div>
      <div className=" overflow-hidden h-full w-full grid md:w-[40vw] h-[45vh]"> {/* Set a fixed height for the parent container */}
  <iframe
    className="w-full h-full" // Use full width and height of the parent
    src="https://www.youtube.com/embed/rNuIOpfA2HA"
    title="$1 Ice Cream Vs. $1,000 Ice Cream"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  ></iframe>
</div>
    </div>
    
    
  )
}