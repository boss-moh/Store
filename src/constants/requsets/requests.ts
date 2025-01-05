import { API_END_POINT, productType } from "@/constants";
import { useQuery, axios } from "@/libs";
import imagestr from "http://localhost:5173/src/assets/heading.png";
export const useProducts = () => {
  const productDame = [
    {
      id: 2,
      title: "any thing",
      price: 100,
      description: "any thing",
      category: {
        id: 21,
        name: "test",
      },
      images: [imagestr],
    },
    {
      id: 2,
      title: "any thing",
      price: 100,
      description: "any thing",
      category: {
        id: 21,
        name: "test",
      },
      images: [imagestr],
    },
    {
      id: 2,
      title: "any thing",
      price: 100,
      description: "any thing",
      category: {
        id: 21,
        name: "test",
      },
      images: [""],
    },
    {
      id: 2,
      title: "any thing",
      price: 100,
      description: "any thing",
      category: {
        id: 21,
        name: "test",
      },
      images: [imagestr],
    },
  ];

  const { data: products, ...rest } = useQuery({
    queryKey: ["products"],
    queryFn: () => axios.get<productType[], []>(API_END_POINT.PRODUCTS),
    initialData: productDame,
  });

  return {
    products: products ?? [],
    ...rest,
  };
};
