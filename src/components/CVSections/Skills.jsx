import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  }
}

const item = {
  hidden: { opacity: 0, y: 6, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25, ease: 'easeOut' } }
}

const Skills = () => {
  return (
    <div className="cv-section">
      <h2 className="section-title">Yetenekler</h2>
      <motion.div className="skills-grid" variants={container} initial="hidden" animate="visible">
        <div className="skill-category">
          <h4 className="skill-category-title">Frontend</h4>
          <motion.div className="skill-list" variants={container}>
            <motion.span variants={item} whileHover={{ scale: 1.05 }} className="skill-tag react">React.JS</motion.span>
            <motion.span variants={item} whileHover={{ scale: 1.05 }} className="skill-tag nextjs">Next.JS</motion.span>
            <motion.span variants={item} whileHover={{ scale: 1.05 }} className="skill-tag vue">Vue.JS</motion.span>
            <motion.span variants={item} whileHover={{ scale: 1.05 }} className="skill-tag angular">Angular.JS</motion.span>
            <motion.span variants={item} whileHover={{ scale: 1.05 }} className="skill-tag javascript">JavaScript</motion.span>
            <motion.span variants={item} whileHover={{ scale: 1.05 }} className="skill-tag typescript">TypeScript</motion.span>
          </motion.div>
        </div>
        
        <div className="skill-category">
          <h4 className="skill-category-title">State Yönetimi</h4>
          <motion.div className="skill-list" variants={container}>
            <motion.span variants={item} whileHover={{ scale: 1.05 }} className="skill-tag redux">Redux Toolkit</motion.span>
            <motion.span variants={item} whileHover={{ scale: 1.05 }} className="skill-tag zustand">Zustand</motion.span>
            <motion.span variants={item} whileHover={{ scale: 1.05 }} className="skill-tag vuex">Vuex</motion.span>
          </motion.div>
        </div>
        
        <div className="skill-category">
          <h4 className="skill-category-title">UI Tasarımı</h4>
          <motion.div className="skill-list" variants={container}>
            <motion.span variants={item} whileHover={{ scale: 1.05 }} className="skill-tag css">CSS</motion.span>
            <motion.span variants={item} whileHover={{ scale: 1.05 }} className="skill-tag tailwind">Tailwind CSS</motion.span>
            <motion.span variants={item} whileHover={{ scale: 1.05 }} className="skill-tag shadcn">ShadCN</motion.span>
            <motion.span variants={item} whileHover={{ scale: 1.05 }} className="skill-tag material">Material UI</motion.span>
            <motion.span variants={item} whileHover={{ scale: 1.05 }} className="skill-tag daisy">Daisy UI</motion.span>
            <motion.span variants={item} whileHover={{ scale: 1.05 }} className="skill-tag headless">Headless UI</motion.span>
            <motion.span variants={item} whileHover={{ scale: 1.05 }} className="skill-tag antd">AntDesign</motion.span>
          </motion.div>
        </div>
        
        <div className="skill-category">
          <h4 className="skill-category-title">API & Versiyon Kontrol</h4>
          <motion.div className="skill-list" variants={container}>
            <motion.span variants={item} whileHover={{ scale: 1.05 }} className="skill-tag api">RESTful API</motion.span>
            <motion.span variants={item} whileHover={{ scale: 1.05 }} className="skill-tag git">Git</motion.span>
            <motion.span variants={item} whileHover={{ scale: 1.05 }} className="skill-tag gitlab">GitLab</motion.span>
            <motion.span variants={item} whileHover={{ scale: 1.05 }} className="skill-tag github">GitHub</motion.span>
          </motion.div>
        </div>
        
        <div className="skill-category">
          <h4 className="skill-category-title">Tasarım Araçları</h4>
          <motion.div className="skill-list" variants={container}>
            <motion.span variants={item} whileHover={{ scale: 1.05 }} className="skill-tag figma">Figma</motion.span>
            <motion.span variants={item} whileHover={{ scale: 1.05 }} className="skill-tag photoshop">Adobe Photoshop</motion.span>
            <motion.span variants={item} whileHover={{ scale: 1.05 }} className="skill-tag illustrator">Adobe Illustrator</motion.span>
          </motion.div>
        </div>
        
        <div className="skill-category">
          <h4 className="skill-category-title">Çalışma Yaklaşımı</h4>
          <motion.div className="skill-list" variants={container}>
            <motion.span variants={item} whileHover={{ scale: 1.05 }} className="skill-tag agile">Agile yöntemler</motion.span>
            <motion.span variants={item} whileHover={{ scale: 1.05 }} className="skill-tag clean">Temiz kod</motion.span>
            <motion.span variants={item} whileHover={{ scale: 1.05 }} className="skill-tag team">Takım çalışması</motion.span>
            <motion.span variants={item} whileHover={{ scale: 1.05 }} className="skill-tag discipline">Disiplin</motion.span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Skills
