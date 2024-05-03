import ProductsList from "@/components/Products/products";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const ProductDetsil = (props: any) => {
  const router = useRouter();
  console.log("router :", router.query.id);

  useEffect(() => {
    const edit = router.query.id;
    console.log("edit :", edit);
  }, []);

  return (
    <div>
      <ProductsList />
    </div>
  );
};

export default ProductDetsil;
