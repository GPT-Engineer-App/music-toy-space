import { Home, Code, Bug } from "lucide-react";
import Index from "./pages/Index.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Editor",
    to: "/editor",
    icon: <Code className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Debug",
    to: "/debug",
    icon: <Bug className="h-4 w-4" />,
    page: <Index />,
  },
];