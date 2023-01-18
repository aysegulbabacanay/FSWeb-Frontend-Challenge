import './App.css';


function Profile() {

    return (
        <div className="App-profile">
            
            <hr></hr>

            <h1>Profile</h1>

            <div className="ikililer">
                <div className="ikili1">
                    <h3>Profile</h3>
                    <div className="sorular-cevaplar">
                    <div className="sorular">
                    <p> Doğum tarihi :
                    </p>
                    <p>
                        İkamet Şehri :
                        </p>
                        <p>
                        Eğitim Durumu :
                        </p>
                        <p>
                        Tercih Ettiği Rol :
                      
                        </p>
                       
                        </div>
                        <div className="cevaplar">
                        <p>
                  06.01.1993
                  </p>
                  <p>
                  İstanbul
                  </p>
                  <p>
                  Karadeniz Teknik Ünv. İnşaat Müh. Lisans, 2015
                  </p>
                  <p>
                  FullStack Developer
             </p>
             </div>
             </div>
             
                </div>
                <div className="ikili2">
                    <h3>About me</h3>
                    <p>Bir inşaat mühendisi olarak mezuniyetten sonra sektörde çalışmaya devam ediyordum. Aslında yapmak istediğim meslek bu değildi.
                    Yazılıma hep bir ilgim vardı ve daha sonra Workintech ile tanıştım. 6 aylık yoğun bir programdan geçtim ve yazılımcı olma yolunda emin adımlarla ilerliyorum. 
                     İyi bir yazılımcı olmak için hep kendimi geliştirme odaklıyım. Artık ben de sevdiğim mesleği yapmak istiyorum :)</p>
                </div>
            </div>

        </div>
    );
}

export default Profile;