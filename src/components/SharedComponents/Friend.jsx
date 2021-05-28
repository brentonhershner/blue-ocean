import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import api from '../../api/api.js';
import { UserContext } from '../../contexts/user-context.js';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const { friendAction } = api;

const Friend = ({ friend, status }) => {
    const userInfo = useContext(UserContext);
    const { username, userId: targetUserId } = friend;
    var buttons = () => {
        if (status === 'friends') {
            return (<Button onClick={() => friendAction(userInfo.userId, targetUserId, 'remove')}>Remove Friend</Button>);
        }
        if (status === 'pending') {
            return (<Button onClick={() => friendAction(userInfo.userId, targetUserId, 'cancelRequest')}>Cancel Request</Button>);
        }
        if (status === 'requested') {
            return (
                <>
                    <Button onClick={() => friendAction(userInfo.userId, targetUserId, 'approve')}>Approve</Button>
                    <Button onClick={() => friendAction(userInfo.userId, targetUserId, 'reject')}>Reject</Button>
                </>
            );
        }
        if (status === 'none') {
            return (<Button onClick={() => friendAction(userInfo.userId, targetUserId, 'request')}>Add Friend</Button>)
        }
    }
    function statcheck() {
        if (status === 'friends') {
            return 'Friend';
        }
        if (status === 'pending') {
            return 'Pending';
        }
        if (status === 'requested') {
            return 'Requested';
        }
    }


    return (
                <ListItem >
                <ListItemText  primary={username} secondary={statcheck()} />
                {buttons()}
        </ListItem>
    )
}

export default Friend;