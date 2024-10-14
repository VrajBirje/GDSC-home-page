import "./app.scss"
import { About } from "./components/AboutUs/About";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Vision } from "./components/Vision/Vision";
import { WeDo } from "./components/WeDo/WeDo";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <section><About/></section>
    <section><Vision/></section>
    <section><WeDo/></section>
  </div>;
};

export default App;
