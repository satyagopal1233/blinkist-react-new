import React from "react";


import Typography from "@material-ui/core/Typography";

const getMappedVariant = (variant) => {
  switch (variant) {
    case "header":
      return "h4";
    case "title":
      return "subtitle1";
    case "subtitle":
      return "subtitle2";
    default:
      return "body1";
  }
};

const TypographyComponent = (props) => (
  <Typography variant={getMappedVariant(props.variant)} noWrap>
    {props.children}
  </Typography>
);



export default TypographyComponent;
