import Head from "next/head";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";

function Home(props) {
  const [counter, setCounter] = useState(0);
  const [customersCountList, setcustomersCountList] = useState([]);

  function formHandler(event) {
    event.preventDefault();
    setCounter(counter + 1);

    let min = event.target.min.value;
    let max = event.target.max.value;
    let CreateCustomer = {
      location: event.target.location.value,
      t6AM: randomBetween(min, max),
      t7AM: randomBetween(min, max),
      t8AM: randomBetween(min, max),
      t9AM: randomBetween(min, max),
      t10AM: randomBetween(min, max),
      t11AM: randomBetween(min, max),
      t12PM: randomBetween(min, max),
      t1PM: randomBetween(min, max),
      t2PM: randomBetween(min, max),
      t3PM: randomBetween(min, max),
      t4PM: randomBetween(min, max),
      t5PM: randomBetween(min, max),
      t6PM: randomBetween(min, max),
      t7PM: randomBetween(min, max),
    };

    setcustomersCountList([...customersCountList, CreateCustomer]);
    console.log(customersCountList);

    function randomBetween(start, end) {
      return Math.floor(Math.random() * end + start);
    }
  }

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header setLoggedIn={props.setLoggedIn} />
      <Main formHandler={formHandler} customersCountList={customersCountList} />
      <Footer counter={counter} />
    </>
  );
}

export default Home;
