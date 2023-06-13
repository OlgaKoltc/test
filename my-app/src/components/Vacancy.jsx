import React from "react";
import { Button } from "@mui/material";

const style = {
  display: "flex",
  minWidth: "max-content",
  height: 27,
  backgroundColor: "#D6F3FF",
  p: "4px 16px 4px 16px",
  borderRadius: 4,
  fontFamily: "Nunito",
  fontSize: 14,
  fontWeight: 400,
  textTransform: "capitalize",
  color: "#101335",
  mr: 0.6,
  mb: 1,
};

export default function Vacancy() {
  return (
    <>
      <Button sx={style}>Backend</Button>
      <Button sx={style}>Frontend</Button>
      <Button sx={style}>DevOPS</Button>
      <Button sx={style}>UX/UI designer</Button>
      <Button sx={style}>Project manager</Button>
    </>
  );
}
