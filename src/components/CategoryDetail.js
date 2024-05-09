import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CategoryDetail = () => {


    const [data2,setData2]=useState([])

    const {categoryName}=useParams()

    useEffect(()=>{
const fetchApi=async()=>{
const response=await fetch(`https://shreehansarts.com/api/apis/musicbycategory.php?category=${categoryName}`)
const jsonData=await response.json()
setData2(jsonData)
console.log(jsonData)
}
fetchApi()
    },[])
  
  return <>
<section className='bg-dark'>


  <div className='container '>
 <div className="row  g-3 "  >
  { data2.length>0 && data2.map((elem,idx)=>(
     <div className="col-lg-3 col-md-4 col-12">
     <div className="card" key={idx}>
       <img src={elem.thumbnail} className="card-img-top" width='400'
         alt="Hollywood Sign on The Hill" />
       <div className="card-body bg-dark text-light">
         <h5 className="card-title" style={{fontSize:18}}>{elem.name}</h5>
         <p className="card-text fs-6" style={{fontSize:'14px'}}>
          {elem.date} 
         <span style={{color:'#E3943A',fontWeight:'bold'}}> &nbsp; {categoryName}</span>
         </p>
       </div>
     </div>
  </div>
  ))}


</div>

</div>

</section>
  </>
}

export default CategoryDetail