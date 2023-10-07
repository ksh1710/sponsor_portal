// import "./Home.css";
import { Container, Typography } from "@mui/material";
import { getDatabase, ref, set } from "firebase/database";
import { config } from "./firebaseConfig/config";

const db = getDatabase(config);

function Home() {
  const putData = () => {
    set(ref(db, "users/"), {
      id: "1",
      SponsorName: "Sponsor Name",
      industry: "Industry",
    });
  };

  
  return (
    <>
      <Container>
        <div className="Home_header">
        <Typography variant="h2">Home page</Typography>
        <button onClick={putData}>Put data</button>
        </div>
      </Container>
    </>
  );
}

export default Home;
