import { Grid, Box } from "@mui/material";
import Light from "./light";
import type { Color } from "../lib/types";

const AmpelFüß = ({ col }: { col: Color }) => {
  return (
    <>
      <Box
        style={{
          backgroundColor: "black",
          width: "80px",
          height: "150px",
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
          <Light color={col === "red" ? col : "gray"} />
          <Light color={col === "green" ? col : "gray"} />
        </Grid>
      </Box>
    </>
  );
};

export default AmpelFüß;
