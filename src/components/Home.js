import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

const Home = ({isSubmit}) => {



  return (
    <section id="home">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">           
          {isSubmit == true ? 

            <>

            <h1>Vielen Dank für die Nachricht. Ich melde mich schnellstmöglich bei Ihnen</h1>
            <br />
            <a href="/">Zurück</a>
            </>

             :
      
             <>
            <h3 className="subtitle">Einführung</h3>
            <h3 className="title">SEO Freelancer</h3>
            <p className="desc">
              Ich bin darauf spezialisiert, den organischen Traffic mit meinen SEO-Strategien zu vervielfachen. Als professioneller Online-Marketing-Freelancer aus der Schweiz, habe ich schon für viele bekannte Unternehmen gearbeitet. 
            </p>
            <img src="img/unterschrift.webp" alt="Unterschrift" />
              </>
            }
          </div>
          {/* /Main Title */}

          
        </div>
      </div>
    </section>
  );
};

export default Home;
