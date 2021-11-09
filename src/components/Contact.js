import React from 'react'
import { API_KEY } from '../Globals'

const Contact = () => {
  return (
    <div>
      <h3>Reach out and contact us</h3>
            <iframe width="600" height="450" style={{border:0}} loading="lazy" allowfullscreen src={`https://www.google.com/maps/embed/v1/place?q=2301%20West%20Broad%20Street%2C%20Cookeville%2C%20TN%2C%20USA&key=${API_KEY}`}></iframe>
    </div>
  )
}

export default Contact
