import React from 'react';
import {Button, Card, Container} from 'react-bootstrap';
import background from '../../assets/background.jpg';
import Photo from  '../../assets/Profil2.png';
import Behance from '../../assets/behance.png';
import Linkedin from '../../assets/linkedin.png';
import Git from '../../assets/github.png';
import {Link,} from 'react-router-dom'

const AboutMePage = () => {
    return (
        <div className={'w-100'} style={{backgroundImage:`url(${background})`,backgroundSize:'cover'}}>
            <Container
                className="w-100 d-flex flex-column align-items-center justify-content-center"
                style={{ minHeight: "100vh", }}>
                <div className={'w-75'} style={{display:'flex',backgroundColor:'#f1a167',padding:20,justifyContent:'space-between',borderRadius:20,}}>
                    <div className={"w-100"} style={{ maxWidth: "400px",backgroundColor:'#fed53d',backgroundSize:'cover' ,borderRadius:20,marginRight:20 ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <div style={{width:'50%',height:'50%',borderRadius:'100%',backgroundColor:'#fed53d',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <img src={Photo} style={{width:250,height:350,marginBottom:50}} />
                        </div>
                    </div>
                    <div className={"w-100"} style={{ maxWidth: 400,minWidth:200 }}>
                        <Card style={{borderRadius:20,padding:20,borderWidth:3,borderColor:'#f1a167'}}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum ex sit amet egestas blandit. Aliquam diam quam, varius sit amet vehicula vitae, ornare vitae elit. Phasellus dapibus, tortor at pharetra placerat, tellus ante tincidunt tortor, sed ullamcorper velit nibh in lectus. Duis lobortis accumsan arcu ut eleifend. Nulla id condimentum nunc, quis mollis turpis. Suspendisse maximus sapien eget purus placerat scelerisque. Maecenas mollis venenatis elit at tincidunt.
                            </p>
                        </Card>
                        <Link to={'/HomePage'}>
                            <Button size={'lg'}  className={'w-100'} style={{backgroundColor:'#fed53d',color:'black',borderRadius:10,marginTop:20,borderColor:'#fed53d'}}
                            >Go Gallerry</Button>
                        </Link>
                    </div>
                </div>
                <div style={{backgroundColor:'transparent',width:300,height:70,paddingInline:10,marginTop:20,display:'flex' ,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <a href={'https://github.com/mahmuutcaan'} target={'_blank'}>
                        <img src={Git} style={{backgroundColor:'transparent',width:60,height:60,borderRadius:60}}/>
                    </a>
                    <a href={'https://www.linkedin.com/in/mahmutcancati/'} target={'_blank'}>
                        <img src={Linkedin} style={{backgroundColor:'transparent',width:60,height:60,borderRadius:60}}/>
                    </a>
                    <a href={'https://www.behance.net/canat'} target={'_blank'}>
                        <img src={Behance} style={{backgroundColor:'transparent',width:60,height:60,borderRadius:60}}/>
                    </a>


                </div>
            </Container>
        </div>
    );
};

export default AboutMePage;
