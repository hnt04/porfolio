import { Box } from "@mui/material";
import logoImg from "../Avt CV.jpg";

function Logo({ sx }) {
  return (
    <Box
      sx={{
        width: "15vw",
        marginTop: "8vh",
        border: "inset 5px #44c278",
        borderRadius: "5%",
        ...sx,
      }}
    >
      <img src={logoImg} alt="logo" width="100%" sx={{ borderRadius: "50%" }} />
    </Box>
  );
}

export default Logo;
