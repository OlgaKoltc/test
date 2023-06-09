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
          font: "ZenMaru",
          fontWeight: 700,
          fontSize: 16,
        }}
      >
        Описание
      </Box>
      <Box
        sx={{
          display: "inline",
          width: 318,
          height: 197,
          font: "Nunito",
          fontWeight: 400,
          fontSize: 14,
          flexBasis: 0,
        }}
      >
        <p>
          Разработка и создание веб-приложения, которое будет обладать
          определенными функциональными возможностями. Проект включает в себя
          создание дизайна и верстку сайта, написание программного кода,
          интеграцию с различными сервисами и платформами, тестирование и
          оптимизацию производительности.{" "}
        </p>
        Цель проекта - обеспечить удобство использования сайта, повысить его
        функциональность и привлекательность для пользователей.
      </Box>
      <Link href="#" color="#00A1E7">
        Подробнее
      </Link>
    </Box>
  );
}
