import { useRef } from "react";
import Preview from "../components/Home/Preview";
import ProductsGallery from "../components/Home/ProductsGallery";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const titleRef = useRef<HTMLHeadingElement>(null);

  const scrollIntoTitleView = () => {
    if (titleRef.current) {
      titleRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const productClickHandler = (route: string | undefined) => {
    console.log(route);

    if (route) {
      const productRoute = `/${route.toLowerCase()}`;
      navigate(productRoute);
    }
  };

  return (
    <>
      <Preview onClickExplore={scrollIntoTitleView} />
      <ProductsGallery
        titleRef={titleRef}
        onClickProduct={productClickHandler}
      />
    </>
  );
};

export default HomePage;
