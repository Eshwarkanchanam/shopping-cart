import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components/Home";
import { ShoppingCartProvider } from "./context/CartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <div className="max-w-screen-4xl min-h-[100vh] tracking-wide ">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
