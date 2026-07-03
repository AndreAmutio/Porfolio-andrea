import Hero from "./sections/Hero";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <main className="min-h-screen bg-[#07070B] text-white">
      <Hero/>
      <Navbar/>
    </main>
  );
}

export default App;