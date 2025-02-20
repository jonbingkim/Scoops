import yorkpic from "../imgs/york.jpg";
import chinatownpic from "../imgs/chinatown.jpg";

 


export const Locations = () => {
  return (
<section className="grid sm:flex md:flex flex-col items-center justify-center gap-6">
  {/* Scoops on York Section */}
  <section className="grid items-center gap-8 justify-center p-6 w-full max-w-4xl mx-auto">
    <div className="flex flex-col sm:flex-row text-center justify-evenly items-center">
    <div className="flex justify-center w-full sm:w-1/2">
      <div className="relative">
        <img
          className="h-90 w-96 rounded-lg shadow-lg transition-transform duration-300"
          src={yorkpic}
          alt="Scoops on York"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <a
            href="https://www.yelp.com/biz/scoops-los-angeles-4"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-2 border-white bg-black bg-opacity-70 text-white text-lg font-bold hover:bg-opacity-90 rounded-md transition-all duration-300 transform hover:scale-110"
          >
            Scoops on York
          </a>
        </div>
      </div>
    </div>

      <div className="font-fredoka text-lg sm:w-1/2 sm:text-xl md:w-1/2 justify-center p-6 w-full">
        <div>
          <span className="text-blue-400">Address: 5105 York Blvd, Los Angeles, CA 90042</span>
          <ol>
            <li>Monday: Closed :)</li>
            <li>Tuesday: 2 p.m. - 9 p.m.</li>
            <li>Wednesday: 2 p.m. - 9 p.m</li>
            <li>Thursday: 2 p.m. - 9 p.m</li>
            <li>Friday: 2 p.m. - 9 p.m</li>
            <li>Saturday: 2 p.m. - 9 p.m</li>
            <li>Sunday: 2 p.m. - 9 p.m</li>
          </ol>
        </div>
      </div>
    </div>
  </section>

  {/* Scoops Chinatown Section */}
  <section className="grid items-center gap-8 justify-center p-6 w-full max-w-4xl mx-auto">
    <div className="flex flex-col sm:flex-row text-center justify-evenly items-center">
      <div className="flex justify-center w-full sm:w-1/2">
        <div className="relative">
          <img
            className="h-90 w-96 rounded-lg shadow-lg transition-transform duration-300"
            src={chinatownpic}
            alt="Scoops Chinatown"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <a
              href="https://www.yelp.com/biz/scoops-los-angeles-4"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-2 border-white bg-black bg-opacity-70 text-white text-lg font-bold hover:bg-opacity-90 rounded-md transition-all duration-300 transform hover:scale-110"
            >
              Scoops Chinatown
            </a>
          </div>
        </div>
      </div>

      <div className="font-fredoka text-lg sm:w-1/2 sm:text-xl md:w-1/2 justify-center p-6 w-full">
        <div>
          <span className="text-pink-400">Address: 727 N Broadway #125, Los Angeles CA 90012</span>
          <ol>
            <li>Monday: Closed :)</li>
            <li>Tuesday: 12 p.m. - 6 p.m.</li>
            <li>Wednesday: 12 p.m. - 6 p.m</li>
            <li>Thursday: 12 p.m. - 6 p.m</li>
            <li>Friday: 12 p.m. - 7 p.m</li>
            <li>Saturday: 12 p.m. - 7 p.m</li>
            <li>Sunday: 12 p.m. - 6 p.m</li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</section>
  )
}