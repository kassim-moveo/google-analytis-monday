import React from "react";
import "./App.css";
import mondaySdk from "monday-sdk-js";
import A from './A'
//import Analytics from "./Analytics";
import ReactAnalytics from './ReactAnalytics'

// import Analytics from "./Analytics";
const mondayRequest=()=>{
  const boardIds = '2586231032'
    monday.listen(['settings', 'context'], 
    async (res)=>{

    let data = await monday.api(
      `query { boards (ids: [${boardIds}]) { id items { id } }`
    ); 
    console.log(data);
    console.log(res);
}
);
}
const monday = mondaySdk();

function App () {

    // Default state
    const [state,setState] = React.useState( {
      settings: {},
      name: "",
    });
  
 
    return <div className="App">
      {/* <Analytics></Analytics> */}
      {/* <A/> */}
      {/* <ReactAnalytics/> */}
      </div>;
  
}

export default App;
