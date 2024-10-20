import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <Footerx>
        <p style={{fontSize:'12px',textAlign:'justify'}}>
        All credits goes to Tesla. I have created this webpage exclusively for educational purposes, with the utmost respect for Tesla and its original website. Credits go to Tesla for their innovative designs and branding, which serve as inspiration for this project. I do not intend to replicate or infringe upon any of their trademarks or proprietary styles. My goal is to provide a platform for learning and exploration, highlighting the remarkable advancements in technology and sustainability that Tesla exemplifies. This endeavor aims to foster understanding and appreciation of Tesla's contributions to the automotive industry while adhering to ethical standards of originality and respect for intellectual property. While I've drawn inspiration from Tesla's website, I've ensured that this webpage remains original and respects their intellectual property. 
        </p>
        <h6>
            <ul style={{listStyle:'none', display:'flex', cursor:'pointer'}}>
                <li style={{ marginRight: '20px' }}>Tesla © 2024</li>
                <li style={{ marginRight: '20px' }}>Privacy & Legal</li>
                <li style={{ marginRight: '20px' }}>Vehicle Recalls</li>
                <li style={{ marginRight: '20px' }}>Contact</li>
                <li style={{ marginRight: '20px' }}>News</li>
                <li style={{ marginRight: '20px' }}>Get Updates</li>
                <li>Locations</li>
            </ul>
        </h6>
    </Footerx>
  )
}

export default Footer

const Footerx = styled.div`
    height: 50vh;
    width: 100vw;
    background-color: black;
    padding: 100px 180px 60px 180px;
    color:black;
    text-decoration: none;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`