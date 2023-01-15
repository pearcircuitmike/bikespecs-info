const DescriptionParagraph = ({ bike }) => {
  console.log(bike);
  return (
    <>
      <p>{bike.brand ? bike.brand : ""}</p>;
    </>
  );
};

export default DescriptionParagraph;
