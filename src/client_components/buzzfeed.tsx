export const Buzzfeed = () => {
  return (
    <section className="items-center justify-center align-center text-center p-6">
      <div className="flex justify-center font-fredoka text-xl">
        As Featured on Buzzfeed Worth it :)
      </div>
      <div className="w-full md:w-[35vw] relative" style={{ paddingTop: "56.25%" }}> {/* 16:9 aspect ratio */}
  <iframe
    className="absolute top-0 left-0 w-full h-full"
    src="https://www.youtube.com/embed/rNuIOpfA2HA"
    title="$1 Ice Cream Vs. $1,000 Ice Cream"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  ></iframe>
</div>
    </section>
    
    
  )
}