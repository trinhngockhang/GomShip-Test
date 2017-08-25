import React from 'react';

import {Style} from '../Style/style.js';



var Card = React.createClass({
    render(){
    var that = this;
    return(
      <div>
        <div >
          {
            this.props.header.map(function(header,index){
            return    <nav style={that.props.navItemStyle}>{header}</nav>
            })
          }
        </div>
        {
          this.props.imageTop.map(function(image,index){
          return    <img src = {image} style={that.props.imageStyle}/>
          })
        }

          <div style={this.props.cardBodyStyle}>
          {
            this.props.title.map(function(title,index){
            return    <h1 style={that.props.titleStyle}>{title}</h1>
            })
          }
          {
            this.props.subtitle.map(function(subtitle,index){
            return    <h3 style={that.props.subtitleStyle}>{subtitle}</h3>
            })
          }
          {
            this.props.description.map(function(description,index){
            return    <p style={that.props.descriptionStyle}>{description}</p>
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
        <div>
          {
            this.props.footer.map(function(footer,index){
            return    <nav style={that.props.footerStyle}>{footer}</nav>
            })
          }
        </div>
        {
          this.props.imageBot.map(function(image,index){
          return    <img src = {image} style={that.props.imageStyle}/>
          })
        }
    </div>
    )
  }
});

var Navigation = React.createClass({
  sub1(){
    this.state.subtitle=this.props.subtitle0;
    this.state.title=this.props.title0;
    this.state.description=this.props.description0;
    this.state.item1Style=Style.itemChoiceStyle;
    this.state.item2Style=Style.itemStyle;
    this.state.item3Style=Style.itemStyle;
    this.setState(this.state);
  },
  sub2(){
    this.state.subtitle=this.props.subtitle1;
    this.state.title=this.props.title1;
    this.state.description=this.props.description1;
    this.state.item1Style=Style.itemStyle;
    this.state.item2Style=Style.itemChoiceStyle;
    this.state.item3Style=Style.itemStyle;
    this.setState(this.state);
  },
  sub3(){
    this.state.subtitle=this.props.subtitle2;
    this.state.title=this.props.title2;
    this.state.description=this.props.description2;
    this.state.item1Style=Style.itemStyle;
    this.state.item2Style=Style.itemStyle;
    this.state.item3Style=Style.itemChoiceStyle;
    this.setState(this.state)
  },
  getInitialState(){
    return {header:[this.props.head0,this.props.head1,this.props.head2],
            subtitle:this.props.subtitle0,
            title:this.props.title0,
            description:this.props.description0,
            groupStyle:Style.navGroupStyle,
            item1Style:Style.itemChoiceStyle,
            item2Style:Style.itemStyle,
            item3Style:Style.itemStyle
    }
  },
  render(){
   return(
      <div>
      <div style={this.state.groupStyle}>
      <button onClick={this.sub1} style={this.state.item1Style}>  {this.state.header[0]}  </button>
      <button onClick={this.sub2} style={this.state.item2Style}>  {this.state.header[1]}  </button>
      <button onClick={this.sub3} style={this.state.item3Style}>  {this.state.header[2]}  </button>
      </div>
      <Card
        header={[]}
        navItemStyle={Style.navItemStyle}
        navGroupStyle={Style.navGroupStyle}
        cardBodyStyle={Style.cardBodyCenterStyle}
        subtitle={[this.state.subtitle]}
        subtitleStyle={Style.subtitleStyle}
        title={[this.state.title]}
        description={[this.state.description]}
        list={[]}
        link={[]}
        imageTop={[]}
        footer={[]}
        imageBot={[]}
      > </Card>
      </div>
    )
  }
})




export {Card,card,Navigation};
