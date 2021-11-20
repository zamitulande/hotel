import React from 'react';
import {css} from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const EnlaceHome=styled(Link)`
        color:#ffff;
        text-align:center;
        text-decoration:none;
`;

const Footer = ({title}) => {

    const year = new Date().getFullYear();
    return ( 
        <>
        <footer

            css={css`
                background-color: rgba(44,62,80);
                margin-top: 5rem;
                padding: 1rem;
            
            `}
            >
            <div
                
            >
                <EnlaceHome
                    to='/'
                >
                     <h1>Gracias por Visitarnos</h1>  
                </EnlaceHome>
                          
               
                
            </div>
        </footer>
        <p
            css={css`
                text-align:center;
                color:#fff;
                background-color: rgb(33,44,55);
                margin: 0;
                padding: 1rem;
            `}
        >{title}. Todos los derechos Reservados {year} &copy</p>
        </>
     );
}
 
export default Footer;