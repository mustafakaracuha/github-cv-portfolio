import { 
  BuildingIcon, 
  CompanyIcon,
  LocationIcon, 
  LinkIcon, 
  UsersIcon, 
  LinkedInIcon, 
  InstagramIcon, 
  LightningIcon,
  PhoneIcon,
  MailIcon
} from './Icons'
import profile from '../assets/profile.jpeg'


const ProfileSidebar = () => {
  return (
    <aside className="sidebar">
      <div className="profile-card">
        <div className="profile-avatar-container">
          <img 
            src={profile} 
            alt="Mustafa Karaçuha" 
            className="profile-avatar"
          />
          <div className="lightning-badge">
            ⚡️
          </div>
        </div>
        
        <h1 className="profile-name">Mustafa</h1>
        <h2 className="profile-username">mustafakaracuha</h2>
        <p className="profile-title !text-white">Frontend Developer</p>
        <button className="edit-profile-btn">Profili Düzenle</button>
        
        <div className="profile-stats">
          <UsersIcon />
          <span><strong>352</strong> followers · <strong>3</strong> following</span>
        </div>

        <div className="profile-info">
          <CompanyIcon />
          <span>@Detaysoft</span>
        </div>
        <div className="profile-info">
          <LocationIcon />
          <span>Sivas, Turkey</span>
        </div>
        <div className="profile-info">
          <LinkIcon />
          <a href="https://mustafa-karacuha.vercel.app/" target="_blank" rel="noopener noreferrer">
            https://mustafa-karacuha.vercel.app/
          </a>
        </div>
        <div className="profile-info">
          <LinkedInIcon />
          <a href="https://linkedin.com/in/mustafakaracuha" target="_blank" rel="noopener noreferrer">
            in/mustafakaracuha
          </a>
        </div>
        <div className="profile-info">
          <InstagramIcon />
          <a href="https://instagram.com/muskaracuha" target="_blank" rel="noopener noreferrer">
            muskaracuha
          </a>
        </div>
        <div className="profile-info">
          <LinkIcon />
          <a href="https://vercel.com/mustafa-karauhas-projects" target="_blank" rel="noopener noreferrer">
            vercel.com/mustafa-karauhas-projects
          </a>
        </div>
      </div>
    </aside>
  )
}

export default ProfileSidebar
