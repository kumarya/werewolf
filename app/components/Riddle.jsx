eimport React, {Component} from 'react';

import {GridList, GridTile} from 'material-ui/GridList';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import Chat from './Chat';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
//import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import AddPhoto from 'material-ui/svg-icons/image/add-a-photo';

export default class Riddle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id="riddle">
          {this.props.currentRiddle}
        </div>

        <div>

        </div>

        <div id="feedback">
          {this.props.userTried && this.props.userGuessedCorrectly ? "Correct!" : "Incorrect!"}
        </div>
      </div>
    )
  }
}


