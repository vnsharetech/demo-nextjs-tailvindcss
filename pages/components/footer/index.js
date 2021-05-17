import Link from "next/link";
import CommonButton from "../button";

const Footer = () => {
  const logoItem = [
    {
      src: "/footer-logo1.png",
      link: "/",
    },
    {
      src: "/footer-logo2.png",
      link: "/",
    },
    {
      src: "/footer-logo3.png",
      link: "/",
    },
  ];

  const listLogoItems = logoItem.map((item, ind) => (
    <div className={ind === 0 ? "ml-0" : "ml-6"} key={ind}>
      <Link href={item.link}>
        <a>
          <img src={item.src} className="max-w-full" />
        </a>
      </Link>
    </div>
  ));

  return (
    <>
      <div className="md:flex items-center mt-12 md:mt-28">
        <div className="md:mr-6">
          <CommonButton title="Get a Demo" background="orange" color="white" />
        </div>
        <p className="text-medium text-base2 leading-6 mt-8 md:mt-0">
          Join hundreds of innovative companies & simplify your SOC 2
        </p>
      </div>
      <div className="flex mt-4 justify-between md:justify-start">
        {listLogoItems}
      </div>
    </>
  );
};
export default Footer;
