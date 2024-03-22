import React, { useState,useEffect } from 'react'
import sunflower from "../images/sunflower.jpg"
import redRose from "../images/redrose.jpeg"
import shapes from "../images/shapes.jpg"
import utensils from "../images/utensils.jpg"
import cube from "../images/cube.jpg"
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";


const Carousel = () => {
    const [arr,setArr]=useState([sunflower,redRose,shapes,utensils,cube]);
    const [classes, setClasses] = useState('images mid');
   
    
    useEffect(() => {
      
      const interval = setInterval(() => {
        const temp=arr[0];
        let newArr=arr;
        newArr.shift();
        newArr.push(temp);
        setArr([...newArr]);
        setClasses("images mid");
      }, 2000);

      //Clearing the interval
      return () => clearInterval(interval);
  }, [arr]);
    
    
    const handleRight=()=>{
          const temp=arr[0];
          let newArr=arr;
          newArr.shift();
          newArr.push(temp);
          setArr([...newArr]);
          
    }
    const handleLeft=async ()=>{
        const temp=arr[4];
        let newArr=arr;
        newArr.pop();
        newArr.unshift(temp);
        await setArr([...newArr])
    }
    const handleonClick=()=>{
        setClasses("images mid1")
    }

  return (
    <>
    <div className='carousel'>
        <div className='images last last1'><img src={arr[0]} alt='random shapes'/></div>
        <div className='images next next1'><img src={arr[1]} alt='random shapes'/></div>
        <div className={classes} onClick={handleonClick}><img src={arr[2]} alt='random shapes'/><div className='bottom'></div></div>
        <div className='images next next2'><img src={arr[3]} alt='random shapes'/></div>
        <div className='images last last2'><img src={arr[4]} alt='random shapes'/></div>
    </div>
    <div className='mover'><GoChevronLeft size={50} onClick={handleLeft} style={{"cursor":"pointer"}}/><GoChevronRight size={50} onClick={handleRight} style={{"cursor":"pointer"}}/></div>
    </>
  )
}

export default Carousel