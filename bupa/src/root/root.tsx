// import type { Route } from "./+types/root";

import "./index.css";

import RootApp from "./components/RootApp.tsx";
import { RootHtml } from "./components/RootHtml.tsx";

// export const links: Route.LinksFunction = () => [
//   { rel: "preconnect", href: "https://fonts.googleapis.com" },
//   {
//     rel: "preconnect",
//     href: "https://fonts.gstatic.com",
//     crossOrigin: "anonymous",
//   },
//   {
//     rel: "stylesheet",
//     href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
//   },
// ];

export function Layout({ children }: { children: React.ReactNode }) {
  return <RootHtml>{children}</RootHtml>;
}

export default function App() {
  return <RootApp />;
}
