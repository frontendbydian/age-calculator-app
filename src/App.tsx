import AgeCalculatorCard from "./components/AgeCalculatorCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="flex items-center justify-center w-screen h-screen bg-custom-off-white">
        <AgeCalculatorCard />
      </main>
      <Footer />
    </>
  );
}

export default App;
