

import { Blog, Features, Footer, Header, Posibility,  WhatSL} from "./containers"
import { Article, Brand, Cta,  Feature, Navbar, } from "./components"
function App() {
  return (
    <div>
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/> 
       <WhatSL/>
      <Features/>
      <Posibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
