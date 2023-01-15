import DescriptionParagraph from "../components/DescriptionParagraph";

export const getStaticPaths = async () => {
  const res = await fetch("https://bikespecs-api.vercel.app/bikeids");
  const data = await res.json();

  const paths = data.slice(0, 1000).map((bikeid) => {
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
    props: { bikedetails: data },
    revalidate: 60,
  };
};

export const Details = ({ bikedetails }) => {
  return (
    <div className="flex flex-col space-y-10">
      <div>
        <h1 className="text-2xl font-bold capitalize">
          {bikedetails.year} {bikedetails.brand} {bikedetails.model}
        </h1>
        <h2 className="text-lg ">
          <span className="capitalize">
            {bikedetails.year} {bikedetails.brand} {bikedetails.model}{" "}
          </span>
          specifications, model, year, category, engine and transmission,
          chassis and suspension, and physical characteristics.
        </h2>
      </div>
      <hr />

      {/* overview */}
      <div>
        <h3 className="text-2xl font-bold capitalize">
          {bikedetails.year} {bikedetails.brand} {bikedetails.model} Overview
        </h3>
        <h2 className="text-lg ">
          <span className="capitalize">
            {bikedetails.year} {bikedetails.brand} {bikedetails.model}{" "}
          </span>
          specifications, model, year, category, engine and transmission,
          chassis and suspension, and physical characteristics.
        </h2>
        <DescriptionParagraph bike={bikedetails} />
      </div>
    </div>
  );
};

export default Details;
