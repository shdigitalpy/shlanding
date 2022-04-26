import { useState } from "react";
import axios from 'axios';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';


const Contact = ({ send, setIsSubmit }) => {
const router = useRouter();

/* Form funcitionality */
const { register, handleSubmit, reset, formState: { errors } } = useForm();
const [show, setShow ] = useState(false);
const [active, setActive] = useState(null);
const [form, setForm] = useState({ name: "", email: "",  phone: "", msg: "" });
const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
const { name, email, phone, msg } = form;

const showHide = () => {
    setShow(true);
    
  };

const Submitting = () => {
    setIsSubmit(true);
  };



async function onSubmitForm(values) {
    let config = {
      method : 'post',
      url: `${process.env.NEXT_PUBLIC_API_URL}`,
      headers: {
        'Content-Type' : "application/json",

      },
      data: values,
    };


    try {
      const response = await axios(config);
      
      if(response.status == 200) {
       
        router.push('/')
        showHide();
        Submitting();
        reset();

      }
      
    } catch (errors) {
      console.log(errors);

    }
  }


  const messageformat = "text-red-500 text-sm py-2"

  /* Form funcitionality END */


  const namemessage = "Bitte Namen eingeben";
  const emailmessage = "Bitte E-Mail eingeben";
  const phonemissing = "Bitte Telefon eingeben";
  const messagemissing = "Bitte Nachricht eingeben";
  const emailformatmessage = "Bitte eine richtige E-Mail angeben." 

  return (
    <section id="contact">
      <div className="container">
        <div className="roww resumo_fn_contact">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Kontakt</h3>
            <h3 className="title">Anfrage senden</h3>
            <p className="desc">
              Wenn Sie einen Vorschlag, ein Projekt oder sogar nur „Hallo“ sagen möchten, füllen Sie bitte das untenstehende Formular aus und ich werde Ihnen in Kürze antworten.

            </p>
          </div>
          {/* /Main Title */}
          {/* Contact Form */}
          <form className="contact_form" onSubmit={handleSubmit(onSubmitForm)} action="#" method="POST">
           
            {/* */}
            <div className="items_wrap">
              <div className="items">
                <div className="item half">
                  <div
                    className={`input_wrapper ${
                      active === "name" || name ? "active" : ""
                    }`}
                  >
                    <input
                      onFocus={() => setActive("name")}
                      onBlur={() => setActive(null)}
                     
                      name="name"
                      id="name"
                      type="text"
         
                      {...register('name', { required: {value: true, message: `${namemessage}` } })}
                                    
                       onChange={(e) => onChange(e)}
                    />
                    <span className="moving_placeholder">Name *</span>
                   <span className="messageformat">
                    {errors?.name?.message}
                  </span>
                  </div>
                </div>


                <div className="item half">
                  <div
                    className={`input_wrapper ${
                      active === "email" || email ? "active" : ""
                    }`}
                  >
                    <input
                      onFocus={() => setActive("email")}
                      onBlur={() => setActive(null)}
                      
                      name="email"
                      id="email"
                      type="email"
                      {...register('email', {
                      required : {
                        value: true,
                        message: `${emailmessage}`
                      },
                      pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: `${emailmessage}`
                   },
                   })}
                      onChange={(e) => onChange(e)}
                    />
                    <span className="moving_placeholder">E-Mail *</span>
                  </div>
                 <span className="messageformat">
                    {errors?.email?.message}
                  </span>
                </div>

                <div className="item">
                  <div
                    className={`input_wrapper ${
                      active === "phone" || phone ? "active" : ""
                    }`}
                  >
                    <input
                      onFocus={() => setActive("phone")}
                      onBlur={() => setActive(null)}
                      id="phone"
                      name="phone"
                      type="text"

                      {...register('phone', { required: {value: true, message: `${phonemissing}` } })}

                      onChange={(e) => onChange(e)}
                    />
                    <span className="moving_placeholder">Telefon*</span>
                    <span className="messageformat">
                    {errors?.phone?.message}
                  </span>
                  </div>
                </div>


                <div className="item">
                  <div
                    className={`input_wrapper ${
                      active === "message" || msg ? "active" : ""
                    }`}
                  >
                    <textarea
                      onFocus={() => setActive("message")}
                      onBlur={() => setActive(null)}
                      name="msg"
                      
        
                      id="message"
                      {...register('msg', { required: {value: true, message: `${messagemissing}` } })}
                      onChange={(e) => onChange(e)}
                    />
                    <span className="moving_placeholder">Nachricht *</span>
                    <span className="messageformat">
                    {errors?.msg?.message}
                  </span>
                  </div>
                </div>
                <div className="item">
                  {/* <a id="send_message" href="#">
                    Send Message
                  </a> */}
                  <input
                    className="a"
                    type="submit"
                    id="send_message"
                    value="Senden"
                  />
                </div>
              </div>
            </div>
          </form>
          {/* /Contact Form */}
          {/* Contact Info */}
          <div className="resumo_fn_contact_info">
            <p>Adresse</p>
            <h3>Widenacker 30, 8525 Niederneunforn, Schweiz</h3>
            <p>Phone</p>
            <h3>
              <a href="tel:+41435082913">+41435082913</a>
            </h3>
            <p>
              <a className="fn__link" href="mailto:sandro@sh-digital.ch">
                sandro@sh-digital.ch
              </a>
            </p>
          </div>
          {/* /Contact Info */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
