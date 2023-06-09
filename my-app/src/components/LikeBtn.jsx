import React from "react";
import Icon from "../img/Icon.svg";
import { Button } from "@material-ui/core";

export default function LikeBtn() {
  return (
    <Button sx={{ pt: 1, width: 18, height: 16 }}>
      <img src={Icon} />
    </Button>
  );
}
