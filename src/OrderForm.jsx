
import { useState } from "react";
import "./OrderForm.css";

const PRICE_PER_100 = 3500;
const OWNER_WHATSAPP = "918275272899";

const quantities = Array.from(
  { length: 100 },
  (_, i) => (i + 1) * 50
);

const districts = [
  "धाराशिव",
  "लातूर",
  "बीड",
  "सोलापूर",
  "इतर जिल्हा",
];

function OrderForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    quantity: "100",
    district: "धाराशिव",
    taluka: "",
    village: "",
    pincode: "",
    address: "",
    delivery: "वाहतुकीची माहिती हवी आहे",
    message: "",
  });

  const quantity = Number(form.quantity);
  const total = (quantity / 100) * PRICE_PER_100;

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const phone = form.phone.replace(/\D/g, "");

    if (!/^[6-9]\d{9}$/.test(phone)) {
      alert("कृपया योग्य 10 अंकी मोबाईल नंबर टाका.");
      return;
    }

    if (!/^\d{6}$/.test(form.pincode)) {
      alert("कृपया योग्य 6 अंकी पिनकोड टाका.");
      return;
    }

    const message = [
      "नमस्कार, आदर्श चौकी सेंटर, भंडारी!",
      "",
      "मला रेशीम अंड्यांची चौकशी करायची आहे.",
      "",
      `नाव: ${form.name}`,
      `मोबाईल: ${phone}`,
      `अंड्यांचे प्रमाण: ${quantity.toLocaleString("en-IN")}`,
      `अंदाजित किंमत: ₹${total.toLocaleString("en-IN")}`,
      `जिल्हा: ${form.district}`,
      `तालुका: ${form.taluka}`,
      `गाव: ${form.village}`,
      `पिनकोड: ${form.pincode}`,
      `पत्ता: ${form.address}`,
      `वितरण: ${form.delivery}`,
      `अतिरिक्त माहिती: ${form.message || "नाही"}`,
      "",
      "कृपया उपलब्धता, अंतिम किंमत आणि वितरणाची माहिती द्या.",
    ].join("\n");

    const url =
      `https://wa.me/${OWNER_WHATSAPP}?text=` +
      encodeURIComponent(message);

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="order-section" id="order">
      <div className="order-container">
        <header className="order-heading">
          <span className="order-eyebrow">
            🌿 शेतकरी सेवा
          </span>
          <h2>रेशीम अंडी ऑर्डर चौकशी</h2>
          <p>
            खालील माहिती भरा. आम्ही उपलब्धता, किंमत
            आणि वितरणाबाबत संपर्क साधू.
          </p>
        </header>

        <form className="order-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <div className="form-section-heading">
              <span className="section-number">१</span>
              <div>
                <h3>तुमची माहिती</h3>
                <p>तुमच्याशी संपर्क साधण्यासाठी</p>
              </div>
            </div>

            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="name">पूर्ण नाव *</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="उदा. रमेश पाटील"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="phone">मोबाईल नंबर *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10 अंकी नंबर"
                  autoComplete="tel-national"
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <div className="form-section-heading">
              <span className="section-number">२</span>
              <div>
                <h3>अंड्यांचे प्रमाण</h3>
                <p>आपल्याला आवश्यक असलेले प्रमाण निवडा</p>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="quantity">अंड्यांची संख्या *</label>
              <select
                id="quantity"
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
              >
                {quantities.map((number) => (
                  <option key={number} value={number}>
                    {number.toLocaleString("en-IN")} अंडी
                  </option>
                ))}
              </select>
            </div>

            <div className="price-summary">
              <div>
                <span className="price-label">
                  अंदाजित एकूण किंमत
                </span>
                <p>
                  ₹3,500 प्रति 100 अंडी
                </p>
              </div>
              <strong>
                ₹{total.toLocaleString("en-IN")}
              </strong>
            </div>

            <p className="price-disclaimer">
              * ही अंदाजित किंमत आहे. वाहतूक खर्च,
              उपलब्धता आणि अंतिम किंमत संपर्कातून निश्चित होईल.
            </p>
          </div>

          <div className="form-section">
            <div className="form-section-heading">
              <span className="section-number">३</span>
              <div>
                <h3>गाव आणि पत्ता</h3>
                <p>वितरणाची माहिती देण्यासाठी</p>
              </div>
            </div>

            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="district">जिल्हा *</label>
                <select
                  id="district"
                  name="district"
                  value={form.district}
                  onChange={handleChange}
                >
                  {districts.map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="taluka">तालुका *</label>
                <input
                  id="taluka"
                  name="taluka"
                  value={form.taluka}
                  onChange={handleChange}
                  placeholder="तालुक्याचे नाव"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="village">गाव *</label>
                <input
                  id="village"
                  name="village"
                  value={form.village}
                  onChange={handleChange}
                  placeholder="गावाचे नाव"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="pincode">पिनकोड *</label>
                <input
                  id="pincode"
                  name="pincode"
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  pattern="[0-9]{6}"
                  value={form.pincode}
                  onChange={handleChange}
                  placeholder="6 अंकी पिनकोड"
                  autoComplete="postal-code"
                  required
                />
              </div>

              <div className="form-field full-width">
                <label htmlFor="address">पूर्ण पत्ता *</label>
                <textarea
                  id="address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="घर क्रमांक, परिसर किंवा जवळची खूण"
                  autoComplete="street-address"
                  required
                />
              </div>

              <div className="form-field full-width">
                <label htmlFor="delivery">वितरणाबाबत पसंती</label>
                <select
                  id="delivery"
                  name="delivery"
                  value={form.delivery}
                  onChange={handleChange}
                >
                  <option>वाहतुकीची माहिती हवी आहे</option>
                  <option>केंद्रावरून घेणार</option>
                  <option>गावापर्यंत वितरणाची चौकशी</option>
                </select>
              </div>

              <div className="form-field full-width">
                <label htmlFor="message">
                  अतिरिक्त प्रश्न (ऐच्छिक)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="तुम्हाला काही विचारायचे असल्यास येथे लिहा"
                />
              </div>
            </div>
          </div>

          <div className="submit-panel">
            <div>
              <span>तुमची चौकशी तयार आहे</span>
              <p>पुढील टप्प्यात WhatsApp उघडेल.</p>
            </div>

            <button className="submit-order" type="submit">
              WhatsApp वर चौकशी पाठवा ↗
            </button>
          </div>

          <p className="form-note">
            ही चौकशी आहे, अंतिम ऑर्डर नाही.
            सध्या ऑनलाइन पेमेंट उपलब्ध नाही.
            पेमेंट करण्यापूर्वी विक्रेत्याकडून तपशील निश्चित करा.
          </p>
        </form>
      </div>
    </section>
  );
}

export default OrderForm;
