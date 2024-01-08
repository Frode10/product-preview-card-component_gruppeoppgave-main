import "./App.css";
import { PerfumeButton } from "./components/perfumeButton/PerfumeButton";
import { PerfumeImage } from "./components/perfumeImage/PerfumeImage";
import { PerfumePrice } from "./components/perfumePrice/PerfumePrice";
import { PerfumeText } from "./components/perfumeText/PerfumeText";

function App() {
  return (
    <>
      <section className="perfume-wrapper">
        <div className="image-wrapper">
          <PerfumeImage />
        </div>
        <div className="content_wrapper">
          <PerfumeText />
          <PerfumePrice />
          <PerfumeButton />
        </div>
      </section>
    </>
  );
}

export default App;
