import { Swiper, SwiperSlide } from "swiper/react";
import { customersSliderProps } from "../sliderProps";
const CustomerLight = () => {
  return (
    <section id="customers">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Customers</h3>
            <h3 className="title">Happy People</h3>
          </div>
          {/* /Main Title */}
          {/* Partners */}
          <div className="resumo_fn_partners">
            <ul>
              <li>
                <a href="" rel="noreferrer" target="_blank">
                  <img src="img/trust/luxusgueter.webp" alt="" />
                </a>
              </li>
              <li>
                <a href=""  rel="noreferrer" target="_blank">
                  <img src="img/trust/industrie.png" alt="" />
                </a>
              </li>
              <li>
                <a
                  href=""
                  rel="noreferrer"
                  target="_blank"

                >
                  <img src="img/trust/softwarefirma.webp" alt="" />
                </a>
              </li>
              <li>
                <a
                  href=""
                  rel="noreferrer"
                  target="_blank"

                >
                  <img src="img/trust/swissqrreader.webp" alt="" />
                </a>
              </li>
              <li>
                <a href="" rel="noreferrer" target="_blank">
                  <img src="img/trust/tanzstudio.webp" alt="" />
                </a>
              </li>
              <li>
                <a href="" rel="noreferrer" target="_blank">
                  <img src="img/trust/gastrounternehmen.webp" alt="" />
                </a>
              </li>
              <li>
                <a href="https://themeforest.net/item/appz-mobile-app-landing-react-nextjs-template/34385390" rel="noreferrer" target="_blank">
                  <img src="img/trust/bank.webp" alt="" />
                </a>
              </li>

              <li>
                <a href="" rel="noreferrer" target="_blank">
                  <img src="img/trust/ecommerce.webp" alt="" />
                </a>
              </li>
             
            </ul>
          </div>
          {/* /Partners */}
          {/* Testimonials */}
          <div className="resumo_fn_testimonials">
            <div className="my__nav">
              <a href="#" className="prev">
                <span />
              </a>
              <a href="#" className="next">
                <span />
              </a>
            </div>
            <Swiper {...customersSliderProps} className="owl-carousel">
              <SwiperSlide className="item" key={1} >
                <div className="title_holder">
                  <p className="desc">
                    “ Super professioneller Freelancer, der mein Unternehmen in kürzester Zeit auf die erste Seite bei Google brachte! Danke vielmals, bin froh habe ich Euch gefunden! ”
                  </p>
                  <h3 className="title">Andrea Frey</h3>
                  <h3 className="subtitle">Geschäftsleiterin Frey Handel</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item" key={2}>
                <div className="title_holder">
                  <p className="desc">
                    {`“ Mit Sandro Huber zusammenzuarbeiten ist praktisch ein Selbstläufer. Egal was die Aufgabe ist, es wird angepackt und professionell fertiggestellt. ”`}
                  </p>
                  <h3 className="title">Adriano Raiano</h3>
                  <h3 className="subtitle">CTO & Software Engineer, Locize.com</h3>
                </div>
              </SwiperSlide>
     
              <SwiperSlide className="item" key={3}>
                <div className="title_holder">
                  <p className="desc">
                    "Sandro Huber ist sehr zu empfehlen. Sehr gutes Preis - Leistungsverhältnis. Herr Huber ist sehr kompetent und geht auf die individuellen Bedürfnisse ein."
                  </p>
                  <h3 className="title">Regula Leemann</h3>
                  <h3 className="subtitle">Gründerin, Deintanz.ch</h3>
                </div>
              </SwiperSlide>

              <SwiperSlide className="item" key={4}>
                <div className="title_holder">
                  <p className="desc">
                    "Ich war und bin mit der Dienstleistung von Sandro Huber sehr zufrieden.
Alle meine Anliegen konnten technisch umgesetzt werden und das Alles zeitgerecht.
Auch wird man im Marketing für die Homepage unterstützt. Sehr gute und seriöse Beratung (top)."
                  </p>
                  <h3 className="title">Livio Bonetta</h3>
                  <h3 className="subtitle">Geschäftsleiter Gebo Shop & gastrodichtung.ch</h3>
                </div>
              </SwiperSlide>




              
            </Swiper>
          </div>
          {/* /Testimonials */}
        </div>
      </div>
    </section>
  );
};

export default CustomerLight;
