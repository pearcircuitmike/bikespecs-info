const DescriptionParagraph = (props: { bike: any }): JSX.Element => {
  return (
    <div className="footer">
      <p>{props.bike.brand}</p>
    </div>
  );
};

export default DescriptionParagraph;
