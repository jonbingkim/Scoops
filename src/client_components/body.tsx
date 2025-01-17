import {Started} from "./started";
import {Mission} from "./mission";
import yorkpic from "../imgs/york.jpg";
import chinatownpic from "../imgs/chinatown.jpg";


export default function Body() {
	return (
		<div className="flex flex-col items-center gap-10">
			<Started/>
			<Mission/>
			<div className="flex flex-col items-center gap-8 justify-center ">
				<div className="relative text-center group">
					<img className="h-90 w-96 rounded-lg shadow-lg transition-transform duration-300" src={yorkpic} alt="Scoops on York" />
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
				<div className="relative text-center group">
					<img className="h-90 w-96 rounded-lg shadow-lg transition-transform duration-300" src={chinatownpic} alt="Scoops Chinatown" />
					<div className="absolute inset-0 flex items-center justify-center">
						<a
							href="https://www.yelp.com/biz/scoops-los-angeles-6"
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 border-2 border-black bg-white bg-opacity-70 text-gray-800 text-lg font-bold hover:bg-opacity-90 rounded-md transition-all duration-300 transform hover:scale-110"
						>
							Scoops Chinatown
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
