import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./Header";
// import Container from "@mui/material/Container";
import { Box, Container } from "@mui/system";
import ProjectDescription from "./ProjectDescription";

function App() {
  return (
    <CssBaseline>
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
          <Header />
          <ProjectDescription />
        </Box>
      </Container>
    </CssBaseline>
  );
}

export default App;
