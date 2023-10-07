import "./Home.css";
import { Container, Typography } from "@mui/material";

function Home() {
  return (
    <>
      <Container>
        <div className="Home_header">
          <Typography variant="h5">
          Welcome to the Sponsor Portal! Please use the navigation bar to the
          left to navigate the portal.
        </Typography>
        </div>
      </Container>
    </>
  );
}

export default Home;
