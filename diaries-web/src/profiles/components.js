import React from 'react'

export function UserLink(props){
    const {username} = props
    const handleUserLink = (event) =>{
        window.location.href = `/profiles/${username}`
    }
    return <span className='pointer' onClick={handleUserLink}>{props.children}</span>
}

export function UserDisplay(props){
    const {user, includeFullName, hideLink} = props
    const nameDisplay = includeFullName === true ? `${user.first_name} ${user.last_name} @${user.username}` : null
    return hideLink === true ? `${user.first_name} ${user.last_name} @${user.username}` : <UserLink>{nameDisplay}</UserLink>
}

export function UserPicture(props){
    const {user, hideLink} = props
    const userProfileSpan = <span className='mx-1 px-3 py-2 rounded-circle bg-dark text-white'>{user.first_name[0]}</span>
    return hideLink === true ? userProfileSpan : <UserLink username={user.username}>{userProfileSpan}</UserLink>
}
