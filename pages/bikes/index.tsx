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
    "https://bikespecs-api.vercel.app/bikes?page=1&limit=10"
  );

  const restext = await res.text();
  const data = JSON.parse(restext);
  let bikes: any;
  return {
    props: { bikes: data.results },
  };
};

const Index = (props: { bikes: any }): JSX.Element => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">All bikes</h1>

      <table className="table-auto">
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Year</th>
            <th>Category</th>
            <th>Displacement (ccm)</th>
            <th>Power (hp)</th>
          </tr>
        </thead>
        <tbody>
          {props.bikes.map((bike: BikeProps) => {
            return (
              <>
                <tr key={bike.id}>
                  <td> {bike.brand}</td>
                  <td> {bike.model}</td>
                  <td> {bike.year}</td>
                  <td> {bike.category}</td>
                  <td> {bike.displacement}</td>
                  <td> {bike.power}</td>
                  <td className="hover:bg-sky-700">
                    <Link href={`/bikes/${bike.id}`}>Details</Link>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
