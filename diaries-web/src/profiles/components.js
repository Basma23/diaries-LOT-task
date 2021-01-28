import React from 'react'

export function UserDisplay(props){
    const {user, includeFullName} = props
    const nameDisplay = includeFullName === true ? `${user.first_name} ${user.last_name}` : null
    return <UserLink>{nameDisplay}</UserLink>
}

export function UserLink(props){
    const {username} = props
    const handleUserLink = (event) =>{
        window.location.href = `/pofiles/${username}`
    }
    return <span className='pointer' onClick={handleUserLink}>{props.children}</span>
}

export function UserPicture(props){
    const {user} = props
    return <UserLink username={user.first_name}><span className='mx-1 px-3 py-2 rounded-circle bg-dark text-white'>{user.first_name[0]}</span></UserLink>
}
