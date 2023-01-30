import React, { useState } from "react";
import {
  Stack,
  Typography,
  Grid,
  Box,
  Button,
  MenuList,
  MenuItem,
  Divider,
  Modal,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Container
} from "@mui/material";
import { Card } from "@mui/material";
import Logo from "./Logo";
import Pdf from "../Huynh Nguyen Thao - CV.pdf";
import StarIcon from "@mui/icons-material/Star";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Project1 from "../Finalproject.PNG";
import Project2 from "../MovieApp.PNG";

function HomePage() {
  //About Me
  const [openAbout, setOpenAbout] = useState(false);

  const handleOpenAbout = () => setOpenAbout(true);
  const handleCloseAbout = () => setOpenAbout(false);

  //Skill
  const [openSkill, setOpenSkill] = useState(false);

  const handleOpenSkill = () => setOpenSkill(true);
  const handleCloseSkill = () => setOpenSkill(false);

  //Project
  const [openProject, setOpenProject] = useState(false);

  const handleOpenProject = () => setOpenProject(true);
  const handleCloseProject = () => setOpenProject(false);

  //Contact
  const [openContact, setOpenContact] = useState(false);

  const handleOpenContact = () => setOpenContact(true);
  const handleCloseContact = () => setOpenContact(false);

  return (
    <Stack>
      <Card
        sx={{
          mb: 3,
          maxHeight: "100%",
          height: "100vh",
          position: "relative",
          margin: "10vh",
          background: "#bbfad5",
          border: "dotted 10px #44c278",
        }}
      >
        <Typography
          sx={{
            paddingTop: "10vh",
            paddingLeft: "12vw",
            fontWeight: "800",
            fontSize: "5vw",
            fontFamily: "Cursive",
          }}
        >
          Hello,
        </Typography>
        <Typography
          sx={{
            paddingTop: "5vh",
            paddingLeft: "38vw",
            fontWeight: "800",
            fontSize: "5vw",
            fontFamily: "Cursive",
          }}
        >
          I'm Thao Huynh
        </Typography>
        <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
          <MenuList>
            <MenuItem sx={{ marginTop: "1vh", marginLeft: "10vw" }}>
              <Button
                onClick={handleOpenAbout}
                sx={{
                  fontWeight: "500",
                  fontSize: "2vw",
                  fontFamily: "Serif",
                  color: "#48695b",
                  "&:hover": { fontWeight: "700" },
                }}
              >
                About Me
              </Button>
              <Modal open={openAbout} onClose={handleCloseAbout}>
                <Box
                  sx={{
                    mb: 3,
                    maxHeight: "100%",
                    height: "80vh",
                    position: "relative",
                    margin: "10vh",
                    background: "#defaee",
                    borderRadius: "50px",
                  }}
                >
                  <Typography
                    sx={{
                      paddingTop: "4vh",
                      textAlign: "center",
                      fontWeight: "800",
                      fontSize: "5vw",
                      fontFamily: "Cursive",
                    }}
                  >
                    About Me
                  </Typography>
                  <Typography
                    sx={{
                      paddingTop: "4vh",
                      textAlign: "center",
                      fontWeight: "200",
                      fontSize: "2vw",
                      fontFamily: "Cursive",
                    }}
                  >
                    My name is Huynh Nguyen Thao, you can also call me{" "}
                    <b>Tynna</b>. I live in Ho Chi Minh City.
                  </Typography>
                  <Typography
                    sx={{
                      paddingTop: "4vh",
                      textAlign: "center",
                      fontWeight: "200",
                      fontSize: "2vw",
                      fontFamily: "Cursive",
                    }}
                  >
                    After graduation from Saigon University, I had worked for
                    global company but my work was very monoternous. Luckily, I
                    found out the Full Stack Development incidentally.
                  </Typography>
                  <Typography
                    sx={{
                      paddingTop: "4vh",
                      textAlign: "center",
                      fontWeight: "200",
                      fontSize: "2vw",
                      fontFamily: "Cursive",
                    }}
                  >
                    I'm learning and trying all my best to be a Full Stack
                    Developer as a passionate.
                  </Typography>

                  <Typography
                    sx={{
                      paddingTop: "4vh",
                      textAlign: "center",
                      fontWeight: "200",
                      fontSize: "2vw",
                      fontFamily: "Cursive",
                    }}
                  >
                    <a href={Pdf} target="_blank">
                      Here is my Résumé for your reference
                    </a>
                  </Typography>
                </Box>
              </Modal>
            </MenuItem>

            <Divider sx={{ marginLeft: "10vw" }} />

            <MenuItem sx={{ marginTop: "1vh", marginLeft: "10vw" }}>
              <Button
                onClick={handleOpenSkill}
                sx={{
                  fontWeight: "500",
                  fontSize: "2vw",
                  fontFamily: "Serif",
                  color: "#48695b",
                  "&:hover": { fontWeight: "700" },
                }}
              >
                Skill
              </Button>
              <Modal open={openSkill} onClose={handleCloseSkill}>
                <Box
                  sx={{
                    mb: 3,
                    maxHeight: "100%",
                    height: "80vh",
                    position: "relative",
                    margin: "10vh",
                    background: "#defaee",
                    borderRadius: "50px",
                  }}
                >
                  <Typography
                    sx={{
                      paddingTop: "4vh",
                      textAlign: "center",
                      fontWeight: "800",
                      fontSize: "5vw",
                      fontFamily: "Cursive",
                    }}
                  >
                    Skill
                  </Typography>
                  <TableContainer sx={{ minWidth: "100%" }}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell
                            align="center"
                            sx={{
                              paddingTop: "4vh",
                              fontWeight: "200",
                              fontSize: "2vw",
                              fontFamily: "Cursive",
                              display: { xs: "none", md: "table-cell" },
                              color: "#5e1116",
                            }}
                          >
                            Skill
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{
                              paddingTop: "4vh",
                              fontWeight: "200",
                              fontSize: "2vw",
                              fontFamily: "Cursive",
                              display: { xs: "none", md: "table-cell" },
                              color: "#5e1116",
                            }}
                          >
                            Score
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow hover>
                          <TableCell
                            align="center"
                            sx={{
                              fontWeight: "100",
                              fontSize: "1vw",
                              fontFamily: "Cursive",
                              display: { xs: "none", md: "table-cell" },
                            }}
                          >
                            HTML
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{
                              fontWeight: "100",
                              fontSize: "1vw",
                              fontFamily: "Cursive",
                              display: { xs: "none", md: "table-cell" },
                            }}
                          >
                            <StarIcon sx={{ color: "#c7bf28" }} />
                            <StarIcon sx={{ color: "#c7bf28" }} />
                            <StarIcon sx={{ color: "#c7bf28" }} />
                            <StarIcon />
                            <StarIcon />
                          </TableCell>
                        </TableRow>

                        <TableRow hover>
                          <TableCell
                            align="center"
                            sx={{
                              fontWeight: "100",
                              fontSize: "1vw",
                              fontFamily: "Cursive",
                              display: { xs: "none", md: "table-cell" },
                            }}
                          >
                            CSS
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{
                              fontWeight: "100",
                              fontSize: "1vw",
                              fontFamily: "Cursive",
                              display: { xs: "none", md: "table-cell" },
                            }}
                          >
                            <StarIcon sx={{ color: "#c7bf28" }} />
                            <StarIcon sx={{ color: "#c7bf28" }} />
                            <StarIcon sx={{ color: "#c7bf28" }} />
                            <StarIcon sx={{ color: "#c7bf28" }} />
                            <StarIcon />
                          </TableCell>
                        </TableRow>

                        <TableRow hover>
                          <TableCell
                            align="center"
                            sx={{
                              fontWeight: "100",
                              fontSize: "1vw",
                              fontFamily: "Cursive",
                              display: { xs: "none", md: "table-cell" },
                            }}
                          >
                            JavaScript
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{
                              fontWeight: "100",
                              fontSize: "1vw",
                              fontFamily: "Cursive",
                              display: { xs: "none", md: "table-cell" },
                            }}
                          >
                            <StarIcon sx={{ color: "#c7bf28" }} />
                            <StarIcon sx={{ color: "#c7bf28" }} />
                            <StarIcon sx={{ color: "#c7bf28" }} />
                            <StarIcon />
                            <StarIcon />
                          </TableCell>
                        </TableRow>

                        <TableRow hover>
                          <TableCell
                            align="center"
                            sx={{
                              fontWeight: "100",
                              fontSize: "1vw",
                              fontFamily: "Cursive",
                              display: { xs: "none", md: "table-cell" },
                            }}
                          >
                            ReactJS
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{
                              fontWeight: "100",
                              fontSize: "1vw",
                              fontFamily: "Cursive",
                              display: { xs: "none", md: "table-cell" },
                            }}
                          >
                            <StarIcon sx={{ color: "#c7bf28" }} />
                            <StarIcon sx={{ color: "#c7bf28" }} />
                            <StarIcon sx={{ color: "#c7bf28" }} />
                            <StarIcon />
                            <StarIcon />
                          </TableCell>
                        </TableRow>

                        <TableRow hover>
                          <TableCell
                            align="center"
                            sx={{
                              fontWeight: "100",
                              fontSize: "1vw",
                              fontFamily: "Cursive",
                              display: { xs: "none", md: "table-cell" },
                            }}
                          >
                            Redux
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{
                              fontWeight: "100",
                              fontSize: "1vw",
                              fontFamily: "Cursive",
                              display: { xs: "none", md: "table-cell" },
                            }}
                          >
                            <StarIcon sx={{ color: "#c7bf28" }} />
                            <StarIcon sx={{ color: "#c7bf28" }} />
                            <StarIcon sx={{ color: "#c7bf28" }} />
                            <StarIcon />
                            <StarIcon />
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </Modal>
            </MenuItem>

            <Divider sx={{ marginLeft: "10vw" }} />

            <MenuItem sx={{ marginTop: "1vh", marginLeft: "10vw" }}>
              <Button
                onClick={handleOpenProject}
                sx={{
                  fontWeight: "500",
                  fontSize: "2vw",
                  fontFamily: "Serif",
                  color: "#48695b",
                  "&:hover": { fontWeight: "700" },
                }}
              >
                Project
              </Button>
              <Modal open={openProject} onClose={handleCloseProject}>
                <Box
                  sx={{
                    mb: 3,
                    maxHeight: "100%",
                    height: "80vh",
                    position: "relative",
                    margin: "10vh",
                    position: "relative",
                    background: "#defaee",
                    borderRadius: "50px",
                  }}
                >
                  <Typography
                    sx={{
                      paddingTop: "4vh",
                      textAlign: "center",
                      fontWeight: "800",
                      fontSize: "5vw",
                      fontFamily: "Cursive",
                    }}
                  >
                    My Projects
                  </Typography>
                  <Typography
                    sx={{
                      paddingTop: "2vh",
                      textAlign: "center",
                      fontWeight: "200",
                      fontSize: "1vw",
                      fontFamily: "Cursive",
                    }}
                  >
                    (During my course, I have done some project as final module test...)
                  </Typography>
                  <Container>
                  <Box
                    sx={{
                      paddingTop: "4vh",
                      textAlign: "center",
                      fontWeight: "200",
                      fontSize: "2vw",
                      fontFamily: "Cursive",
                      display:"flex",
                      justifyContent:"space-around"
                    }}
                  >
                    <img src={Project1} width="30%"></img>
                    <Typography sx={{
                      paddingTop: "2vh",
                      fontWeight: "200",
                      fontSize: "1vw",
                      fontFamily: "Arial",
                      paddingLeft:"5vw"
                    }}>My Final Project is a Private Social at Company. In there, employee can contact, update, follow their work as well as their active in company. Beside that, employee can see members's information through Department and know who the best employees of months are. In daily working, employer can assign tasks for their subordinate and follow up the process.
                    <br />
                    <a href="https://github.com/hnt04/fe-finalproject" target="_blank">View More</a>
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      paddingTop: "4vh",
                      textAlign: "center",
                      fontWeight: "200",
                      fontSize: "2vw",
                      fontFamily: "Cursive",
                      display:"flex",
                      justifyContent:"space-around"
                    }}
                  >
                    <img src={Project2} width="30%"></img>
                    <Typography sx={{
                      paddingTop: "3vh",
                      fontWeight: "200",
                      fontSize: "1vw",
                      fontFamily: "Arial",
                      paddingLeft:"5vw"
                    }}>In this page, we can see list of movie, its information and rating. You can also add your favorite movies to your own list
                    <br />
                    <a href="https://github.com/hnt04/movie-app" target="_blank">View More</a>
                    </Typography>
                  </Box>
                  </Container>
                </Box>
              </Modal>
            </MenuItem>

            <Divider sx={{ marginLeft: "10vw" }} />

            <MenuItem sx={{ marginTop: "1vh", marginLeft: "10vw" }}>
              <Button
                onClick={handleOpenContact}
                sx={{
                  fontWeight: "500",
                  fontSize: "2vw",
                  fontFamily: "Serif",
                  color: "#48695b",
                  "&:hover": { fontWeight: "700" },
                }}
              >
                Contact
              </Button>
              <Modal open={openContact} onClose={handleCloseContact}>
                <Box
                  sx={{
                    mb: 3,
                    maxHeight: "100%",
                    maxWidth: "50%",
                    height: "80vh",
                    position: "relative",
                    marginTop: "10vh",
                    marginLeft: "24vw",
                    position: "relative",
                    background: "#defaee",
                    borderRadius: "50px",
                  }}
                >
                  <Typography
                    sx={{
                      paddingTop: "4vh",
                      textAlign: "center",
                      fontWeight: "800",
                      fontSize: "3vw",
                      fontFamily: "Cursive",
                      color: "#5d5f96",
                    }}
                  >
                    FOR MORE INFORMATION, PLEASE CONTACT ME.
                  </Typography>
                  <Typography
                    sx={{
                      paddingTop: "4vh",
                      textAlign: "center",
                      fontWeight: "200",
                      fontSize: "2vw",
                      fontFamily: "Cursive",
                    }}
                  >
                    <PhoneAndroidIcon
                      sx={{
                        paddingTop: "4vh",
                        textAlign: "center",
                        fontWeight: "200",
                        fontSize: "2vw",
                        fontFamily: "Cursive",
                      }}
                    />
                    : (+84) 0785 242 434
                  </Typography>
                  <Typography
                    sx={{
                      paddingTop: "4vh",
                      textAlign: "center",
                      fontWeight: "200",
                      fontSize: "2vw",
                      fontFamily: "Cursive",
                    }}
                  >
                    <EmailIcon
                      sx={{
                        paddingTop: "4vh",
                        textAlign: "center",
                        fontWeight: "200",
                        fontSize: "2vw",
                        fontFamily: "Cursive",
                      }}
                    />
                    : huynhnguyenthao04@gmail.com
                  </Typography>
                  <Typography
                    sx={{
                      paddingTop: "4vh",
                      display: "flex",
                      justifyContent: "space-around",
                      fontWeight: "200",
                      fontSize: "2vw",
                      fontFamily: "Cursive",
                    }}
                  >
                    <a href="https://www.facebook.com/HNT04/" target="_blank">
                    <FacebookIcon
                      sx={{
                        paddingTop: "4vh",
                        fontWeight: "200",
                        fontSize: "3vw",
                        fontFamily: "Cursive",
                        marginRight:"8vw",
                        color: "#064cc4",
                      }}
                    />
                    <a href="https://t.me/Hnt04" target="_blank">
                    <TelegramIcon
                      sx={{
                        paddingTop: "4vh",
                        fontWeight: "200",
                        fontSize: "3vw",
                        fontFamily: "Cursive",
                        marginRight:"8vw",
                        color: "rgba(49, 140, 245, 0.911)",
                      }}
                    /></a>
                    <a href="https://twitter.com/HNT0411" target="_blank"></a>
                    <TwitterIcon
                      sx={{
                        paddingTop: "4vh",
                        fontWeight: "200",
                        marginRight: "4vw",
                        fontSize: "3vw",
                        fontFamily: "Cursive",
                        color: "rgba(49, 140, 245, 0.911)",
                      }}
                    /></a>
                  </Typography>
                </Box>
              </Modal>
            </MenuItem>
          </MenuList>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              paddingRight: "10vw",
            }}
          >
            <Logo />
          </Box>
        </Grid>
      </Card>
    </Stack>
  );
}

export default HomePage;
