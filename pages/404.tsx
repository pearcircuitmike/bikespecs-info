import Link from "next/link";

const NotFound = (): JSX.Element => {
  return (
    <div className="not-found">
      <h1 className="text-3xl font-bold ">Oops...</h1>
      <h2>That page cannot be found</h2>
      <p>
        Go back to the{" "}
        <Link href="/" className="underline">
          home page
        </Link>
        .
      </p>
    </div>
  );
};

export default NotFound;
