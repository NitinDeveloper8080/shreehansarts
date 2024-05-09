import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const VideoDescription = () => {
    
    const params=useParams()
    const [data2,setData2]=useState([])
    useEffect(()=>{
        const fetchApi=async()=>{
            const response=await fetch(`https://shreehansarts.com/api/apis/musicbycategory.php?category=${params.category}`)
            const jsonData=await response.json()
            setData2(jsonData)
            console.log(jsonData)
            }
            fetchApi()
    },[])
    const filteredData=data2.filter((elem)=>{
        if(elem.slug===params.songName){
            return elem
        }
    })
console.log(filteredData)
  return <>
    <div>VideoDescription for the category {params.category} and the song name is{params.songName}  </div>
    
   {/* {filteredData.map((elem,idx)=>(
    <img src={elem.thumbnail} key={idx}/>
   ))} */}
   <h2>{filteredData[0].label}</h2>

  </>
}

export default VideoDescription