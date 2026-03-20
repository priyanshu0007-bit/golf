import { useState, useEffect } from "react";
import axios from "axios";
<h2 style={{ marginBottom: "20px" }}>
  Welcome 👋
</h2>
function Dashboard() {
  const [score, setScore] = useState("");
  const [scores, setScores] = useState([]);

  const token = localStorage.getItem("token");

  const fetchProfile = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/user/profile",
      {
        headers: { Authorization: token }
      }
    );
    setScores(res.data.scores);
  };

  const addScore = async () => {
    await axios.post(
      "http://localhost:5000/api/user/scores",
      { value: score },
      {
        headers: { Authorization: token }
      }
    );

    setScore("");
    fetchProfile();
  };

  const runDraw = async () => {
    const res = await axios.post(
      "http://localhost:5000/api/draw/run"
    );
    alert("Draw numbers: " + res.data.numbers);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div style={{
      maxWidth: "400px",
      margin: "auto",
      marginTop: "100px",
      textAlign: "center",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "10px"
    }}>
      <h2>Dashboard</h2>

      <input
        placeholder="Enter Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      /><br /><br />

      <button onClick={addScore}>Add Score</button><br /><br />

      <button onClick={runDraw}>Run Draw</button>

      <h3>Your Scores</h3>
      {scores.map((s, i) => (
        <p key={i}>{s.value}</p>
      ))}
    </div>
  );
}

export default Dashboard;