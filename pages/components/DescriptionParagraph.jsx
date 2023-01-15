const DescriptionParagraph = ({ bike }) => {
  return (
    bike && (
      <>
        <p>{bike.brand}</p>
      </>
    )
  );
};

export default DescriptionParagraph;
