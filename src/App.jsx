const { useState, useEffect } = React;

const menuData = {
  chefsSpecial: {
    en: "CHEF'S SPECIAL",
    zh: "厨师推荐",
    subtitle: { en: "Served with Soya Milk/Soup", zh: "送豆浆/例湯" },
    items: [
      { id: "c1", en: "Signature Chicken Rice", zh: "味香鸡饭", price: "10.00" },
      { id: "c2", en: "Braised Pork with Preserved Vegetable Rice", zh: "梅菜扣肉饭", price: "11.00" },
      { id: "c3", en: "Stir Fried Glutinous Rice", zh: "生炒糯米饭", price: "11.00" },
      { id: "c4", en: "Fried Taiwan Vermicelli with Shrimp", zh: "七彩新竹炒米", price: "10.00" },
      { id: "c5", en: "Fried Vermicelli with Preserved Vegetable & Pork Neck", zh: "榄菜猪颈肉炒米", price: "10.00" },
      { id: "c6", en: "E-Fu Noodle with Shrimp", zh: "大虾炆伊面", price: "11.00" },
      { id: "c7", en: "Thai Style Chicken Fried Rice Noodle", zh: "泰式鸡丝炒河", price: "9.50" },
      { id: "c8", en: "Fish Soup Rice Noodle", zh: "鱼汤米线", price: "9.00" },
      { id: "c9", en: "Guilin Rice Noodle", zh: "桂林米线", price: "9.00" },
      { id: "c10", en: "Guilin Beef Brisket Rice Noodle", zh: "桂林牛腩米线", price: "10.00" },
      { id: "c11", en: "Vermicelli with Hairy Melon & Minced Pork", zh: "节瓜肉碎鸳鸯米", price: "9.50" },
      { id: "c12", en: "Hairy Melon & Sliced Pork on Rice", zh: "节瓜肉片饭", price: "9.00" },
    ]
  },
  special1: {
    en: "SPECIAL",
    zh: "特價客飯 包税",
    subtitle: { en: "Served with Soya Milk/Soup", zh: "送豆浆/例湯" },
    items: [
      { id: "s1", en: "Beef Brisket on Rice", zh: "紅燒牛腩飯", price: "10.00" },
      { id: "s2", en: "Beef Brisket w/Turnip on Rice", zh: "蘿蔔牛腩飯", price: "10.00" },
      { id: "s3", en: "Pork Belly on Rice", zh: "醬爆豬腩飯", price: "9.50" },
      { id: "s4", en: "Pork on Rice", zh: "回鍋肉飯", price: "9.50" },
      { id: "s5", en: "Chicken with Potato on Rice", zh: "薯仔雞飯", price: "9.00" },
      { id: "s6", en: "Spareribs with Potato on Rice", zh: "薯仔排骨飯", price: "9.00" },
      { id: "s7", en: "Curry Beef or Chicken on Rice", zh: "咖哩牛/雞飯", price: "9.00" },
      { id: "s8", en: "Beef w/Mushroom on Rice", zh: "葱爆磨菇牛肉飯", price: "9.50" },
      { id: "s9", en: "Chicken w/Black Pepper Sauce on Rice", zh: "黑椒磨菇雞飯", price: "9.50" },
      { id: "s10", en: "Fried Rice Noodle w/Beef & XO Sauce", zh: "XO干炒牛肉河", price: "9.50" },
      { id: "s11", en: "Fried Noodle w/Spareribs & Bitter Melon", zh: "涼瓜排骨炒麵", price: "10.00" },
      { id: "s12", en: "Spareribs & String Beans on Rice", zh: "四季豆排骨飯", price: "9.00" },
      { id: "s13", en: "Chicken & Eggplant on Rice", zh: "茄子雞飯", price: "9.00" },
      { id: "s14", en: "Curry Fish on Rice", zh: "咖哩班球飯", price: "9.00" },
      { id: "s15", en: "Chicken Fried Rice w/Pineapple", zh: "菠蘿雞粒炒飯", price: "9.00" },
      { id: "s16", en: "Pork Chop w/Onion on Rice", zh: "洋葱豬扒飯", price: "9.00" },
      { id: "s17", en: "Pork Chop w/Tomato on Rice", zh: "鮮茄豬扒飯", price: "9.00" },
      { id: "s18", en: "Egg Fu Yong on Rice", zh: "芙蓉蛋飯", price: "9.00" },
      { id: "s19", en: "Spareribs w/Tofu on Rice", zh: "滑豆腐排骨飯", price: "9.00" },
    ]
  },
  special2: {
    en: "SPECIAL (Cont.)",
    zh: "特價客飯 包税 (續)",
    subtitle: { en: "Served with Soya Milk/Soup", zh: "送豆浆/例湯" },
    items: [
      { id: "s20", en: "Fried Rice Noodle w/Beef or Pork or Chicken", zh: "炒河(牛/肉/鸡)", price: "8.50" },
      { id: "s21", en: "Fried Noodle with Pork", zh: "肉絲炒麵", price: "10.00" },
      { id: "s22", en: "Fried Noodle w/Beef or Pork & Vegetable", zh: "菜遠牛/肉片炒麵", price: "10.00" },
      { id: "s23", en: "Fried Noodle or Rice Noodle w/Soya Sauce", zh: "豉油皇炒麵/河", price: "8.50" },
      { id: "s24", en: "Beef or Pork w/Bitter Melon on Rice", zh: "涼瓜牛/肉片飯", price: "10.00" },
      { id: "s25", en: "Fish w/Bitter Melon on Rice", zh: "涼瓜斑腩飯", price: "9.00" },
      { id: "s26", en: "Beef or Pork with Tomato Sauce on Rice", zh: "鮮茄牛/肉片飯", price: "9.00" },
      { id: "s27", en: "Stewed Tofu w/Minced Pork on Rice", zh: "麻婆豆腐飯", price: "8.50" },
      { id: "s28", en: "Sweet & Sour Pork on Rice", zh: "咕噜肉飯", price: "9.00" },
      { id: "s29", en: "Beef or Pork in Egg Sauce on Rice", zh: "滑蛋牛/肉片飯", price: "8.50" },
      { id: "s30", en: "Beef Fried Rice", zh: "生炒牛肉飯", price: "8.50" },
      { id: "s31", en: "Beef w/Black Bean Sauce on Rice", zh: "豉汁牛肉飯", price: "9.00" },
      { id: "s32", en: "Beef w/Green Pepper on Rice", zh: "青椒牛肉飯", price: "10.00" },
      { id: "s33", en: "Lamb w/Green Pepper on Rice", zh: "青椒羊肉飯", price: "11.00" },
      { id: "s34", en: "Lamb w/Green Onion on Rice", zh: "葱爆羊肉飯", price: "11.00" },
      { id: "s35", en: "E-Fu Noodle with Eggplant & Minced Pork", zh: "茄子肉碎炆伊面", price: "11.00" },
      { id: "s36", en: "Yin Yang Fried Rice", zh: "鸳鸯炒飯", price: "11.00" },
      { id: "s37", en: "Ha Moon Style Fried Rice", zh: "廈門炒米", price: "8.50" },
    ]
  }
};

