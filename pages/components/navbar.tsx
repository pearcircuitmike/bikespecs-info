const Navbar = (): JSX.Element => {
  return (
    <nav>
      <div className="logo">
        <h1 className="text-3xl font-bold underline">Bike list</h1>
      </div>
      <a>Home</a>
      <a>About</a>
      <a>Bikes</a>
    </nav>
  );
};

export default Navbar;
