import React, { useState } from 'react'
// import axios from 'axios';
import "./Styles/Admin.css";

function Admin() {
  const [id, setid] = useState('')
  const [title, settitle] = useState('')
  const [slug, setslug] = useState('')
  const [image, setimage] = useState('')
  const [episodeNum, setepisodeNum] = useState('')
  const [url, seturl] = useState('')

  // const handleChange = (e)=>{
  //   const {name, value} = e.target;
  //   setanimeData({...animeData, [name]: value})
  //   setArray([animeData])
  // }

  const handleChange = (e)=>{
    if (e.target.name === 'id') {
        setid(e.target.value)
    }
    else if (e.target.name === 'title') {
        settitle(e.target.value)
    }
    else if (e.target.name === 'slug') {
        setslug(e.target.value)
    }
    else if (e.target.name === 'image') {
        setimage(e.target.value)
    }
    else if (e.target.name === 'episodeNum') {
        setepisodeNum(e.target.value)
    }
    else if (e.target.name === 'url') {
        seturl(e.target.value)
    }

}

  // const handleSubmit = async(e)=>{
  //   e.preventDefault()
  //   try {
  //     const response = await axios.post('http://localhost:5000/anime/byAdmin', array);
  //     console.log(response.data)
  //   } catch (error) {
  //     console.error('Error submitting anime data:', error);
      
  //   }
  // }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const data = {id, title, slug, image, episodeNum, url}
    let res = await fetch(`https://animeapi-hfcx.onrender.com/anime/byAdmin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify([data]),
})

let response = await res.json()
console.log(response)
setid('')
settitle('')
setslug('')
setimage('')
setepisodeNum('')
seturl('')

}


  return (
    <div className='Add-anime'>
        {/* <span className='loader'></span> */}
      <form onSubmit={handleSubmit}>
      <h1>Anime Information Form</h1>
        <label htmlFor="id">ID:</label>
        <input type="id" value={id} onChange={handleChange} name="id" required/>

        <label htmlFor="image">image URL (Object):</label>
        <input type="url" value={image} onChange={handleChange} name="image" required/>

        <label htmlFor="title">Title:</label>
        <input type="text" value={title} onChange={handleChange} name="title" required/>

        <label htmlFor="episodeNum">episodeNum:</label>
        <input type="number" value={episodeNum} onChange={handleChange} name="episodeNum" required/>

        <label htmlFor="type">slug:</label>
        <input type="text" value={slug} onChange={handleChange} name="slug" required/>

        <label htmlFor="url">url:</label>
        <input type="text" value={url} onChange={handleChange} name="url" required/>

        <button type="submit" className='button'>Submit</button>
    </form>
    </div>
  )
}

export default Admin
