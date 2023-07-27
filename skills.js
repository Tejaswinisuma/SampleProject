import React from "react"; 
import StarRatings from 'react-star-ratings';
import pi from'./html.jpeg';
import ct from './css.jpeg';
import ur from './js.png';
import er from './bootstrap.jpeg';
import se from './react js.jpeg';

function Skills(){
    return(
        <>
        <div className="col-lg-12  container-fluid vh-500 ">
        <div className="col-lg-12 col-10 container-fluid">
            <div className="row">
             <div className="col-lg-2">
            <img src={pi} className="col-lg-12 col-3" />
            </div>
            <div className="col-lg-10">
            <p className="text-center text-black fs-2 p-5">I completed my HTML task completely and have a well knowledge in html table topic<br/> 
            <StarRatings
        rating={5.050}
        starDimension="40px"
        starSpacing="15px"
        starRatedColor="blue"
      /> </p>
      </div>
            </div>
          
        </div>
        <div className=" row">
        <div className="col-lg-2">
         <img src={ct}className="col-lg-12 col-3" />
         </div>
         <div className="col-lg-10">
         <p className="text-center text-primary fs-2 p-5">I completed my Css and have a well knowledge in css table and box model topics<br/>
         <StarRatings
        rating={5.050}
        starDimension="40px"
        starSpacing="15px"
        starRatedColor="purple"
      /> </p>
        </div> 
        </div>
        <div className="row">
        <div className="col-lg-2">
         <img src={ur} className="col-lg-12 col-3 m-2" />
        </div>
        <div className="col-lg-10">
         <p className="text-center text-success fs-2 p-5">I completed my JavaScript and have a complete knowledge in array ,the JavaScript is the one which is very important <br/>
         <StarRatings
        rating={3.050}
        starDimension="40px"
        starSpacing="15px"
        starRatedColor="red"
      /> </p>
         </div>
        </div>
        <div className="row">
        <div className="col-lg-2">
         <img src={er}  className="col-lg-12 col-3 m-2"/>
         </div>
         <div className="col-lg-10">
         <p  className="text-center text-info fs-2 p-5">I completed my bootstrap programming in july and have a knowledge of applying it in react js<br/>
         <StarRatings
        rating={4.050}
        starDimension="40px"
        starSpacing="15px"
        starRatedColor="green"
      /> </p>
        </div> 
        </div>
        <div className="row">
        <div className="col-lg-2"> 
         <img src={se} className="col-lg-12 col-3 m-2"/>
         </div>
         <div className="col-lg-10">
         <p className="text-center text-danger fs-2 p-5">I completed my React JS completely and have a well knowledge in it to apply in different sectors<br/>
         <StarRatings
        rating={4.050}
        starDimension="40px"
        starSpacing="15px"
        starRatedColor="brown"
      /> </p>
        </div> 
        </div>
        </div>
        </>
    )
}
export default Skills;