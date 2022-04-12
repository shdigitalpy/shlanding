const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Leistungen</h3>
            <h3 className="title">Was ich biete</h3>
            <p className="desc">
              Ich helfe ehrgeizigen Unternehmen wie Ihrem, mehr Gewinn zu erzielen, indem ich Bekanntheit aufbaue, den Web-Traffic steigere, mit Kunden in Kontakt komme und den Gesamtumsatz steigere.

            </p>
          </div>
          {/* /Main Title */}
          {/* Services List */}
          <div className="resumo_fn_service_list">
            <ul>
              
              <li>
                <div className="item">
                  <div className="item_left">
                    <h3>SEO & Content Marketing</h3>
                    <p>
                      Ich führe für Sie SEO-Massnahmen durch oder erstelle eine SEO-Strategie als Ihr persönlicher SEO-Freelancer.
                    </p>
                  </div>
                  <div className="item_right">
                    <p>Stundensatz ab</p>
                    <h3>CHF 99.-- / Stunde </h3>
                  </div>
                </div>
              </li>
              <li>
                <div className="item">
                  <div className="item_left">
                    <h3>UI / UX Beratung</h3>
                    <p>
                      Ich helfe Ihnen bei der Überarbeitung von UI/UX. Bringen Sie Ihr Geschäfts auf das nächste Level. Wir erschaffen zusammen grossartige Erlebnisse für Kunden.
                    </p>
                  </div>
                  <div className="item_right">
                    <p>Preise ab</p>
                    <h3>CHF 129.-- / Stunde </h3>
                  </div>
                </div>
              </li>
              <li>
                <div className="item">
                  <div className="item_left">
                    <h3>Web-Relaunch</h3>
                    <p>
                      Ich helfe Ihnen bei der Überarbeitung von Ihres Onlineshops oder Webseite zu marketingzwecken. Sie kriegen eine moderne Webseite, die Conversions generiert.
                    </p>
                  </div>
                  <div className="item_right">
                    <p>Preise ab</p>
                    <h3>CHF 129.-- / Stunde </h3>
                  </div>
                </div>
              </li>
              <li>
                <div className="item">
                  <div className="item_left">
                    <h3>SEA</h3>
                    <p>
                      Ich richte Ihnen eine Google Ads oder Google Shopping Kampagne sowie ein entsprechendes Retargeting über Ihre Webseite ein.                     </p>
                  </div>
                  <div className="item_right">
                    <p>Stundensatz ab</p>
                    <h3>CHF 99.-- / Stunde </h3>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* /Services List */}
        </div>
      </div>
    </section>
  );
};

export default Services;
