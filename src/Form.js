import { useState } from 'react';

import './App.css';

export default function Form() {


    const [form, setForm] = useState({
        isim: "",
        pozisyon: "",
        tecrübe: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        setForm(e.target.value)
    }


    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
            <div  style={{textAlign: "center", fontSize: "1rem" }}></div>
                <p>
                    <label>Firma İsmi :</label>
              
                    <input
                        type="text" className='inputtext'
                        name="isim"
                        value={form.isim}
                        onChange={handleChange}
                    />
                </p>

                <p>
                    <label>Aradığınız Pozisyon :</label>
              
                    <input
                        type="text" className='inputtext'
                        name="pozisyon"
                        value={form.pozisyon}
                        onChange={handleChange}
                    />
                </p>

                <p>
                    <label>Tecrübe :</label>
               
                    <input
                        type="text" className='inputtext'
                        name="tecrübe"
                        value={form.tecrübe}
                        onChange={handleChange}
                    />
                </p>
                <p>
                <input className='submit' type="submit" value="Teklif Gönder" />
                </p>
            </form>
        </div>
    )
}
