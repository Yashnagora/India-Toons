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
                <h3>{anime.title}</h3>
                <span>{anime.episodes.length} episodes</span>
            </div>
             );
            })}
        </div>
    </div>
    </div>
  )
}

export default Admin
