import React from 'react'

export default function () {


    const [koin, setKoin] = useState([]);
    const coinGetir = async () =>
     {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
        const data = await res.json();
        setKoin(data);
      } 
      catch (e)
       {
        alert("CoinGecko API'si şu an çalışmıyor...");
        alert("CoinGecko API'si şu an çalışmıyor...");

      }
    };



  var data = null;

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });
  
  xhr.open("GET", "https://api.collectapi.com/economy/currencyToAll?int=10&base=USD");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("authorization", "apikey 2iqvPVjk1IyFTovR74PdfX:0AUtoexAJvhjWLWQJ4dTtN");
  
  xhr.send(data);
  

    useEffect(() => {
      coinGetir();
    }, []);


  return (
    <div></div>
  )
}
