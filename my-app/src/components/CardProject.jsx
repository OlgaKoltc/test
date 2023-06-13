import React from "react";
import HeaderCard from "./HeaderCard";
import ProjectDescription from "./ProjectDescription";
import VacanciesList from "./VacanciesList";
import { Box } from "@material-ui/core";
import { Container } from "@mui/system";

export default function CardProject() {
  return (
    <Container
      sx={{
        width: "100%",
        maxWidth: 368,
        height: 518,
        bgcolor: "#2E3153",
        borderRadius: 4,
        color: "#ffff",
        padding: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
        }}
      >
        <HeaderCard />
        <ProjectDescription />
        <VacanciesList />
      </Box>
    </Container>
  );
}
