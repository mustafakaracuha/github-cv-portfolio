import { 
  GitHubLogo, 
  BellIcon, 
  PlusIcon, 
  HamburgerIcon, 
  PullRequestIcon, 
  IssuesIcon, 
  DropdownIcon,
  GridIcon,
  SearchIcon 
} from './Icons'

const Header = () => {
  return (
    <header className="github-header">
      <div className="header-content">
        <div className="header-left">
          <button className="icon-button hamburger-btn">
            <HamburgerIcon />
          </button>
          <GitHubLogo />
          <span className="username">mustafakaracuha</span>
        </div>
        
        <div className="header-center">

        </div>
        <div className="header-right">
        <div className="search-container">
            <SearchIcon />
            <input 
              type="text" 
              placeholder="Ara" 
              className="search-box"
            />
            <div className="search-shortcut">/</div>
          </div>
          <button className="icon-button">
            <PullRequestIcon />
          </button>
          <button className="icon-button">
            <IssuesIcon />
          </button>
          <button className="icon-button">
            <BellIcon />
          </button>
          <button className="icon-button">
            <PlusIcon />
            <DropdownIcon />
          </button>
          <button className="icon-button">
            <GridIcon />
          </button>
            <img 
              src="/src/assets/profile.jpeg" 
              alt="Profile" 
              className="header-avatar"
            />
        </div>
      </div>
    </header>
  )
}

export default Header
