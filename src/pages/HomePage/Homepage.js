import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import styled from 'styled-components';
import Students from "../../assets/students.svg";
import Teachers from "../../assets/pngtree-teachers-day-characters-png-image_6740168.png";
import { BlackButton } from '../../components/buttonStyles';
import Navbar from '../Navbar/Navbar';
import "./HomePage.css";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <section id='Home'>
        <StyledContainer>
          <Grid container spacing={0}>
            <Grid item xs={12} md={6}>
              <img src={Students} alt="Students collaborating" style={{ width: '100%' }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledPaper>
                <StyledTitle>
                  Welcome to
                  <br />
                  Student Monitoring System
                  <br />
                </StyledTitle>
                <StyledText>
                  <strong>Welcome to the Student Monitoring System,</strong>
                </StyledText>
                <StyledBox>
                  <StyledLink to="/login">
                    <BlackButton variant="contained" fullWidth>
                      Get Started
                    </BlackButton>
                  </StyledLink>
                </StyledBox>
              </StyledPaper>
            </Grid>
          </Grid>
        </StyledContainer>
      </section>

      <section id='About'>
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <img src={Teachers} alt="Teachers celebrating" className='about-pic' />
          <div className='about-text'>
          <p style={{ fontSize: '1.2rem' }}>System is designed to streamline the management of student marks, attendance, mentor assignments, class scheduling, and continuous internal evaluation (CIE) marks. With our user-friendly interface, educators and administrators can efficiently track and update student performance, ensure timely feedback, and enhance student learning.</p>
          </div>
        </div>
      </section>

      <section id="Contact" style={{ backggroundColor: 'rgb(0,0,0)' }}>
        <FooterContainer sx={{ backgroundColor: 'rgb(0,0,0)', color: 'white',width:'135%',marginLeft:'-155px' }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={2}>
              <FooterSection title="Section" items={['Home', 'Features', 'Pricing', 'FAQs', 'About']} />
            </Grid>
            <Grid item xs={6} md={2}>
              <FooterSection title="Section" items={['Home', 'Features', 'Pricing', 'FAQs', 'About']} />
            </Grid>
            <Grid item xs={6} md={2}>
              <FooterSection title="Section" items={['Home', 'Features', 'Pricing', 'FAQs', 'About']} />
            </Grid>
            <Grid item xs={12} md={5}>
              <form>
                <Typography variant="h6">For any Queries</Typography>
                <Typography sx={{ color: 'white'}}>Any web application related queries? Please feel free to contact.</Typography>
                <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={2} mt={2}>
                  <TextField
                    id="newsletter1"
                    label="Email address"
                    variant="outlined"
                    fullWidth
                  />
                  <Button variant="contained" color="primary" type="button" style={{ backgroundColor: 'white', color: 'black' }}>Support</Button>
                </Box>
              </form>
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="space-between" alignItems="center" borderTop="1px solid #ddd" py={3} mt={3}>
            <Typography sx={{ color: 'white' }}>© 2024 Company, Inc. All rights reserved.</Typography>
            <ul className="list-unstyled d-flex" style={{ color: 'white' }}>
              <li className="ms-3"><a className="link-body-emphasis" href="https://twitter.com "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16" style={{ color: 'white' }}>
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg></a></li>
              <li className="ms-3"><a className="link-body-emphasis" href="https://www.instagram.com "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16" style={{ color: 'white' }}>
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg></a></li>
              <li className="ms-3"><a className="link-body-emphasis" href="https://www.facebook.com "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16" style={{ color: 'white' }}>
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg></a></li>
            </ul>
          </Box>
        </FooterContainer>
      </section>
    </>
  );
};

const FooterSection = ({ title, items }) => (
  <>
    <Typography variant="h6">{title}</Typography>
    <List>
      {items.map((item, index) => (
        <ListItem key={index} disablePadding>
          <ListItemText>
            <StyledLink to="#">{item}</StyledLink>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  </>
);

// Styled components
const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledPaper = styled.div`
  padding: 24px;
  height: 100vh;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #252525;
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledText = styled.p`
  margin-top: 30px;
  margin-bottom: 30px; 
  letter-spacing: normal;
  line-height: normal;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const FooterContainer = styled(Container)`
  padding: 24px;
  background-color: #f8f9fa;
`;

export default Homepage;
