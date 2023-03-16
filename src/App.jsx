import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pocatek from "./components/Pocatek";
import Vyhody from "./components/Vyhody";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="App mb-52 ">
        <Navbar />
      <Wrapper>
        <Hero />
        <Pocatek/>
        <Vyhody/>
      </Wrapper>
    </div>
  );
}

export default App;
