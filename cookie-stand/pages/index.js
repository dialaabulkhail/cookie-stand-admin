import Header from "./components/Haeder";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from 'react';

function Home(){
  const [result, setResult] = useState({})

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      location: event.target.location.value,
      minCustomers: event.target.min.value,
      maxCustomers: event.target.max.value,
      avgCookies: event.target.avg.value
    }
    setResult({...result,data})
  }
  return(
    <>
    <Header/>
    <Main handleSubmit={handleSubmit}/>
    <div className="text-center text-gray-500">
    <ul>{JSON.stringify(result)}</ul>
    </div>
    
    <Footer/>
    </>
  )
}



export default Home