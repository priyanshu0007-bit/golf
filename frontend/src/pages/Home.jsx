import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(to right, #141e30, #243b55)",
      color: "white"
    }}>
      <div style={{
        padding: "40px",
        borderRadius: "12px",
        textAlign: "center",
        backgroundColor: "rgba(0,0,0,0.6)",
        boxShadow: "0 0 20px rgba(0,0,0,0.5)"
      }}>
        <h1 style={{ marginBottom: "20px" }}>
          Golf Charity Platform
        </h1>

        <button
          onClick={() => navigate("/login")}
          style={{
            padding: "12px 25px",
            borderRadius: "6px",
            border: "none",
            background: "#00c6ff",
            color: "black",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;