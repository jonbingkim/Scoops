import { Link } from "react-router";
import logo from "../imgs/scoops_large.png";
export default function Header() {



	return (
	
<div className="flex flex-col sm:flex-row justify-center items-center p-6 gap-4">
  {/* Suggest a flavor! */}
  <Link to={'/suggestions'} className="order-2 sm:order-1 text-xl w-full sm:w-1/3 text-center font-fredoka hover:text-blue-400">
    Suggest a flavor
  </Link>

  {/* Logo */}
  <div className="order-1 sm:order-2">
    <img className="h-80 w-auto" src={logo} alt="Logo" />
  </div>

  {/* FAQs */}
  <Link to={"/FAQs"} className="order-3 sm:order-3 text-xl w-full sm:w-1/3 text-center font-fredoka hover:text-purple-400">
    FAQs
</Link>
</div>
	);
}
