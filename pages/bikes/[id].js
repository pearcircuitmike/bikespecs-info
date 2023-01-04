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
    <div>
      <h1>{bikedetails.model}</h1>
      <p>{bikedetails.id}</p>
    </div>
  );
};

export default Details;
