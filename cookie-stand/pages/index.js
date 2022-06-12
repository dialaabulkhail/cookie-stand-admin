import Header from "./components/Haeder";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";
import ReportTable from "./components/ReportTable";
import CreateForm from "./components/CreateForm";
import hourly_sales from "../data";

function Home() {

  const [counter, setCounter] = useState(0);
  const [sales, setSales] = useState([]);


  function handleSubmit(event) {
    event.preventDefault();
    setCounter(counter + 1);

    const randomSale = hourly_sales[Math.floor(Math.random() * hourly_sales.length)];
    
    const data = {
      location: event.target.location.value,
      sixam: randomSale,
      sevenam: randomSale,
      eightam: randomSale,
      nine: randomSale,
      ten: randomSale,
      eleven: randomSale,
      twelve: randomSale,
      one: randomSale,
      two: randomSale,
      three: randomSale,
      four: randomSale,
      five: randomSale,
      sixpm: randomSale,
      sevenpm: randomSale,
      // minCustomers: event.target.min.value,
      // maxCustomers: event.target.max.value,
      // avgCookies: event.target.avg.value
    };
    setSales([...sales, data]);
    
    

  }
  console.log(sales)

  return (
    <>
      <Header />
      <Main handleSubmit={handleSubmit} />

      <div>
        {sales.length < 1 ? <CreateForm /> : <ReportTable  sales={sales} />}
      </div>

      <Footer counter={counter} />
    </>
  );
}

export default Home;
