import React from "react";
import { withExperiment } from "../../probat/runtime";
import { PROBAT_COMPONENTS, PROBAT_REGISTRIES } from "../../probat/index";
import Hero from "./components/Hero";

const __PROBAT_KEY__ = "vite-project/src/App.jsx";

const App = () => {
  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>
      <h1>Welcome to My Personal Website</h1>
      <Hero />
    </div>
  );
};

// Probat Generate Lines.
export default (() => {
  const meta = PROBAT_COMPONENTS[__PROBAT_KEY__];
  const reg  = PROBAT_REGISTRIES[__PROBAT_KEY__];
  return (meta?.proposalId && reg)
    ? withExperiment(App, { proposalId: meta.proposalId, registry: reg })
    : App;
})();
