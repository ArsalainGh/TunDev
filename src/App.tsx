import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Roadmaps from "./pages/Roadmaps";
import Tips from "./pages/Tips";
import TunisiaCorner from "./pages/TunisiaCorner";

/* tiny hash router — keeps the site 100% static, no server config needed */
function getRoute(): string {
  const h = window.location.hash.replace(/^#/, "");
  return h === "" ? "/" : h;
}

function useHashRoute() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onChange = () => {
      setRoute(getRoute());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return route;
}

export default function App() {
  const route = useHashRoute();

  let page = <Home />;
  if (route.startsWith("/resources")) page = <Resources />;
  else if (route.startsWith("/roadmaps")) page = <Roadmaps />;
  else if (route.startsWith("/tips")) page = <Tips />;
  else if (route.startsWith("/tunisia")) page = <TunisiaCorner />;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar route={route.split("/")[1] ? `/${route.split("/")[1]}` : "/"} />
      <main key={route} className="flex-1">
        {page}
      </main>
      <Footer />
    </div>
  );
}
