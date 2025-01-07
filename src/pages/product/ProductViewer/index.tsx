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

  return (
    <Card className="flex flex-col gap-2 md:max-w-md lg:flex-row-reverse">
      {/* Main Image */}
      <div className="relative w-full rounded-lg bg-gray-10 basis-3/4">
        <img
          src={images[selectedImage]}
          alt={title}
          className="object-contain w-full h-full rounded"
        />
      </div>

      {/* Thumbnail Gallery */}
      <div className="flex gap-2 lg:flex-col basis-1/4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={tw(
              `  basis-full bg-gray-10 rounded-md transition-all border-2 border-white `,
              selectedImage === index && "border-gray-60 "
            )}
          >
            <img
              src={image}
              alt={title}
              className="object-contain w-full h-full "
            />
          </button>
        ))}
      </div>
    </Card>
  );
}
