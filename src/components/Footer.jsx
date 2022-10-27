import zuri_internship from '../assets/zuri-internship.svg';
import i4g from '../assets/i4g-logo.png';

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="row">
          <img src={zuri_internship} className="zuri-internship" alt="Zuri Internship Vector" />

          <p>HNG Internship 9 Frontend Task</p>

          <img src={i4g} className="i4g" alt="I4G logo" />

        </div>
      </div>
    </footer>
  )
}

export default Footer