import {createContext, useContext, ReactNode, useState, useEffect} from "react";
import app from '../firebase';

type authContextType = {
    category: string;
    photos: string[];
    currentUser:any;
    login: (email:string,password:string) => void;
    logout: () => void;
    signUp: (email:string,password:string)  => void;
    categoryChange: (categoryName:string) => void;
};

const authContextDefaultValues: authContextType = {
    category: '',
    photos:[],
    currentUser:null,
    login: (email:string,password:string) => {},
    logout: () => {},
    categoryChange:(categoryName:string) => {},
    signUp: (email:string,password:string) => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
    return useContext(AuthContext);
}

type Props = {
    children: ReactNode;
};

export function AuthProvider({ children }: Props) {

    const auth =app.auth();
    const [category, setCategory] = useState<string>('city');
    const [currentUser, setCurrentUser] = useState<any>(null);
    const [photos, setPhotos] = useState<string[]>([]);

    useEffect(() => {
        fetch(`https://api.pexels.com/v1/search?query=${category}&per_page=80`,{
            headers: {
                Authorization: "563492ad6f9170000100000153d775d742e94b5dab0d57af7da7d438"
            }
        }).then(resp => resp.json()
        )
            .then(data => {
                setPhotos(data.photos)
            })
    }, []);

    useEffect(() => {
        async  function fetchMyAPI() {
            let response = await fetch(`https://api.pexels.com/v1/search?query=${category}&per_page=80`,{
                headers: {
                    Authorization: "563492ad6f9170000100000153d775d742e94b5dab0d57af7da7d438"
                }
            }).then(resp => resp.json()
            ).then(data => {
                setPhotos(data.photos)
            })
        }
        fetchMyAPI()

    }, [category]);

    const login = (email:string,password:string) => {
        return auth.signInWithEmailAndPassword(email,password)
    };

    const signUp = (email:string,password:string) => {
        return  auth.createUserWithEmailAndPassword(email,password)
    }

    const logout = () => {
        return  auth.signOut()
    };

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            // ts error here
            setCurrentUser(user);
        });
    }, []);


    const categoryChange = (changeName:string) =>  {
        setCategory(changeName)
    }

    const value = {
        category,
        photos,
        currentUser,
        categoryChange,
        login,
        logout,
        signUp,
    };

    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}
