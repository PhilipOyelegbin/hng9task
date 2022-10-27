import zuri_internship from '../assets/Zuri_Internship_Logo.png';
import i4g from '../assets/i4g-logo.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <img src={zuri_internship} className="zuri-internship" alt="Zuri Internship Vector" />

        <p>HNG Internship 9 Frontend Task</p>

        <img src={i4g} className="i4g" alt="I4G logo" />
      </div>
    </footer>
  )
}

export default Footer