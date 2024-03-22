import React,{useState,useEffect} from 'react'
import { SiAbletonlive } from "react-icons/si";
import { IoSearchOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
    const arr=["HOME","ELECTRONICS","BOOKS","MUSIC","MOVIES","CLOTHING","GAMES","FURNITURE","ELECTRONICS","TRAVEL","BOTANICAL","CATEGORYNAME"]; 
    
    const [flag, setFlag] = useState(false);
    const [bar, setBar] = useState(arr.slice(0,window.innerWidth<=800?0:Math.round((window.innerWidth-800)/100)));
    const [dropDown, setDropDown] = useState(arr.slice(window.innerWidth<=800?0:Math.round((window.innerWidth-800)/100),12));
    
      useEffect(() => {
        const windowSizeHandler = () => {
    
          setBar(arr.slice(0,window.innerWidth<=800?0:Math.round((window.innerWidth-800)/100)));
          setDropDown(arr.slice(window.innerWidth<=800?0:Math.round((window.innerWidth-800)/100),12));
        
        };
        window.addEventListener("resize", windowSizeHandler);
    
        return () => {
          window.removeEventListener("resize", windowSizeHandler);
        };
      }, []);

      const handleOnClick=()=>{
        setFlag(!flag);
      }

  return (
    <div className='navbar'>
        <div className='symbol'><SiAbletonlive /> E-COMM</div>
        <div className='middle-div'>
            {bar.map((str)=>{return (<a className='links'>{str}</a>)})}
            <div>
            <button className='drop-down links' style={{"color":flag?"rgb(6, 136, 197)":"rgb(229, 223, 223)"}} onClick={handleOnClick}>MORE<RiArrowDropDownLine size={20} style={{"verticalAlign": "middle"}}/></button>
            {flag?<div className='drop-menu'>{dropDown.map((str)=>{return (<a>{str}</a>)})}</div>:""}
            </div>
        </div>
        <div className='search'><IoSearchOutline style={{"verticalAlign":"middle","color":"rgb(229, 223, 223)"}}/> <input className="searchbar" type="text" placeholder="Search something      "/></div>
        
    </div>
    
  )
}

export default Navbar