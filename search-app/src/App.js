import React from "react";
import Data from "./data"
import Person from "./components/Person";
function App() {
  const [search, setSearch] = React.useState('')
  
  const personElement = Data.filter(
    val => {
      if(search === "") return val
      else if(val.first_name.toLowerCase().includes(search.toLowerCase()) ||
      val.last_name.toLowerCase().includes(search.toLowerCase()))
      {
        return val
      }
    }
  ).map((value,key)=>{
    return <Person 
            key={key}
            firstName={value.first_name}
            lastName={value.last_name}
            age={value.age}
            img={value.img}
            />
  })
  return (
    <div className="App">
      <input type="text"
       placeholder="Search..."
       onChange={(event) => setSearch(event.target.value)}
      />
      <div className="result">
        {personElement.length === 0 ? <h1 className="no-result">{`${search} no found`}</h1> 
          : personElement}
      </div>
    </div>
  );
}

export default App;
