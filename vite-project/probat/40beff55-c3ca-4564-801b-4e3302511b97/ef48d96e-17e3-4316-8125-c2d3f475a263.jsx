import Hero from "../../src/components/Hero";

export default function App({ probat }) {
  return (
    <div style={{ fontFamily: "Arial", padding: 20, borderTop: "6px solid #646CFF" }}>
      <h1 style={{ color: "#646CFF" }}>Welcome to My Personal Website</h1>
      <Hero />
    </div>
  );
}