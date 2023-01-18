import './App.css';
import javaslogo from "./js-logo 1.png";
import reactlogo from "./react.png";
import reduxlogo from "./redux.png";
import vscode from "./vscode.png";
import vsyazi from "./VS CODE.png";
import htmlcsslogo from "./htmlcsslogo.png";


function Skills(prop) {

  const {reference}=prop;
 
    return (
        <div ref ={reference}className="App-skills">

          <hr></hr>

  <h1>Skills</h1>
  <div className="skill-list">

  <div className="javas">
<h1>Java Script</h1>
<img src={javaslogo}/>
{/* <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
  </div> 

    <div className="html-css">
<h1>Html-Css</h1>
<img src ={htmlcsslogo} width="173" height="115"/>
  {/* <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>  */}
  </div>
  <div className="vscode">
<h1>Vs Code</h1>
 <img src={vscode} alt ={vsyazi}  width="115" height="115"/>
{/* <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
  </div>

    <div className="react">
<h1>React.Js</h1>
<img src={reactlogo}/>
{/* <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
  </div>
  <div className="redux">
<h1>Redux</h1>
<img src={reduxlogo}/>
{/* <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
  </div>
        </div>
        </div>
    );
}

export default Skills;