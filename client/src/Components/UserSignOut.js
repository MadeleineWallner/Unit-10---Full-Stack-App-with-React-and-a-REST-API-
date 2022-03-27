import {React, useContext, useEffect} from 'react'
import { Redirect } from 'react-router-dom';
import { Context } from '../Context';

const UserSignOut = () => {
    const context = useContext(Context);
    useEffect(() =>
        context.actions.signOut());

    return (
        <Redirect to="/api/courses" />
    );
}

export default UserSignOut;