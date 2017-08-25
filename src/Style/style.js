import {Card,card} from '../components/Card.js';

const Style={
  lightBackground:{
      backgroundColor:"#f8f9fa"
  },
  lightBorder:{
      border:"#f8f9fa",
      color:"#f8f9fa"
  },
  primaryBorder:{
      borderColor:"#007bff",
      color:"#007bff"
  },
  secondaryBorder:{
      borderColor:"#868e96",
      color:"#868e96"
  },
  successBorder:{
      borderColor:"#28a745",
      color:"#28a745"
  },
  dangerBorder:{
      borderColor:"#dc3545",
      color:"#dc3545"
  },
  primaryBackground:{
    backgroundColor:"#007bff"
  },
  secondaryBackground:{
    backgroundColor:"#868e96"
  },
  successBackground:{
    backgroundColor:"#28a745"
  },
  dangerBackground:{
    backgroundColor:"#dc3545"
  },
  darkBackground:{
    backgroundColor:"#343a40"
  },
  cardStyle:{
      position:"relative",
      flexdirection: "column",
      minwidth: "0",
      wordwrap: "break-word",
      backgroundcolor: "#fff",
      backgroundclip: "border-box",
      border: "1px solid rgba(0,0,0,.125)",
      borderRadius: ".25rem",
      width:"318px"
  },
   headerStyle:{
    padding: ".75rem 1.25rem",
    marginBottom: "0",
    backgroundColor: "rgba(0,0,0,.03)",
    borderBottom: "1px solid rgba(0,0,0,.125)",
    textAlign:"center",
    color:'black'
  },
  headerSuccessStyle:{
   padding: ".75rem 1.25rem",
   marginBottom: "0",
   backgroundColor: "rgba(0,0,0,.03)",
   borderBottom: "1px solid #28a745",
   textAlign:"center",
   color:'black'
 },
   imageStyle:{
      width: "100%",
      bordertopleftradius: "calc(.25rem - 1px)",
      bordertoprightradius: "calc(.25rem - 1px)"
  },
   cardBodyStyle:{
    margin: "0",
    flex: "1 1 auto",
    padding: "2.25rem",
    fontsize: "1rem",
    fontWeight: "400",
    lineHeight: "1.0",
    backgroundcolor: "#fff",
    paddingTop:"0px",
    paddingLeft:"-1px"
  },
   cardBodyOverStyle:{
    position:"absolute",
    margin: "0",
    flex: "1 1 auto",
    padding: "2.25rem",
    fontsize: "1rem",
    fontWeight: "400",
    lineHeight: "1.0",
    color: "#212529",
    backgroundcolor: "#fff",
    paddingTop:"0px",
    paddingLeft:"-1px"
  },
   cardBodyCenterStyle:{
    margin: "0",
    flex: "1 1 auto",
    padding: "2.25rem",
    fontsize: "1rem",
    fontWeight: "400",
    lineHeight: "1.0",
    backgroundcolor: "#fff",
    paddingTop:"0px",
    paddingLeft:"-1px",
    textAlign:"center"
  },
   cardBodyRightStyle:{
    margin: "0",
    flex: "1 1 auto",
    padding: "2.25rem",
    fontsize: "1rem",
    fontWeight: "400",
    lineHeight: "1.0",
    color: "#212529",
    backgroundcolor: "#fff",
    paddingTop:"0px",
    paddingLeft:"-1px",
    textAlign:"right"
  },
   titleStyle:{
    fontFamily: "inherit",
    fontWeight: "100",
    lineHeight: "1.1",
    paddingTop:"0px"
  },
   navGroupStyle:{
    position: "relative",
    display: "flex",
    flexdirection: "column",
    padding: ".75rem 1.25rem",
    marginBottom: "0",
    backgroundColor: "rgba(0,0,0,.03)",
    borderBottom: "1px solid rgba(0,0,0,.125)"
  },
   itemChoiceStyle:{
    position:"relative",
    color: "#495057",
    backgroundColor: "#fff",
    padding:"8px"
  },
  itemStyle:{
   color: "#495057",
   padding:"8px"
 },
   subtitleStyle:{
    color:"#868e96"
  },

   btnStyle:{
    textDecoration:"none",
    display: "inline-block",
    fontweight: "400",
    textalign: "center",
    whitespace: "nowrap",
    verticalAlign: "middle",
    userselect: "none",
    border: "1px solid transparent",
    padding: ".5rem .75rem",
    fontsize: "1rem",
    lineheight: "1.25",
    borderradius: ".25rem",
    transition: "all .15s ease-in-out",
    color: "#fff",
    backgroundColor: "#007bff",
    borderColor: "#007bff"
  },
   linkStyle:{
    position:"static",
    textDecoration:"none",
    paddingLeft: "0.75rem",
    color: "#007bff"
  },
   listGroupStyle:{

    paddingLeft: "0",
    marginBottom: "0",

  },

   listItemStyle:{
    position: "relative",
    display: "block",
    padding: ".75rem 1.25rem",
    marginBottom: "-1px",
    marginTop: "-1px",
    backgroundColor: "#fff",
    border: "1px solid rgba(0,0,0,.125)",
    borderRight: "0",
    borderLeft: "0",
    borderRadius: "0"
  },
   footerStyle:{
    padding: ".75rem 1.25rem",
    backgroundColor: "rgba(0,0,0,.03)",
    borderTop: "1px solid rgba(0,0,0,.125)",
    textAlign:"center",
    color:"black"
  },

  footerSuccessStyle:{
   padding: ".75rem 1.25rem",
   backgroundColor: "rgba(0,0,0,.03)",
   borderTop: "1px solid #28a745",
   textAlign:"center",
   color:"black"
 },
  layout:{
    display: "-ms-flexbox",
    display: "flex"
  },
  layoutDesks:{
    marginRight: "15px",
    marginLeft: "15px"
  },
   remove:{
    display:"none"
  }
}


export {Style};
