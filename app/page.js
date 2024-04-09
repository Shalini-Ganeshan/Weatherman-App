"use client"
import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import {BsSearch} from 'react-icons/bs'
import Weather from './components/Weather';
import Loading from './components/Spinner';


function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
 
  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=e658b4c59def5c6933e951dea638e6c0`;

    axios.get(url)
      .then((response) => {
        setWeather(response.data);
        //console.log(response.data);
        setCity('');
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      });
  };
  if(loading){
    return <Loading />

  }
  else{

    return (
      <div>
        <Head>
          <title>WeatherMan </title>
          <meta name='description' content='This app was made using Next JS'/>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[1]'/>
        <Image src="https://www.wallpaperflare.com/static/795/510/447/nature-landscape-hdr-field-wallpaper.jpg" alt="Cloudy background weather image" layout='fill'  // if u dont want to mention height and width
        className='object-cover'/>
        <div className='relative flex justify-between item-center max-w-[500px] w-full m-auto text-white z-10'>
        <form  className='flex mt-4 justify-between items-center w-full m-auto p-3  bg-transparent border border-gray-300 text-white rounded-2xl'
         onSubmit={fetchWeather}>
          <div>
          <input className='bg-transparent border-none text-white focus:outline-none text-2xl placeholder:text-gray-300'
           type="text"
           placeholder='Search City' 
          value={city} 
          onChange={(e) => setCity(e.target.value)}
         />
          </div>
         
          <button onClick={fetchWeather}><BsSearch size={20}/></button>
        </form>
        </div>
        <div>
          {weather.main && <Weather data={weather}/>}
        </div>
        
      </div>
    );
  }

  
}

export default Home;

