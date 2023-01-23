import React, { Fragment, useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";

function Social(): JSX.Element {
  const [checkedLinkedin, setChekedLinkedin] = useState(false);
  const [checkedGithub, setChekedGithub] = useState(false);
  const [checkedCV, setChekedCV] = useState(false);

  const socialClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <Fragment>
      <Box position="fixed" left={"-100px"} top="50%" zIndex={3}>
        <List>
          <ListItem
            disablePadding
            sx={{
              backgroundColor: "blue",
              borderTopRightRadius: "5%",
              left: checkedLinkedin ? "100px" : 0,
            }}
            onMouseEnter={() => setChekedLinkedin(true)}
            onMouseLeave={() => setChekedLinkedin(false)}
          >
            <ListItemButton
              onClick={() =>
                socialClick("https://www.linkedin.com/in/cuauhtlihc/")
              }
            >
              <ListItemText primary="Linkedin" />
              <ListItemIcon sx={{ pl: 3 }}>
                <LinkedInIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              backgroundColor: "black",
              left: checkedGithub ? "100px" : 0,
            }}
            onMouseEnter={() => setChekedGithub(true)}
            onMouseLeave={() => setChekedGithub(false)}
          >
            <ListItemButton
              onClick={() => socialClick("https://github.com/CuauhtliHC")}
            >
              <ListItemText primary="GitHub" />
              <ListItemIcon sx={{ pl: 3 }}>
                <GitHubIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              backgroundColor: "grey",
              borderBottomRightRadius: "5%",
              left: checkedCV ? "100px" : 0,
            }}
            onMouseEnter={() => setChekedCV(true)}
            onMouseLeave={() => setChekedCV(false)}
          >
            <ListItemButton onClick={() => socialClick("/Cuauhtli_Herrera.pdf")}>
              <ListItemText primary="Mi CV" />
              <ListItemIcon sx={{ pl: 3 }}>
                <ArticleIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Fragment>
  );
}

export default Social;
