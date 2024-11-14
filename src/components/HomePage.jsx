import React ,{useEffect, useState}  from 'react';
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

import { GrLinkNext } from "react-icons/gr";
import { IoArrowBackCircleSharp } from "react-icons/io5";


export default function HomePage() {

    const[Latitude, setLatitude] = useState('')
    const[Longitude, setLongitude] = useState('')
    const navigate = useNavigate()



    const getPosition = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
            FetchLoc(position.coords.latitude,position.coords.longitude)
        })
    }

    //fetching data from Weather API
    const FetchLoc = (Lat,Lon) => {
        fetch(`http://nominatim.openstreetmap.org/reverse?format=json&lat=${Lat}&lon=${Lon}`)
        .then(res => res.json())
        .then((json) => {
            console.log(json.address)
            navigate("/WeatherPage", {state:{CountryCode:json.address.country_code, PostCode: json.address.postcode}})
        })
    }



    
  return (
        <div className='whole' style={{backgroundImage: `url(photos/BackImg.jpg)`, opacity:1 , backgroundRepeat:'inherit'}} >
            <div className='wholeContainer'>  
                <div className='SearchSide' style={{height:window.innerHeight}}>
                    <div className='LogoDiv'>
                        <Link to={{pathname:'/'}}><img src='photos/logo.png' className='LogoStyle' /></Link>
                    </div>  
                    <div style={{display:'flex' ,height:'100%', width:'100%', flexDirection:'column', justifyContent:'center', alignItems:'center'}} >
                        <div style={{display:'flex', height:'50%' , width:'60%', justifyContent:'center',flexDirection:'column',}}>
                            <p style={{fontSize:30, color:'#e6e6e6', fontFamily:"Faculty Glyphic", marginBottom:15}} >Location :</p>
                            <div className='SearchFlex'>
                                <div className='InputBox' onClick={() => {getPosition()}}>
                                    <p className='getStartedButton' >Get Started <GrLinkNext size={20}   /></p>
                                </div>
                           </div>
                            <Link className='getLocation' onClick={() => {getPosition()}} >get current location ?</Link>
                        </div>
                    </div>
                </div>
                <div className='MapSide' style={{height:window.innerHeight}} >
                    <p style={{fontFamily:'Faculty Glyphic', color:'#FFF', fontSize:25, fontWeight:'normal', margin:0}} >want to know</p>
                    <h1 style={{fontFamily:'Faculty Glyphic', color:'#FFF', fontSize:50, fontWeight:'normal', margin:0}} >Weather?</h1>
                    <p style={{fontFamily:'Faculty Glyphic', color:'#FFF', fontSize:25, fontWeight:'normal', marginBottom:0}} >Try This</p>
                    <p style={{fontFamily:'Faculty Glyphic', color:'#FFF', fontSize:25, fontWeight:'normal', margin:0}} >ONE</p>
                    <IoArrowBackCircleSharp color='#FFF' size={90} style={{marginTop:50}} />
                </div>
            </div>
        </div>
  )
}


