import DescriptionParagraph from "../components/DescriptionParagraph";

export const getStaticPaths = async () => {
  const res = await fetch("https://bikespecs-api.vercel.app/bikeids");
  const data = await res.json();

  const paths = data.slice(0, 10000).map((bikeid) => {
    return {
      params: { id: bikeid.toString() },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://bikespecs-api.vercel.app/bikes/${id}`);
  const data = await res.json();

  return {
    props: { bikedetails: data[0] },
    revalidate: 60,
  };
};

const Details = ({ bikedetails }) => {
  return (
    <div className="grid grid-cols-12 gap-3">
      <div className="col-span-4">
        <h1>{bikedetails.model}</h1>
        <p>{bikedetails.id}</p>
      </div>
      <div className="col-span-8">
        <DescriptionParagraph bike={{ bikedetails }} />
        <p>
          The{" "}
          <span className="capitalize">
            {bikedetails.year} {bikedetails.brand} {bikedetails.model}
          </span>{" "}
          <span className="lowercase">is a {bikedetails.category}</span>.{" "}
          {bikedetails.displacement
            ? `
          It has a displacement of ${bikedetails.displacement} cc.`
            : `We don't have any displacement data for the  ${bikedetails.year} ${bikedetails.model}.`}{" "}
          {bikedetails.power
            ? `It has a maximum power output of ${bikedetails.power} horsepower.`
            : `We don't have any horsepower information for this vehicle.`}{" "}
          The engine is a {bikedetails.engine_cylinder} cylinder with a{" "}
          {bikedetails.engine_stroke} stroke and a {bikedetails.gearbox}{" "}
          gearbox. The bore and stroke measurements are {bikedetails.bore} x{" "}
          {bikedetails.stroke} mm, and it has a fuel capacity of{" "}
          {bikedetails.fuel_capacity} liters. The fuel system is{" "}
          {bikedetails.fuel_system} and the cooling system is{" "}
          {bikedetails.cooling_system}. The transmission is{" "}
          {bikedetails.transmission} and the dry weight of the motorcycle is{" "}
          {bikedetails.dry_weight} kg. The wheelbase is {bikedetails.wheelbase}{" "}
          mm and the seat height is {bikedetails.seat_height} mm. The front
          brakes are {bikedetails.front_brakes} and the rear brakes are{" "}
          {bikedetails.rear_brakes}. The front tire is a{" "}
          {bikedetails.front_tire} and the rear tire is a{" "}
          {bikedetails.rear_tire}. The front suspension is{" "}
          {bikedetails.front_suspension} and the rear suspension is{" "}
          {bikedetails.rear_suspension}. This motorcycle is available in the
          following color options: {bikedetails.color_options}.
        </p>
      </div>
    </div>
  );
};

export default Details;
