import React from 'react'
import { apiPostCreate } from './lookup'

export function PostCreate(props){
    const textAreaRef = React.createRef()
    const {didPost} = props
    const handelBackendUpdate = (response, status) => {
        if (status === 201) {
            didPost(response)
        } else {
            console.log(response);
            alert('An error occured, please try again later')
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const newValue = textAreaRef.current.value
        apiPostCreate(newValue, handelBackendUpdate)
        textAreaRef.current.value = ''
    }
    return <div className={props.className}><div className='col-12 mb-3'>
            <form onSubmit={handleSubmit}>
                <textarea className='form-control' name='post' required={true} ref={textAreaRef}></textarea>
                <button type='submit' className='btn btn-primary my-3'>Post</button>
            </form>
        </div>
    </div>
}