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
    <div className="grid grid-cols-12 gap-3">
      <DescriptionParagraph bike={bikedetails} />
      <div className="col-span-4">
        <h1>{bikedetails.model}</h1>
        <p>{bikedetails.id}</p>
      </div>
      <div className="col-span-8">
        <p>
          The{" "}
          <span className="capitalize">
            {bikedetails.year} {bikedetails.brand} {bikedetails.model}
          </span>{" "}
          <span className="lowercase">is a {bikedetails.category}</span>.{" "}
          {bikedetails.displacement
            ? `
          It has a displacement of ${bikedetails.displacement} cc.`
            : `We don't have any displacement data for the  ${bikedetails.year} ${bikedetails.model}.`}
        </p>
      </div>
    </div>
  );
};

export default Details;
