import React from 'react'
import Search from './Search'
import  UsersList from './UsersList'

const Home = (props) => {
    return (
        <React.Fragment>
            <Search filterUsers={props.filterUsers}/>
            <UsersList grid={props.grid} users={props.users}/>
        </React.Fragment>
    )
}

export default Home