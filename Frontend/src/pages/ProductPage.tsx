import { useParams, useLocation } from "react-router-dom";
import ProductTemplate from "../components/Pages/ProductPage/ProductTemplate";
import { DUMMY_PRODUCT } from "../utils/consts";
import { matchStaticImages } from "../utils/staticImages";

const ProductPage: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const brand = pathname.split("/")[1];
  const { model } = useParams();
  const staticImages = matchStaticImages(brand, model);
  //? send request to https.../brand/model

  return (
    <>
      <ProductTemplate
        productData={DUMMY_PRODUCT}
        staticImages={staticImages}
        productRoute={model}
      />
    </>
  );
};

export default ProductPage;
