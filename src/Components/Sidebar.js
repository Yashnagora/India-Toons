import { Link } from "react-router-dom";
import "./Styles/style.css";

const Sidebar  = ()=> {
  return (
    <div className='sidebar'>
      <div><h4>Recent UploLinkds!</h4><hr /></div>
      
      <div className='Recent-anime'>
      <div className='Recent-name'>
      <li><Link to="">Jujutsu Kaisen Season 2</Link></li>
      <li><Link to="#">A SILENT VOICE</Link></li>
      <li><Link to="#"> YOUR NAME.</Link></li>
      <li><Link to="#">I Want To Eat Your Pancreas</Link></li>
      <li><Link to="#"> SOLO LEVELING</Link></li>
      <li><Link to="#">JUJUTSU KAISEN</Link></li>
      </div>
      </div>
    </div>
  )
}

export default Sidebar
