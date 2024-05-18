import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "../custom.css"
const CategoryDetail = () => {
  const dotStyle = {
    width: '10px', // Adjust size as needed
    height: '10px', // Adjust size as needed
    backgroundColor: '#D58D37',
    borderRadius: '50%',
    display: 'inline-block'
  };


  const [data2, setData2] = useState([])

  const { categoryName } = useParams()

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(`https://shreehansarts.com/api/apis/musicbycategory.php?category=${categoryName}`)
      const jsonData = await response.json()
      setData2(jsonData)
      console.log(jsonData)
    }
    fetchApi()
  }, [])

  return <>
    <section className='bg-dark'>


      <div className='container '>
        <div className="row  g-3 "  >
          {data2.length > 0 && data2.map((elem, idx) => (
            <div className="col-lg-3 col-md-4 col-12">
              <Link to={`../../video/${categoryName}/${elem.slug}`} className='link-no-underline'>
                <div className="card border-0" key={idx}>
                  <img src={elem.thumbnail} className="card-img-top" width='400'
                    alt="Hollywood Sign on The Hill" />
                  <div className="card-body bg-dark text-light">
                    <h5 className="card-title" style={{ fontSize: 18,textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',overflow:'hidden'}}>{elem.name}</h5>
                    <p className="card-text fs-6" style={{ fontSize: '10px' }}>
                      {elem.date.slice(0,4)}
                      <span style={{ color: '#E3943A', fontWeight: 'bold' }}> &nbsp; <span style={dotStyle}></span> {categoryName}</span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}


        </div>

      </div>

    </section>
  </>
}

export default CategoryDetail