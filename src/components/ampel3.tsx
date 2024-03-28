import { Grid, Box } from "@mui/material";
import Light from "./light";

const Ampel3 = ({ col }: { col: string }) => {
  return (
    <>
      <Box
        style={{
          position: "absolute",
          top: "35%",
          left: "38%",
          backgroundColor: "black",
          width: "80px",
          height: "210px",
          borderRadius: "16px",
        }}
        alignContent="center"
      >
        <Grid
          container
          spacing={2}
          justifyContent="center"
          style={{
            padding: "5%",
          }}
        >
          <Light
            color={col === "red" ? "red" : col === "pink" ? "red" : "gray"}
          />
          <Light
            color={
              col === "yellow" ? "yellow" : col === "pink" ? "yellow" : "gray"
            }
          />
          <Light color={col === "green" ? "green" : "gray"} />
        </Grid>
      </Box>
    </>
  );
};

export default Ampel3;
