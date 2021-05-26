import React, { useContext }from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import { UserContext } from '../contexts/user-context';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 400,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
}));

function renderRow(props) {
  const { index, style}  = props;
  console.log(style, "this is style ")
  return (
    <ListItem button style={style} key={index}>
      {/* {props ? props.map((friends) => ( <ListItemText  primary={friends.username} key={ friends.userId } /> )) : null} */}
       <ListItemText primary={`Item ${props}`} />
    </ListItem>
  );
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

function FriendsList({friends, pending, requested, index, style }) {
  const classes = useStyles();

  // const { userName, friends } = useContext(UserContext)
  console.log(friends)
  return (
    <div className={classes.root}>
      {friends.map((item, i) => (
        <ListItem  >
        <ListItemText primary={`${item.username}`} key={i}></ListItemText>
        </ListItem>
        ))}

    </div>
  );
}

export default FriendsList;