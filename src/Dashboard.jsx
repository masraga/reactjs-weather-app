import { Link } from "react-router";
import { SearchIcon } from "./components/icons";

export default function Dashboard() {
	return (
		<div className='flex'>
			<div className='w-[30%]'>
				<div className='p-10'>
					{/* pencarian kota */}
					<form action=''>
						<div className='flex bg-gray-100 justify-between p-3 rounded-lg'>
							<input
								placeholder='cari kota...'
								type='text'
								className='w-[90%] outline-none'
							/>
							<button type='submit' className='icon'>
								<SearchIcon />
							</button>
						</div>
					</form>
					{/* .pencarian kota */}
					{/* gambar cuaca*/}
					<img
						src='images/clear.png'
						alt='Weather'
						className='w-[300px] h-[300px] object-cover rounded-lg mt-5'
					/>
					{/* .gambar cuaca */}
					{/* info cuaca */}
					<div className='flex w-[50%] mt-6 text-gray-900'>
						<div className='text-6xl'>30</div>
						<sup className='align-sup text-xl ml-2'>o</sup>
						<sup className='align-sup text-4xl ml-2'>c</sup>
					</div>
					<div className='mt-6'>
						<span className='text-lg text-gray-700'>Senin,</span>
						<span className='text-lg text-gray-200'>16:00</span>
					</div>
					{/* .info cuaca */}
				</div>
			</div>
			<div className='w-[70%] bg-neutral-50 h-screen overflow-y-scroll'>
				<div className='p-10'>
					{/* breadcrumb */}
					<span className='mr-2 font-thin'>
						<Link to='/' className='hover:font-medium'>
							Halaman utama
						</Link>
					</span>
					<span className='mr-2 font-thin'>/</span>
					<span className='mr-2 font-thin'>Dasboard</span>
					<div className='mb-4'></div>
					{/* .breadcrumb */}
					<div className='text-2xl text-gray-800 font-bold'>PEKANBARU</div>
					<div className='mb-10'></div>
					{/* grid ramalan cuaca*/}
					<div className='grid grid-cols-4 gap-5'>
						{[
							"rain",
							"clouds",
							"drizzle",
							"clear",
							"foggy",
							"snow",
							"rain",
							"clouds",
							"drizzle",
							"clear",
							"foggy",
							"snow",
							"rain",
							"clouds",
							"drizzle",
							"clear",
							"foggy",
							"snow",
							"rain",
							"clouds",
							"drizzle",
							"clear",
							"foggy",
							"snow",
						].map((item, index) => {
							return (
								<div
									key={index}
									className='h-[200px] w-[200px] bg-white rounded flex justify-center items-center shadow'
								>
									<div>
										<div className='text-gray-800 text-center py-1'>Senin</div>
										<div className='text-gray-800 text-center py-1'>
											<img
												src={`images/${item}.png`}
												className='w-[100px]'
												alt=''
											/>
										</div>
										<div className='text-gray-800 text-center py-1'>
											<span className='text-2xl mr-1'>10</span>
											<span>
												<sup>0</sup>
											</span>
											<span>
												<sup>C</sup>
											</span>
										</div>
									</div>
								</div>
							);
						})}
					</div>
					{/* .grid ramalan cuaca */}
				</div>
			</div>
		</div>
	);
}
