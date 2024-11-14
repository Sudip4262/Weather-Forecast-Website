import React, { useEffect, useState } from 'react'
import { useLocation,Link, useNavigate  } from 'react-router-dom'
import { FaLevelUpAlt } from "react-icons/fa";
import moment from 'moment'

import { FaLocationDot } from "react-icons/fa6";
import { FaLevelDownAlt } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { FaCloudSun } from "react-icons/fa";
import { MdFoggy } from "react-icons/md";
import { IoRainy } from "react-icons/io5";
import { FaRegSnowflake } from "react-icons/fa6";
import { BsCloudDrizzleFill } from "react-icons/bs";
import { IoIosThunderstorm } from "react-icons/io";

export default function WeatherPage(props) {


  const[Day ,setDay] = useState('0')
  const[Data, setData] = useState({})

  const APIKey = "b1e486e300257d00b9852e0f7d6f988c"
  const location = useLocation()
  // console.log(location.state)

  useEffect(()=>{
    FetchWeather(location.state.CountryCode,location.state.PostCode,APIKey)
  },[])


  const FetchWeather = (CountryCode, PostCode, key) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${PostCode},${CountryCode}&appid=${key}`)
    .then(res => res.json())
    .then((json) => {
        setData(json)
    })
}



const Janina = (x,y) => {
  let newTime=moment().startOf('day').fromNow()

  if (newTime == '0 hours ago' || newTime == '1 hours ago' || newTime == '2 hours ago' || newTime == '3 hours ago') {
    return(
      <div style={{display:'flex', flexDirection:'row', width:'100%'}}>
        <div style={{display:'flex',width:'60%'}} >
          <p style={{color:'#FFF', fontSize:100,margin:0, fontFamily:'Faculty Glyphic', marginLeft:'5%'}} > {Math.floor(Data.list[x].main.temp -273.15)+'°'}c </p> </div>
        <div style={{display:'flex', width:'40%' , flexDirection:'column', justifyContent:'center', alignItems:'center'}} >
          {WeatherIcon(x,80)}
          <p style={{color:'#FF1', fontSize:20, fontFamily:'Faculty Glyphic'}}>{Data.list[x].weather[0].description}</p>
        </div>
      </div>
    )
  } else if ( newTime == '4 hours ago' || newTime == '5 hours ago' || newTime == '6 hours ago' ) {
    return(
      <div style={{display:'flex', flexDirection:'row', width:'100%'}}>
        <div style={{display:'flex',width:'60%'}} >
          <p style={{color:'#FFF', fontSize:100,margin:0, fontFamily:'Faculty Glyphic', marginLeft:'5%'}} > {Math.floor(Data.list[x+1].main.temp -273.15)+'°'}c </p> </div>
        <div style={{display:'flex', width:'40%' , flexDirection:'column', justifyContent:'center', alignItems:'center'}} >
          {WeatherIcon(x+1,80)}
          <p style={{color:'#FF1', fontSize:20, fontFamily:'Faculty Glyphic'}}>{Data.list[x+1].weather[0].description}</p>
        </div>
      </div>
    )
  } else if ( newTime == '7 hours ago' || newTime == '8 hours ago' || newTime == '9 hours ago') {
    return(
      <div style={{display:'flex', flexDirection:'row', width:'100%'}}>
        <div style={{display:'flex',width:'60%'}} >
          <p style={{color:'#FFF', fontSize:100,margin:0, fontFamily:'Faculty Glyphic', marginLeft:'5%'}} > {Math.floor(Data.list[x+2].main.temp -273.15)+'°'}c </p> </div>
        <div style={{display:'flex', width:'40%' , flexDirection:'column', justifyContent:'center', alignItems:'center'}} >
          {WeatherIcon(x+2,80)}
          <p style={{color:'#FF1', fontSize:20, fontFamily:'Faculty Glyphic'}}>{Data.list[x+2].weather[0].description}</p>
        </div>
      </div>
    )
  } else if (newTime == '10 hours ago' || newTime == '11 hours ago' || newTime == '12 hours ago') {
    return(
      <div style={{display:'flex', flexDirection:'row', width:'100%'}}>
        <div style={{display:'flex',width:'60%'}} >
          <p style={{color:'#FFF', fontSize:100,margin:0, fontFamily:'Faculty Glyphic', marginLeft:'5%'}} > {Math.floor(Data.list[x+3].main.temp -273.15)+'°'}c </p> </div>
        <div style={{display:'flex', width:'40%' , flexDirection:'column', justifyContent:'center', alignItems:'center'}} >
          {WeatherIcon(x+3,80)}
          <p style={{color:'#FF1', fontSize:20, fontFamily:'Faculty Glyphic'}}>{Data.list[x+3].weather[0].description}</p>
        </div>
      </div>
    )
  } else if (newTime == '13 hours ago' || newTime == '14 hours ago' || newTime == '15 hours ago') {
    return(
      <div style={{display:'flex', flexDirection:'row', width:'100%'}}>
        <div style={{display:'flex',width:'60%'}} >
          <p style={{color:'#FFF', fontSize:100,margin:0, fontFamily:'Faculty Glyphic', marginLeft:'5%'}} > {Math.floor(Data.list[x+4].main.temp -273.15)+'°'}c </p> </div>
        <div style={{display:'flex' ,width:'40%' , flexDirection:'column', justifyContent:'center', alignItems:'center'}} >
          {WeatherIcon(x+4,80)}
          <p style={{color:'#FFF', fontSize:20, fontFamily:'Faculty Glyphic', margin:0}}>{Data.list[x+4].weather[0].description}</p>
        </div>
      </div>
    )
  } else if (newTime == '16 hours ago' || newTime == '17 hours ago' || newTime == '18 hours ago') {
    return(
      <div style={{display:'flex', flexDirection:'row', width:'100%'}}>
        <div style={{display:'flex',width:'60%'}} >
          <p style={{color:'#FFF', fontSize:100,margin:0, fontFamily:'Faculty Glyphic', marginLeft:'5%'}} > {Math.floor(Data.list[x+5].main.temp -273.15)+'°'}c </p> </div>
        <div style={{display:'flex', height:120, width:'40%' , flexDirection:'column', justifyContent:'center', alignItems:'center'}} >
          {WeatherIcon(x+5,80)}
          <p style={{color:'#FF1', fontSize:20, fontFamily:'Faculty Glyphic',marginTop:10}}>{Data.list[x+5].weather[0].description}</p>
        </div>
      </div>
    )
  } else if (newTime == '19 hours ago' || newTime == '20 hours ago' || newTime == '21 hours ago') {
    return(
      <div style={{display:'flex', flexDirection:'row', width:'100%'}}>
        <div style={{display:'flex',width:'60%'}} >
          <p style={{color:'#FFF', fontSize:100,margin:0, fontFamily:'Faculty Glyphic', marginLeft:'5%'}} > {Math.floor(Data.list[x+6].main.temp -273.15)+'°'}c </p> </div>
        <div style={{display:'flex', width:'40%' , flexDirection:'column', justifyContent:'center', alignItems:'center'}} >
          {WeatherIcon(x+6,80)}
          <p style={{color:'#FF1', fontSize:20, fontFamily:'Faculty Glyphic'}}>{Data.list[x+6].weather[0].description}</p>
        </div>
      </div>
    )
  } else if (newTime == '22 hours ago' || newTime == '23 hours ago' || newTime == '24 hours ago') {
    return(
      <div style={{display:'flex', flexDirection:'row', width:'100%'}}>
        <div style={{display:'flex',width:'60%'}} >
          <p style={{color:'#FFF', fontSize:100,margin:0, fontFamily:'Faculty Glyphic', marginLeft:'5%'}} > {Math.floor(Data.list[x+7].main.temp -273.15)+'°'}c </p> </div>
        <div style={{display:'flex', width:'40%' , flexDirection:'column', justifyContent:'center', alignItems:'center'}} >
          {WeatherIcon(x+7,80)}
          <p style={{color:'#FF1', fontSize:20, fontFamily:'Faculty Glyphic'}}>{Data.list[x+7].weather[0].description}</p>
        </div>
      </div>
    )
  }
} 


const WeatherIcon = (x,size) => {
  if(Data.list[x].weather[0].main == 'Clear'){
    return(
      <IoIosSunny color='#FF1' size={size} style={{ borderRadius:50 ,margin:0, marginBottom:-15 }}/>
    )
  } else if(Data.list[x].weather[0].main == 'Clouds'){
    return(
      <FaCloudSun color='#FF1' size={size} style={{ borderRadius:50 ,margin:0, marginBottom:-15}}/>
    )
  } else if(Data.list[x].weather[0].main == 'Atmosphere'){
    return(
      <MdFoggy color='#FF1' size={size} style={{borderRadius:50,margin:0,marginBottom:-15 }}/>
    )
  } else if(Data.list[x].weather[0].main == 'Rain'){
    return(
      <IoRainy color='#FF1' size={size} style={{ borderRadius:50 ,margin:0, marginBottom:-15}}/>
    )
  } else if(Data.list[x].weather[0].main == 'Snow'){
    return(
      <FaRegSnowflake color='#FF1' size={size} style={{ borderRadius:50 ,margin:0, marginBottom:-15 }}/>
    )
  } else if(Data.list[x].weather[0].main == 'Drizzle'){
    return(
      <BsCloudDrizzleFill color='#FF1' size={size} style={{ borderRadius:50 ,margin:0, marginBottom:-15}}/>
    )
  } else if(Data.list[x].weather[0].main == 'Thunderstorm'){
    return(
      <IoIosThunderstorm color='#FF1' size={size} style={{ borderRadius:50 ,margin:0, marginBottom:-15}}/>
    )
  }
}


const ShortJanina = (x,y) => {
  let newTime=moment().startOf('day').fromNow()

  if (newTime == '0 hours ago' || newTime == '1 hours ago' || newTime == '2 hours ago' || newTime == '3 hours ago') {
    return(
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', width:'100%', marginTop:30}}>
        <div style={{display:'flex',width:'60%'}} >
          <p style={{color:'#FFF', fontSize:40,margin:0,  fontFamily:'Faculty Glyphic', marginLeft:'5%'}} > {Math.floor(Data.list[x].main.temp -273.15)+'°'}c </p> </div>
        
          {WeatherIcon(x,40)}
          <p style={{color:'#FF1', fontSize:20, fontFamily:'Faculty Glyphic', marginTop:10}}>{Data.list[x].weather[0].description}</p>
        
      </div>
    )
  } else if ( newTime == '4 hours ago' || newTime == '5 hours ago' || newTime == '6 hours ago' ) {
    return(
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', width:'100%', marginTop:30}}>
        <div style={{display:'flex',width:'60%'}} >
          <p style={{color:'#FFF', fontSize:40,margin:0,  fontFamily:'Faculty Glyphic', marginLeft:'5%'}} > {Math.floor(Data.list[x+1].main.temp -273.15)+'°'}c </p> </div>
        
          {WeatherIcon(x+1,40)}
          <p style={{color:'#FF1', fontSize:20, fontFamily:'Faculty Glyphic', marginTop:10}}>{Data.list[x+1].weather[0].description}</p>
        
      </div>
    )
  } else if ( newTime == '7 hours ago' || newTime == '8 hours ago' || newTime == '9 hours ago') {
    return(
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', width:'100%', marginTop:30}}>
        <div style={{display:'flex',width:'60%'}} >
          <p style={{color:'#FFF', fontSize:40,margin:0,  fontFamily:'Faculty Glyphic', marginLeft:'5%'}} > {Math.floor(Data.list[x+2].main.temp -273.15)+'°'}c </p> </div>
        
          {WeatherIcon(x+2,40)}
          <p style={{color:'#FF1', fontSize:20, fontFamily:'Faculty Glyphic', marginTop:10}}>{Data.list[x+2].weather[0].description}</p>
        
      </div>
    )
  } else if (newTime == '10 hours ago' || newTime == '11 hours ago' || newTime == '12 hours ago') {
    return(
      <div style={{display:'flex', flexDirection:'column',alignItems:'center', width:'100%', marginTop:30}}>
        <div style={{display:'flex',width:'60%'}} >
          <p style={{color:'#FFF', fontSize:40,margin:0,  fontFamily:'Faculty Glyphic', marginLeft:'5%'}} > {Math.floor(Data.list[x+3].main.temp -273.15)+'°'}c </p> </div>
        
          {WeatherIcon(x+3,40)}
          <p style={{color:'#FF1', fontSize:20, fontFamily:'Faculty Glyphic', marginTop:10}}>{Data.list[x+3].weather[0].description}</p>
        
      </div>
    )
  } else if (newTime == '13 hours ago' || newTime == '14 hours ago' || newTime == '15 hours ago') {
    return(
      <div style={{display:'flex', flexDirection:'column', alignItems:'center' , width:'100%', marginTop:30}}>
        <div style={{display:'flex',width:'60%'}} >
          <p style={{color:'#FFF', fontSize:40,margin:0, fontFamily:'Faculty Glyphic', marginLeft:'5%'}} > {Math.floor(Data.list[x+4].main.temp -273.15)+'°'}c </p> </div>
        
          {WeatherIcon(x+4,40)}
          <p style={{color:'#FFF', fontSize:20, fontFamily:'Faculty Glyphic', marginTop:10}}>{Data.list[x+4].weather[0].description}</p>
       
      </div>
    )
  } else if (newTime == '16 hours ago' || newTime == '17 hours ago' || newTime == '18 hours ago') {
    return(
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', width:'100%', marginTop:30}}>
        <div style={{display:'flex',width:'60%'}} >
          <p style={{color:'#FFF', fontSize:40,margin:0,fontFamily:'Faculty Glyphic', marginLeft:'5%'}} > {Math.floor(Data.list[x+5].main.temp -273.15)+'°'}c </p> </div>

          {WeatherIcon(x+5,40)}
          <p style={{color:'#FF1', fontSize:20, fontFamily:'Faculty Glyphic',marginTop:10}}>{Data.list[x+5].weather[0].description}</p>

      </div>
    )
  } else if (newTime == '19 hours ago' || newTime == '20 hours ago' || newTime == '21 hours ago') {
    return(
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', width:'100%', marginTop:30}}>
        <div style={{display:'flex',width:'60%'}} >
          <p style={{color:'#FFF', fontSize:40,margin:0,  fontFamily:'Faculty Glyphic', marginLeft:'5%'}} > {Math.floor(Data.list[x+6].main.temp -273.15)+'°'}c </p> </div>
          {WeatherIcon(x+6,40)}
          <p style={{color:'#FF1', fontSize:20, fontFamily:'Faculty Glyphic', marginTop:10}}>{Data.list[x+6].weather[0].description}</p>
      </div>
    )
  } else if (newTime == '22 hours ago' || newTime == '23 hours ago' || newTime == '24 hours ago') {
    return(
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', width:'100%', marginTop:30}}>
        <div style={{display:'flex',width:'60%'}} >
          <p style={{color:'#FFF', fontSize:40,margin:0, fontFamily:'Faculty Glyphic', marginLeft:'5%'}} > {Math.floor(Data.list[x+7].main.temp -273.15)+'°'}c </p> </div>
          {WeatherIcon(x+7,40)}
          <p style={{color:'#FF1', fontSize:20, fontFamily:'Faculty Glyphic', marginTop:10}}>{Data.list[x+7].weather[0].description}</p>
      </div>
    )
  }
}


const shortData = (x,y) => {
  const HighestTemp = [(Data.list[x].main.temp_max -273.15),(Data.list[x+1].main.temp_max -273.15),(Data.list[x+2].main.temp_max -273.15) ,(Data.list[x+3].main.temp_max -273.15) ,(Data.list[x+4].main.temp_max -273.15) ,(Data.list[x+5].main.temp_max -273.15) ,(Data.list[x+6].main.temp_max -273.15) ,(Data.list[x+7].main.temp_max -273.15)] ;
  const MinimumTemp = [(Data.list[x].main.temp_min -273.15),(Data.list[x+1].main.temp_min -273.15),(Data.list[x+2].main.temp_min -273.15) ,(Data.list[x+3].main.temp_min -273.15) ,(Data.list[x+4].main.temp_min -273.15) ,(Data.list[x+5].main.temp_min -273.15) ,(Data.list[x+6].main.temp_min -273.15) ,(Data.list[x+7].main.temp_min -273.15)];
  const Time = Data.list[x+1].dt;
    const date = new Date(Time * 1000);
    const formattedDate = date.toLocaleString();
    const naya = formattedDate.slice(0,10)
    const currentDate= moment().format('DD/MM/YYYY')
  return(
    <div style={{display:'flex', flexDirection:'column' , height:'100%', width:'100%', backgroundColor:'#000', alignItems:'center'}}>
      <p style={{color:'#FFF', fontSize:13, fontFamily:'Faculty Glyphic',marginBottom:0, marginTop:20}}><FaLocationDot size={18} color='#FFF' /> {Data.city.name}</p>
      <p style={{color:'#FFF', fontSize:16, fontFamily:'Faculty Glyphic', }} >{naya == currentDate ? currentDate : naya }</p>
        {ShortJanina(x,y)}
      <p style={{color:'#FFF', fontFamily:'Faculty Glyphic', fontSize:20, marginBottom:0 }}>{ (Math.max(...HighestTemp)).toFixed(1)+'°'}c <FaLevelUpAlt color='#FFF' size={20} /></p>
      <p style={{color:'#FFF', fontFamily:'Faculty Glyphic', fontSize:20}}>{(Math.min(...MinimumTemp)).toFixed(1) +'°'}c <FaLevelDownAlt color='#FFF' size={20} /></p>
      <p style={{color:'#FFF', fontSize:22, fontFamily:'Faculty Glyphic', }} >{naya == currentDate ? 'Today' : '' }</p>
    </div>
  )
}



const LongData = (x,y) => {
    const HighestTemp = [(Data.list[x].main.temp_max -273.15),(Data.list[x+1].main.temp_max -273.15),(Data.list[x+2].main.temp_max -273.15) ,(Data.list[x+3].main.temp_max -273.15) ,(Data.list[x+4].main.temp_max -273.15) ,(Data.list[x+5].main.temp_max -273.15) ,(Data.list[x+6].main.temp_max -273.15) ,(Data.list[x+7].main.temp_max -273.15)] ;
    const MinimumTemp = [(Data.list[x].main.temp_min -273.15),(Data.list[x+1].main.temp_min -273.15),(Data.list[x+2].main.temp_min -273.15) ,(Data.list[x+3].main.temp_min -273.15) ,(Data.list[x+4].main.temp_min -273.15) ,(Data.list[x+5].main.temp_min -273.15) ,(Data.list[x+6].main.temp_min -273.15) ,(Data.list[x+7].main.temp_min -273.15)];
    const Time = Data.list[x+1].dt;
    const date = new Date(Time * 1000);
    const formattedDate = date.toLocaleString();
    const naya = formattedDate.slice(0,10)
    const currentDate= moment().format('DD/MM/YYYY')
    return(
      <div style={{display: 'flex' , height:'97%', width:'90%', flexDirection:'column'}}>
        <p style={{color:'#FFF', fontSize:20, fontFamily:'Faculty Glyphic',marginBottom:0}}><FaLocationDot size={25} color='#FFF' /> {Data.city.name}</p>
        <p style={{color:'#FFF', fontSize:14, fontFamily:'Faculty Glyphic', marginLeft:'7%'}}>{naya == currentDate? 'Today, '+currentDate+' ,'+(moment().format('LT')) : naya+' ,'+(moment().format('LT'))}</p>
        {Janina(x,y)}
        <div style={{display:'flex',height:50, width:200, borderRadius:20, backgroundColor:'#fff', flexDirection:'row', marginLeft:'2%'}} >
          <div style={{display:'flex', flex:1, justifyContent:'center',alignItems:'center', backgroundColor:'#000'}}>
            <p style={{color:'#FFF', fontFamily:'Faculty Glyphic', fontSize:20 }}>{ (Math.max(...HighestTemp)).toFixed(1)+'°'}c <FaLevelUpAlt color='#FFF' size={20} /></p>
          </div>
          <div style={{display:'flex', flex:1,justifyContent:'center',alignItems:'center', backgroundColor:'#000' }}>
            <p style={{color:'#FFF', fontFamily:'Faculty Glyphic', fontSize:20 }}>{(Math.min(...MinimumTemp)).toFixed(1) +'°'}c <FaLevelDownAlt color='#FFF' size={20} /></p>
          </div>
        </div>

        <div style={{display:'flex', flexDirection:'row' , width:'100%', justifyContent:'center', alignItems:'center'}}>
          <div className='wholeDayForeCast' >
            <div style={{ display:'flex', height:45, width:45, borderRadius:25, justifyContent:'center', alignItems:'center', margin:0}}>
              {WeatherIcon(x,45)}
            </div>
            <p style={{color:'#FFF',fontSize:10, margin:0, marginTop:7}} >00.00 AM</p>
            <p style={{color:'#FFF',margin:0, marginTop:4, fontFamily:'Faculty Glyphic'}}>{(Data.list[x].main.temp -273.15).toFixed(1)}°c</p>
          </div>

          <div className='wholeDayForeCast' >
            <div style={{ display:'flex', height:45, width:45, borderRadius:25, justifyContent:'center', alignItems:'center', margin:0}}>
              {WeatherIcon(x+1,45)}
            </div>
            <p style={{color:'#FFF',fontSize:10, margin:0, marginTop:7}} >03.00 AM</p>
            <p style={{color:'#FFF',margin:0, marginTop:4, fontFamily:'Faculty Glyphic'}}>{(Data.list[x+1].main.temp -273.15).toFixed(1)}°c</p>
          </div>

          <div className='wholeDayForeCast' >
            <div style={{ display:'flex', height:45, width:45, borderRadius:25, justifyContent:'center', alignItems:'center', margin:0}}>
              {WeatherIcon(x+2,45)}
            </div>
            <p style={{color:'#FFF',fontSize:10, margin:0, marginTop:7}} >06.00 AM</p>
            <p style={{color:'#FFF',margin:0, marginTop:4, fontFamily:'Faculty Glyphic'}}>{(Data.list[x+2].main.temp -273.15).toFixed(1)}°c</p>
          </div>

          <div className='wholeDayForeCast' >
            <div style={{ display:'flex', height:45, width:45, borderRadius:25,  justifyContent:'center', alignItems:'center', margin:0}}>
              {WeatherIcon(x+3,45)}
            </div>
            <p style={{color:'#FFF',fontSize:10, margin:0, marginTop:7}} >09.00 AM</p>
            <p style={{color:'#FFF',margin:0, marginTop:4, fontFamily:'Faculty Glyphic'}}>{(Data.list[x+3].main.temp -273.15).toFixed(1)}°c</p>
          </div>

          <div className='wholeDayForeCast' >
            <div style={{ display:'flex', height:45, width:45, borderRadius:25,  justifyContent:'center', alignItems:'center', margin:0}}>
              {WeatherIcon(x+4,45)}
            </div>
            <p style={{color:'#FFF',fontSize:10, margin:0, marginTop:7}} > 12.00 PM</p>
            <p style={{color:'#FFF',margin:0, marginTop:4, fontFamily:'Faculty Glyphic'}}>{(Data.list[x+4].main.temp -273.15).toFixed(1)}°c</p>
          </div>
          
        </div>
        <div style={{display:'flex', flexDirection:'row' , width:'100%', justifyContent:'center', alignItems:'center'}}>
          <div className='wholeDayForeCast' >
            <div style={{ display:'flex', height:45, width:45, borderRadius:25, justifyContent:'center', alignItems:'center', margin:0}}>
              {WeatherIcon(x+5,45)}
            </div>
            <p style={{color:'#FFF',fontSize:10, margin:0, marginTop:7}} >03.00 PM</p>
            <p style={{color:'#FFF',margin:0, marginTop:4, fontFamily:'Faculty Glyphic'}}>{(Data.list[x+5].main.temp -273.15).toFixed(1)}°c</p>
          </div>
          <div className='wholeDayForeCast' >
            <div style={{ display:'flex', height:45, width:45, borderRadius:25, justifyContent:'center', alignItems:'center', margin:0}}>
              {WeatherIcon(x+6,45)}
            </div>
            <p style={{color:'#FFF',fontSize:10, margin:0, marginTop:7}} >06.00 PM</p>
            <p style={{color:'#FFF',margin:0, marginTop:4, fontFamily:'Faculty Glyphic'}}>{(Data.list[x+6].main.temp -273.15).toFixed(1)}°c</p>
          </div>
          <div className='wholeDayForeCast' >
            <div style={{ display:'flex', height:45, width:45, borderRadius:25, justifyContent:'center', alignItems:'center', margin:0}}>
              {WeatherIcon(x+7,45)}
            </div>
            <p style={{color:'#FFF',fontSize:10, margin:0, marginTop:7}} >09.00 PM</p>
            <p style={{color:'#FFF',margin:0, marginTop:4, fontFamily:'Faculty Glyphic'}}>{(Data.list[x+7].main.temp -273.15).toFixed(1)}°c</p>
          </div>
        </div>
      </div>
    )
}





  if (Data.cod != null) {
    console.log(Data)

    return (
      <div>
          <div className='WholeContainerW' style={{height:window.innerHeight}}>
              <div className='LogoDiv'>
                  <Link to={{pathname:'/'}}><img src='photos/logoBlack.png' className='LogoStyle'/></Link>
              </div>
  
              <div style={{ display:'flex' ,height:'85%', width:'100%', backgroundColor:'transparent', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                  <div className={Day == 0 ? 'Today' : 'OtherDays'} style={{backgroundImage: `url(photos/weatherBack.jpg)`, opacity:1 , backgroundRepeat:'inherit'}} onClick={()=> {setDay('0')}}>
                    {Day == 0 ? LongData(0,7) : shortData(0,7)}
                  </div>
                  <div className={Day == 1 ? 'Today' : 'OtherDays'} style={{backgroundImage: `url(photos/weatherBack.jpg)`, opacity:1 , backgroundRepeat:'inherit'}} onClick={()=> {setDay('1')}}>
                    {Day == 1 ? LongData(8,15) : shortData(8,15)}
                  </div>
                  <div className={Day == 2 ? 'Today' : 'OtherDays'} style={{backgroundImage: `url(photos/weatherBack.jpg)`, opacity:1 , backgroundRepeat:'inherit'}} onClick={()=> {setDay('2')}}>
                    {Day == 2 ? LongData(16,23) : shortData(16,23)}
                  </div>
                  <div className={Day == 3 ? 'Today' : 'OtherDays'} style={{backgroundImage: `url(photos/weatherBack.jpg)`, opacity:1 , backgroundRepeat:'inherit'}} onClick={()=> {setDay('3')}}>
                    {Day == 3 ? LongData(24,31) : shortData(24,31)}
                  </div>
                  <div className={Day == 4 ? 'Today' : 'OtherDays'} style={{backgroundImage: `url(photos/weatherBack.jpg)`, opacity:1 , backgroundRepeat:'inherit'}} onClick={()=> {setDay('4')}}>
                  {Day == 4 ? LongData(32,39) : shortData(32,39)}
                  </div>
              </div>
          </div>
      </div>
    )
  } else {
    
  }
}
