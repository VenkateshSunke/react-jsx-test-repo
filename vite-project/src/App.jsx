import Hero from "./components/Hero";
import { ProbatProvider } from "@probat/react";

export default function App() {
  return (
    <ProbatProvider 
      apiBaseUrl="https://gushi.onrender.com"
      clientKey="" 
      environment="prod"
      repoFullName="VenkateshSunke/react-jsx-test-repo"
    >
      <div style={{ fontFamily: "Arial", padding: 20 }}>
        <h1>Welcome to My Personal Website</h1>
        <Hero />
      </div>
    </ProbatProvider>
  );
}