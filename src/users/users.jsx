import { Table } from 'antd';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink, useHistory, useLocation, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/authRedirect';
import { Pagination } from 'antd';
import { cnahgeCurrent, getUsers } from '../redux/users-reducer';



const UsersContainer = ({ users, ...props }) => {



    const columns = [
        {
            title: 'Name',
            dataIndex: 'first_name',
            key: 'name',
            render: (text) => <a>{text}</a>,

        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'address',
        },
        {
            title: 'UserID',
            dataIndex: 'id',
            key: 'id',

        }
    ];




    useEffect(() => {
        props.getUsers(props.current)
    }, []);

    let ChangeCurrent = (current) => {
        props.getUsers(current)
    }





    const history = useHistory();


    return (
        <Table columns={columns} pagination={{current: props.current, pageSize: 6, total: 12 }}
            onChange={(page, pageSize) => { ChangeCurrent(page.current) }} dataSource={users} onRow={(columns, index) => {
                return {
                    onClick: () => { history.push('/profile/' + columns.id) },
                };
            }} />
    )
}

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    current: state.usersPage.currentPage
})

export default compose(withRouter, connect(mapStateToProps, { getUsers, cnahgeCurrent }), withAuthRedirect)(UsersContainer)