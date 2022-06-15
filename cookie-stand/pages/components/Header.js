import Link from "next/link";

function Header(props) {
  function LogoutHandler() {
    props.setLoggedIn(false);
  }

  return (
    <div>
      <h1 className="h-20 p-6 m-3 text-2xl text-left text-gray-500 uppercase bg-blue-200">
        Cookie Stand Admin
      </h1>
      <nav className="float-right gap-5 mr-4 text-gray-500 ">
        <button type="button" className="p-2 rounded-full hover:bg-gray-300">
          User
        </button>
        <Link href={{ pathname: "components/overview" }}>
          <button type="button" className="p-2 rounded-full hover:bg-gray-300">
            Overview
          </button>
        </Link>
        <button type="button" onClick={LogoutHandler} className="p-2 rounded-full hover:bg-gray-300">
          LogOut
        </button>
      </nav>
    </div>
  );
}

export default Header;
