import {addStyleSheet, comp,render,select,write} from './codvar-modules/codvar.js'
import {getAvailableMemory, getOperatingSystem,getBrowserName} from './codvar-modules/codvar-act.js'

const mainApp = comp `
     <div id='container'>
     <img class='logo' src="../direction_arrow_logo_design.png" alt="" srcset="">   
     <h1>Welcome to <span class='codvar'>Codvar.js</span></h1>
     <p>User System Info</p>     
     <button id='show'>Show</button>
     <div class="display">
     <div id='browser'></div>
     <div id='info'></div>
     <div id='op'></div>
     </div>
     </div>
`

render(mainApp);
export default mainApp;

select("#show").onclick=()=>{
    const memor = getAvailableMemory();
    const op = getOperatingSystem();
    const browser = getBrowserName();
    write("#browser",'Your are using: '+browser);
    write("#info",'Your Memory Ram:'+memor.availableMemory+" RAM");
   
    write("#op","Your operating system is: "+op);

}
addStyleSheet({
    "body":{
        background:"linear-gradient(to left,green,blue)",
       color:"white",   
       textAlign:"center",
       paddingTop:"5%",
     
    },
    
    "#info":{
        margin:"20px",
    },
    "#op":{
        margin:"20px",
    },
   
    "#show":{
        color:'black',
        backgroundColor:"orange",
        border:"none",
        borderRadius:"15px",
        padding:"15px 25px",
        textAlign:"center"
    },
    ".logo":{
      height:"100px",
      width:"100px",
      borderRadius:"50%"
    },
    ".codvar":{
        color:"orange"
    },
    ".display":{
        paddingTop:"2%"

    }
})
