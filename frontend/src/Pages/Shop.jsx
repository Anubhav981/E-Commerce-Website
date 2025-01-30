import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Shop = () => {

  const [popular, setPopular] = useState([]);
  const [newcollection, setNewCollection] = useState([]);

  const fetchInfo = () => {
    fetch('https://e-commerce-website-backend-neeu.onrender.com/popularinwomen') // Updated URL
      .then((res) => res.json())
      .then((data) => setPopular(data))
    fetch('https://e-commerce-website-backend-neeu.onrender.com/newcollections') // Updated URL
      .then((res) => res.json())
      .then((data) => setNewCollection(data))
  }

  useEffect(() => {
    fetchInfo();
  }, [])

  return (
    <div>
      <Hero />
      <Popular data={popular} />
      <Offers />
      <NewCollections data={newcollection} />
      <NewsLetter />
    </div>
  )
}

export default Shop;
