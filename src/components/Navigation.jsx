import { BookIcon, FolderIcon, ProjectGridIcon, PackageIcon, StarIcon, CVIcon } from './Icons'

const Navigation = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="profile-nav">
      <div className="nav-content">
        <div className="nav-tabs">
          <button 
            className={`nav-tab ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <BookIcon/>
            Genel
          </button>
          <button 
            className={`nav-tab ${activeTab === 'cv' ? 'active' : ''}`}
            onClick={() => setActiveTab('cv')}
          >
            <CVIcon />
            CV
          </button>
          <button 
            className={`nav-tab ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <ProjectGridIcon />
            Projeler
            <span className="nav-badge">30+</span>
          </button>
          <button 
            className={`nav-tab ${activeTab === 'packages' ? 'active' : ''}`}
            onClick={() => setActiveTab('packages')}
          >
            <PackageIcon />
            Yetenekler
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
