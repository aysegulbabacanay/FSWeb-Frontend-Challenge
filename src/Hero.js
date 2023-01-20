import './App.css';
import GithubLogo from "./github.png";
import LinkedinLogo from "./LinkedIn.png";
import foto from "./selfie1.jpg";



function Hero() {
    return (
        <div className="App-hero">


            <div className="hero-left">

                <div className='isim-line'>
                <h3>Ayşegül Babacan Ay</h3>
                 
                    <hr></hr>
                    
                    </div>
            <div className="kalinyazi">
                        <h1>Yeni şeyler üretmeyi seven , 
                            gelişmeye açık bir yazılımcı </h1>

                    </div>
                    <div className="text">
                        <p>Merhaba, adım Ayşegül. Workintech programına katılıp 6 ay eğitim aldıktan sonra kendimi bu alanda çok fazla geliştirdiğimi düşünüyorum.Birçok proje hayata geçirdim. Bu sayfada benimle ilgili pek çok fikir edinebilirsiniz.Eğer  bir full stack developer arıyorsanız benimle iletişime geçebilirsiniz. </p>
                    </div>
                    <div className="buttons">
                <section className="ilkbutton">
                    <a href="#" >Hire me</a>
                </section>
                <section className="ikincibutton">

                    <img src={GithubLogo} />
                    <a href="https://github.com/aysegulbabacanay" >Github</a>
                </section>

                <section className="ucuncubutton">
                    <img src={LinkedinLogo} />

                    <a href="https://www.linkedin.com/in/ay%C5%9Feg%C3%BCl-babacan-ay-7597811ab/" >Linkedin</a>
                </section>

            </div>
                </div>
           
            <div className="fotom">
                <img src ={foto} width="350" height="400"/>
            </div>
 

        </div>
        
    );
}

export default Hero;