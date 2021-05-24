import React,{useState,useEffect} from 'react'
import axios from "./axios";
import "./Banner.css"
import requests from "./Requests"
import Typewriter from 'typewriter-effect';

let defMovie="";
function Banner() {
  const [movie,setMovie]=useState([]);
  useEffect(()=>{
    async function fetchData(){
        const request=await axios.get(requests.fetchNetflixOriginals);
         defMovie=request.data.results[0];
       // console.log(request);
        setMovie(
          request.data.results[Math.floor(Math.random()*request.data.results.length - 1)]
        );
        return request;
    }
    fetchData();
  },[]);
  console.log(movie);
  console.log(defMovie);
  const truncate=(string,n)=>{
    return string?.length>n?string.substr(0,n-1)+"....":string;
  }
  return (
    <header className="banner" style={{
      backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path||defMovie?.backdrop_path})`,
      backgroundSize:"cover",
      backgroundPosition:"center center",
    }}>
      <div className="banner__contents">
        <h1>
        <Typewriter
           options={{
              strings:movie?.title||movie?.name||movie?.original_name||defMovie?.title||defMovie?.name||defMovie?.original_name,
              autoStart:true,
           }}
           />
        </h1>
           <div className="banner__buttons">
               <button className="banner__button">Play</button>
               <button className="banner__button">My List</button>
           </div>
           <h3>
           <Typewriter
           options={{
              strings:truncate(movie?.overview||defMovie?.overview,150),
              autoStart:true,
              loop:true,
           }}
           />
           </h3>    
      </div>
      <div className="banner--fadeBottom"/>
    </header>
  )
}

export default Banner
