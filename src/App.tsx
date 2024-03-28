import { Typography } from "@mui/material";
import "./App.css";
import Street from "./components/street";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3">Traffic Lights Demo</Typography>
      </div>

      <Street />
    </>
  );
}

export default App;
