import React, { useState } from 'react'
import { ActionBtn } from './buttons'
import {UserDisplay, UserPicture} from '../profiles'

export function Post(props) {
    const { post } = props
    const [actionPost, setActionPost] = useState(props.post ? props.post : null)
    const className = props.className ? props.className : 'col-10 mx-auto col-md-6'
    const path = window.location.pathname
    const match = path.match(/(?<postid>\d+)/)
    var urlPostId = match ? match.groups.postid : -1
    const isDetail = `${post.id}` === `${urlPostId}`
    const handleLink = (event) => {
        event.preventDefault()
        window.location.href = `/${post.id}`
    }
    const handlePerformAction = (newActionPost, status) => {
        if (status === 200) {
            setActionPost(newActionPost)
        }
    }
    return <div className={className}>
        <div className='d-flex'>
            <div className=''>
            <UserPicture user={post.user} />
            </div>
            <div className='col-11'>
                <UserDisplay user={post.usre} />
                <h5>{post.user.first_name + ' ' + post.user.last_name}</h5>
                <p>{post.content}</p>
                {actionPost && <div className='btn btn-group px-0'>
                    <ActionBtn post={actionPost} didPerformAction={handlePerformAction} action={{ type: 'like', display: 'Like' }} />
                    <ActionBtn post={actionPost} didPerformAction={handlePerformAction} action={{ type: 'unlike', display: 'Unlike' }} />
                    {isDetail === true ? null : <button className='btn btn-outline-primary' onClick={handleLink}>See More</button>}
                </div>
                }
            </div>
        </div>
    </div>
}