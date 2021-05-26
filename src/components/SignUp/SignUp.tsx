import React, {useState} from 'react';
import {Form, Button, Card, FormControl, Alert, Container} from 'react-bootstrap';
import 'firebase/auth';
import {Link, useHistory} from 'react-router-dom'
import {useAuth} from "../../contexts/context";
import background from "../../assets/background.jpg";
import beeLogo from "../../assets/swarm.png";

const SignUp = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading,setLoading] = useState<boolean>(false)
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');
    const [error, setError] = useState('');
    const history = useHistory()
    const {signUp,widthSize } = useAuth();

    const handleSubmit =  async () => {
        if (password !== passwordConfirm) {
            alert('Please make sure your passwords match.');
            return setError('Password do not match');
        }
        try {
            await signUp(email,password)
            setError('');
            history.push('/HomePage')
        }
        catch {
            setError('Failed to create account')
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
                        <div style={{width:'50%',height:'50%',borderRadius:'100%',backgroundColor:'fed53d',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <img src={beeLogo} style={{width:widthSize <= 800 ? 50 : 100,height:widthSize <= 800 ? 50 : 100}} />
                        </div>
                    </div>
                    <div className={"w-100"} style={{ maxWidth: 400,marginTop:widthSize <= 800 ? 10 : 0 }}>
                        <Card style={{borderRadius:20,padding:20,borderWidth:0}}>
                            <Card.Body>
                                <h2 className={'text-center mb-4'}>Sign Up</h2>
                                {error && <Alert variant={'danger'}>{error}</Alert> }
                                <Form>
                                    <Form.Group id={'email'}>
                                        <FormControl type={'email'}
                                                     placeholder={'Email'}
                                                     onChange={(item) => setEmail(item.target.value)}
                                                     required/>
                                    </Form.Group>
                                    <Form.Group id={'password'}>

                                        <FormControl type={'password'} placeholder={'Password'}
                                                     onChange={(item) => setPassword(item.target.value)}
                                                     required/>
                                    </Form.Group>
                                    <Form.Group id={'password-confirm'}>

                                        <FormControl type={'password'} placeholder={'Password Confirm'}
                                                     onChange={(item) => setPasswordConfirm(item.target.value)}
                                                     required/>
                                    </Form.Group>
                                    <Button disabled={loading}
                                            onClick={() => handleSubmit()}
                                            size={'lg'}  className={'w-100'} style={{backgroundColor:'#fed53d',color:'black',borderColor:'#fed53d'}}>
                                        Sign Up
                                    </Button>
                                </Form>
                            </Card.Body>
                            <Link to={'/Login'} >
                                <div className={'w-100 text-center mt-3   '} style={{color:'black'}}>
                                    Alrady have an account ?
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




export default SignUp;
