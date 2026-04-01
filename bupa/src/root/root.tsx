// import type { Route } from "./+types/root";

import "./index.css";

import RootApp from "./components/RootApp.tsx";
import { RootHtml } from "./components/RootHtml.tsx";

export function Layout({ children }: { children: React.ReactNode }) {
  return <RootHtml>{children}</RootHtml>;
}

export default function App() {
  return <RootApp />;
}
