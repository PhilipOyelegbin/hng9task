import profile from '../assets/profile.png'
const Profile = () => {
  return (
    <section className="center">
      <img src={profile} id="profile__img" alt="image of the account owner" />
      <div>
        <a href="https://" id="twitter" target="_blank" rel="noopener noreferrer">@Oyelegbin.Philip</a>

        <a href="https://" id="slack" className='unseen' target="_blank" rel="noopener noreferrer">@PhilipOyelegbin</a>
      </div>
    </section>
  )
}

export default Profile