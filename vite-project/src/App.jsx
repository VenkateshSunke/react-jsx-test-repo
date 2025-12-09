import React from "react";
import Hero from "./components/Hero";
import { ProbatProvider, withExperiment } from "@probat/react";

const __PROBAT_COMPONENT_PATH__ = "vite-project/src/App.jsx";

const App = ({ probat }) => {
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
};

export default withExperiment(App, {
    componentPath: __PROBAT_COMPONENT_PATH__
});
