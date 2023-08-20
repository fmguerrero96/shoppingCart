import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>PAGE NOT FOUND</h1>
      <Link to="/">
        Click here to go back to the home page.
      </Link>
    </div>
  );
};

export default ErrorPage;