import React,{useRef} from "react";
import ImageOne from './Images/pic.jpg';
import ImageTwo from './Images/images.jpg';

let Imgex=()=>{
let imgRef =useRef()
       let changeImage=()=>{
        console.log("print HTML Tag", imgRef.current.alt);
        imgRef.current.src = ImageTwo;

    }
    return(
        <>
        <img src={ImageOne} alt="Test" height="200px" width="150px"ref={imgRef}/><br/>
        <button className="btn btn-success mt-5" onClick={changeImage}>changeImage</button>
        </>
    );
};
export default Imgex;