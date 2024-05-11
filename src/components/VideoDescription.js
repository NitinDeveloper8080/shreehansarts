import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import VideoPlayBack from './VideoPlayBack'
import { Container } from 'react-bootstrap'
const VideoDescription = () => {
    
    const params=useParams()
    const [data2,setData2]=useState([])
    // const [youtubeId,setYoutubeId]=useState('')
    const [extractedData,setExtractedData]=useState([])
    useEffect(()=>{
        const fetchApi=async()=>{
            const response=await fetch(`https://shreehansarts.com/api/apis/musicbycategory.php?category=${params.category}`)
            const jsonData=await response.json()
            setData2(jsonData)
            console.log(jsonData)
            }
            fetchApi()

            const dataFilteation=()=>{
               return data2.filter((elem)=>{
                    if(elem.slug===params.songName){
                        return elem
                    }
                })
            }
            // console.log(dataFilteation())
           setExtractedData( dataFilteation())
           console.log(`extracted data = ${extractedData}`)
    },[])
    // const filteredData=data2.filter((elem)=>{
    //     if(elem.slug===params.songName){
    //         return elem
    //     }
    // })

//     const youtubeid=filteredData[0].url.split('https://youtu.be/')[1]
//     // console.log(`Youtube ID = ${youtubeid}`)
// console.log(filteredData[0].url.split('https://youtu.be/')[1])
  return <>
    <div>VideoDescription for the category {params.category} and the song name is{params.songName}  </div>
{/* <VideoPlayBack apiData={filteredData}/> */}
<Container>
            <h2>{extractedData[0].url.split('https://youtu.be/')[1]}</h2>
            <div className="ratio ratio-16x9">
                {/* <iframe src={`https:youtube.com/embed/${youtubeid}`} title="YouTube video" allowFullScreen></iframe> */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/tTNZWEnVDEg?si=B_Td6MK_nmKRHVQ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
{/*             
            {filteredData.map((elem)=>(<h2>{elem.name}</h2>))}
            <ul className='d-flex justify-content-start'>
                <li>  <span>2yr ago</span></li>
                <li><span>Shreehans Movies  </span></li>
                <li><span>S350 views   </span></li>
                <li><span>Likes   </span></li>
            </ul>

            <p>descripton of the movie </p>

                 <hr/>
                 {filteredData.map((elem,idx)=>(
                    <div key={idx}>
                     <h4>Label: {elem.label} </h4>
                     <h4>Producer: {elem.producer} </h4>
                     <h4>Featuring: {elem.featuring} </h4>
                     <h4>Lyrics: {elem.lyrics} </h4>
                     <h4>Director: {elem.director} </h4>
                     <h4>Studio: {elem.studio} </h4>
                     <h4>Editor: {elem.editor} </h4>
                     <h4>Camera: {elem.camera} </h4>
                     <h4>Release Date: {elem.date}</h4>
                     </div>

                 ))}
 */}




        </Container>

  </>
}

export default VideoDescription