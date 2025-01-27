import yorkpic from "../imgs/york.jpg";
import chinatownpic from "../imgs/chinatown.jpg";

 


export const Locations = () => {
  return (
    //need to check on how to change the text inside the images to better one (maybe outlined text?)
    <section className="grid sm:flex md:flex flex-col items-center justify-center gap-6 ">

			<section className="grid items-center gap-8 justify-center p-6 ">
				<div className=" grid sm:flex md:flex text-center justify-evenly">
          <div className="flex justify-center">
					<img className="h-90 w-96 rounded-lg shadow-lg transition-transform duration-300" src={yorkpic} alt="Scoops on York" />
					<div className="absolute flex">
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
					
			
				<div className=" font-fredoka text-lg sm:w-1/2 sm:text-xl md:w-1/2 justify-center p-6">
				<div className="">
				<span className="text-blue-400">Address: 5105 York Blvd,  Los Angeles,  CA  90042</span>
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



			<section className="flex items-center gap-8 justify-center p-5 ">
				<div className="grid sm:flex md:flex text-center justify-evenly">
          <div className="flex justify-center">
					<img className="h-90 w-96 rounded-lg shadow-lg transition-transform duration-300" src={chinatownpic} alt="Scoops on York" />
					<div className="absolute flex">
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
					
					
			
				<div className="font-fredoka text-lg sm:w-1/2 sm:text-xl md:w-1/2   justify-center p-6">
				<div>
				<span className="text-pink-400">Address: 727 N Broadway #125, Los Angeles, CA 90012</span>
        <ol >
   
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