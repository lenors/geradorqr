import QRCode from 'react-qr-code'
import { useState } from 'react';
import './App.css';
import QRCodelink from 'qrcode';




function handleGenerate(Link_url){
  QRCodelink.toDataURL(Link_url,{
    width:600,
    margin:3
  }, function(err,url){
    setQrcodeLink(url);
  })
}


function App() {
  const [Link, setLink] = useState('')
  const [qrcodeLink, setQrcodeLink] = useState('')

function handleQrcode(e){
  setLink(e.target.value);
  handleGenerate(e)
}

  return (
    <div className="container">
      <QRCode
      value={Link}
      />




      <input 
      className="input"
      placeholder="Digite seu Link..."
      value={Link}
      onChange={ (e) => handleQrcode(e)}
      />

      <a href={qrcodeLink} download={`qrcode.jpeg`}>Baixar QrCode</a>
 <h1>Lenors</h1>

    </div>
  );
}

export default App;
