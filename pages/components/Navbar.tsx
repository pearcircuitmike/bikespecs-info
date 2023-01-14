import Link from "next/link";


const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1 className="text-3xl font-bold underline">Bike list</h1>
      </div>

      <Link href="/">Home</Link>

      <Link href="/about">About</Link>

      <Link href="/bikes">Bikes</Link>
    </nav>
  );
};

export default Navbar;
