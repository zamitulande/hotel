import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

const ImagenHotel = () => {

    const {image} =useStaticQuery(graphql`
    query {
        image: file(relativePath: { eq: "uno.png" }) {
          childImageSharp {
            fluid {
              srcSetWebp
            }
          }
        }
      }   
    
    `)

    console.log(image);
    return ( 
        <h1>imagen aqui</h1>
     );
}
 
export default ImagenHotel;