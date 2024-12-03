import React, { useState } from 'react'
// import axios from 'axios';
import "./Styles/Admin.css";

function Admin() {
  const [id, setid] = useState('')
  const [title, settitle] = useState('')
  const [slug, setslug] = useState('')
  const [image, setimage] = useState('')
  const [episodeNumber, setepisodeNumber] = useState('')
  const [iframeSrc, setiframeSrc] = useState('')
  const [serverType, setserverType] = useState('')
  const [EpisodeTitle, setEpisodeTitle] = useState('')
  const [trailer, setTrailer] = useState('')

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
    else if (e.target.name === 'episodeNumber') {
        setepisodeNumber(e.target.value)
    }
    else if (e.target.name === 'iframeSrc') {
        setiframeSrc(e.target.value)
    }
    else if (e.target.name === 'serverType') {
        setserverType(e.target.value)
    }
    else if (e.target.name === 'EpisodeTitle') {
        setEpisodeTitle(e.target.value)
    }
    else if (e.target.name === 'Trailer') {
        setTrailer(e.target.value)
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

  const episodes = [
    {
      episodeNumber,
      EpisodeTitle,
      serverType,
      iframeSrc
    }
  ]

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const data = {id, title, slug, image, trailer,  episodes}
    let res = await fetch(`https://webanimeapi.onrender.com/anime/byAdmin`, {
    // let res = await fetch(`http://localhost:5000/anime/byAdmin`, {
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
setepisodeNumber('')
setiframeSrc('')
setserverType('')
setEpisodeTitle('')

}


  return (
    <div className='Add-anime'>
        {/* <span className='loader'></span> */}
      <form onSubmit={handleSubmit}>
      <h1>Anime Information Form</h1>
        <label htmlFor="id">ID:</label>
        <input type="id" value={id} onChange={handleChange} name="id" required/>

        <label htmlFor="image">image URL (Object):</label>
        <input type="url" value={image} onChange={handleChange} name="image"/>

        <label htmlFor="title">Title:</label>
        <input type="text" value={title} onChange={handleChange} name="title"/>

        <label htmlFor="episodeNum">episodeNum:</label>
        <input type="number" value={episodeNumber} onChange={handleChange} name="episodeNumber" required/>

        <label htmlFor="type">slug:</label>
        <input type="slug" value={slug} onChange={handleChange} name="slug"/>

        <label htmlFor="type">Trailer:</label>
        <input type="text" value={trailer} onChange={handleChange} name="Trailer"/>

        <label htmlFor="iframeSrc">iframeSrc:</label>
        <input type="text" value={iframeSrc} onChange={handleChange} name="iframeSrc" required/>

        <label htmlFor="serverType">serverType:</label>
        <input type="text" value={serverType} onChange={handleChange} name="serverType" required/>

        <label htmlFor="EpisodeTitle">EpisodeTitle:</label>
        <input type="text" value={EpisodeTitle} onChange={handleChange} name="EpisodeTitle" required/>

        <button type="submit" className='button'>Submit</button>
    </form>
    </div>
  )
}

export default Admin
