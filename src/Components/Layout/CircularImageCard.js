import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

class CircularImageCard extends React.Component {
  render() {
    return (
      <Grid style={{ maxWidth: "100%"}} item xs={12} sm={12} md={12} lg={4} xl={4} >
        <Card style={{ boxShadow:"none", width:"fit-content", backgroundColor: "transparent"}}>
            <CardContent>
              <img id="featureImg" alt={'icon for services'} src={require("../../Assets/imgs/" + this.props.imgThumb)}></img>
              <Typography gutterBottom variant="h2" component="h2" color="textPrimary" style={{ textAlign: "center", paddingTop: "20px", paddingBottom: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span className="spanLink">{this.props.title}</span> <span className="spanLink"><a href={"https://www.linkedin.com/in/" + (this.props.link)}><img className="linkedinImg" src={require("../../Assets/imgs/linkedin.png")} alt={'linkedin icon'}></img></a></span>
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">{this.props.detail}</Typography>
              <br></br>
              <Typography variant="body1" color="textPrimary" component="p" style={{fontStyle: "italic"}}>{this.props.info}</Typography>
            </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default CircularImageCard;
