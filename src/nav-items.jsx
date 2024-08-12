import { ListTodo, PartyPopper, Info } from "lucide-react";
import Index from "./pages/Index.jsx";
import Confetti from "./pages/Confetti.jsx";
import About from "./pages/About.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Todo",
    to: "/",
    icon: <ListTodo className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Confetti",
    to: "/confetti",
    icon: <PartyPopper className="h-4 w-4" />,
    page: <Confetti />,
  },
  {
    title: "About",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
    page: <About />,
  },
];
