import React, { useState } from 'react'
import axios from 'axios';
import "./Styles/Admin.css";

function Admin() {
  const [array,setArray] = useState([])
  const [animeData , setanimeData] = useState({
    mal_id: "",
    images: "",
    trailer: "",
    title_english: "",
    title_japanese: "",
    episodes: "",
    type: "",
    duration: "",
    rating: "",
    score: "",
    synopsis: "",
    aired: "",
    genres: "",
    cover_image: "",
    broadcast: "",
  })

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setanimeData({...animeData, [name]: value})
    setArray([animeData])
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/anime/byAdmin', array);
      console.log(response.data)
    } catch (error) {
      console.error('Error submitting anime data:', error);
      
    }
  }


  return (
    <div className='Add-anime'>
        <span className='loader'></span>
      <form onSubmit={handleSubmit}>
      <h1>Anime Information Form</h1>
        <label htmlFor="mal_id">MAL ID:</label>
        <input type="number" value={animeData.mal_id} onChange={handleChange} name="mal_id" required/>

        <label htmlFor="images">Images URL (Object):</label>
        <input type="url" value={animeData.images} onChange={handleChange} name="images" required/>

        <label htmlFor="trailer">Trailer URL (Object):</label>
        <input type="text" value={animeData.trailer} onChange={handleChange} name="trailer" required/>

        <label htmlFor="title_english">English Title:</label>
        <input type="text" value={animeData.title_english} onChange={handleChange} name="title_english" required/>

        <label htmlFor="episodes">Episodes:</label>
        <input type="number" value={animeData.episodes} onChange={handleChange} name="episodes" required/>

        <label htmlFor="type">Type:</label>
        <input type="text" value={animeData.type} onChange={handleChange} name="type" required/>

        <label htmlFor="duration">Duration:</label>
        <input type="text" value={animeData.duration} onChange={handleChange} name="duration" required/>

        <label htmlFor="rating">Rating:</label>
        <input type="text" value={animeData.rating} onChange={handleChange} name="rating" required/>

        <label htmlFor="score">Score:</label>
        <input type="number" value={animeData.score} onChange={handleChange} name="score" required/>

        <label htmlFor="synopsis">Synopsis:</label>
        <textarea value={animeData.synopsis} onChange={handleChange} name="synopsis" rows="4" required></textarea>

        <label htmlFor="aired">Aired (Object):</label>
        <input type="text" value={animeData.aired} onChange={handleChange} name="aired" required/>

        <label htmlFor="genres">Genres:</label>
        <input type="text" value={animeData.genres} onChange={handleChange} name="genres" required/>

        <label htmlFor="broadcast">Broadcast (Object):</label>
        <input type="text" value={animeData.broadcast} onChange={handleChange} name="broadcast" required/>

        <label htmlFor="cover_image">Cover Image URL:</label>
        <input type="text" value={animeData.cover_image} onChange={handleChange} name="cover_image" required/>

        <button type="submit" className='button'>Submit</button>
    </form>
    </div>
  )
}

export default Admin
