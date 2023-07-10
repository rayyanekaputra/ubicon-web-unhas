import React from 'react';
import '../pages/index.css'

const Home = () => {
return (
	<div>
		<section className='hero'>
			<div>
				<img src='/logo192.png' alt='logo lab ubicon'></img>
			</div>
			<h1>Ubicon Lab</h1>
			<h2>Ubiquitous Computing & Networking Lab.</h2>
			<p>@HASANUDDIN UNIVERSITY </p>
		</section>
		<div className='carousel-running-container'>
			<ul>
				<li>
					<div className='carousel-img'>

					</div>
				</li>
				<li>
					<div className='carousel-img'>

					</div>
				</li>
				<li>
					<div className='carousel-img'>

					</div>
				</li>
				<li>
					<div className='carousel-img'>

					</div>
				</li>
				<li>
					<div className='carousel-img'>

					</div>
				</li>
				<li>
					<div className='carousel-img'>

					</div>
				</li>
			</ul>
		</div>
	</div>
	
);
};

export default Home;
