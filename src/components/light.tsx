import { Grid, Paper } from "@mui/material";

const Light = ({ color }: { color: string }) => {
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
