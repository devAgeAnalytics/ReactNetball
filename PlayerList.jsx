import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import ActionHome from 'material-ui/svg-icons/action/home';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import { Link } from 'react-router';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import MobileTearSheet from './MobileTearSheet.jsx';
import {GridList, GridTile} from 'material-ui/GridList';
const iconStyles = {
  color:"#607D8B",
  marginTop:5,
};
const mystyle={color:'#E6008C', fontWeight: "bold"};
const mystyle1={color:'#82B1FF'};
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {

  },
};
class PlayerList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      country: {
        name:'Australia',
        playerList:[
          {
            img:"images/ok-128.jpg",
            name:"nisha arora"
          },
          {
            img:"images/ok-128.jpg",
            name:"kamal arora"
          },
          {
            img:"images/ok-128.jpg",
            name:"kamal arora"
          },
          {
            img:"images/ok-128.jpg",
            name:"nisha arora"
          },
          {
            img:"images/ok-128.jpg",
            name:"kamal arora"
          },
          {
            img:"images/ok-128.jpg",
            name:"kamal arora"
          },
          {
            img:"images/ok-128.jpg",
            name:"nisha arora"
          },
          {
            img:"images/ok-128.jpg",
            name:"kamal arora"
          },
          {
            img:"images/ok-128.jpg",
            name:"kamal arora"
          },
          {
            img:"images/ok-128.jpg",
            name:"nisha arora"
          },
          {
            img:"images/ok-128.jpg",
            name:"kamal arora"
          },
          {
            img:"images/ok-128.jpg",
            name:"kamal arora"
          },
          {
            img:"images/ok-128.jpg",
            name:"nisha arora"
          },
          {
            img:"images/ok-128.jpg",
            name:"kamal arora"
          },
          {
            img:"images/ok-128.jpg",
            name:"kamal arora"
          },
          {
            img:"images/ok-128.jpg",
            name:"nisha arora"
          },
          {
            img:"images/ok-128.jpg",
            name:"kamal arora"
          },
          {
            img:"images/ok-128.jpg",
            name:"kamal arora"
          },

        ]
      }
    };
  }
  render () {

    return (
      <GridList
      cols={2}
      cellHeight={200}
      padding={1}
      style={styles.gridList}
      >
      <MobileTearSheet>
      <ListItem style={mystyle}
        primaryText=  {this.state.country.name}
        leftAvatar={<ActionHome style={iconStyles} />}
      />
      <List>
        {this.state.country.playerList.map((player,j)=><Rows key={j} playerList={player} />)}
      </List>
      </MobileTearSheet>
      <GridTile>
      dfghjk
      </GridTile>
      </GridList>
  );
}
}
class Rows extends React.Component{
  render(){
    return (
      <ListItem style={mystyle1}
        primaryText=  {this.props.playerList.name}
        leftAvatar={<Avatar src={this.props.playerList.img} />}
        rightIcon={<ActionInfo />}
      />
    );
  }
}

export default PlayerList;
