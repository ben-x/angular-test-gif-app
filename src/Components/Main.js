import React, { useState } from 'react';
import Loading from './Loading';
import axios from 'axios';
import Footer from './Footer';

function Main() {
	const [search, setSearch] = useState('');
	const [gifs, setGifs] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [main, setMain] = useState('no search');
	const [detGif, setDetGif] = useState({});

	const renderGif = () => {
		return gifs.map((gifs) => {
			return (
				<div className='col-md-3 mb-4' key={gifs.id}>
					<div
						className='card'
						onClick={() => selectGif(gifs.id)}>
						<img src={gifs.image_url} alt={gifs.title} />
					</div>
				</div>
			);
		});
	};

	const selectGif = (para) => {
		let selGif = gifs.filter((i) => {
			return i.id === para;
		});
		console.log(selGif);
		setDetGif(selGif);
		setMain('display gif');
	};

	const viewGif = () => {
		console.log('object');
		return (
			<div className='sel-gif'>
				<button
					className='backBtn'
					onClick={() => {
						setMain('search');
					}}>
					Go back
				</button>
				<div className='card ml-5 mr-5' style={{ width: '25rem' }}>
					<img
						className='card-img-top'
						src={detGif[0].image_url}
						alt={detGif[0].title}
					/>
					<div className='card-body'>
						<h5 className='text-center'>{detGif[0].title}</h5>
						<p className='text-center'>
							Date created: {detGif[0].created}
						</p>
					</div>
				</div>
			</div>
		);
	};

	const handleSearch = (e) => {
		setSearch(e.target.value);
		return search === '' ? setGifs({}) : null;
		// console.log(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		let gifs = {};
		setIsLoading(true);

		const api_key = 'rYJ5AxF8DXFqeX8ub81fbuje3J12lrh6';
		const q = search;
		await axios(
			`https://api.giphy.com/v1/gifs/search?q=${q}&api_key=${api_key}&limit=50`
		).then((res) => {
			// console.log(res.data.data);
			gifs = res.data.data.map((i) => {
				return {
					id: i.id,
					image_url: i.images.fixed_height.url,
					created: i.import_datetime,
					title: i.title,
				};
			});
			setGifs(gifs);
			// console.log(gifs[0]);
			setMain('search');
			setTimeout(() => {
				setIsLoading(false);
			}, 2000);
		});
	};

	return (
		<div className='content'>
			<header>
				<h1>GIF SEARCHER</h1>
				<div className='search'>
					<input
						onChange={handleSearch}
						type='text'
						placeholder='Search for your GIF'></input>
					<button onClick={handleSubmit} type='submit'>
						Search
					</button>
				</div>
			</header>

			<div className='main container'>
				{main === 'no search' || search === '' ? (
					<div className='welcome'>
						<h1>Enter your GIF</h1>
					</div>
				) : isLoading === true ? (
					<Loading />
				) : main === 'search' ? (
					<div className='row'>{renderGif()}</div>
				) : main === 'display gif' ? (
					<div>
						<h1 className='text-center'>
							You selected A Gif
						</h1>
						{viewGif()}
					</div>
				) : null}
			</div>
			<Footer />
		</div>
	);
}

export default Main;
