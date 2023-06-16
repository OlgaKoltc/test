import React from "react";
import { Box, Link } from "@material-ui/core";
import { Container } from "@mui/system";
import LikeBtn from "./LikeBtn";
import VacanciesList from "./VacanciesList";

export default function Card({ item }) {
  const { title, body, id } = item;

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
                  display: "block",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  // display: "inline", //ограничила одной строкой для красоты
                  flexGrow: 1,
                  maxWidth: 294,
                  fontFamily: "ZenMaru",
                  fontWeight: 700,
                  fontSize: 20,
                }}
              >
                {title}
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: 225,
            mt: 3,
            mb: 1.5,
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
            Описание
          </Box>
          <Box
            sx={{
              // display: "flex",
              // flexDirection: "column",
              display: "block",
              overflow: "hidden",
              whiteSpace: "normal",
              textOverflow: "ellipsis",
              width: 318,
              height: 197,
              fontFamily: "Nunito",
              fontWeight: 400,
              fontSize: 14,
            }}
          >
            {body}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            mt: 0.8,
            color: "#00A1E7",
          }}
        >
          <Link href="#">Подробнее</Link>
        </Box>
      </Box>
      <VacanciesList />
    </Container>
  );
}
