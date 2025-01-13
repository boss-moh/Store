import { Logo } from "@/components";
import FooterLinksList from "./FooterLinksList";

export const Footer = () => {
  return (
    <footer className="px-4 py-10 md:px-8 bg-gray rounded-t-xl">
      <section className="flex flex-col flex-wrap gap-6 md:flex-row">
        <header className="space-y-2">
          <Logo />
          <p className="text-lg max-w-96 text-gray-60">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
        </header>

        <section className="flex flex-col items-center justify-between w-full gap-4 p-4 sm:flex-row">
          <FooterLinksList
            links={["about", "features", "works", "career"]}
            title={"company"}
          />
          <FooterLinksList
            links={["about", "features", "works", "career"]}
            title={"company"}
          />
          <FooterLinksList
            links={["about", "features", "works", "career"]}
            title={"company"}
          />
          <FooterLinksList
            links={["about", "features", "works", "career"]}
            title={"company"}
          />
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
