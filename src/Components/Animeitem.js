// import React, { useEffect, useRef, useState } from "react";
// import "./Styles/style.css";
// import "./Styles/Animeitem.css";
// import { useParams } from "react-router-dom";

const Animeitem = (props) => {
  // const { id } = useParams();
  // const activeRef = useRef(null);
  // const [anime, setAnime] = useState({
  //   title_english: "",
  //   type: "",
  //   synopsis: "",
  //   trailer: {},
  //   episodes: "",
  //   aired: { prop: { from: {} } },
  //   duration: "",
  //   rating: "",
  //   genres: [],
  //   images: { jpg: { image_url: "" } },
  //   episode: { episode_1: "" },
  //   movie: "",
  // });

  // const {
  //   title_english,
  //   synopsis,
  //   trailer,
  //   episodes,
  //   aired,
  //   duration,
  //   rating,
  //   images,
  //   episode,
  //   type,
  //   movie,
  //   cover_image,
  //   genres,
  //   episode_name,
  //   studios,
  //   score,
  // } = anime;
  // const [title, setTitle] = useState("")
  // const [category, setCategory] = useState("Episode")
  // const [Selectedvideo, setSelectedVideo] = useState(episode);
  // const [video, setvideo] = useState(episode?.episode_1);
  // const [activeIndex, setActiveIndex] = useState(null);
  // const [loading, setloading] = useState(true)
  // const [showFullSynopsis, setShowFullSynopsis] = useState(false);

  // const getAnime = async (animeId) => {
  //   try {
  //     props.setprogress(0);
  //     const response = await fetch(`https://animeapi-hfcx.onrender.com/anime/${animeId}`);
  //     setloading(true);
  //     const animedata = await response.json();
  //     setAnime(animedata);
  //     setloading(false);
  //   } catch (error) {
  //     console.error("Error fetching anime:", error);
  //   }
  // };

  // useEffect(() => {
  //   const Type = () => {
  //     if (type === "Movie") {
  //       setCategory("Movie");
  //       setSelectedVideo(movie);
  //       setvideo(movie?.movie);
  //       if (!movie) {
  //         setTitle("Movie not available");
  //       }
  //     } else {
  //       setSelectedVideo(episode);
  //       setvideo(episode?.episode_1);
  //       if (!episode) {
  //         setTitle("Episode not available");
  //       }
  //     }
  //   };
  //   getAnime(id);
  //   Type();

  //   // Check if episode_1 exists and set it as default
  //   if (Object.keys(video).length > 0) {
  //     // setloading(true)
  //     setActiveIndex(0);
  //     document.getElementById("iframe").src = video;
  //     // setloading(false)
  //   }
  //   // eslint-disable-next-line
  // }, [id, type, video]);


  // const handleEpisodeClick = (index, episodeUrl) => {
  //   setActiveIndex(index);

  //   document.getElementById("iframe").src = episodeUrl;
  // };

  // const handleReadMore = () => {
  //   setShowFullSynopsis((prev) => !prev);
  // };

  return (
    <div className="container">
      {/* <div className="anime-infoermation">
        <div className="ditals" style={{ color: "#fff" }}>

          <div className="anime-header">

            <div className="info-header">
              <h1>{title_english}</h1>
              <div className="score">
                <i className="fa-solid fa-star"></i><p>{score}</p>
              </div>
            </div>

            <div className="images">
              <div className="info">
                <div className="side-info">
                  <div className="image">
                    <img src={images?.jpg.large_image_url} alt="" />
                  </div>
                  <div className="side-dital mobile-p">
                    <div className="genres-column">
                      <div className="genres">
                        {genres?.map((genre) => {
                          return (
                            <div key={genre.mal_id} className="genres-name">
                              <li>{genre.name}</li>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="synopsis mobile-p">
                      <span>{synopsis.slice(0, 300)}...</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="trailer-con">
                {trailer?.embed_url ? (
                  <iframe
                    src={trailer?.embed_url}
                    title="Inline Frame Example"
                    width="1300"
                    height="410"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <h3>Trailer not available</h3>
                )}
                <div className="side-dital normal-p">
                  <div className="genres-column">
                    <div className="genres">
                      {genres?.map((genre) => {
                        return (
                          <div key={genre.mal_id} className="genres-name">
                            <li>{genre.name}</li>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="list-info">
            <h2>Series Info</h2>
            <p>Name : {title_english}</p>
            <p>type : {type}</p>
            <p>Episodes : {episodes}</p>
            <p>Release Date : {aired?.string}</p>
            <p>RunTime : {duration}</p>
            <p>rating : {rating}</p>
            <p style={{ color: "#E50914", lineHeight: "2rem" }}>
              synopsis :{" "}
              <span style={{ color: "#fff", fontSize: "1.3rem" }}>
                {showFullSynopsis ? synopsis : synopsis.slice(0 , 330)}
              </span>
              <button onClick={handleReadMore}>
                {showFullSynopsis ? "read less..." : "read more..."}
              </button>
            </p>
          </div>
        </div>
        <div className="episode-con">
          <div className="episode-ifram">
            {loading && <div style={{ height: "100%" }} className='loading'><span className='loader'></span></div>}
            {!loading && !video
              ? <h1 style={{ color: "white" }}>{title}</h1>
              : <iframe
                id="iframe"
                title="Inline Frame Example"
                width="600"
                height="340"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            }

          </div>
          <div className="episode-list">
            <ul>
              {episode_name &&
                episode_name.length > 0 &&
                Object.keys(Selectedvideo).map((key, index) => (
                  <li id="list" ref={activeRef}
                    key={Selectedvideo[key]}
                    onClick={() => handleEpisodeClick(index, Selectedvideo[key])}
                    className={index === activeIndex ? "active" : ""}
                  >
                    <div className="episode-image">
                      <img src={cover_image} alt="" />
                      <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100">
                        <rect fill="#fff" width="3" height="100" transform="translate(0) rotate(180 3 50)">
                          <animate attributeName="height" attributeType="XML" dur="1s" values="30; 100; 30" repeatCount="indefinite" />
                        </rect>
                        <rect x="17" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 20 50)">
                          <animate attributeName="height" attributeType="XML" dur="1s" values="30; 100; 30" repeatCount="indefinite" begin="0.1s" />
                        </rect>
                        <rect x="40" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 40 50)">
                          <animate attributeName="height" attributeType="XML" dur="1s" values="30; 100; 30" repeatCount="indefinite" begin="0.3s" />
                        </rect>
                        <rect x="60" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 58 50)">
                          <animate attributeName="height" attributeType="XML" dur="1s" values="30; 100; 30" repeatCount="indefinite" begin="0.5s" />
                        </rect>
                        <rect x="80" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 76 50)">
                          <animate attributeName="height" attributeType="XML" dur="1s" values="30; 100; 30" repeatCount="indefinite" begin="0.1s" />
                        </rect>
                      </svg>
                    </div>
                    <div
                      style={{ margin: "2px 0px 0px 8px", lineHeight: "19px" }}
                    >
                      <h3>
                        {category + " "}
                        {key.split("_")[1]}
                        <br />
                        {type === "Movie" ? "" + title_english : null}
                        {type === "TV"
                          ? episode_name.map((episd) => {
                            if (episd.mal_id === parseInt(key.split("_")[1])) {
                              return <p key={episd.mal_id}>{episd.title}</p>;
                            }
                            return null;
                          })
                          : null}
                      </h3>
                      <p>{duration}</p>
                      <p>
                        {studios.map((studio) => (
                          <span key={studio.mal_id}>{studio.name} </span>
                        ))}
                      </p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div> */}
      <h1>this is not working</h1>
    </div>
  );
};

export default Animeitem;
