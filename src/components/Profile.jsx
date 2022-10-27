import profile from '../assets/profile.png';
import right from '../assets/share-06.svg';
import dots from '../assets/dots-horizontal.svg';

const Profile = () => {
  return (
    <section className="profile-section center">
      <img src={dots} className="dot-icon"/>
      <img src={right} className="right-icon"/>
      <img src={profile} id="profile__img" className='profile-image' alt="image of the account owner" />
      <div>
        <a href="https://mobile.twitter.com/OyelegbinPhilip" id="twitter" target="_blank" rel="noopener noreferrer">@OyelegbinPhilip</a>

        <a href="https://" id="slack" className='unseen' target="_blank" rel="noopener noreferrer">PhilipOyelegbin</a>
      </div>
    </section>
  )
}

export default Profile