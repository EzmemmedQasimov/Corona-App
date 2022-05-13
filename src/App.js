import Header from "./components/Header";
import {useState} from "react";
import CoronaForCountry from "./components/CoronaForCountry";
import RecordedCorona from "./components/RecordedCorona";
import CoronaForContinent from "./components/CoronaForContinent";

function App() {
    const [key,setKey] = useState(1);
  return (

      <>
          <Header onMenuChange={(_key)=>{
             setKey(_key)
          }}/>
          <div className="md:container md:mx-auto p-8  page-content">
              {key===1 && <CoronaForCountry/>}
              {key===2 && <RecordedCorona/>}
              {key===3 && <CoronaForContinent/>}

          </div>
      </>
  );
}

export default App;
