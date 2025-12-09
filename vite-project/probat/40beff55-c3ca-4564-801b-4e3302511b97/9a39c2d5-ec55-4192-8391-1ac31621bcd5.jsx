import Hero from "../../src/components/Hero";

export default function App({ probat }) {
  return (
    <div style={{ fontFamily: "Arial", backgroundColor: "#242424", color: "#FFFFFF", minHeight: "100vh", padding: 20, boxSizing: "border-box" }}>
      <h1 style={{ color: "#FFFFFF", borderBottom: "1px solid #888888", paddingBottom: "16px" }}>Welcome to My Personal Website</h1>
      <div style={{ color: "#FFFFFF" }}>
        <Hero />
      </div>
    </div>
  );
}