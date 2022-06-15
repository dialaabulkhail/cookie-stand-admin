function Footer(props) {
  return (
    <footer className = 'h-10 p-2 m-3 text-left text-blue-400 bg-gray-200'>
      {props.counter} Locations Worldwide
    </footer>
  )
}

export default Footer