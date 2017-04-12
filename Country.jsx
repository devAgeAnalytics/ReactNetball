import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    marginLeft:'20%',
    marginRight:'20%',
    marginTop:'20'
  },
};

class Country extends React.Component {
  constructor(props) {
    super(props);

this.state = {
      data:[
        {
          img: 'images/australia-flag-xs.png',
          CounryName: 'AUSTRALIA'
        },
        {
          img: 'images/barbados-flag-small.png',
          CounryName: 'BARBADOS'
        },
        {
          img: 'images/200px-Flag_of_Wales_2.png',
          CounryName: 'WALES'
        },
        {
          img: 'images/fijian-flag-small.png',
          CounryName: 'FIJI'
        },
        {
          img: 'images/jamaican-flag-small.png',
          CounryName: 'JAMAICA'
        },
        {
          img: 'images/malawian-flag-small.png',
          CounryName: 'MALAWI'
        },
        {
          img: 'images/new-zealander-flag-small.png',
          CounryName: 'NEW ZEALAND'
        },
        {
          img: 'images/scotland.png',
          CounryName: 'SCOTLAND'
        },
        {
          img: 'images/singaporean-flag-small.png',
          CounryName: 'SINGAPUR'
        },
        {
          img: 'images/south-africa-flag-xs.png',
          CounryName: 'SOUTH AFRICA'
        },
        {
          img: 'images/sri-lanka-flag-xs.png',
          CounryName: 'SRI LANKA'
        },
        {
          img: 'images/trinidadian-flag-small.png',
          CounryName: 'TRINIDAD AND TOBAGO'
        },
        {
          img: 'images/zambian-flag-small.png',
          CounryName: 'ZAMBIA'
        },
        {
          img: 'images/samoan-flag-small.png',
          CounryName: 'SAMOA'
        },
        {
          img: 'images/ugandan-flag-small.png',
          CounryName: 'UGANDA'
        },
        {
          img: 'images/flag-england-S.jpg',
          CounryName: 'ENGLAND'
        },
      ]
    };
 }
render(){
    return(
      <div style={styles.root}>
          <GridList cols={4}
            padding={20}
            style={styles.gridList}
          >
            {this.state.data.map((abc,j)=><GridCountryExample key={j} data={abc} />)}
          </GridList>
      </div>
    );
  }
}
const style = {
  height: '90%',
  width: '100%',
  display: 'inline-block',

};
class GridCountryExample extends React.Component{
    render(){
      return(
        <Paper style={style}>
        <GridTile
        key={this.props.data.img}
        title={this.props.data.CounryName}
        subtitle={"Players"}
      >
        <img src={this.props.data.img} />
      </GridTile>
      </Paper>
);
}
}
export default Country;
