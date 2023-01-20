import './App.css';

function Footer(prop) {

    const { reference } = prop;

    return (
        <div ref={reference} className="App-footer">


            <h1>Benimle iletişime geçebilirsiniz</h1>
            <a href="#" >👉 aysglbabacan@gmail.com</a>

            {/* <div className="a">
                <a href="#">Personal Blog</a>
                <a href="#">Github</a>
                <a href="#">Linkedin</a>
                
            </div>  */}

        </div>
    );
}

export default Footer;