import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
const VideoPlayBack = ({apiData}) => {
    // const { videoID } = useParams()
    // https://youtu.be/RU5BgYL1yYo
    console.log(apiData)
   
    const videoID='gSMviWpfWno'
    const url=apiData[0].url
    console.log(`the url is ${url}`)
    let finalId=url.split('https://youtu.be/')[1]
    console.log(`final if is ${finalId}`)
    const baseUrl = `https://www.youtube.com/embed/${videoID}`


    return <>
        <Container>
            
            <div className="ratio ratio-16x9">
                <iframe src={baseUrl} title="YouTube video" allowFullScreen></iframe>
            </div>
            <h2>ETIYAH</h2>
            <ul className='d-flex justify-content-start'>
                <li>  <span>2yr ago</span></li>
                <li><span>Shreehans Movies  </span></li>
                <li><span>S350 views   </span></li>
                <li><span>Likes   </span></li>
            </ul>

            <p>descripton of the movie </p>

                 <hr/>
                 {apiData.map((elem,idx)=>(
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





        </Container>
    </>
}

export default VideoPlayBack