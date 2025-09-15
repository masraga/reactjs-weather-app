import { Link } from "react-router";

function App() {
	return (
		<div className='flex h-screen items-center justify-center'>
			<div>
				<h1 className='text-neutral-900 font-bold text-3xl mb-5'>
					WEATHER APPS 2025
				</h1>
				<Link
					to='/dashboard'
					className='text-center border px-3 py-2 rounded-lg bg-blue-600 border-blue-600 text-white font-medium hover:bg-blue-700'
				>
					Dashboard
				</Link>
			</div>
		</div>
	);
}

export default App;
