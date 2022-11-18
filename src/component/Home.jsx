import { Slide1 } from "./slide1";
import { Slide2 } from "./slide2";
import { Slide3 } from "./slide3";
import { Slide4 } from "./slide4";
import { Footer } from "./pages/footer";

export const Home = () => {
  return (
    <div>
      <div>
        {" "}
        <Slide1 />
      </div>
      <div>
        {" "}
        <Slide2 />
      </div>
      <div>
        {" "}
        <Slide3 />
      </div>
      <div>
        <Slide4 />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
