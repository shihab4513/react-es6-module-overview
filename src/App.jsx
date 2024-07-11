/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Watch from './Components/Watch/Watch'
import { useEffect } from 'react';

function App() {
  // smartwatches.js
  //  const watches = [
  //   { id: 1, name: 'Apple Watch Series 7', price: 399 },
  //   { id: 2, name: 'Samsung Galaxy Watch 5', price: 279 },
  //   { id: 3, name: 'Garmin Fenix 6', price: 549 },
  //   { id: 4, name: 'Fitbit Sense', price: 299 },
  //   { id: 5, name: 'Amazfit GTR 3', price: 179 },
  //   { id: 6, name: 'Huawei Watch GT 3', price: 229 },
  //   { id: 7, name: 'Fossil Gen 6', price: 299 },
  //   { id: 8, name: 'TicWatch Pro 3', price: 299 },
  //   { id: 9, name: 'Withings Steel HR', price: 199 },
  //   { id: 10, name: 'Suunto 7', price: 399 }
  // ];

  const [watches, setWatches] = useState([]);
  // useEffect(()=>{
  //   fetch('watches.json')
  //   .then(res=>res.json())
  //   .then(data=>setWatches(data))
  // },[])
  /*
  In above useEffect code we fetched data form ./public/watches.json local folder then showed in browser
  In below useEffect we stored json data in a github repository then copied the raw link of the folder and used it to fetch data. Its not recommended!.
  */
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/shihab4513/watches-json-data/main/watches.json')
      .then(res => res.json())
      .then(data => setWatches(data))
  }, [])


  return (
    <>

      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }

    </>
  )
}

export default App
