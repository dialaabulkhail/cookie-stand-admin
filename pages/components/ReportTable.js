function ReportTable(props) {
  if (props.customersCountList.length === 0) {
    return <h2 className="text-gray-400">No Cockie Stands Available</h2>;
  }

  return (
    <div className="grid grid-cols-1 grid-rows-1 text-gray-400 justify-items-center">
      <table className="shadow-lg">
        <thead >
          <th className="px-2 text-sm text-blue-400">Location</th>
          <th className="px-2 text-sm text-blue-400">6AM</th>
          <th className="px-2 text-sm text-blue-400">7AM</th>
          <th className="px-2 text-sm text-blue-400">8AM</th>
          <th className="px-2 text-sm text-blue-400">9AM</th>
          <th className="px-2 text-sm text-blue-400">10AM</th>
          <th className="px-2 text-sm text-blue-400">11AM</th>
          <th className="px-2 text-sm text-blue-400">12PM</th>
          <th className="px-2 text-sm text-blue-400">1PM</th>
          <th className="px-2 text-sm text-blue-400">2PM</th>
          <th className="px-2 text-sm text-blue-400">3PM</th>
          <th className="px-2 text-sm text-blue-400">4PM</th>
          <th className="px-2 text-sm text-blue-400">5PM</th>
          <th className="px-2 text-sm text-blue-400">6PM</th>
          <th className="px-2 text-sm text-blue-400">7PM</th>
          <th className="px-2 text-sm text-blue-400">Total</th>
        </thead>
        <tbody>
          {props.customersCountList.map((customersCount) => {
            return (
              <tr>
                <td className="grid grid-cols-3 grid-rows-1 justify-items-center">
                 
                  <div className="col-span-2 px-2 text-blue-400">
                    {customersCount.location}
                  </div>
                
                </td>
                <td>{customersCount.t6AM}</td>
                <td>{customersCount.t7AM}</td>
                <td>{customersCount.t8AM}</td>
                <td>{customersCount.t9AM}</td>
                <td>{customersCount.t10AM}</td>
                <td>{customersCount.t11AM}</td>
                <td>{customersCount.t12PM}</td>
                <td>{customersCount.t1PM}</td>
                <td>{customersCount.t2PM}</td>
                <td>{customersCount.t3PM}</td>
                <td>{customersCount.t4PM}</td>
                <td>{customersCount.t5PM}</td>
                <td>{customersCount.t6PM}</td>
                <td>{customersCount.t7PM}</td>
                <td>
                  {Object.keys(customersCount)
                    .filter((key) => key !== "location")
                    .map((key) => parseInt(customersCount[key]))
                    .reduce((total, number) => (total += number), 0)}
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            {Object.keys(props.customersCountList[0])
              .filter((key) => key !== "location")
              .map((key) => (
                <td>
                  {props.customersCountList.reduce(
                    (total, data) => (total += parseInt(data[key])),
                    0
                  )}
                </td>
              ))}
            <td>
              {props.customersCountList.reduce(
                (total, data) =>
                  (total +=
                    parseInt(data.t6AM) +
                    parseInt(data.t7AM) +
                    parseInt(data.t8AM) +
                    parseInt(data.t9AM) +
                    parseInt(data.t10AM) +
                    parseInt(data.t11AM) +
                    parseInt(data.t12PM) +
                    parseInt(data.t1PM) +
                    parseInt(data.t2PM) +
                    parseInt(data.t3PM) +
                    parseInt(data.t4PM) +
                    parseInt(data.t5PM) +
                    parseInt(data.t6PM) +
                    parseInt(data.t7PM)),
                0
              )}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default ReportTable;



