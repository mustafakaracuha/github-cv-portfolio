const Education = () => {
  return (
    <div className="cv-section">
      <h2 className="section-title">Eğitim</h2>
      
      <div className="education-item">
        <div className="item-header">
          <div>
            <h3 className="item-title">Lisans Eğitimi</h3>
            <p className="item-company">Eskişehir Anadolu Üniversitesi, Yönetim Bilişim Sistemleri</p>
          </div>
          <span className="item-date">2017 - 2021</span>
        </div>
        <p className="item-description">
          Yönetim Bilişim Sistemleri alanında lisans eğitimi. Sistem analizi, veritabanı yönetimi, 
          proje yönetimi ve işletme süreçleri konularında uzmanlaşma.
        </p>
      </div>
      
      <div className="education-item">
        <div className="item-header">
          <div>
            <h3 className="item-title">Önlisans Eğitimi</h3>
            <p className="item-company">Eskişehir Anadolu Üniversitesi, Web Tasarım ve Kodlama</p>
          </div>
          <span className="item-date">2015 - 2017</span>
        </div>
        <p className="item-description">
          Web tasarım ve kodlama alanında önlisans eğitimi. HTML, CSS, JavaScript, PHP ve 
          veritabanı yönetimi konularında temel eğitim.
        </p>
      </div>
    </div>
  )
}

export default Education
