import React from 'react';
import ReactDOM from 'react-dom';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


class PoolC extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      pool: {

        teamList:[
          {
              id: '1',
              teams: 'SCOTLAND',
              played: '3',
              won: '3',
              draw: '0',
              lose: '0',
              gf:'2',
              ga: '199',
              gs: '113',
              gd: '0',
              percent: '176.1',
              points: '6',
            },
            {
                id: '2',
                teams: 'SAMOA',
                played: '3',
                won: '3',
                draw: '0',
                lose: '0',
                gf:'2',
                ga: '199',
                gs: '113',
                gd: '0',
                percent: '176.1',
                points: '6',
              },{
                  id: '3',
                  teams: 'JAMAICA',
                  played: '3',
                  won: '3',
                  draw: '0',
                  lose: '0',
                  gf:'2',
                  ga: '199',
                  gs: '113',
                  gd: '0',
                  percent: '176.1',
                  points: '6',
                },{
                    id: '4',
                    teams: 'SRI LANKA',
                    played: '3',
                    won: '3',
                    draw: '0',
                    lose: '0',
                    gf:'2',
                    ga: '199',
                    gs: '113',
                    gd: '0',
                    percent: '176.1',
                    points: '6',
                  },
        ]
      }
    };
  }
  render(){
    return(
      <div>
      <Table>
  <TableHeader displaySelectAll={false}>
    <TableRow>
      <TableHeaderColumn >POS</TableHeaderColumn>
      <TableHeaderColumn  style={{width:'200px'}}>TEAMS</TableHeaderColumn>
      <TableHeaderColumn>PL</TableHeaderColumn>
      <TableHeaderColumn>W</TableHeaderColumn>
      <TableHeaderColumn>D</TableHeaderColumn>
      <TableHeaderColumn>L</TableHeaderColumn>
      <TableHeaderColumn>GF</TableHeaderColumn>
      <TableHeaderColumn>GA</TableHeaderColumn>
      <TableHeaderColumn>GD</TableHeaderColumn>
      <TableHeaderColumn>%</TableHeaderColumn>
      <TableHeaderColumn>PTS</TableHeaderColumn>
    </TableRow>
  </TableHeader>
  <TableBody>
  {this.state.pool.teamList.map((team,j)=><Rows key={j} teamList={team} />)}


  </TableBody>
</Table>
      </div>
    );
  }
}

class Rows extends React.Component{
  render(){
    return (


      <TableRow>
      <TableRowColumn> </TableRowColumn>
        <TableRowColumn> {this.props.teamList.id}</TableRowColumn>
        <TableRowColumn style={{width:'200px'}}> {this.props.teamList.teams}</TableRowColumn>
          <TableRowColumn> {this.props.teamList.played}</TableRowColumn>
            <TableRowColumn>{this.props.teamList.won}</TableRowColumn>
          <TableRowColumn>  {this.props.teamList.draw}</TableRowColumn>
          <TableRowColumn> {this.props.teamList.lose}</TableRowColumn>
            <TableRowColumn>{this.props.teamList.gf}</TableRowColumn>
              <TableRowColumn>{this.props.teamList.ga}</TableRowColumn>

                  <TableRowColumn>{this.props.teamList.gd}</TableRowColumn>
                    <TableRowColumn>{this.props.teamList.percent}</TableRowColumn>
                      <TableRowColumn> {this.props.teamList.points}</TableRowColumn>



      </TableRow>



    );
  }
}
export default PoolC;
