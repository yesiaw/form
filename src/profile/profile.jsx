import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getUser } from '../redux/profile-reducer';
import { getUsers } from '../redux/users-reducer';
import './profile.css'

const Profile = (props) => {

    

    
    return (
        <div className='profile-container'>
            <div className='avatar'>
                <img src={props.profile.avatar} />
            </div>
            <div className='other-info'>
                <div className='email'>
                    {props.profile.email}
                </div>
                <div>
                    {props.profile.first_name}

                </div>
                <div>
                    {props.profile.last_name}
                </div>

                <button onClick = {props.backToUsers}>BACK</button>

            </div>


        </div>

    )
}

const ProfileContainer = (props) => {

    const history = useHistory();

    let backToUsers = () => {
        history.goBack();
        props.getUsers(props.page)
        
    }
    let userId = props.match.params.userId;

    useEffect(() => {
        props.getUser(userId);

    })


    return (
        <Profile profile={props.profile} backToUsers={backToUsers} />
    )
}



const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    page: state.usersPage.currentPage
})



export default compose(withRouter, connect(mapStateToProps, { getUser, getUsers },))(ProfileContainer)