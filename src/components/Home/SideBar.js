import React from 'react'
import styled from 'styled-components'
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import VerticalAlignBottomIcon from '@material-ui/icons/VerticalAlignBottom';
import LensIcon from '@material-ui/icons/Lens';


function SideBar() {
    return (
        <SideBarContainer>
            <Header>
                <img src="/images/ppic.png" alt="profile pic" />
                <h4>Bunny</h4>
                <SyncAltIcon/>
            </Header>
            <Scrollpart>
            <Notification>
                <h4><span><LensIcon/></span>
                    Notifications</h4>
                <ChevronRightIcon/>
            </Notification>
            <Download>
                <VerticalAlignBottomIcon/>
                <h4>My Downloads</h4>
            </Download>
            <List>
                <h4>Home</h4>
                <h4>Dramas</h4>
                <h4>Thriller Movies</h4>
                <h4>Independent Movies</h4>
                <h4>Horror Movies</h4>
                <h4>Children & Family Movies</h4>
                <h4>TV Shows</h4>
                <h4>Romantic Movies</h4>
                <h4>Comedies</h4>
                <h4>Sci-Fi & Fantasy</h4>
                <h4>Music & Musicals</h4>
                <h4>Award-Winning Films</h4>
                <h4>Action & Adventure</h4>
                <h4>Documentaries</h4>
                <h4>Hollywood Movies</h4>
                <h4>Available for Download</h4>
                <h4>International Movies</h4>
                <h4>Indian Movies</h4>
            </List>
            </Scrollpart>
        </SideBarContainer>
    )
}

export default SideBar;

const SideBarContainer = styled.div`
    width:40vh;
    height: 91vh;
    /* background-color:var(--main-color); */
    background-color: #1b1b1b;
    opacity:1;
    color: white;
    position: fixed;
    top:9vh;
    z-index: 1;
    
`;

const Header = styled.div`
    display:flex;
    /* background-color: red; */
    padding: 15px 20px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 3px solid black;
    > img{
        width:58px;
        height:55px;
        cursor: pointer;
        opacity:0.9;
    }
    > .MuiSvgIcon-root{
        font-size: 24px;
        /* margin-top: 10px; */
        cursor: pointer;
    }
    > h4 {
        /* margin-top: 10px; */
        font-size: 21px;
        margin-right:100px;
    }
`;
const Scrollpart = styled.div`
    overflow-y: scroll;
    ::-webkit-scrollbar{
        width:5px;
        scroll-behavior:smooth;
    }
    ::-webkit-scrollbar-thumb{
        background-color: #504f4f;
    }
    ::-webkit-scrollbar-track{
        background-color: var(--main-color);
    }

`;


const Notification = styled.div`
    display:flex;
    padding: 15px 20px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 3px solid black;
    > h4{
        >span{
            > .MuiSvgIcon-root{
                font-size: 10px;
                color:red;
                margin-right:8px;
            }
        }
    }
    > .MuiSvgIcon-root{
        cursor: pointer;
    }
`;
const Download = styled.div`
    display:flex;
    padding: 15px 20px;
    align-items: center;
    border-bottom: 3px solid black;
    cursor: pointer;
    > .MuiSvgIcon-root{
        font-size: 20px;
        margin-right: 8px;
        cursor: pointer;
    }

`;
const List = styled.div`
    display:flex;
    height:64.7vh;
    align-items: flex-start;
    flex-direction: column;
    
    > h4{ 
        padding: 21px 20px;
        width:100%;
        cursor: pointer;
        position: relative;
    }
    > h4:hover{
        background-color: #292727;
        &:before{
            content: "";
            width: 4px;
            height: 100%;
            position:absolute;
            left: 0px;
            top:0;
            background-color: red;
        }
    }
    
`;
