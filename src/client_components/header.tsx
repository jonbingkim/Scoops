import React, { useEffect, useState } from "react";
import logo from "../imgs/scoops.png";
export default function Header() {
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		var timer = setInterval(() => setCurrentTime(new Date()));
		return function cleanup() {
			clearInterval(timer);
		};
	});
	const formatTime = (date) => {
		return date.toLocaleTimeString([], { hour: "numeric", minute: "numeric" });
	};
	return (
		<div className="flex justify-center p-6 items-center">
			<div className="relative text-center ">
				<img className="h-72 w-65" src={logo} />
				<div className="absolute inset-0 flex-col items-center justify-center font-mono">
					<div className="text-2xl font-bold">{currentTime.toLocaleDateString()}</div>
					<div className="text-xl">{formatTime(currentTime)}</div>
				</div>
			</div>
		</div>
	);
}
