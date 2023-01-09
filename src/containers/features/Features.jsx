import React from 'react'
import Feature from "../../components/feature/Feature"
import  "./features.css"

const featureData =[
  {
    id:1,
    title: "Improving end distrusts instantly ",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
  },
  {
    id:2,
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
  },
  {
    id:3,
    title: "Message or am nothing",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
  },
  {
    id:4,
    title: "Really boy law county",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
  }
]

const Features = () => {
  return (
    <div className="mw__features section__padding" id="features">
      <div className="mw__features-heading">
        <h1 className="gradient__text">
        The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="mw__features-container">
        {featureData.map(item=><Feature key={item.id} title={item.title} text ={item.text}/>)}
        
      </div>
    </div>
  )
}

export default Features