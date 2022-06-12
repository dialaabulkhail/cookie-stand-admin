import hourly_sales from "../../data";

function ReportTable(sales) {
  return (
    <div>
      <div>
        <table className="mx-auto my-4 text-sm text-gray-600">
          {/* <thread> */}
          <th className="p-1 bg-blue-300">Location</th>
          <th name="six" className="p-1 bg-gray-200">
            6am
          </th>
          <th className="p-1 bg-blue-300">7am</th>
          <th className="p-1 bg-gray-200">8am</th>
          <th className="p-1 bg-blue-300">9am</th>
          <th className="p-1 bg-gray-200">10am</th>
          <th className="p-1 bg-blue-300">11am</th>
          <th className="p-1 bg-gray-200">12pm</th>
          <th className="p-1 bg-blue-300">1pm</th>
          <th className="p-1 bg-gray-200">2pm</th>
          <th className="p-1 bg-blue-300">3pm</th>
          <th className="p-1 bg-gray-200">4pm</th>
          <th className="p-1 bg-blue-300">5pm</th>
          <th className="p-1 bg-gray-200">6pm</th>
          <th className="p-1 bg-blue-300">7pm</th>
          <th className="p-1 text-blue-400 bg-white ">Totals</th>
          <tbody>
            {hourly_sales.map((sales) => {
              return (
                <tr>
                  <td>{hourly_sales.location}</td>
                </tr>
              );
            })}

            {/* <td>
                            hello
                        </td> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReportTable;

// {
//     hourly_sales.map(proprs=>{
//         return (
//             <tr>
//                 <td>
//                     {props.location}
//                 </td>
//             </tr>
//         )
//     })
// }
