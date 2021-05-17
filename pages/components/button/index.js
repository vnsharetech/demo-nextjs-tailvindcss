import Link from "next/link";
const CommonButton = (props) => {
  const { title, background, color } = props;
  return (
    <Link href="/">
      <a
        title={title}
        className={`rounded px-6 inline-block bg-${background} text-${color} py-3 whitespace-nowrap`}
      >
        {title}
      </a>
    </Link>
  );
};

export default CommonButton;
