import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Routes, Route} from 'react-router-dom'
import Coins from './components/Coins';
import Navbar from './components/Navbar';
import Coin from './routes/Coin'
import './index.css'


function App() {
  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&per_page=10&page=1'

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data);
      setCoins(response.data)
    }).catch((error => {
      console.log(error)
    }))
  }, [])

  return (
    <>
    <Navbar/>
    <Routes  >
      <Route path='/cryptoinfo-react-app/' element={<Coins coins = {coins}/>}/>
      <Route path='/cryptoinfo-react-app/coin' element={<Coin/>}>
        <Route path=':coinId' element={<Coins/>}/>
      </Route>
    </Routes>
    
    </>
  );
}

export default App;
