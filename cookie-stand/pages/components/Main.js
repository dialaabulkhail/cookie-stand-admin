

function Main() {
  return (
    <div className="rounded-md drop-shadow-xl hover:drop-shadow-2xl m-40 my-8 w-97 h-96 bg-gray-300 text-center">

      <div>
        <h2 className="animate-pulse  m-10 text-xl text-gray-500">Create Cookie Stand</h2>
      </div>

      <div className="m-5 drop-shadow-xl">
        <form className='flex m-10 p-3 mx-auto bg-gray-200'>
          <p className="text-gray-500">Location</p><label className="col-flex text-green-700"><input type={'text'} className="w-full"/></label>
        </form>
      </div>

      <div className="drop-shadow-xl mx-20 my-5 p-5 flex justify-evenly text-gray-500 rounded-md">
        <label className="flex-col ">Minimum Customers Per Hour<input type={'number'} class="border shadow-l border-black-400 bg-gray-300 rounded-md"/></label>
        <label className="felx-col">Maximum Customers Per Hour<input type={'number'} class="border shadow-l border-black-400 bg-gray-300 rounded-md"/></label>
        <label className="flex-col">Average Cookies Per Sale<input type={'number'} class="border shadow-l border-black-400 bg-gray-300 rounded-md"/></label>
      </div>

      <div className="mx-20  bg-gray-300">
        <button className="animate-bounce float-right p-3 rounded-md text-center  bg-gray-400 hover:bg-blue-200 text-white">Create!</button>
      </div>


    </div>
  )
}
// bg-indigo-500 motion-safe:hover:-translate-x-0.5 motion-safe:transition
export default Main

// all must be inside the form 