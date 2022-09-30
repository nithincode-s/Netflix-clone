import { Search } from '@material-ui/icons'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from 'react'
import styled from 'styled-components'
import SideBar from './SideBar';
const Nav = (props) => {

    const [isscrolled, setScroll] = useState(false);

    window.onscroll = ()=>{
        setScroll(window.pageYOffset <= 100 ? false : true);
        return ()=> window.onscroll = null;
    }

    function OpenMenu(){
        props.openfun(!props.open);
        console.log(props.open);
    }

    return (
        <>
        {
            isscrolled ? (
                <NavContainerScrolled>
                    <Main>
                        <Left>
                            <MenuIcon onClick={OpenMenu} />
                            <Logo src="images/logo.svg"/>
                            <Options>
                                <span>Home</span>
                                <span>Series</span>
                                <span>Movies</span>
                                <span>Anime</span>
                                <span>MyList</span>
                            </Options>
                        </Left>
                        <Right>
                            <Search/>
                            <Settings>
                                <MoreHorizIcon/>
                                <DropDown>
                                    <h4>Settings</h4>
                                    <h4>Logout</h4>
                                </DropDown>
                            </Settings>
                        </Right>
                    </Main>
                </NavContainerScrolled>
    
            )
            :(
                <NavContainer>
                    <Main>
                        <Left>
                            <MenuIcon onClick={OpenMenu} />
                            <Logo src="images/logo.svg"/>
                            <Options>
                                <span>Home</span>
                                <span>Series</span>
                                <span>Movies</span>
                                <span>Anime</span>
                                <span>MyList</span>
                            </Options>
                        </Left>
                        <Right>
                            <Search/>
                            <Settings>
                                <MoreHorizIcon/>
                                <DropDown>
                                    <h4>Settings</h4>
                                    <h4>Logout</h4>
                                </DropDown>
                            </Settings>
                        </Right>
                    </Main>
                </NavContainer>
    
            )
        }
        </>
    )
}
export default Nav;
const NavContainerScrolled = styled.div`
    color: white;
    font-size: 14px;
    background-color: var(--main-color);
    position: fixed;
    /* background:linear-gradient(to top, transparent 0%, rgb(0,0,0,0.3) 50%); */
    width:100%;
    z-index: 100;

`;
const NavContainer = styled.div`
    color: white;
    font-size: 14px;
    /* background-color: var(--main-color); */
    position: fixed;
    background:linear-gradient(to top, transparent 0%, rgb(0,0,0,0.3) 40%);
    width:100%;
    z-index: 100;

`;
const Main = styled.div`
    padding: 0px 30px;
    display: flex;
    align-items: center;
    height: 9vh;
    justify-content: space-between;
`;
const Left = styled.div`
    display: flex;
    align-items: center;
    /* background-color: blue; */
    height: 9vh;
    padding-right: 10px;
    > .MuiSvgIcon-root{
        font-size:30px;
        cursor: pointer;
    }
`;
const Logo = styled.img`
    margin-left:20px;
    display:flex;
    height:100%;
    cursor: pointer;
`;
const Options = styled.div`
    display: flex;
    /* margin-left: 30px; */
    > span{
        margin-left: 20px;
        cursor: pointer;
    }

`;

const Right = styled.div`
    /* background-color: red; */
    display: flex;
    align-items: center;
    height: 9vh;
    /* position: relative; */
    justify-content: center;
    > .MuiSvgIcon-root{
        font-size: 25px;
        margin-right:20px;
        cursor: pointer;
    }
    padding:2px;
`;

 const DropDown = styled.div`
    position: absolute;
    top:48px;
    right: 0px;
    background-color: var(--main-color);
    padding: 10px;
    font-size: 14px;
    color:white;
    width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0; 

 `;

const Settings = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    > .MuiSvgIcon-root{
        font-size: 25px;
        margin-right:20px;
        cursor: pointer;
        width:100%;
    }
    &:hover{
        ${DropDown}{
            opacity: 1;
        }
    }
`;