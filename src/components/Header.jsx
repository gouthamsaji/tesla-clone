import React,{useState} from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

function Header() {

    const [burgerStatus,setBurgerStatus] = useState(false);


  return (
    <Container>
        <a>
            <img src="/images/tesla-logo.png" alt="tesla logo" width={100} />
        </a>
        <Menu>
            <a href="#">Vehicles</a>
            <a href="#">Energy</a>
            <a href="#">Charging</a>
            <a href="#">Discover</a>
            <a href="#">Shop</a>
            <a href="#">We, Robot</a>
        </Menu>
        <RightMenu>
            <img src="/images/help-logo.png" alt='help' width={23} height={20}/>
            <img src="/images/browser-logo.png" alt='help' width={23} height={20}/>
            <img src="/images/user-logo.png" alt='help' width={23} height={20}/>
            <CustomMenu onClick={()=>setBurgerStatus(true)} />
        </RightMenu>
        <BurgerNav show={burgerStatus}>
            <CloseWrapper>
            <CustomClose />
            </CloseWrapper>
            <li><a href="#">Log in</a></li>
            <li><a href="#">Sign up</a></li>
        </BurgerNav>
        
    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    padding: 0 20px;
    background-color: rgba(0, 0, 0, 0.5);
    width:100vw;
    z-index:1;
`

const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;

    a{
        padding:0 10px;
        font-size:14px;
        flex-wrap:no-wrap;
    }
`

const RightMenu = styled.div`
    img{
        margin:5px;
        cursor:pointer;
    }
`

const BurgerNav = styled.div`
    position:fixed;
    top:0;
    right:0;
    background-color: rgba(255, 255, 255, 0.3);
    width:200px;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align:start;
    transform:${props=>props.show?'translateX(100%)':'translateX(100%)'};

    li{
        padding:15px 0;
        border-bottom:1px solid rgba(0,0,0, 0.2);
    }
`

const CustomClose = styled(CloseIcon)`
    cursor:pointer;
`
const CloseWrapper = styled.div`
    display:flex;
    justify-content:flex-end;
`

const CustomMenu = styled.div`
`