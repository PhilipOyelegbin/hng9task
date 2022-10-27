import {FaGithub} from 'react-icons/fa';
import slack from '../assets/slack.svg'

const Social = () => {
  return (
    <section className='social-section'>
      <div className="social center">
          <img src={slack} className='icon' alt="slack icon" />
          <FaGithub className='icon'/>
      </div>
    </section>
  )
}

export default Social