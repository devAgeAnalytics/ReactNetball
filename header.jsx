  import React from 'react';
  import ReactDOM from 'react-dom';

  import FontIcon from 'material-ui/FontIcon';
  import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
  import Breadcrumb from 'react-breadcrumb';
  import Panel from 'muicss/lib/react/panel';
  import Row from 'muicss/lib/react/row';
  import Col from 'muicss/lib/react/col';
  import DataTables from 'material-ui-datatables';
  import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
  import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Ladder from './ladder.jsx';
import Ladder1 from './ladder.jsx';
import Slider from 'material-ui/Slider';
import Divider from 'muicss/lib/react/divider';
import {Tabs, Tab} from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
import LadderMain from './laddermain.jsx';

import {GridList, GridTile} from 'material-ui/GridList';
import Avatar from 'material-ui/Avatar';


class Header extends React.Component {
    constructor(props){
      super(props);

    }
    render(){
      const head = {

    margin: '0 60px 0 60px',
    backgroundColor:'black',

  };
  const head1 = {

  margin: '0 60px 0 60px',

  };

      return(
        <div>


    <div style={head}>
        <GridList cols={2} >
        <GridTile style={{color:'#fff'}}><div style={{margin:'34px'}}><img src="./images/logo.png" /></div></GridTile>

        <GridTile style={{color:'#fff'}}><h1 style={{textAlign:'right',paddingRight:'20px',}}>8 - 16 </h1>
            <h1 style={{textAlign:'right',paddingRight:'20px',}}>JULY 2017</h1>
            <div  style={{textAlign:'right',paddingRight:'20px',}}><img src="./images/Facebook-26@2x.png" style={{width:'25px'}} />&nbsp;&nbsp;
            <img src="./images/Instagram-48.png"  style={{width:'25px'}}/>&nbsp;&nbsp;
            <img src="./images/Twitter-48.png" style={{width:'25px'}}/>&nbsp;&nbsp;
            <img src="./images/YouTube-48.png" style={{width:'25px'}} />
            </div>
            </GridTile>

        </GridList>

        </div >

        <div style={head1}>
        <MenuBar />
        </div>

        </div>
      );
    }
  }


class MenuBar extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    var styles = {
     default_tab:{
       backgroundColor:'#12429B',


     },

    };
    styles.tab=[]
    styles.tab[0]=styles.default_tab;
    styles.tab[1]=styles.default_tab;
    styles.tab[2]=styles.default_tab;
    styles.tab[3]=styles.default_tab;
    styles.tab[4]=styles.default_tab;
    styles.tab[5]=styles.default_tab;
    styles.tab[6]=styles.default_tab;
    return(

        <div >

        <Tabs >
          <Tab style={styles.tab[0]}

            label="HOME"
          > </Tab>
          <Tab style={styles.tab[1]}

            label="NEWS"
          />
          <Tab style={styles.tab[2]}

            label="TEAMS"
          />
          <Tab style={styles.tab[3]}

            label="FIXTURES"
          />
          <Tab style={styles.tab[4]}

            label="RESULT"
          />
          <Tab style={styles.tab[5]}

            label="VIDEO"
          />
          <Tab style={styles.tab[6]}

            label="IMAGES"
          />
        </Tabs>
                      <Divider />
<TabBar />

      <LadderMain />
        </div>
    );
  }
}
 class New extends React.Component{
   render(){
     return(
       <div>jbhsghasghgasghasgasgh</div>
     );
   }
 }


class TabBar extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    var styles = {
     default_tab:{
       backgroundColor:'#12429B',

     },

    };
    styles.tab=[]
    styles.tab[0]=styles.default_tab;
    styles.tab[1]=styles.default_tab;
    styles.tab[2]=styles.default_tab;
    return(
        <div>
        <Tabs >
          <Tab style={styles.tab[0]}

            label="LIVE"
          />
          <Tab style={styles.tab[1]}

            label="UPCOMING"
          />
          <Tab style={styles.tab[2]}

            label="FINISHED"
          />
        </Tabs>
        </div>
    );
  }
}

export default Header;
