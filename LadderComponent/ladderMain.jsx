import React from 'react';
import ReactDOM from 'react-dom';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import Breadcrumb from 'react-breadcrumb';

import DataTables from 'material-ui-datatables';
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import Ladder from './ladder.jsx';
import PoolB from './PoolB.jsx';
import PoolC from './PoolC.jsx';
import PoolD from './PoolD.jsx';

class LadderMain extends React.Component {
  constructor(props){
    super(props);

  }
  render(){
    const style = {

  width: '95%',
  marginLeft: 35,
  marginRight:20,
  marginTop:30,
  padding:20,
  display: 'inline-block',
};
var styles = {
 default_tab:{
   backgroundColor:'#E8E8E8',
   color:'#E6008C',


 },

};
styles.tab=[]
styles.tab[0]=styles.default_tab;
styles.tab[1]=styles.default_tab;
styles.tab[2]=styles.default_tab;
styles.tab[3]=styles.default_tab;

    return(
      <div>
      <Paper style={style}>
        <div>
        <Breadcrumb
          path={'/Fixtures/Ladder'}
            separatorChar={' | '}
            />
        </div>
        <div>
          <h3>NETBALL WORLD CUP-PRELIMINARY ROUNDS</h3>
        </div>
        <div>
        <Tabs>
          <Tab style={styles.tab[0]} label="Pool A" >

              <Ladder />

          </Tab>
          <Tab style={styles.tab[1]} label="Pool B" >

              <PoolB />

            </Tab>
            <Tab style={styles.tab[2]} label="Pool C" >
                  <PoolC />
              </Tab>
              <Tab  style={styles.tab[3]} label="Pool D" >
                <PoolD />
              </Tab>
        </Tabs>
        </div>
      </Paper>

      </div>
    );
  }
}

export default LadderMain;
