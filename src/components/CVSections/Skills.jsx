const Skills = () => {
  return (
    <div className="cv-section">
      <h2 className="section-title">Yetenekler</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h4 className="skill-category-title">Frontend</h4>
          <div className="skill-list">
            <span className="skill-tag react">React.JS</span>
            <span className="skill-tag nextjs">Next.JS</span>
            <span className="skill-tag vue">Vue.JS</span>
            <span className="skill-tag angular">Angular.JS</span>
            <span className="skill-tag javascript">JavaScript</span>
            <span className="skill-tag typescript">TypeScript</span>
          </div>
        </div>
        
        <div className="skill-category">
          <h4 className="skill-category-title">State Yönetimi</h4>
          <div className="skill-list">
            <span className="skill-tag redux">Redux Toolkit</span>
            <span className="skill-tag zustand">Zustand</span>
            <span className="skill-tag vuex">Vuex</span>
          </div>
        </div>
        
        <div className="skill-category">
          <h4 className="skill-category-title">UI Tasarımı</h4>
          <div className="skill-list">
            <span className="skill-tag css">CSS</span>
            <span className="skill-tag tailwind">Tailwind CSS</span>
            <span className="skill-tag shadcn">ShadCN</span>
            <span className="skill-tag material">Material UI</span>
            <span className="skill-tag daisy">Daisy UI</span>
            <span className="skill-tag headless">Headless UI</span>
            <span className="skill-tag antd">AntDesign</span>
          </div>
        </div>
        
        <div className="skill-category">
          <h4 className="skill-category-title">API & Versiyon Kontrol</h4>
          <div className="skill-list">
            <span className="skill-tag api">RESTful API</span>
            <span className="skill-tag git">Git</span>
            <span className="skill-tag gitlab">GitLab</span>
            <span className="skill-tag github">GitHub</span>
          </div>
        </div>
        
        <div className="skill-category">
          <h4 className="skill-category-title">Tasarım Araçları</h4>
          <div className="skill-list">
            <span className="skill-tag figma">Figma</span>
            <span className="skill-tag photoshop">Adobe Photoshop</span>
            <span className="skill-tag illustrator">Adobe Illustrator</span>
          </div>
        </div>
        
        <div className="skill-category">
          <h4 className="skill-category-title">Çalışma Yaklaşımı</h4>
          <div className="skill-list">
            <span className="skill-tag agile">Agile yöntemler</span>
            <span className="skill-tag clean">Temiz kod</span>
            <span className="skill-tag team">Takım çalışması</span>
            <span className="skill-tag discipline">Disiplin</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
