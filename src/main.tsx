import { createRoot } from "react-dom/client";
import Root from "./Root.tsx";
import "./styles/global.scss";

const container = document.getElementById("root") as HTMLElement;

createRoot(container).render(<Root />);
