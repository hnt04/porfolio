import { Box } from "@mui/material";
import logoImg from "../Avt CV.jpg";

function Logo({ sx }) {
  // const logo = (
  //     <Box sx={{ width: 200, height:"100%", marginTop:"30px", marginLeft:"1100px", border:"dotted 3px #1d5434",borderRadius:"20px",...sx}}>
  //         <img src={logoImg} borderRadius="100px" alt="logo" width="100%" />
  //     </Box>
  // );

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
