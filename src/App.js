import './App.css';
import Header from './Header';
import Hero from './Hero';
import Profile from './Profile';
import Skills from './Skills';
import Project from './Project';
import Footer from './Footer';
import Form from './Form';
import { useRef } from 'react';
// import {BrowserRouter,Route,Link,Switch} from "react-router-dom";


function App() {

  const scrollToDiv = (ref) => window.scrollTo(0, ref.current.offsetTop);

  const el1 = useRef();
  const el2 = useRef(null);
  const el3 = useRef(null);
  const el4 = useRef(null);

  
  return (
    // <BrowserRouter>
    <div>
    {/* <Link className="cv" activeClassName="selected" to="/" exact>cv dön</Link>
           
           <Link className="form" activeClassName="selected" to="/form">Hire me</Link>
    
    
           <Route exact path="/" component={App} />
          
           <Route path="/form" component={Form} /> */}
      
          
<main>

   < Header reference={el1} clickskills={()=> scrollToDiv(el2)} clickproject={()=> scrollToDiv(el3)} clickfooter={()=> scrollToDiv(el4)} />
     <Hero />
     <Skills  reference={el2}/>
     <Profile />
     <Project reference={el3}/>
     <Footer reference={el4}/>
     <Form /> 
 
    </main>
   
     </div>
 
    //  </BrowserRouter>
  );
}

export default App;
