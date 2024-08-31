import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// my imports
import './Styles/style.css';
import './Styles/Homepage.css';
import images from "./images/images"

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const { jujutsu, DeathNote } = images

function Homepage(props) {

  const [slidesPerView, setslidesPerView ] = useState(3)
  const [popular, setpopular] = useState([])
  const [airing, setairing] = useState([])
  const [loading, setloading] = useState(true)

  const popularAnime = async () => {
    props.setprogress(0);
    const url = `https://animeapi-hfcx.onrender.com/anime`
    let anime = await fetch(url);
    setloading(true);
    props.setprogress(30);
    let passedanime = await anime.json();
    props.setprogress(70);
    setloading(false);
    setpopular(passedanime.data.reverse());
    props.setprogress(100);
  };

  const airingAnime = async () => {
    props.setprogress(0);
    const url = `https://animeapi-hfcx.onrender.com/anime`
    let anime = await fetch(url);
    setloading(true);
    props.setprogress(30);
    let passedanime = await anime.json();
    props.setprogress(70);
    setloading(false);
    setairing(passedanime.data);
    props.setprogress(100);
  };

  const responsive = () => {
    const recentElement = document.getElementById("recent");
    if (recentElement.clientWidth <= 570) {
      setslidesPerView(1)
  } else if (recentElement.clientWidth <= 780) {
      setslidesPerView(2)
  }
    
    else {
        setslidesPerView(3)
    }
} 

useEffect(() => {
    popularAnime()
    airingAnime()
    responsive()
    // eslint-disable-next-line
}, [slidesPerView]);

// Add a resize event listener to update slidesPerView on window resize
useEffect(() => {
    window.addEventListener("resize", responsive);
    return () => {
        window.removeEventListener("resize", responsive);
    };
}, []);



  return (
    <div className='home-page'>
      <section className='home'>
        <Swiper navigation={true} modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper">
          <SwiperSlide>
            <div className="box " style={{ background: `url(${jujutsu.JujutsuKaisen})no-repeat` }}>
              <div className="contant">
                <h3>Jujutsu Kaisen Season 2</h3>
                <p className='normal-p'>The Year Is 2006, And The Halls Of Tokyo Prefectural Jujutsu High School Echo With The Endless Bickering And Intense,<br />Debate Between Two Inseparable Best Friends. Exuding Unshakeable Confidence,<br /></p>
                <p className='mobile-p'> Satoru Gojou And Suguru Getou Believe There Is No Challenge Too Great For Young And Powerful Special Grade Sorcerers<br /></p>
                <Link to="/anime/51009" className='btn'>Watch Now</Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box " style={{ background: `url(https://rareanimes.net/wp-content/uploads/2019/01/Your-Name-Kimi-no-Na-wa-Movie-Hindi-Dubbed-Download-HD-768x432.jpg)no-repeat` }}>
              <div className="contant">
                <h3>Your Name.</h3>
                <p className='normal-p'>Mitsuha Miyamizu, A High School Girl,<br /> Yearns To Live The Life Of A Boy In The Bustling City Of Tokyo—A Dream That Stands In Stark Contrast To Her Present Life.<br /></p>
                <p className='mobile-p'>in The Countryside. Meanwhile In The City,<br />...</p>
                <Link to="/anime/32281" className='btn'>Watch Now</Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box " style={{ background: `url(https://rareanimes.net/wp-content/uploads/2019/08/I-Want-to-Eat-Your-Pancreas-Kimi-No-Suizou-Wo-Tabetai-Movie-Hindi-Dubbed-Download-HD-1320x743.jpg)no-repeat` }}>
              <div className="contant">
                <h3>I Want To Eat Your Pancreas</h3>
                <p className='normal-p'>The Aloof Protagonist: A Bookworm Who Is Deeply Detached From The World He Resides In.<br /> He Has No Interest In Others And Is Firmly Convinced That Nobody Has Any Interest In Him Either. His Story Begins When He Stumbles Across A Handwritten Book.<br /></p>
                <p className='mobile-p'>Titled Living With Dying. He Soon Identifies It As A Secret Diary Belonging To His Popular<br /></p>
                <Link to="anime/36098" className='btn'>Watch Now</Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box " style={{ background: `url(${DeathNote.Deathnote})no-repeat` }}>
              <div className="contant">
                <h3>Death Note</h3>
                <p className='normal-p'>Brutal Murders, Petty Thefts, And Senseless Violence Pollute The Human World. In Contrast<br /> The Realm Of Death Gods Is A Humdrum, Unchanging Gambling Den. The Ingenious 17-Year-Old Japanese Student Light Yagami<br /></p>
                <p className='mobile-p'>And Sadistic God Of Death Ryuk Share One Belief: Their Worlds Are Rotten. For His Own Amusement, Ryuk Drops His Death Note Into The Human World.<br /></p>
                <Link to="anime/1535" className='btn'>Watch Now</Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* mobile anime section*/}

      <section className='anime mobile-p'>
        <h1 className='heading'>Popular on Anime</h1>
        <div className="show-all">
          <Link to="/popular"><button >show all</button></Link>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={25}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {loading && <div className='loading'><span className='loader'></span></div>}
          {!loading && popular.map((anime) => {
            return <SwiperSlide key={anime.mal_id}>
              <div className="box">
                <img src={anime.images.jpg.image_url} alt="" />
                <Link to={`/anime/${anime.mal_id}`} className='btn'>
                  {!anime.title_english
                    ? "Title is not loaded"
                    : anime.title_english.length > 10
                      ? anime.title_english.slice(0, 10) + "..."
                      : anime.title_english
                  }</Link>
              </div>

            </SwiperSlide>
          })}
        </Swiper>
      </section>

      {/* normal anime section*/}
      <section className='anime normal-p'>
        <h1 className='heading'>Popular on Anime</h1>
        <div className="show-all">
          <Link to="/popular"><button >show all</button></Link>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {loading && <div className='loading'><span className='loader'></span></div>}
          {!loading && popular.map((anime) => {
            return <SwiperSlide key={anime.mal_id}>
              <div className="box" style={{ background: `url(${anime.cover_image})no-repeat`, backgroundSize: 'cover' }}>
              </div>
              <div className="content">
                <h3 className='normal-p'>
                  {!anime.title_english
                    ? "Title is not loaded"
                    : anime.title_english.length > 20
                      ? anime.title_english.slice(0, 20) + "..."
                      : anime.title_english
                  }
                </h3>
                <p className='normal-p'>{anime.synopsis.slice(0, 200)}...<br /></p>
                <p className='mobile-p'>{anime.synopsis.slice(0, 50)}...<br /></p>
                <Link to={`/anime/${anime.mal_id}`} className='btn'>Watch Now</Link>
              </div>
            </SwiperSlide>
          })}
        </Swiper>
      </section>



      <section id='recent' className='anime'>
        <h1 className='heading'>Recent on Anime</h1>
        <div className="show-all">
          <Link to="/popular"><button >show all</button></Link>
        </div>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {loading && <div className='loading'><span className='loader'></span></div>}
          {!loading && airing.map((anime) => {
            return <SwiperSlide key={anime.mal_id}>
              <div className="recent-box">
                <img src={anime.cover_image} alt="" />
              </div>
                <Link to={`/anime/${anime.mal_id}`} className='btn'>{anime.title_english}</Link>
            </SwiperSlide>
          })}
        </Swiper>
      </section>
    </div>
  );
}

export default Homepage;
