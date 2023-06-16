import React, { useState } from "react";
import { useAddLikeMutation } from "../redux/projectsApi";
import Icon from "../img/Icon.svg";
import { Button } from "@material-ui/core";

export default function LikeBtn() {
  //const [likePost, setLikePost] = useState("");

  const [addLike, { isError }] = useAddLikeMutation();

  const handleAddLike = async () => {
    await addLike({}).unwrap();
  };

  return (
    <Button sx={{ pt: 1, width: 18, height: 16 }} onClick={handleAddLike}>
      <img src={Icon} />
    </Button>
  );
}
