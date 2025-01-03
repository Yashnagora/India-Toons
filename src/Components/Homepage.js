import { useState, useEffect } from "react";
import "./Styles/Homepage.css";

function Admin(props) {
  const [allAnimes, setallAnimes] = useState([]);
  const [loading, setloading] = useState(true)

  const updateAnime = async () => {
    props.setprogress(0);
    const url = `https://webanimeapi.onrender.com/anime`;
    // const url = `http://localhost:5000/anime`;
    let anime = await fetch(url);
    setloading(true);
    props.setprogress(30);
    let passedanime = await anime.json();
    props.setprogress(70);
    setloading(false);
    setallAnimes(passedanime.allAnimes);
    props.setprogress(100);
  };

    useEffect(() => {
    updateAnime();
    // eslint-disable-next-line
  }, []);

  console.log(allAnimes)

  return (
    // <div>ssss</div>
    <div>
 <div className="movies" id="movies">
        <h2 className="heading">Opening This Week</h2>
        <div className="movies-container">
        {!loading && allAnimes.map((anime) => {
          return (
            <div className="box" key={anime.id}>
                <div className="box-img">
                    <img src={anime.image} alt=""/>
                </div>
              <p>{anime.id}</p>
                <h3 style={{fontSize: '14px'}}>{anime && anime.title.length > 21
                        ? anime.title.slice(0, 21) + '...'
                        : anime.title}</h3>
                {Object.keys(anime.episodes).map((serverType) => (
                  <span
                  style={{margin: '0px 5px 4px 0px'}}
                  key={serverType}
                  className={`server-btn`}
                  >
                      {serverType}
                      {/* <span>{anime.episodes.serverType.length} episodes</span> */}
                      <span style={{margin: '0px 0px 0px 5px'}}>{anime.episodes[serverType].length}</span>
                    </span>
                  ))}



{/* <div className="details">
                     <div className="left">
                      <p className="name">{anime && anime.title.length > 21
                        ? anime.title.slice(0, 21) + '...'
                        : anime.title}</p>
                      <div className="date_quality">
                        <p className="quality">HD</p>
                        <p className="date">{anime.seasonYear}</p>
                      </div>
                      <p className="category">{anime.genres[0]}/{anime.genres[1]}</p>
                      <div className="info">
                        <div className="rate">
                          <i className="fa-solid fa-star"></i>
                          <p>{(anime.averageScore / 10).toFixed(1)}</p>
                        </div>
                        <div className="time">
                          <i className="fa-regular fa-clock"></i>
                          <p>{anime.duration}min/epi</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img src={anime.coverImage.extraLarge} /> */}

                {/* </div> */}
            </div>
             );
            })}
        </div>
    </div>
    </div>
  )
}

export default Admin
