import { useState } from "react";

const About = () => {
  const [toggleList, setToggleList] = useState("tab1");
  const activeList = (value) => (value === toggleList ? "active" : "");
  return (
    <section id="about">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Über mich</h3>
            <h3 className="title">Biografie</h3>
            <p className="desc">
              {`Ich bin ein Freelancer im Bereich SEO und Online Marketing. Ich komme aus dem Kanton Thurgau in der Schweiz. Ich wurde schon für viele interessante Projekte gebucht. Ich liebe es mit neuen Leuten zu arbeiten, denn dies erweitert auch meinen Horizont.`}
            </p>
          </div>
          {/* /Main Title */}
          {/* About Information */}
          <div className="resumo_fn_about_info">
            <div className="about_left">
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Sandro Huber</th>
                  </tr>
                  <tr>
                    <th>Geburtsdatum</th>
                    <th>4. Dezember 1989</th>
                  </tr>
                  
                  <tr>
                    <th>Adresse</th>
                    <th>Widenacker 30, 8525 Niederneunforn</th>
                  </tr>
                  <tr>
                    <th>Telefon</th>
                    <th>
                      <a href="tel:+41435082913">+41 43 508 29 13</a>
                    </th>
                  </tr>
                  <tr>
                    <th>E-Mail</th>
                    <th>
                      <a href="mailto:sandro@sh-digital.ch">
                        sandro@sh-digital.ch
                      </a>
                    </th>
                  </tr>
                  <tr>
                    <th>Skype</th>
                    <th>
                      <a href="skype:licaia">licaia</a>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="about_right">
              {/* Download CV Button 
              <div className="resumo_fn_cv_btn">
                <a href="img/cv.jpg" download>
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 449.306 449.306"
                      style={{ enableBackground: "new 0 0 449.306 449.306" }}
                      xmlSpace="preserve"
                      className="fn__svg replaced-svg"
                    >
                      <path d="M447.739,251.298l-59.037-126.433c-1.731-3.54-5.484-5.625-9.404-5.224h-50.155c-5.771,0-10.449,4.678-10.449,10.449     c0,5.771,4.678,10.449,10.449,10.449h43.363l48.588,104.49h-59.559c-27.004-0.133-51.563,15.625-62.694,40.229     c-8.062,16.923-25.141,27.698-43.886,27.69h-60.604c-18.745,0.008-35.823-10.767-43.886-27.69     c-11.131-24.604-35.69-40.362-62.694-40.229H29.257l57.469-104.49h33.437c5.771,0,10.449-4.678,10.449-10.449     c0-5.771-4.678-10.449-10.449-10.449H80.457c-3.776-0.358-7.425,1.467-9.404,4.702L2.09,250.776     c-1.209,1.072-1.958,2.569-2.09,4.18v130.09c0.832,29.282,24.524,52.744,53.812,53.29h341.682     c29.289-0.546,52.98-24.008,53.812-53.29v-130.09C449.107,253.622,448.567,252.362,447.739,251.298z M428.408,385.045     c-0.812,17.743-15.16,31.864-32.914,32.392H53.812c-17.754-0.528-32.102-14.648-32.914-32.392V265.927h66.873     c18.745-0.008,35.823,10.767,43.886,27.69c11.131,24.604,35.69,40.362,62.694,40.229h60.604     c27.004,0.133,51.563-15.625,62.694-40.229c8.062-16.923,25.141-27.698,43.886-27.69h66.873V385.045z" />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 449.306 449.306"
                      style={{ enableBackground: "new 0 0 449.306 449.306" }}
                      xmlSpace="preserve"
                      className="fn__svg arrow replaced-svg"
                    >
                      <path d="M217.339,252.865c3.706,4.04,9.986,4.31,14.025,0.603c0.21-0.192,0.411-0.394,0.603-0.603l71.053-71.576   c3.462-4.617,2.527-11.166-2.09-14.629c-3.715-2.786-8.824-2.786-12.539,0l-53.29,53.29V21.42   c0-5.771-4.678-10.449-10.449-10.449s-10.449,4.678-10.449,10.449v198.531l-53.29-53.29c-4.617-3.462-11.166-2.527-14.629,2.09   c-2.786,3.715-2.786,8.824,0,12.539L217.339,252.865z" />
                    </svg>
                  </span>
                  <span>Download CV</span>
                </a>
              </div>
              */}
            </div>
          </div>
          {/* /About Information */}
          {/* Tabs Shortcode */}
          <div className="resumo_fn_tabs">
            {/* Tab: Header */}
            <div className="tab_header">
              <ul>
                <li className={activeList("tab1")}>
                  <a href="#" onClick={() => setToggleList("tab1")}>
                    Erfahrung
                  </a>
                </li>
                <li className={activeList("tab2")}>
                  <a href="#" onClick={() => setToggleList("tab2")}>
                    Ausbildung
                  </a>
                </li>
                <li className={activeList("tab3")}>
                  <a href="#" onClick={() => setToggleList("tab3")}>
                    Fähigkeiten
                  </a>
                </li>
              </ul>
            </div>
            {/* /Tab: Header */}
            {/* Tab: Content */}
            <div className="tab_content">
              {/* #1 tab content */}
              <div id="tab1" className={`tab_item ${activeList("tab1")}`}>
                {/* Boxed List */}
                <div className="resumo_fn_boxed_list">
                  <ul>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>SH Digital GmbH</h5>
                          <span>( 2020 — heute )</span>
                        </div>
                        <h3>Geschäftsführer</h3>
                        <p>
                          Als Geschäftsführer kümmere ich mich um die Führung der Mitarbeiter, Betreuung der Kunden und Strategie der Kunden-Projekte. Ich arbeite zudem an der Umsetzung bei einigen SEO-Projekten selbst mit.{" "}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Arrigato GmbH</h5>
                          <span>( 2014 — 2020 )</span>
                        </div>
                        <h3>Co - Founder, Head of Digital Marketing im E-Commerce</h3>
                        <p>
                          Kümmerte mich um die strategische Digitalisierung des gesamten Unternehmens. Und insbesondere das Wachstum auf sämtlichen Online-Kanälen (SEO, Webshop, Paid Ads, Social Media).{" "}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>UBS AG</h5>
                          <span>( 2011 — 2014 )</span>
                        </div>
                        <h3>Wealth Management Analysis & Marketing</h3>
                        <p>
                          Zuständig für die Analyse von Portfoliodaten und die Unterstützung von Relationshop Manager bei der Vermarktung.{" "}
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Schroder Adveq</h5>
                          <span>( 2007 — 2011 )</span>
                        </div>
                        <h3>Administration und Vermarktung von Fonds</h3>
                        <p>
                          Zuständig für die Administration und Analyse von Portfoliodaten bei Private Equity Fonds. Unterstützung der Abeteilungen Sales und Marketing.{" "}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* /Boxed List */}
              </div>
              {/* /#1 tab content */}
              {/* #2 tab content */}
              <div id="tab2" className={`tab_item ${activeList("tab2")}`}>
                {/* Boxed List */}
                <div className="resumo_fn_boxed_list">
                  <ul>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Semrush</h5>
                          <span>( 2021 — 2022 )</span>
                        </div>
                        <h3>Digital Agency Certification</h3>
                        <p>
                          Zertifikate für On-Page, Technical-SEO, Content Marketing und Keyword-Recherche{" "}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Codemy.com</h5>
                          <span>( 2020 — 2020 )</span>
                        </div>
                        <h3>Python Web Development and AI</h3>
                        <p>
                          Zertifikat in der Entwicklung mit Python und Django.{" "}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Kaderschule Zürich</h5>
                          <span>( 2011 — 2014 )</span>
                        </div>
                        <h3>Dipl. Betriebswirtschafter HF</h3>
                        <p>
                          Umfassende in der Schweiz anerkannte Ausbildung in Betriebswirtschaft.{" "}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* /Boxed List */}
              </div>
              {/* /#2 tab content */}
              {/* #3 tab content */}
              <div id="tab3" className={`tab_item ${activeList("tab3")}`}>
                {/* Progress Bar */}
                <div className="resumo_fn_progress_bar">
                  <div className="progress_item open" data-value={92}>
                    <div className="item_in">
                      <h3 className="progress_title">SEO</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "8%" }}
                      >
                        92%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "92%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={95}>
                    <div className="item_in">
                      <h3 className="progress_title">HTML5 &amp; CSS</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "5%" }}
                      >
                        95%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "95%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={80}>
                    <div className="item_in">
                      <h3 className="progress_title">React</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "20%" }}
                      >
                        80%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "80%" }} />
                      </div>
                    </div>
                  </div>
                   <div className="progress_item open" data-value={95}>
                    <div className="item_in">
                      <h3 className="progress_title">Python</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "15%" }}
                      >
                        85%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "85%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={85}>
                    <div className="item_in">
                      <h3 className="progress_title">Adobe Photoshop</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "15%" }}
                      >
                        85%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "85%" }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* /Progress Bar */}
                {/* Description */}
                <div className="resumo_fn_desc">
                  <p>
                   Ein freiberuflicher kreativer Marketer und Webentwickler mit einer Vorliebe für minimalistisches Design, 
                   saubere Typografie und gut geschriebenen Code. 


                  </p>
                </div>
              </div>
              {/* /#2 tab content */}
            </div>
            {/* /Tab: Content */}
          </div>
          {/* /Tabs Shortcode */}
        </div>
      </div>
    </section>
  );
};

export default About;
