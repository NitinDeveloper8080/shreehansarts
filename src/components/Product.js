import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import '../custom.css'
const Product = (props) => {
    const [apiData, setApiData] = useState([]);

    const fetchApi = async () => {
        try {
          const response = await fetch(`https://shreehansarts.com/api/apis/musicbycategory.php?category=${props.categoryName}`);
          const jsonData = await response.json();
          setApiData(jsonData);
        } catch (error) {
          console.error('Error fetching API data:', error);
        }
      };

      useEffect(()=>{
        fetchApi()
      },[])

// my responsive code 
      // const responsive = {
      //   superLargeDesktop: {
      //     // the naming can be any, depends on you.
      //     breakpoint: { max: 4000, min: 3000 },
      //     items: 5
      //   },
      //   desktop: {
      //     breakpoint: { max: 3000, min: 1024 },
      //     items: 5,
      //     partialVisibilityGutter: 40
      //   },
      //   tablet: {
      //     breakpoint: { max: 1024, min: 464 },
      //     items: 4,
      //     partialVisibilityGutter: 20
      //   },
      //   mobile: {
      //     breakpoint: { max: 464, min: 0 },
      //     items: 2 ,
      //   partialVisibilityGutter: 2,
      //   slidesToSlide:2 ,
        
      //   }
      // };

      const dotStyle = {
        width: '10px', // Adjust size as needed
        height: '10px', // Adjust size as needed
        backgroundColor: '#D58D37',
        borderRadius: '50%',
        display: 'inline-block'
      };
      
  

console.log(apiData)
 return <>



    {apiData.length >0 && (
<Carousel
  additionalTransfrom={0}
  arrows
  autoPlay={true}
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container"

  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 5,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 2,
  
      partialVisibilityGutter: 0
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 3,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable={false}
>
{
    apiData.map((elem,idx)=>(
       
     <div class="card border-0 " id='box-mine' style={{width:'15rem'}} key={idx}>
        <Link to={`/video/${props.categoryName}/${elem.slug}`} className='link-no-underline'>
  <img src={elem.thumbnail} className="card-img-top" alt="..." />
  <div className="card-body bg-dark text-light p-1">
    <p className="card-text mb-0" style={{textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',overflow:'hidden'}}> {elem.name} </p>
    <p className=' mb-1 '> {elem.date.slice(0,4)} &nbsp; <span style={{color:'#ea970a'}}> <span style={dotStyle}></span> {props.categoryName} </span></p>
  </div>
  </Link>
</div>
 
    ))
}
</Carousel>


    )}

 </>
}

export default Product