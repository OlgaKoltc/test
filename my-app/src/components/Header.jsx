import React from "react";
// import Typography from "@material-ui/core/Typography";
import { IconButton } from "@material-ui/core";
import { Box } from "@mui/system";
import LikeBtn from "./LikeBtn";

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 316,
        height: 51,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              display: "inline",
              flexGrow: 1,
              maxWidth: 294,
              font: "ZenMaru",
              fontWeight: 700,
              fontSize: 20,
            }}
          >
            Название проекта
          </Box>
          <LikeBtn />
        </Box>
        <Box
          sx={{
            color: "white",
            font: "Nunito",
            fontWeight: 400,
            fontSize: 14,
          }}
        >
          Сложность 7/10
        </Box>
      </Box>
    </Box>
  );
}
