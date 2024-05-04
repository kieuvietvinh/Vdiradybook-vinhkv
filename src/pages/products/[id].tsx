import ProductsList from "@/components/Products/products";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ProductDetsil = (props: any) => {
  const router = useRouter();
  const [product, setProduct] = useState();

  useEffect(() => {
    const { id } = router.query;
    const storedData = localStorage.getItem("productsList");
    const item = JSON.parse(storedData as string).find(
      (product: any) => product.id.toString() === id
    );
    setProduct(item);
  }, [router]);

  return (
    <div>
      <ProductsList product={product} />
    </div>
  );
};

export default ProductDetsil;
