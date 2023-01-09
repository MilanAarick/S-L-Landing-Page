import "./header.css"
import people from "../../assets/people.png"
import imageai from "../../assets/ai.png"

const Header = () => {
  return (
    <div className="mw__header section__padding" id="home">
      <div className="mw__header-content">
        <h1 className="gradient__text">
        Let’s Build Something
        amazing with Smart Luncher
        </h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing.
           Not thoughts all exercise blessing. 
           Indulgence way everything joy alteration boisterous the attachment. 
          Party we years to order allow asked of.</p>
        <div className="mw__header-content__input">
          <input type= "email"placeholder="Your e-mail address"/>
         <button>Get Started</button>
        </div>
        <div className="mw___header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="mw__header-image">
          <img src={imageai} alt="ai image" />
        </div>
    </div>
  )
}

export default Header