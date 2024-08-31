// import Sidebar from "./Sidebar";
// import { useState, useEffect } from "react";
import "./Styles/style.css";
import "./Styles/Animetop.css";
// import { Link } from "react-router-dom";

const Animetop = (props) => {
  // const [data, setdata] = useState([]);
  // const [page, setpage] = useState(1);
  // const [loading, setloading] = useState(true)

  // const updateAnime = async (pageNumber) => {
  //   props.setprogress(0);
  //   const url = `https://animeapi-hfcx.onrender.com/anime?page=${pageNumber}`;
  //   let anime = await fetch(url);
  //   setloading(true);
  //   props.setprogress(30);
  //   let passedanime = await anime.json();
  //   props.setprogress(70);
  //   setloading(false);
  //   setdata(passedanime.data.reverse());
  //   props.setprogress(100);
  // };

  // useEffect(() => {
  //   updateAnime(page);
  //   // eslint-disable-next-line
  // }, [page]);

  // const handlePrevClick = async () => {
  //   setpage((prevPage) => {
  //     const newPage = prevPage - 1;
  //     updateAnime(newPage);
  //     return newPage;
  //   });
  // };

  // const handleNextClick = async () => {
  //   setpage((prevPage) => {
  //     const newPage = prevPage + 1;
  //     updateAnime(newPage);
  //     return newPage;
  //   });
  // };

  return (
    <>
      {/* <div className="container">
        <div className="main-container">
          <div className="anime-list">
            <div className="title">
              <h4>Cartoons & Animes </h4>
              <hr />
            </div>
            {loading && <div className='loading' style={{marginTop: "2rem"}}><span className='loader'></span></div>}
            <div className="main-contant">
              {!loading && data.map((anime) => {
                return (
                  <div className="anime-card"  key={anime.mal_id}>
                    <div className="anime-box" style={{background: `url(${anime.cover_image})no-repeat`, backgroundSize:'cover'}}></div>
              <div className="contant">
                  <h3>
                    {!anime.title_english
                      ? "Title is not loaded"
                      : anime.title_english.length > 20
                        ? anime.title_english.slice(0, 20) + "..."
                        : anime.title_english
                    }
                  </h3>
                  <p>{anime.synopsis.slice(0, 180)}...<br /></p>
                <Link to={`/anime/${anime.mal_id}`} className='btn'>Watch Now</Link>
                </div>
                  </div>
                );
              })}
            </div>
          </div>
          <Sidebar />
        </div>
        <div className="next-button">
          <button type="button" className="btn" onClick={handlePrevClick}>
            {" "}
            &larr; Previous
          </button>
          <button type="button" className="btn" onClick={handleNextClick}>
            Next &rarr;
          </button>
        </div>
      </div> */}
      <h1>this is not working</h1>
    </>
  );
};

export default Animetop;
