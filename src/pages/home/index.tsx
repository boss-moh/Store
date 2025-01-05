import { URL_LINKS } from "@/constants";
import { Link } from "react-router";

import urlHeadingImage from "@/assets/heading.png";
import {
  CalvinIcon,
  GuccIcon,
  PrabaIcon,
  ZaraIcon,
  VersaceIcon,
  StarIcon,
} from "@/assets/icons";
const Home = () => {
  return (
    <div className="">
      <section>
        <article className="flex flex-col gap-2 bg-gray md:pt-10 md:px-6 md:flex-row">
          <div className="px-4 py-12 space-y-4 md:space-y-12 basis-1/2">
            <article className="space-y-6 basis-1/2">
              <h1 className="text-2xl font-bold md:text-2xl lg:text-4xl">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="text-primary/60 ">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <div className="mx-auto md:mx-0 w-fit">
                <Link
                  to={URL_LINKS.SHOP}
                  className="rounded-full btn btn-primary btn-wide"
                >
                  Shop Now
                </Link>
              </div>
            </article>
            <article className="flex  gap-6  flex-col content-center min-[400px]:flex-row  min-[400px]:justify-center flex-wrap   *:w-fit">
              <div>
                <p className="flex flex-col ">
                  <span className="text-xl font-bold lg:text-3xl">200+</span>
                  <span className="text-primary/60">International Brands</span>
                </p>
              </div>
              <div>
                <p className="flex flex-col">
                  <span className="text-xl font-bold lg:text-3xl">2,000+</span>
                  <span className="text-primary/60">High-Quality Products</span>
                </p>
              </div>
              <div>
                <p className="flex flex-col">
                  <span className="text-xl font-bold lg:text-3xl">30,000+</span>
                  <span className="text-primary/60">Happy Customers</span>
                </p>
              </div>
            </article>
          </div>
          <div className="relative basis-1/2">
            <img
              src={urlHeadingImage}
              className="aspect-square w-[4]"
              alt="heading image "
            />
            <StarIcon className="absolute top-[45%]" />
            <StarIcon className="absolute top-[10%] right-[15%] md:scale-[200%]" />
          </div>
        </article>
        <article className="flex flex-wrap justify-center gap-8 p-4 md:p-8 bg-primary ">
          <VersaceIcon />

          <ZaraIcon />

          <GuccIcon />

          <PrabaIcon />

          <CalvinIcon />
        </article>
      </section>
    </div>
  );
};

export default Home;
