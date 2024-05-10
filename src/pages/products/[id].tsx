import ProductsList from "@/components/Products/products";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductDetail = (props: any) => {
  const router = useRouter();
  const [product, setProduct] = useState<any>(null);
  const { id } = router.query;
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/products/${id}`);
      const jsonData = response.data;
      console.log("jsonData :", jsonData);
      setProduct(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);
  const convertBlobToURL = (blob: Blob) => {
    return URL.createObjectURL(blob);
  };
  useEffect(() => {
    if (product && product.image) {
      const imageUrl = convertBlobToURL(product.image);
      setProduct((prevProduct: any) => ({
        ...prevProduct,
        imageUrl: imageUrl,
      }));
    }
  }, [product]);
  return (
    <div>
      <ProductsList product={product} />
    </div>
  );
};

export default ProductDetail;
