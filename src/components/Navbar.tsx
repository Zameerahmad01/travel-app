import { NAV_LINKS } from "@/contants/";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container z-30 py-3 ">
      <Link href={"/"}>
        <Image src="/hilink-logo.svg" alt={"logo"} width={70} height={29} />
      </Link>

      <ul className="hidden h-full gap-8 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="flexCenter text-gray-50 cursor-pointer regular-16 pb-1 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src={"/menu.svg"}
        alt="menu"
        width={30}
        height={30}
        className="inline-block lg:hidden cursor-pointer"
      />
    </nav>
  );
};

export default Navbar;
