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


      const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          partialVisibilityGutter: 40
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          partialVisibilityGutter: 30
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1 ,
          // partialVisibilityGutter: 10,
        slidesToSlide:1,
        centerMode:true
        }
      };

console.log(apiData)
 return <>



    {apiData.length >0 && (
<Carousel responsive={responsive}>
{
    apiData.map((elem,idx)=>(
       
     <div class="card border-0 " id='box-mine' style={{width:'15rem'}} key={idx}>
        <Link to={`/video/${props.categoryName}/${elem.slug}`} className='link-no-underline'>
  <img src={elem.thumbnail} className="card-img-top" alt="..." />
  <div className="card-body bg-dark text-light p-1">
    <p className="card-text mb-0"> {elem.name} </p>
    <p className=' mb-1 '> {elem.date} &nbsp; <span style={{color:'#ea970a'}}> {props.categoryName} </span></p>
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