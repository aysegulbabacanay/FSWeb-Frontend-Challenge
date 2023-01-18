import { useState } from 'react';
import App from "./App";
import './App.css';

export default function Form() {
     

    const[form,setForm]=useState({
       isim :"",
       pozisyon:"",
       tecrübe:""
    })

const handleSubmit =(e)=>{
e.preventDefault();
}

const handleChange=(e)=>{
setForm(e.target.value)
}

  
    return (
        <div>
<form onSubmit ={handleSubmit}>
    <p>
<label>Firma İsmi :</label>
<input 
type="text"
name="isim"
value={form.isim}
onChange={handleChange}
/>
</p>
<p>
<label>Aradığınız Pozisyon :</label>
<input 
type="text"
name="pozisyon"
value={form.pozisyon}
onChange={handleChange}
/>
</p>
<p>
<label>Tecrübe :</label>
<input 
type="text"
name="tecrübe"
value={form.tecrübe}
onChange={handleChange}
/>
</p>
<input type="submit" value ="Teklif Gönder"/>
</form>
        </div>
    )
}
