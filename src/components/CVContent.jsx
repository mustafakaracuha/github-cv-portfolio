import ProfessionalSummary from './CVSections/ProfessionalSummary'
import Experience from './CVSections/Experience'
import Education from './CVSections/Education'
import Skills from './CVSections/Skills'
import Projects from './CVSections/Projects'
import { motion, AnimatePresence } from 'framer-motion'

const CVContent = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewContent />
      case 'cv':
        return (
          <>
            <ProfessionalSummary />
            <Experience />
            <Education />
            <Skills />
            <Projects />
          </>
        )
      case 'projects':
        return <Projects />
      case 'packages':
        return <Skills />
      default:
        return <OverviewContent />
    }
  }

  return (
    <section className="content-area">
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeTab}
          className="cv-content"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}


// Overview tab içeriği
const OverviewContent = () => {
  return (
    <>
      <div className="cv-section">
        <h2 className="section-title">Genel</h2>
        <div className="overview-grid">
          <div className="overview-card">
            <h3>Profesyonel Deneyim</h3>
            <p>2019'dan beri aktif olarak frontend geliştirme yapıyorum. Kurumsal ve Ar-Ge projelerinde görev aldım.</p>
          </div>
          <div className="overview-card">
            <h3>Teknoloji Stack</h3>
            <p>React, Vue, Next.js ile modern web uygulamaları geliştiriyorum. UI/UX tasarımında uzmanlaştım.</p>
          </div>
          <div className="overview-card">
            <h3>Proje Sayısı</h3>
            <p>10+ kurumsal proje, 30+ kişisel proje tamamladım. MedicalPark, SOCAR, Colgate gibi büyük firmalarla çalıştım.</p>
          </div>
          <div className="overview-card">
            <h3>Uzmanlık Alanları</h3>
            <p>State management, API entegrasyonları, performans optimizasyonu ve kullanıcı deneyimi odaklı geliştirme.</p>
          </div>
        </div>
      </div>
      
      <div className="cv-section">
        <h2 className="section-title">Son Aktiviteler</h2>
        <div className="activity-timeline">
          <div className="activity-item">
            <div className="activity-date">2025</div>
            <div className="activity-content">
              <h4>hikerapp-landing-page geliştirdim</h4>
              <p>TypeScript kullanarak hiking uygulaması için modern landing page tasarımı</p>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-date">2025</div>
            <div className="activity-content">
              <h4>KolayIBAN PWA tamamladım</h4>
              <p>JavaScript ile AES-256 şifrelemeli IBAN yönetim uygulaması geliştirdim</p>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-date">2025</div>
            <div className="activity-content">
              <h4>next-auth projesi</h4>
              <p>TypeScript ile Next.js authentication sistemi, Google ve GitHub entegrasyonları</p>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-date">2024</div>
            <div className="activity-content">
              <h4>instagram-downloader uygulaması</h4>
              <p>React, JavaScript ve TailwindCSS ile Instagram Reel/Post indirme uygulaması</p>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-date">2024</div>
            <div className="activity-content">
              <h4>sincaps.dev haber sitesi</h4>
              <p>JavaScript ile güvenilir kaynaklar sunan haber ve analiz platformu</p>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-date">2023</div>
            <div className="activity-content">
              <h4>crypto-tracker-app</h4>
              <p>JavaScript ile kripto para piyasası takip ve analiz uygulaması</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CVContent
