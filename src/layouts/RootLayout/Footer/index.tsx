import { Logo } from "@/components";
import { FOOTER_LINKS } from "@/constants";
import { Link } from "react-router";
export const Footer = () => {
  return (
    <footer className="px-4 py-10 md:px-8 bg-gray rounded-t-xl">
      <section className="flex flex-col flex-wrap gap-6 ">
        <header className="space-y-2">
          <Logo />
          <p className="text-lg text-gray-60">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
        </header>

        <section className="flex flex-col items-center justify-between gap-4 p-4 mx-auto ">
          <h3 className="text-xl capitalize text-primary">
            Made By Mohammed Abu Kmail
          </h3>
          <ul className="gap-2 capitalize menu menu-horizontal ">
            {FOOTER_LINKS.map((item, key) => (
              <li key={key}>
                <Link
                  className="text-lg text-gray-60 "
                  to={item.link}
                  key={item.text}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </section>
      <div className=" divider" />

      <p className="text-center text-gray-60">
        Shop.co © 2000-2024, All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
