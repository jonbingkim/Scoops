import {Started} from "./started";
import {Mission} from "./mission";
import { Locations } from "./locations";
import { Buzzfeed } from "./buzzfeed";


export default function Body() {
	return (
		<section className="flex flex-col items-center gap-10">
			<Started/>
			<Mission/>
			<Locations/>
			<Buzzfeed/>
		</section>
	);
}
