import Categories from "@/components/Categories/categories";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CategorieDetail = (props: any) => {
  const router = useRouter();
  const [categorie, setCategorie] = useState<any>(null);
  const { id } = router.query;
  console.log("id :", id);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/categories/${id}`
      );
      const jsonData = response.data;
      console.log("jsonData :", jsonData);
      setCategorie(jsonData);
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
    if (categorie && categorie.imageone) {
      const imageUrl = convertBlobToURL(categorie.imageone);
      console.log("imageUrl :", imageUrl);
      setCategorie((prevCategorie: any) => ({
        ...prevCategorie,
        imageUrl: imageUrl,
      }));
    }
  }, [categorie]);
  return (
    <div>
      <Categories categorie={categorie} />
    </div>
  );
};

export default CategorieDetail;
