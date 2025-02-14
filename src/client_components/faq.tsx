import Header from "./header";
export default function FAQs() {




	return (
		<div className="flex flex-col">
			<Header/>
		<div className="flex flex-col min-h-screen font-fredoka text-xl  p-6 text-center">
			
		
			{/* FAQ Section */}
			<section className="mb-4">
				<h2 className="text-lg font-bold">FAQ</h2>
				<ul className="list-none mx-auto max-w-md">
					<li className="bg-white shadow-md rounded-lg p-4 mb-2 text-center">
						<p className="font-semibold">Q: What flavors do you offer?</p>
					 <p>A: We offer a variety of classic and unique flavors such as <span className="text-blue-400">Sea Salt Chocolate</span> and <span className="text-purple-400">Cookie Butter Oreo </span>on a rotating basis, but will always have our signature <span className="text-indigo-500">Brown Bread</span> (or Bianco Bread if you're visiting Chinatown).</p>
					</li>
					<li className="bg-white shadow-md rounded-lg p-4 mb-2 text-center">
						<p className="font-semibold">Q: Do you have non dairy options?</p>
					 <p>A: Yes, we will always have a sorbet and <span className="text-pink-600">rice milk based </span>ice cream on a rotating basis as well!</p>
					</li>
					<li className="bg-white shadow-md rounded-lg p-4 mb-2 text-center">
						<p className="font-semibold">Q: Can I place a custom order?</p>
								 <p>A: We absolutely do custom orders as long as your order is <span className="text-green-400">6 pints or more</span>. Please contact us at the email below to make an inquiry!</p>
					</li>
				</ul>
			</section>

			<section className="mt-auto">
				<h2 className="text-xl font-bold">Contact Us</h2>
				<p className="text-sm">For custom order inquiries or any concerns, please reach out to us at:</p>
				<p className="text-sm">Email: <a href="mailto:scoops2005@gmail.com" className="text-blue-500">scoops2005@gmail.com</a></p>

			</section>
		</div>
		</div>
	);
}
