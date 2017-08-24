import React from 'react';
import ReactDOM from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

const cardStyle={
    position:"relative",
    flexdirection: "column",
    minwidth: "0",
    wordwrap: "break-word",
    backgroundcolor: "#fff",
    backgroundclip: "border-box",
    border: "1px solid rgba(0,0,0,.125)",
    borderRadius: ".25rem",
    width:"318px"
};
const imageStyle={
    width: "100%",
    bordertopleftradius: "calc(.25rem - 1px)",
    bordertoprightradius: "calc(.25rem - 1px)"
};
const cardBodyStyle={
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

};
const titleStyle={
  fontFamily: "inherit",
  fontWeight: "500",
  lineHeight: "1.1",
  color:"inherit",
  paddingTop:"0px"
};
const subtitleStyle={
  color:"#868e96"
};
const btnStyle={
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
};
const linkStyle={
  position:"relative",
  textDecoration:"none",
  marginLeft: "1.25rem",
  color: "#007bff"
}
const listGroupStyle={

  paddingLeft: "0",
  marginBottom: "0",

};

const listItemStyle={
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
};

const remove={
  display:"none"
}

var Card = React.createClass({
  render(){
    var that = this;
    return(
      <div>
        {
          this.props.image.map(function(image,index){
          return    <img src = {image} style={that.props.imageStyle}/>
          })
        }

          <div style={this.props.cardBodyStyle}>
          {
            this.props.title.map(function(title,index){
            return    <h1 style={that.props.title}>{title}</h1>
            })
          }
          {
            this.props.subtitle.map(function(subtitle,index){
            return    <h3 style={subtitleStyle}>{subtitle}</h3>
            })
          }
          {
            this.props.description.map(function(description,index){
            return    <p>{description}</p>
            })
          }
          {
            this.props.link.map(function(note,index){
            return  <a  href={note.link} style={that.props.linkStyle}>{note.description}</a>
            })
          }
        </div>
          <div style={this.props.listGroupStyle}>
          {
            this.props.list.map(function(note,index){
            return <li style={that.props.itemStyle} key={index}> {note} </li>
            })
          }
        </div>
      </div>
    )
  }
});


storiesOf('Card',module)
  .add('Example',() =>
  <div style={cardStyle}>
    <Card image={["https://lh3.googleusercontent.com/iOi6YJxQwMenT5UQWGPWTrFMQFm68IC4uKlFtARveZzVD5lTZ7fC47_rnnF7Tk48DpY=w300"]}
          subtitle={["Subtitle"]}
          title={["Title"]}
          imageStyle={imageStyle}
          cardBodyStyle={cardBodyStyle}
          description={["this's a description"]}
          link={[
            {link:"#",
             description:"This's link"
            }
          ]}
          linkStyle={btnStyle}
          list={[]}
          > </Card>

  </div>
);

storiesOf('Card',module)
  .add('Card Title',() =>
  <div style={cardStyle}>
    <Card
          image={[]}
          cardBodyStyle={cardBodyStyle}
          subtitle={["Subtitle"]}
          title={["Title"]}
          description={["Some quick example text to build on the card title and make up the bulk of the card's content."]}
          link={[
            {link:"#",
             description:"link"
           },
           {
             link:'#',
             description:"another link"
           }
          ]}
          list={[]}
          linkStyle={linkStyle}
          > </Card>

  </div>
);

storiesOf('Card',module)
  .add('Image',() =>
  <div style={cardStyle}>
    <Card
          imageStyle={imageStyle}
          cardBodyStyle={cardBodyStyle}
          image={["https://lh3.googleusercontent.com/iOi6YJxQwMenT5UQWGPWTrFMQFm68IC4uKlFtARveZzVD5lTZ7fC47_rnnF7Tk48DpY=w300"]}
          description={["Some quick example text to build on the card title and make up the bulk of the card's content."]}
          subtitle={[]}
          title={[]}
          list={[]}
          link={[]}
          > </Card>
  </div>
);


  storiesOf('Card',module)
    .add('List Group',()=>
        <div style={cardStyle}>
            <Card
              image={[]}
              list={['Cras justo odio','Dapibus ac facilisis in','Vestibulum at eros']}
              listGroupStyle={listGroupStyle}
              itemStyle={listItemStyle}
              link={[]}
              subtitle={[]}
              title={[]}
              description={[]}
            > </Card>
          </div>

  );

  storiesOf('Card',module)
    .add('Kitchen sink',()=>
        <div style={cardStyle}>
            <Card
                imageStyle={imageStyle}
                cardBodyStyle={cardBodyStyle}
                image={["https://lh3.googleusercontent.com/iOi6YJxQwMenT5UQWGPWTrFMQFm68IC4uKlFtARveZzVD5lTZ7fC47_rnnF7Tk48DpY=w300"]}
                subtitle={["Subtitle"]}
                title={["Title"]}
                description={["Some quick example text to build on the card title and make up the bulk of the card's content."]}
                list={['Cras justo odio','Dapibus ac facilisis in','Vestibulum at eros']}
                listGroupStyle={listGroupStyle}
                link={[]}
                itemStyle={listItemStyle}
            > </Card>
          </div>

  );
