import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

function overview() {
  return (
    <div>
      <Header />
      <div>
        <p>OVERVIEW</p>
        <br />
        <Link href={{ pathname: "/" }}>
          <a>Home</a>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default overview;
