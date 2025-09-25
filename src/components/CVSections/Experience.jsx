const Experience = () => {
  return (
    <div className="cv-section">
      <h2 className="section-title">Proje Deneyimleri</h2>
      
      <div className="experience-item">
        <div className="item-header">
          <div>
            <h3 className="item-title">MedicalPark – Dijital Arşivleme Sistemi</h3>
            <p className="item-company">React + Redux</p>
          </div>
          <span className="item-date">2023 - Present</span>
        </div>
        <p className="item-description">
          React + Redux kullanarak belge yönetim sistemi geliştirme.
          Çoklu belge yükleme, PDF/XML gösterim, dashboard tasarımı, role-based yetkilendirme modülleri.
        </p>
      </div>

      <div className="experience-item">
        <div className="item-header">
          <div>
            <h3 className="item-title">Kurumsal Müşteriler</h3>
            <p className="item-company">SOCAR, Colgate, DENTAŞ, OYAK Çimento, Baymak, HEMA, Kumport, Smart Energy, Türk Traktör, Çanakkale Köprüsü</p>
          </div>
          <span className="item-date">2020 - Present</span>
        </div>
        <p className="item-description">
          Benzer Dijital Arşivleme ve Kurumsal Yönetim projelerinde dashboard geliştirme, kullanıcı yönetimi,
          belge yönetimi, masraf yönetimi ve performans optimizasyonu görevleri.
        </p>
      </div>

      <div className="experience-item">
        <div className="item-header">
          <div>
            <h3 className="item-title">Detay Danışmanlık – CDC & PAM Projeleri</h3>
            <p className="item-company">Vue.js + Material UI</p>
          </div>
          <span className="item-date">2022 - 2023</span>
        </div>
        <p className="item-description">
          Vue.js ile dashboard geliştirme, data grid, validasyon, loglama, role-based ekranlar.
          Material UI ve Electron ile masaüstü uygulama desteği.
        </p>
      </div>

      <div className="experience-item">
        <div className="item-header">
          <div>
            <h3 className="item-title">Bnet Docs & Bnet Meet</h3>
            <p className="item-company">Alfresco + Jitsi Meet</p>
          </div>
          <span className="item-date">2021 - 2022</span>
        </div>
        <p className="item-description">
          Alfresco entegrasyonu, Electron.js ile masaüstü uyumlu arayüz.
          Jitsi Meet entegrasyonu, WebRTC ile toplantı ve sohbet modülleri.
        </p>
      </div>
    </div>
  )
}

export default Experience
