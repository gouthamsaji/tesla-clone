import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import Footer from './Footer';

function Home() {
  return (
    <Container>
        <Section
            title="Model S"
            description="Starts from $68,490"
            backgroundImg="Homepage-Model-S-Desktop-US.png"
            leftBtnText="Order Now"
            rightBtnText="Demo Drive"
        />
        <Section
            title="Model X"
            description="Starts from $65,990"
            backgroundImg="Homepage-Model-X-Desktop-US.png"
            leftBtnText="Order Now"
            rightBtnText="Demo Drive"
        />
        <Section 
            title="Model 3"
            description="0% APR With Purchase of FSD (Supervised)"
            backgroundImg="Homepage-Model-3-Desktop-US.png"
            leftBtnText="Order Now"
            rightBtnText="Demo Drive"
        />
        <Section 
            title="Model Y"
            description="0% APR With Purchase of FSD (Supervised)"
            backgroundImg="Homepage-Model-Y-Desktop-US-v2.png"
            leftBtnText="Order Now"
            rightBtnText="Demo Drive"
        />
        <Section 
            title="Solar Panel"
            description="Schedule a Virtual Consultation"
            backgroundImg="Homepage-SolarPanels-01-Desktop.jpeg"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
        />
        <Section 
            title="Solar Roof"
            description="Produce Clean Energy From Your Roof"
            backgroundImg="Homepage-SolarRoof-Desktop-US.png"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
        />
        <Section 
            title="Powerwall"
            backgroundImg="Homepage-Powerwall-Desktop-US.png"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
        />
        <Section 
            title="Accessories"
            backgroundImg="Homepage-Accessories-Desktop-US.png"
            leftBtnText="Shop Now"
        />
        <Footer></Footer>
    </Container>
  )
}

export default Home

const Container = styled.div`
    height:100vh;
`