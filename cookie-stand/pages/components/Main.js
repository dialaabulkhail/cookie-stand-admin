import Form from "../components/Form";
import ReportTable from "./ReportTable";

function Main(props) {
  return (
    <main className="px-10 py-8 text-center">
      <dev className="relative self-center mx-auto my-10">
        <Form formHandler={props.formHandler} />
      </dev>
      <br />
      <ReportTable customersCountList={props.customersCountList} />
    </main>
  );
}

export default Main;
