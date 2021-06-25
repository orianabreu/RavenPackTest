import React from "react";
import Typography from "@material-ui/core/Typography";

import homeImg from "../../assets/backgroundimg.png";
import useStyles from "./styles";

export default function Header() {
  const { container, homeImage, textOverlay, homeText } = useStyles();

  return (
    <div className={container}>
      <img src={homeImg} alt='homeimage' className={homeImage} />
      <div className={textOverlay}>
        <Typography className={homeText}>welcome to my blog</Typography>
      </div>
    </div>
  );
}