const Header = ({ lang, setLang }) => {
  const t = (en, zh) => lang === 'en' ? en : zh;

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="brand">
          Harden Fast Food <span>雅頓茶餐</span>
        </div>
        <div className="nav-actions">
          <ul className="nav-links">
            <li><a href="#chefsSpecial">{t("Chef's Special", "厨师推荐")}</a></li>
            <li><a href="#special1">{t("Special", "特價客飯")}</a></li>
          </ul>
          <button className="lang-btn" onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}>
            <span className="icon">🌐</span> {lang === 'en' ? '中文' : 'English'}
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ lang }) => {
  const t = (en, zh) => lang === 'en' ? en : zh;

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{t("Harden Fast Food", "雅頓茶餐")}</h1>
        <p className="subtitle">{t("Take-out & Party Tray", "外賣及派對拼盤")}</p>
        <div className="contact-info">
          <p className="phone">📞 416-321-1997</p>
          <div className="hours">
            <p>{t("Open Daily 10:30AM - 8:30PM", "每天營業 早上10:30 - 晚上8:30")}</p>
            <p className="closed">{t("Closed on Wednesday", "逢星期三休息")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const MenuSection = ({ category, lang, id }) => {
  const t = (en, zh) => lang === 'en' ? en : zh;
  
  return (
    <div id={id} className="menu-category container">
      <div className="category-header">
        <h2>{t(category.en, category.zh)}</h2>
        <p className="serve-note">{t(category.subtitle.en, category.subtitle.zh)}</p>
      </div>
      <div className="menu-grid">
        {category.items.map(item => (
          <div key={item.id} className="menu-card">
            <div className="item-info">
              <h3 className="item-name">{t(item.en, item.zh)}</h3>
            </div>
            <div className="price-tag">
              <span className="currency">$</span>
              <span className="amount">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Footer = ({ lang }) => {
  const t = (en, zh) => lang === 'en' ? en : zh;
  
  return (
    <footer className="footer">
      <div className="container">
        <p className="allergy-warning">⚠️ {t("Please let us know if you are allergic to peanuts.", "對花生敏感請告知。")}</p>
        <p>{t("Prices are subject to change without notice.", "價格改動不另行通知。")}</p>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Harden Fast Food {t("All rights reserved.", "版權所有。")}
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  const [lang, setLang] = useState('en');

  // Smooth scrolling for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => { document.documentElement.style.scrollBehavior = 'auto'; }
  }, []);

  return (
    <div className="app-container">
      <Header lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <main>
        <MenuSection id="chefsSpecial" category={menuData.chefsSpecial} lang={lang} />
        <MenuSection id="special1" category={menuData.special1} lang={lang} />
        <MenuSection id="special2" category={menuData.special2} lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
