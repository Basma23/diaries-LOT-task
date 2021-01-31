import React, { useEffect, useState } from 'react'
import { apiPostList } from './lookup'
import { Post } from './detail'

export function PostsList(props) {
    const [postsInit, setPostsInit] = useState([])
    const [posts, setPosts] = useState([])
    const [nextUrl, setNextUrl] = useState(null)
    const [postsDidSet, setPostsDidSet] = useState(false)
    useEffect(() => {
        const final = [...props.newPosts].concat(postsInit)
        if (final.length !== posts.length) {
            setPosts(final)
        }
    }, [props.newPosts, posts, postsInit])
    useEffect(() => {
        if (postsDidSet === false) {
            const handlePostListLookup = (response, status) => {
                if (status === 200) {
                    setNextUrl(response.next)
                    setPostsInit(response.results)
                    setPostsDidSet(true)
                } else {
                    alert('There was an error')
                }
            }
            apiPostList(props.username, handlePostListLookup)
        }
    }, [postsInit, postsDidSet, setPostsDidSet, props.username])
    const handleLoadNext = (event) => {
        event.preventDefault()
        if(nextUrl !== null){
            const handleLoadNextResponse = (response, status) => {
                if (status === 200) {
                    setNextUrl(response.next)
                    const newPosts = [...posts].concat(response.results)
                    setPosts(newPosts)
                    setPostsInit(newPosts)
                } else {
                    alert('There was an error')
                }
            }
            apiPostList(props.username, handleLoadNextResponse, nextUrl)
        }
    }
    return <React.Fragment>{posts.map((item, index) => {
        return <Post post={item} className='my-5 py-5 border bg-white text-dark' key={`${index}-{item.id}`} />
    })}
    {nextUrl !== null && <button className='btn btn-outline-primary' onClick={handleLoadNext}>See more</button>}
    </React.Fragment> 
}