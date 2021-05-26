import React from "react";
import { useAuth } from "../../contexts/context";
import Card from "../Card/Card";
import NavBar from '../Navbar/NavBar'
import Profiljpg from '../../assets/profile-pic.png'
import './Home.css'
import {Link, useHistory,} from 'react-router-dom'


const HomePage = () => {
    const {currentUser,photos} = useAuth();
    const user = currentUser.email;
    const history = useHistory()

    console.log(photos.length)
    return (
        <>
            {photos.length != 0 ?  <div className={'w-100 '} style={{backgroundColor:'#fed53d'}} >
                <NavBar user={user} />
                <div className={'flex-xl-wrap flex row w-90'} style={{backgroundColor:'#fed53d'}} >
                    {photos.map((item ) => {return (<Card item={item}/>)})}
                </div>
                <Link  to={'/About'}>
                    <div id={'Profil'} className={'position-sticky'} style={{width:'20%',height:80 ,display:'flex',alignItems:'center',borderRadius:50,backgroundColor:'#f1a167',left:20,bottom:20}}>
                        <div  style={{width:70,height:70 ,borderRadius:50,backgroundColor:'white',display:'flex',alignItems:'center',justifyContent:'center',left:20,marginLeft:10,bottom:20}}>
                            <img  src={Profiljpg} style={{width:64,height:64}} />
                        </div>
                        <div className={'font-weight-bold ml-3'}>
                            About Me ?
                        </div>
                    </div>
                </Link>
            </div> :  <div className={'w-100 '} style={{backgroundColor:'#fed53d'}} >
                <NavBar user={user} />
                <div className={'flex-xl-wrap flex row w-90 p-5 font-weight-bold'} style={{minHeight:'80vh',backgroundColor:'#fed53d',fontSize:40,justifyContent:'center',display:'flex',alignItems:'center'}} >
                    Please Try Again
                </div>

                <div id={'Profil'} className={'position-sticky'} style={{width:'20%',minWidth:'20%',height:80 ,display:'flex',alignItems:'center',borderRadius:50,backgroundColor:'#f1a167',left:20,bottom:20}}>
                    <Link to={'/AboutMe'}> <div  style={{width:70,minWidth:70,height:70 ,borderRadius:50,backgroundColor:'black',display:'flex',alignItems:'center',justifyContent:'center',left:20,marginLeft:10,bottom:20}}>
                        <img src={Profiljpg} style={{width:64,height:64}} />
                    </div> </Link>
                    <div className={'font-weight-bold ml-3'}>
                        <Link to={'/AboutMe'}>About Me ? </Link>
                    </div>
                </div>

            </div> }



        </>
    );
};

export default HomePage
