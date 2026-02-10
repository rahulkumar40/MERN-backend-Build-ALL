import React from 'react'
import {useForm} from 'react-hook-form'

function Notes() {
    const {handleSubmit,register}=useForm();
    function doWork(data){
        console.log(data)
    }
    function catchData(e){
        console.log(e.data.title);
    }
  return (
    <div>
        <h2>Create Your Blog</h2>
        <div>
            <form action="" onSubmit={handleSubmit(doWork)} >
                <div>

                    <div>Title</div>
                    <input className='title_input' type="text" title='title' {...register('title')}/>
                    <div>Content</div>
                    <input className='content_input' type="text" title='content' {...register('content')}/>
                </div>
                <button>create</button>
            </form>
        </div>
    </div>
  )
}

export default Notes