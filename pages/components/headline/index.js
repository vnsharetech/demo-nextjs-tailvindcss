const HeadLine = (props) => {
  const { title } = props;
  return (
    <h1 className="text-dark text-7xl2 md:text-8xl2 font-extrabold leading-68 md:leading-88">
      {title}
    </h1>
  );
};

export default HeadLine;
