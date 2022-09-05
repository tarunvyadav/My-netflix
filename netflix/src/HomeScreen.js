import React from "react";
import "./HomeScreen.css";
import Nav from "./Nav";
import Banner from './Banner';
import Row from './Row'
import requests from "./Requests";


function HomeScreen(){
    return <div className="homeScreen">
     <Nav/>
     <Banner/>
    
     <Row
        title= 'NETFLIX ORIGINALS'
        fetchUrl={requests. fetchNetflixOriginals}
        isLargeRow
     />
     <Row
        title= 'fetchRomanceMovies'
        fetchUrl={requests. fetchRomanceMovies}
      
     />
     <Row
        title= 'fetchDocumentaries'
        fetchUrl={requests. fetchDocumentaries}
       
     />
     
     
     <Row title= ' fetchTopRated'
        fetchUrl={requests.  fetchTopRated}
        />
     <Row title= ' fetchActionMovies'
        fetchUrl={requests.fetchActionMovies}
       />
    <Row title= ' fetchHorrorMovies'
        fetchUrl={requests.  fetchHorrorMovies}
       
        />
   



    </div>
}


export default HomeScreen;