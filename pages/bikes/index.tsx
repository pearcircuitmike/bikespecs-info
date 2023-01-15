import Link from "next/link";

type BikeProps = {
  id: number;
  brand: string;
  model: string;
  year: number;
  category: string;
  rating: number;
  displacement: number;
  power: number;
  torque: number;
  engine_cylinder: string;
  engine_stroke: string;
  gearbox: string;
  bore: number;
  stroke: number;
  fuel_capacity: number;
  fuel_system: string;
  cooling_system: string;
  transmission: string;
  dry_weight: number;
  wheelbase: number;
  seat_height: number;
  front_brakes: string;
  rear_brakes: string;
  front_tire: string;
  rear_tire: string;
  front_suspension: string;
  rear_suspension: string;
  color_options: string;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://bikespecs-api.vercel.app/bikes?page=1&limit=200"
  );

  const restext = await res.text();
  const data = JSON.parse(restext);
  let bikes: any;
  return {
    props: { bikes: data.results },
  };
};

const Index = (props: { bikes: Array<BikeProps> }): JSX.Element => {
  return (
    <div className="grid h-screen place-items-center">
      <table className=" overflow-x-auto self-center	 ">
        <thead className="border ">
          <tr>
            <th className="text-md  px-6 py-2 text-left">Brand</th>
            <th className="px-3 py-2 text-left">Model</th>
            <th className="px-3 py-2 text-left">Year</th>
            <th className="px-3 py-2 text-left">Category</th>
            <th className="px-3 py-2 text-left">Displacement (ccm)</th>
            <th className="px-3 py-2 text-left">Power (hp)</th>
            <th className="px-3 py-2 text-left">Torque</th>
            <th className="px-3 py-2 text-left">Fuel capacity</th>
            <th className="px-3 py-2 text-left">Transmission</th>
            <th className="px-3 py-2 text-left">Dry Weight</th>
            <th className="px-3 py-2 text-left">Color options</th>
          </tr>
        </thead>
        <tbody>
          {props.bikes.map((bike: BikeProps) => {
            return (
              <tr key={bike.id} className="table-auto border">
                <td className="capitalize text-left px-3 py-1">{bike.brand}</td>
                <td className="capitalize text-left px-3 py-1">
                  <Link href={`/bikes/${bike.id}`}> {bike.model}</Link>
                </td>
                <td className="capitalize text-left px-3 py-1"> {bike.year}</td>
                <td className="capitalize text-left px-3 py-1">
                  {" "}
                  {bike.category}
                </td>
                <td className="text-left px-3 py-1"> {bike.displacement}</td>
                <td className="text-left px-3 py-1"> {bike.power}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
