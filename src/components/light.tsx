import { Grid, Paper } from "@mui/material";
import type { Color } from "../lib/types";

const Light = ({ color }: { color: Color }) => {
  return (
    <>
      <Grid item>
        <Paper
          style={{
            backgroundColor: color,
            width: 50,
            height: 50,
            borderRadius: "50%",
            border: "2px solid",
          }}
        />
      </Grid>
    </>
  );
};

export default Light;
