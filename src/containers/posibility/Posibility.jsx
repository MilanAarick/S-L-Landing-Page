import "./posibilty.css"
import poImage from "../../assets/possibility.png"

const Posibilty = () => {
  return (
    <div className="mw__possibilty section__padding" id="posibility">
      <div className="mw__possibility-image">
        <img src={poImage} alt="possibilty image" />
      </div>
      <div className="mw__posisbility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient-text">The possibilities are beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Posibilty