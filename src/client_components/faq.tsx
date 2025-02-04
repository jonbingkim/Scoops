import { useState } from "react";
export default function FAQs() {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const toggleAnswer = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className="font-fredoka text-xl bg-gray-100 p-6 text-center">
			{/* About Us Section */}
		
			{/* FAQ Section */}
			<section className="mb-4">
				<h2 className="text-lg font-bold">FAQ</h2>
				<ul className="list-none mx-auto max-w-md">
					<li className="bg-white shadow-md rounded-lg p-4 mb-2 text-center cursor-pointer" onClick={() => toggleAnswer(0)}>
						<p className="font-semibold">Q: What flavors do you offer?</p>
						{activeIndex === 0 && <p>A: We offer a variety of classic and unique flavors on a rotating basis, but will always have our signature Brown Bread (or Bianco Bread if you're visiting Chinatown).</p>}
					</li>
					<li className="bg-white shadow-md rounded-lg p-4 mb-2 text-center cursor-pointer" onClick={() => toggleAnswer(1)}>
						<p className="font-semibold">Q: Do you have non dairy options?</p>
						{activeIndex === 1 && <p>A: Yes, we will always have a sorbet and rice milk based ice cream on a rotating basis as well!</p>}
					</li>
					<li className="bg-white shadow-md rounded-lg p-4 mb-2 text-center cursor-pointer" onClick={() => toggleAnswer(2)}>
						<p className="font-semibold">Q: Can I place a custom order?</p>
						{activeIndex === 2 && <p>A: We have a suggestion board in store, we'll usually take a few that we see the most and make them :)</p>}
					</li>
				</ul>
			</section>
			{/* Contact Us Section */}
			<section>
				<h2 className="text-lg font-bold">Contact Us</h2>
				<p className="text-sm">For inquiries, please reach out to us at:</p>
				<p className="text-sm">Email: <a href="mailto:scoops2005@gmail.com" className="text-blue-500">scoops2005@gmail.com</a></p>

			</section>
		</div>
	);
}
