import { Box, Stack } from "@mui/material";
import Light from "./light";
import type { Color } from "../lib/types";

const Ampel = ({ col }: { col: Color }) => {
  return (
    <>
      <Box
        style={{
          backgroundColor: "black",
          height: "80px",
          width: "210px",
          borderRadius: "16px",
        }}
        alignContent="center"
      >
        <Stack
          direction="row-reverse"
          spacing={2}
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
        </Stack>
      </Box>
    </>
  );
};

export default Ampel;
