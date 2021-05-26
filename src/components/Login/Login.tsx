import React, {useEffect, useState} from 'react';
import 'firebase/auth';
import {Form, Button, Card, FormControl, Alert, Container} from 'react-bootstrap';
import background from '../../assets/background.jpg';
import beeLogo from '../../assets/swarm.png';
import {Link, useHistory} from 'react-router-dom';
import {useAuth} from "../../contexts/context";
import "bootstrap/dist/css/bootstrap.min.css"
import exit from "../../assets/exit.png";

const Login = () => {
    const [authenticating, setAuthenticating] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [loading,setLoading] = useState<boolean>(false)
    const history = useHistory()
    const {login,currentUser ,widthSize} = useAuth();

    const handleSubmit = async () => {
        try {
            setError('')
            setLoading(true);
            await login(email,password)
            history.push('/HomePage');

        } catch {
            setError ("Failed To Log In")
        }
        setLoading(false)
    }
    return (
        <div className={'w-100'} style={{backgroundImage:`url(${background})`,backgroundSize:'cover'}}>
            <Container
                className="d-flex w-100 align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}>

                <div className={'w-75'} style={{display:'flex',backgroundColor:'#f1a167',padding:20,flexDirection:widthSize <= 800 ? 'column' : 'row',justifyContent:'space-between',alignContent:'space-between',borderRadius:20,}}>
                    <div className={"w-100"} style={{ maxWidth: "400px",minHeight:100,backgroundColor:'#fed53d',backgroundSize:'cover' ,borderRadius:20,marginRight:20 ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <div style={{width:'50%',height:'50%',borderRadius:'100%',backgroundColor:'#fed53d',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <img src={beeLogo} style={{width:widthSize <= 800 ? 50 : 100,height:widthSize <= 800 ? 50 : 100}} />
                        </div>
                    </div>
                    <div className={"w-100"} style={{ maxWidth: 400,marginTop:widthSize <= 800 ? 10 : 0 }}>
                        <Card style={{borderRadius:20,padding:20,borderWidth:3,borderColor:'#f1a167'}}>
                            <Card.Body >
                                <h2 className={'text-center mb-4'}>Login</h2>
                                {error && <Alert variant={'danger'}>{error}</Alert> }
                                <Form>
                                    <Form.Group  id={'email'}>
                                        <FormControl type={'email'}
                                                     placeholder={'Email'}
                                                     onChange={(item) => setEmail(item.target.value)}
                                                     required/>
                                    </Form.Group>
                                    <Form.Group id={'password'}>
                                        <FormControl
                                            type={'password'} placeholder={'Password'}
                                            onChange={(item) => setPassword(item.target.value)}
                                            required/>
                                    </Form.Group>

                                    <Button size={'lg'}  className={'w-100'} style={{backgroundColor:'#fed53d',color:'black',borderColor:'#fed53d'}} disabled={loading}
                                            onClick={() => {
                                                handleSubmit();
                                                localStorage.setItem('loginData' , email);
                                            }}
                                    >Login</Button>
                                </Form>
                            </Card.Body>
                            <Link to={'/SignUp'} >
                                <div className={'w-100 text-center mt-5 mt-lg-8   '} style={{color:'black'}}>
                                    SIGN UP
                                </div>
                            </Link>
                        </Card>
                    </div>
                </div>
            </Container>

            <div className={'position-fixed font-weight-bolder'} style={{width:'100%',fontSize:20,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:30,backgroundColor:'transparent',bottom: 60}}>
                   Created by Can Cati
                </div>


        </div>
    );
};

export default Login;
