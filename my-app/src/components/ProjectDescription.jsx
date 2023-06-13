import React from "react";
import { Box } from "@mui/system";
import { Link } from "@material-ui/core";

export default function ProjectDescription() {
  return (
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
          display: "flex",
          flexDirection: "column",
          width: 318,
          height: 197,
          fontFamily: "Nunito",
          fontWeight: 400,
          fontSize: 14,
        }}
      >
        <Box>
          Разработка и создание веб-приложения, которое будет обладать
          определенными функциональными возможностями. Проект включает в себя
          создание дизайна и верстку сайта, написание программного кода,
          интеграцию с различными сервисами и платформами, тестирование и
          оптимизацию производительности.
        </Box>
        <Box
          sx={{
            display: "block",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            mt: 3,
            pb: 2,
          }}
        >
          Цель проекта - обеспечить удобство использования сайта, повысить его
          функциональность и привлекательность для пользователей.
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
  );
}
