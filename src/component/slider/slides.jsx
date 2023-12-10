import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './slide.css'
const Slides = () => {
const slider =[
  {title: 'Welcome to ',id:"1" ,titleText: 'XStation' , paragraph :'Finally you arrived to your destination with us Start a new way with us toward your goal to discover new ways to work and to enter new era of online jobs.  '},
  {title: 'Welcome to ',id:"2" ,titleText: 'XStation' , paragraph :'Finally you arrived to your destination with us Start a new way with us toward your goal to discover new ways to work and to enter new era of online jobs.  '},
  {title: 'Welcome to ',id:"3" ,titleText: 'XStation' , paragraph :'Finally you arrived to your destination with us Start a new way with us toward your goal to discover new ways to work and to enter new era of online jobs.  '}
]

  return (
    <Carousel className='container-fluide '>
{slider.map((slide)=>(
   <Carousel.Item key={slide.id} >
   <div style={{width:"1920", height:"818px" , backgroundColor:"rgb(224,224,232)"}}  />
   <Carousel.Caption style={{position:"absolute",textAlign:"justify" , left:"3.5rem" ,top:"5rem" , width:"20rem", lineHeight:"1.2rem" , color:"#000"}}>
     <h3 style={{fontSize:"3.5rem " , color:"#000"}}> {slide.title} <br /><span style={{color:"rgb(99,98,140)" }}>{slide.titleText} </span> </h3>
     <p className='w-5' width="100px"style={{textAlign:"justify"}} >{slide.paragraph}</p>
   </Carousel.Caption>
 </Carousel.Item>

))}
     
      </Carousel>

  )}  


export default Slides