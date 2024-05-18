import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from './Product';
import { Link, NavLink } from 'react-router-dom';
import Preloader from './PreLoader';

const Main = () => {
    const [data,setData]=useState([])
    const [filter,setFilter]=useState([])
    const fetchApi = async () => {
        try {
          const response = await fetch(`https://shreehansarts.com/api/apis/getAllCategories.php?type=1`);
          const jsonData = await response.json();
          const filteredData = jsonData.filter(item => !defectiveItems.includes(item.name));
          setData(filteredData)
          // setFilter(filteredData);
        } catch (error) {
          console.error('Error fetching API data:', error);
        }
      };

useEffect(()=>{
    fetchApi();
},[])



// console.log(data)
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
          items: 1  ,
          partialVisibilityGutter: 20,
          centerMode:true
        }
      };
      const defectiveItems=[
        'Talk Show',
        'Interview',
        'Open Mic',
        'Love Song',
        'Bollywood Song'
      ]

console.warn(`the data is ${data}`)
console.log(data)
  return <>
 
  <main className='bg-dark text-light'>


{data.map((elem,idx)=>(
  <>
  <div className='container'>
      <div className='outer-div-outlet'>
        {/* {console.log(elem.name)} */}
        
<h2 className='outer-div-content' key={idx}>{elem.name}</h2>

<NavLink to={`/category/${elem.slug}`}    style={{textDecoration:'none', border:'1 px solid yellow'}}>
{/* <button className='outer-div-button' >More Videos</button> */}
More Videos

</NavLink>

      </div>
  <Product categoryName={elem.slug}/>


</div>
  </>
    

))}

 
  </main>
  </>
}

export default Main