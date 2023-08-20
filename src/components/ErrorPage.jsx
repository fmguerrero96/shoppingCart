import { Link } from "react-router-dom";
import NavBar from "./navBar";

const ErrorPage = () => {
  return (
    <div>
        <NavBar />
        <h1>PAGE NOT FOUND</h1>
        <Link to="/">
        Click here to go back to the home page.
        </Link>
    </div>
  );
};

export default ErrorPage;