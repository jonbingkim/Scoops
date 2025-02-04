
import logo from "../imgs/scoops_large.png";
export default function Header() {

	return (
<div className="flex justify-evenly p-6 items-center">
  <div className="w-1/3 text-center"> {/* Set equal width */}
    Suggest a flavor!
  </div>
  <div>
    <img className="h-80 w-90" src={logo} />
  </div>
  <div className="w-1/3 text-center"> {/* Set equal width */}
    FAQs
  </div>
</div>

	);
}
