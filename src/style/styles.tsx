import { styled } from "@mui/material/styles";

export const MyStreet = styled("div")({
  width: "100%",
  height: "100px",
  backgroundColor: "#404040",
  position: "absolute",
  top: "67%",
});

export const MyLine = styled("div")({
  width: "80px",
  height: "2px",
  backgroundColor: "#FFFFFF",
  transform: "translate(-50%, -50%)",
});

export const MyLine2 = styled("div")({
  height: "80px",
  width: "2px",
  backgroundColor: "#FFFFFF",
  transform: "translate(-50%, -50%)",
});

export const MyLines = styled("div")({
  display: "flex",
  gap: "35px",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "nowrap",
  flexShrink: 0,
  flexGrow: 0,
  width: "100%",
});

export const MyLines2 = styled("div")({
  display: "flex",
  gap: "35px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "nowrap",
  flexShrink: 0,
  flexGrow: 0,
  height: "100%",
  paddingTop: "30px",
});

export const MyPeople = styled("div")(({ theme }) => ({
  width: "60px",
  height: "20px",
  backgroundColor: "#FFFFFF",
  transform: "translate(-50%, -50%)",
  [theme.breakpoints.up("sm")]: {
    width: "160px",
  },
}));
