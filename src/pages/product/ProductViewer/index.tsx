import { Card } from "@/components";
import { productType } from "@/constants";
import { tw } from "@/libs";
import { useState } from "react";

type ProductViewerProps = {
  product: productType;
};

export default function ProductViewer({
  product: { images, title },
}: ProductViewerProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const isItHasManyImages = images.length > 1;

  return (
    <Card className="flex flex-col w-full max-w-md gap-2 mx-auto h-fit lg:flex-row-reverse ">
      {/* Main Image */}
      <div
        className={tw(
          "relative w-full p-2 rounded-lg bg-gray-10   ",
          isItHasManyImages && " basis-3/4 "
        )}
      >
        <img
          src={images[selectedImage]}
          alt={title}
          className="object-contain w-full rounded h-80 lg:h-full aspect-square"
        />
      </div>

      {/* Thumbnail Gallery */}
      {isItHasManyImages ? (
        <div className="flex flex-wrap justify-center *:flex-grow  gap-2 lg:flex-nowrap lg:flex-col basis-1/4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={tw(
                `   bg-gray-10 rounded-md transition-all border-2 border-white basis-1/4 p-2  `,
                selectedImage === index && "border-gray-60 "
              )}
            >
              <img
                src={image}
                alt={title}
                className="object-contain w-full h-20 rounded lg:h-full aspect-square"
              />
            </button>
          ))}
        </div>
      ) : null}
    </Card>
  );
}
