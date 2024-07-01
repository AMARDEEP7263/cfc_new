import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";

import NavigationIcon from "@mui/icons-material/Navigation";

export default function FloatingActionButtons({
  className,
  onClick,
  children,
}) {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab variant="extended" className={className} onClick={onClick}>
        <NavigationIcon sx={{ mr: 1 }} />
        {children}
      </Fab>
    </Box>
  );
}
