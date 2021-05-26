import React,{useEffect,useState} from "react";
import {useAuth} from "../../contexts/context";
import {Link,} from 'react-router-dom'
import Flower from '../../assets/lotus.png';
import City from '../../assets/city.png';
import Nature from '../../assets/leaf-black-natural-shape.png';
import User from '../../assets/user.png';
import BeeLogo from '../../assets/swarm.png'

interface props  {
    user?:any,
}

const NavBar:React.FunctionComponent<props> = (user:any) => {
    const [scrollY, setScrollY] = useState<any>(0);
    const {currentUser,categoryChange} = useAuth();

    function logit() {
        setScrollY(window.pageYOffset);
    }

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", logit);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", logit);
        };
    },[scrollY]);

    return (
        <div style={{width:scrollY <= 50 ? '100%' : '50%',minWidth:400,top: scrollY <= 50 ? 0 : window.innerHeight -100,display:'flex',flexDirection:'row',justifyContent:'space-between', backgroundColor:'#fed53d',height:90,transition: scrollY <= 50 ? '1s' : '1s',left:0,right:0,zIndex:2,margin:"auto",borderTopLeftRadius:scrollY <= 50 ? 0 : 30,borderTopRightRadius:scrollY <= 50 ? 0 : 30 ,borderBottomLeftRadius: scrollY <= 50 ? 0 : 30,borderBottomRightRadius: scrollY <= 50 ? 0 : 30,}}
             className={'position-sticky '}>
            <Link style={{width:'10%',display:'flex',justifyContent:'flex-start',alignItems:'flex-start',paddingLeft:20}} to={'/HomePage'}>
                <div style={{width:'100%',display:'flex',borderRadius:scrollY <= 50 ? 0 : 30 ,transition: scrollY <= 50 ? '1s' : '1s',justifyContent:'center',alignItems:'center',height:'100%'}}>
                    <div><img src={BeeLogo} style={{width:32,height:32}}/></div>

                </div>
            </Link>

            <div style={{width:'60%',display:'flex',justifyContent:'space-between',borderRadius:scrollY <= 50 ? 0 : 30 ,transition: scrollY <= 50 ? '1s' : '1s',alignItems:'center',height:'100%'}}>
                <Link onClick={() => categoryChange('flower')} style={{width:'33%',display:'flex',justifyContent:'center',}} to={'/HomePage'} ><div style={{width:'33%',display:'flex',justifyContent:'center',}}><div><img src={Flower} style={{width:32,height:32}}/></div></div></Link>
                <Link onClick={() => categoryChange('city')} style={{width:'33%',display:'flex',justifyContent:'center',}} to={'/HomePage'}  > <div style={{width:'33%',display:'flex',justifyContent:'center',}}><div><img src={City} style={{width:32,height:32}}/></div></div></Link>
                <Link onClick={() => categoryChange('nature')} style={{width:'33%',display:'flex',justifyContent:'center',}} to={'/HomePage'}> <div style={{width:'33%',display:'flex',justifyContent:'center',}}><div><img src={Nature} style={{width:32,height:32}}/></div></div></Link>
            </div>
            <Link id={'Link'} to={'/About'} style={{minWidth:'10%',color:'#BBBBBB' , display:'flex' ,justifyContent:'flex-end',paddingRight:20,}} >
                <div style={{display:'flex',flexDirection:'column',borderRadius:scrollY <= 50 ? 0 : 30 ,transition: scrollY <= 50 ? '1s' : '1s',justifyContent:'center',alignItems:'center',height:'100%'}}>
                    <img src={User} style={{width:32,height:32}}/>
                    {scrollY <= 50 ?   <div style={{fontSize:15 ,color:'black'}}>{currentUser.email.split('@')[0]}</div> : null }

                </div>
            </Link>
        </div>

    )
}

export default NavBar
