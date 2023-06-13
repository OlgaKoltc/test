import React from "react";
import Vacancy from "./Vacancy";
import { Box } from "@mui/system";

export default function VacanciesList() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 318,
        height: 165,
        mt: 1.5,
        mb: 3,
      }}
    >
      <Box
        sx={{
          display: "inline",
          fontFamily: "ZenMaru",
          fontWeight: 700,
          fontSize: 16,
          mb: 1.5,
        }}
      >
        Вакансии
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          height: 66,
        }}
      >
        <Vacancy />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            fontFamily: "Nunito",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "135%",
            color: "#FFFFFF",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            mt: 3,
          }}
        >
          Реализовано проектов в JH - 2
        </Box>
      </Box>
    </Box>
  );
}
