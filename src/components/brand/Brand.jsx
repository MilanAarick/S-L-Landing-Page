import "./brand.css"
import { google, dropbox, shopify, slack, atlassian,} from "./import"

const Brand = () => {
  return (
    <div className="mw__brand section__margin" id="brand">
      <div>
        <img src={google} alt="google"/>
      </div>
      <div>
        <img src={dropbox} alt="dropbox"/>
      </div>
      <div>
        <img src={shopify} alt="shopify"/>
      </div>
      <div>
        <img src={slack} alt="slack"/>
      </div>
      <div>
        <img src={atlassian} alt="atlassian"/>
      </div>
    </div>
  
  )
}

export default Brand