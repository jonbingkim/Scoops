
import logo from "../imgs/scoops_large.png";
export default function Header() {

	return (
	
<div className="flex flex-col sm:flex-row justify-center items-center p-6 gap-4">
  {/* Suggest a flavor! */}
  <div className="order-2 sm:order-1 text-xl w-full sm:w-1/3 text-center font-fredoka">
    Suggest a flavor!
  </div>

  {/* Logo */}
  <div className="order-1 sm:order-2">
    <img className="h-80 w-90" src={logo} alt="Logo" />
  </div>

  {/* FAQs */}
  <div className="order-3 sm:order-3 text-xl w-full sm:w-1/3 text-center font-fredoka">
    FAQs
  </div>
</div>
	);
}
