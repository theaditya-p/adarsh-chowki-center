
import OrderForm from "./OrderForm";
import "./App.css";

const ownerPhone = "918275272899";

function App() {
  return (
    <>
      <div className="announcement">
        शेतकऱ्यांसाठी रेशीम अंडी विक्री व मार्गदर्शन
        <span>धाराशिव · लातूर · बीड · सोलापूर · व आसपासचे जिल्हे</span>
      </div>

      <header className="navbar">
        <a className="brand" href="#home">
          <div className="brand-icon">🌿</div>
          <div>
            <strong>आदर्श चौकी सेंटर, भंडारी</strong>
            <small>रेशीम अंडी विक्री केंद्र</small>
          </div>
        </a>

        <nav className="nav-links">
          <a href="#about">आमच्याबद्दल</a>
          <a href="#products">रेशीम अंडी</a>
          <a href="#support">शेतकरी मदत</a>
          <a href="#contact">संपर्क</a>
        </nav>

        <a className="button nav-button" href="#order">
          ऑर्डर चौकशी ↗
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="status-dot" />
              शेतकऱ्यांसाठी विश्वासार्ह सेवा
            </div>

            <h1>
              रेशीम शेतीची सुरुवात
              <br />
              <span>योग्य अंड्यांपासून.</span>
            </h1>

            <p className="hero-description">
              आपल्या रेशीम शेतीसाठी आवश्यक अंड्यांची
              चौकशी करा. ऑर्डर, उपलब्धता आणि वितरणाची
              माहिती सोप्या पद्धतीने मिळवा.
            </p>

            <div className="hero-actions">
              <a className="button" href="#order">
                अंडी ऑर्डर करा <span>→</span>
              </a>

              <a className="button button-outline" href="#about">
                अधिक माहिती
              </a>
            </div>

            <div className="hero-points">
              <span>✓ सोपी चौकशी</span>
              <span>✓ थेट संपर्क</span>
              <span>✓ शेतकरी सहाय्य</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="decor-circle circle-one" />
            <div className="decor-circle circle-two" />

            <div className="product-card">
              <div className="product-emoji">🌱</div>
              <p className="product-label">रेशीम अंडी</p>
              <h2>आपल्या शेतीसाठी</h2>

              <div className="product-price">
                ₹3,500
                <span>/ 100 अंडी</span>
              </div>

              <p className="product-note">
                आवश्यक प्रमाण आणि उपलब्धतेसाठी
                आमच्याशी संपर्क साधा.
              </p>

              <a href="#order" className="product-link">
                किंमत व ऑर्डर माहिती →
              </a>
            </div>

            <div className="visual-caption">
              आदर्श चौकी सेंटर · शेतकरी सेवा
            </div>
          </div>
        </section>

        <section className="features" id="about">
          <div className="section-heading">
            <span className="section-label">आमच्याबद्दल</span>
            <h2>शेतकऱ्यांसाठी सोपी सेवा</h2>
            <p>
              रेशीम अंडी खरेदीपासून ऑर्डर चौकशीपर्यंत
              आवश्यक माहिती एकाच ठिकाणी.
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>गरजेनुसार प्रमाण</h3>
              <p>
                50 ते 5,000 अंड्यांपर्यंत उपलब्ध
                पर्यायांमधून आपली मागणी निवडा.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">₹</div>
              <h3>स्पष्ट दरमाहिती</h3>
              <p>
                100 अंड्यांसाठी ₹3,500 या
                दरानुसार अंदाजित किंमत पाहा.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>शेतकरी सहाय्य</h3>
              <p>
                उपलब्धता, ऑर्डर आणि वाहतुकीविषयी
                थेट चौकशी करा.
              </p>
            </article>
          </div>
        </section>

        <section className="order-preview" id="products">
          <div>
            <span className="section-label">रेशीम अंडी</span>
            <h2>आपली पुढील ऑर्डर तयार आहात?</h2>
            <p>
              आवश्यक प्रमाण निवडण्यासाठी आणि ऑर्डरची
              चौकशी करण्यासाठी पुढील विभाग वापरा.
            </p>
          </div>

          <a className="button" href="#order">
            ऑर्डर सुरू करा →
          </a>
        </section>

        <section className="contact-section" id="support">
          <div>
            <span className="section-label">शेतकरी सहाय्य</span>
            <h2>काही प्रश्न आहेत?</h2>
            <p>
              अंडी उपलब्धता, वितरण आणि ऑर्डरविषयी
              माहिती मिळवण्यासाठी संपर्क साधा.
            </p>
          </div>

          <a
            className="button"
            href={`https://wa.me/${ownerPhone}?text=${encodeURIComponent(
              "नमस्कार, मला रेशीम अंड्यांविषयी माहिती हवी आहे."
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp वर संपर्क ↗
          </a>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <span className="section-label">आमचा संपर्क</span>
            <h2>आदर्श चौकी सेंटर</h2>
            <p>मालक: अबासाहेब पाटील</p>
            <p>पाटील नगर, भंडारी, धाराशिव</p>
            <p>
              <a href="tel:+918275272899">8275272899</a>
              {" · "}
              <a href="mailto:adityababasahebpatil@gmail.com">
                ईमेल करा
              </a>
            </p>
          </div>

          <a className="button button-outline" href="#home">
            वर जा ↑
          </a>
        </section>
        <OrderForm />
      </main>

      <footer className="footer">
        <strong>🌿 आदर्श चौकी सेंटर</strong>
        <p>
          रेशीम अंडी विक्री केंद्र · शेतकरी सेवा
        </p>
        <small>
          © {new Date().getFullYear()} आदर्श चौकी सेंटर
        </small>
      </footer>
    </>
  );
}

export default App;
