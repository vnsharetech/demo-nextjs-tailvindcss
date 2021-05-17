const SubTitle = (props) => {
  const { title } = props;
  return (
    <h2 className="text-dark font-extrabold text-base3 md:text-4xl2 leading-34 md:leading-44">
      {title}
    </h2>
  );
};

export default SubTitle;
