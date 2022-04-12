import { useState } from "react";
import NewsModalbox from "./NewsModalbox";

const News = () => {
  const [modal, setModal] = useState(false);
  const [modalValue, setModalValue] = useState(null);
  const [load, setLoad] = useState(false);
  const [hiddenItem, setHiddenItem] = useState(true);
  const [focusValue, setFocusValue] = useState("");
  const modalValueSet = (value) => {
    setModal(true);
    setModalValue(value);
  };
  const loadValueSet = (e) => {
    e.preventDefault();
    if (hiddenItem) {
      setLoad(true);
      setTimeout(() => {
        setLoad(false);
        setHiddenItem(false);
      }, 2000);
    }
  };
  const focusValueChange = () => {
    if (!hiddenItem) {
      setFocusValue("No more articles found");
    }
  };


  const topics = [

    { "id":11, "update": "25.03.2022", "name": "Video SEO", "url":"https://www.sh-digital.ch/ratgeber/video-seo"},
    { "id":10, "update": "15.03.2022", "name": "Relaunch SEO", "url":"https://www.sh-digital.ch/ratgeber/relaunch-seo"},
    { "id":9, "update": "09.03.2022","name": "SEO-Kosten", "url":"https://www.sh-digital.ch/ratgeber/seo-kosten"},
    { "id":8, "update": "03.03.2022", "name": "Online Shop SEO", "url":"https://www.sh-digital.ch/ratgeber/online-shop-seo"},
    { "id":7, "update": "30.11.2021", "name": "Was ist SEO", "url":"https://www.sh-digital.ch/was-ist-seo"},
    { "id":5, "update": "15.09.2021", "name": "SEO Strategie entwicklen", "url":"https://www.sh-digital.ch/seo-strategie"},
    { "id":4, "update": "03.08.2021", "name": "Wie lange dauert SEO", "url":"https://www.sh-digital.ch/seo-wie-lange-dauert-es"},
    { "id":3, "update": "26.04.2021", "name": "Local SEO Tipps & Checkliste ", "url":"https://www.sh-digital.ch/local-seo"},
    { "id":2, "update": "31.03.2021", "name": "Wie geht man bei einer SEO Analyse vor", "url":"https://www.sh-digital.ch/seo-analyse"},
      
    ]

  return (
    <section id="news">
      
      

      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Tipps & Wissen</h3>
            <h3 className="title">Letzte Beiträge</h3>
          </div>
          {/* /Main Title */}
          {/* Blog List */}
          <div className="resumo_fn_blog_list">
            <ul className="modal_items" data-from="blog" data-count={5}>
              


              {topics.map((topic) =>  (


                
              <li key={topic.id}>
                
                  
                  <div className="title_holder">
                    <p>{topic.update}</p>
                    <h3>
                      <a target="__blank" href={topic.url}>
                       {topic.name}
                      </a>
                    </h3>
                  </div>
                 
            
              </li>

              ))}
                              
            </ul>
            <div className="clearfix" />
            
          </div>
          {/* /Blog List */}
        </div>
      </div>
    </section>
  );
};

export default News;
