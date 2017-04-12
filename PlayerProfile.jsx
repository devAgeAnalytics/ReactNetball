import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import {indigo500} from 'material-ui/styles/colors';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';


class PlayerProfile extends React.Component{
  constructor(props){
    super(props);
    this.state={
      player:{
        image:"images/player1.jpg",
        name:"Rose Thomas",
        country:"Australia",
        data:[
          {

            mydata:
              {
              lefticon:"images/phone-icon.png",
              work:"(650) 555-1234",
              profession: "Work"
              },
          },

          {
            mydata:
              {
              lefticon:"images/email.jpg",
              work:"rosethomas@ynetballw.com",
              profession: "Work"
              },
          },

          {
            mydata:
              {
              lefticon:"images/addressicon.png",
              work:"2000 SW 1st Ave San Francisco CA 94112",
              profession: "Work"
              },
          },

        ]
      },
    };
  }
  render(){
    return(
      <Card>
      <Avatar src={this.state.player.image} size={270}/>
      <CardTitle title={this.state.player.name} subtitle={this.state.player.country} />
      <List>
       {this.state.player.data.map((player,j)=><Rows key={j} data={player} />)}
     </List>
     </Card>
    );
  }
}
class Rows extends React.Component{
  render(){
    return (

      <ListItem
        leftIcon={<img src={this.props.data.mydata.lefticon} />}
        rightIcon={<CommunicationChatBubble />}
        primaryText=  {this.props.data.mydata.work}
        secondaryText= {this.props.data.mydata.profession}
      />

    );
  }
}
export default PlayerProfile;
