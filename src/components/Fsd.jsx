import React from 'react'
import Card from './Card'

function Fsd({info}) {
  const fsd=info.filter(item=>item.field === "Full Stack Development")
  return <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 mx-3 mb-5">
  {
    fsd.map((e,i)=>{
      return <Card e={e} key={i} />
    })
  }
  </div>
}

export default Fsd