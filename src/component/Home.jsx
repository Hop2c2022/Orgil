import { Slide1 } from "./slides/slide1";
import { Slide2 } from "./slides/slide2";
import { Slide3 } from "./slides/slide3";
import { Slide4 } from "./slides/slide4";
import { Slide5 } from "./slides/slide5";
import { Footer } from "./pages/footer";

export const Home = () => {
  return (
    <div>
      <div>
        <Slide1 />
      </div>
      <div>
        <Slide2 />
      </div>
      <div>
        <Slide3 />
      </div>
      <div>
        <Slide4 />
      </div>
      <div>
        <Slide5 />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};
