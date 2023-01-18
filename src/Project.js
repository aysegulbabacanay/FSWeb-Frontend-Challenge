import './App.css';
import proje1 from"./Rectangle 41.png";
import pizza from "./pizza.png";
import akivite from "./aktivite.png";
import todolist from "./todolist.png";
// import {Link} from "react-router-dom"

function Project(prop) {

    const {reference}=prop;
 
    return (
        <div ref ={reference} className="App-project">
            <hr></hr>

            <h1>Projects</h1>
            <div className="proje-list">
                <div className="proje1">
                    <h1>Todo List Projesi</h1>
                    <img src={todolist} width="485" height="250" />
                    <p>Bu proje hepimizin bildiği bir todolist uygulamasıdır.İçinde bir form elemanı bulundurur ve yeni bir todo eklenebilir. Gerçekleşen todo lar için ise "OK" yazdırabiliriz.Aynı zamanda todo listesinde bu gerçekleşenleri de gizleyebilme imkanı sunuyor.</p>
                    <div className="buttonlar" >
                        <button>Axios</button>
                        <button>React</button>
                        <button>JS</button>
                        <div className="miniklink">
                            <a href="https://github.com/aysegulbabacanay/FSWeb-S9G1-components/tree/main/frontend">Github</a>
                            <a href="https://vercel.com/aysegulbabacanay/fs-web-todo-list-app">Web Site</a>
                        </div>
                    </div>
                </div>
                <div className="proje2">
                    <h1>Pizza Projesi</h1>
                    <img src={pizza} width="450" height="250" />
                    <p>Bu proje  kendi pizzanı yapabileceğin bir form sayfasına yönlendiriyor. Daha sonra pizza ismi,boyutu,çıkarmak istediğiniz malzemeleri seçip not girdikten sonra "siparişe ekle" butonu ile size sipariş özeti kısmını gösteriyor.</p>
                    <div className="buttonlar" >
                        <button>React</button>
                        <button>Axios</button>
                        <button>Yup</button>
                        <div className="miniklink">
                            <a href="https://github.com/aysegulbabacanay/FSWeb-S7-Challenge">Github</a>
                            <a href="https://fs-web-pizza-projesi-fq2oifcwb-aysegulbabacanay.vercel.app/">Web Site</a>
                        </div>
                    </div>
                </div>

                <div className="proje3">
                    <h1>Bored API Projesi</h1>
                    <img src={akivite} width="485" height="250" />
                    <p>Bu proje sıkılan insanlara yeni aktiviteler sunuyor. Aktivite getir kısmında aktiviteleri sıralarken,kişi sayısı girerek de kaç kişi ile bu aktiviteyi gerçekleştireceğinize dair seçenek sunuluyor. Bu aktiviteleri storeda yazdırıp istediğimizde de silme özelliğine sahip bir projedir. </p>
                    <div className="buttonlar" >
                        <button>Axios</button>
                        <button>React</button>
                        <button>Redux</button>
                    </div>
                    <div className="miniklink">
                        <a href="https://github.com/aysegulbabacanay/FSWeb-S10G3-Async-Redux">Github</a>
                        <a href="https://fs-web-bored-api.vercel.app/">Web Site</a>
                    </div>
                </div>




            </div>
            <hr></hr>
        </div>
    );
}

export default Project;