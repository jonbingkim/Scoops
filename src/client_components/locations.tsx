import yorkpic from "../imgs/york.jpg";
import chinatownpic from "../imgs/chinatown.jpg";


export const Locations = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10">

			<section className="flex items-center gap-8 justify-evenly p-5 ">
				<div className="flex text-center">
          <div>
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
					
			
				<div className="w-1/2 justify-center p-6">
				<div className="">
				<strong>Address: 5105 York Blvd,  Los Angeles,  CA  90042</strong>
				</div>
				</div>
				</div>
			</section>



			<section className="flex items-center gap-8 justify-center p-5 ">
				<div className="flex text-center justify-center">
          <div>
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
					
					
			
				<div className="w-1/2 justify-center p-6">
				<div>
				<strong>Address: 727 N Broadway #125, Los Angeles, CA 90012</strong>
				</div>
				</div>
        </div>
			</section>
				</section>
  )
}