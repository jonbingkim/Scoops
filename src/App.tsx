import Header from "./client_components/header";
import Body from "./client_components/body";
import { Footer } from "./client_components/footer";


function App() {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
    >
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;