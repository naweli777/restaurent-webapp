import { Typography } from "@material-ui/core";
import Header from "../Header/Header"
import "./Mainpage.css";
function Mainpage() {
  return (
    <div className="Heading">
      <Header/>
    <img
        className="main_Img"
        src={require("../assets/coverr.jpg")}
        alt="cover"
      />
      <div className ="Title">
        
        <Typography className="Title" variant="h1" component="h2">
          Namaste Family Restaurant  and Bar
        </Typography>
        </div>
        
      </div>
  );
}

export default Mainpage;
