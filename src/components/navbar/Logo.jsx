import Image from "next/image";
import logo from "../../../public/logo.svg";

const Logo = () => {
  return (
    <div>
      <Image src={logo} alt="logo" className="w-24" />
    </div>
  );
};

export default Logo;
