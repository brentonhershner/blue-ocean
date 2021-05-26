import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import api from '../../api/api.js';
import { UserContext } from '../../contexts/user-context.js';


const { friendAction } = api;

const Friend = ({ friend, status }) => {
    const userInfo = useContext(UserContext);
    const { username, userId: targetUserId } = friend;
    var buttons = () => {
        if (status === 'friends') {
            return (<Button onclick={friendAction(userInfo.userId, targetUserId, 'remove')}>Remove Friend</Button>);
        }
        if (status === 'pending') {
            return (<Button onclick={friendAction(userInfo.userId, targetUserId, 'cancelRequest')}>Cancel Request</Button>);
        }
        if (status === 'requested') {
            return (
                <>
                    <Button onclick={friendAction(userInfo.userId, targetUserId, 'approve')}>Approve</Button>
                    <Button onclick={friendAction(userInfo.userId, targetUserId, 'reject')}>Reject</Button>
                </>
            );
        }
        if (status === 'none') {
            return (<Button onclick={friendAction(userInfo.userId, targetUserId, 'request')}>Add Friend</Button>)
        }
    }



    return (
        <div> {username} {buttons()} </div>
    )
}

export default Friend;