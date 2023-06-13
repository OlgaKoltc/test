import React from "react";
import { Box } from "@mui/system";
import LikeBtn from "./LikeBtn";

export default function HeaderCard() {
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
              fontFamily: "ZenMaru",
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
            fontFamily: "Nunito",
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
