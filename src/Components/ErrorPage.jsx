import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page "
      className="flex flex-col justify-center items-center h-screen gap-6"
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-3xl font-bold">{error.status || error.message}</i>
      </p>

      <Link
        to="/"
        className="text-4xl font-bold border border-gray-400 px-12 py-6 rounded-lg"
      >
        Go to home
      </Link>
    </div>
  );
}
