import Hero from "../../src/components/Hero";

export default function App({ probat }) {
  return (
    <div style={{ fontFamily: "Arial", backgroundColor: "#F5F5F7", minHeight: "100vh", padding: "40px 20px", boxSizing: "border-box" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", backgroundColor: "#FFFFFF", borderRadius: "8px", padding: "40px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
        <h1 style={{ color: "#213547", marginTop: 0 }}>Welcome to My Personal Website</h1>
        <Hero />
      </div>
    </div>
  );
}