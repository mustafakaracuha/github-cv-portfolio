const Skills = () => {
  return (
    <div className="cv-section">
      <h2 className="section-title">Yetenekler</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h4 className="skill-category-title">Frontend</h4>
          <div className="skill-list">
            <span className="skill-tag">React.JS</span>
            <span className="skill-tag">Next.JS</span>
            <span className="skill-tag">Vue.JS</span>
            <span className="skill-tag">Angular.JS</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">TypeScript</span>
          </div>
        </div>
        
        <div className="skill-category">
          <h4 className="skill-category-title">State Yönetimi</h4>
          <div className="skill-list">
            <span className="skill-tag">Redux Toolkit</span>
            <span className="skill-tag">Zustand</span>
            <span className="skill-tag">Vuex</span>
          </div>
        </div>
        
        <div className="skill-category">
          <h4 className="skill-category-title">UI Tasarımı</h4>
          <div className="skill-list">
            <span className="skill-tag">CSS</span>
            <span className="skill-tag">Tailwind CSS</span>
            <span className="skill-tag">ShadCN</span>
            <span className="skill-tag">Material UI</span>
            <span className="skill-tag">Daisy UI</span>
            <span className="skill-tag">Headless UI</span>
            <span className="skill-tag">AntDesign</span>
          </div>
        </div>
        
        <div className="skill-category">
          <h4 className="skill-category-title">API & Versiyon Kontrol</h4>
          <div className="skill-list">
            <span className="skill-tag">RESTful API</span>
            <span className="skill-tag">Git</span>
            <span className="skill-tag">GitLab</span>
            <span className="skill-tag">GitHub</span>
          </div>
        </div>
        
        <div className="skill-category">
          <h4 className="skill-category-title">Tasarım Araçları</h4>
          <div className="skill-list">
            <span className="skill-tag">Figma</span>
            <span className="skill-tag">Adobe Photoshop</span>
            <span className="skill-tag">Adobe Illustrator</span>
          </div>
        </div>
        
        <div className="skill-category">
          <h4 className="skill-category-title">Çalışma Yaklaşımı</h4>
          <div className="skill-list">
            <span className="skill-tag">Agile yöntemler</span>
            <span className="skill-tag">Temiz kod</span>
            <span className="skill-tag">Takım çalışması</span>
            <span className="skill-tag">Disiplin</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
