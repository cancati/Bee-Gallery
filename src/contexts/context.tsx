import {createContext, useContext, ReactNode, useState, useEffect} from "react";
import app from '../firebase';

type authContextType = {
    category: string;
    photos: string[];
    widthSize:number;
    scrollHeight:number;
    currentUser:any;
    login: (email:string,password:string) => void;
    logout: () => void;
    signUp: (email:string,password:string)  => void;
    categoryChange: (categoryName:string) => void;
};

const authContextDefaultValues: authContextType = {
    category: '',
    photos:[],
    widthSize:0,
    scrollHeight:0,
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
    const [widthSize, setWidthSize] = useState(window.innerWidth);
    const [scrollHeight, setScrollHeight] = useState<any>(0);



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

    const updateWidth = () => {
        setWidthSize(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    });

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
        });
    }, []);

    function getScrollHeight() {
        setScrollHeight(window.pageYOffset);
    }

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", getScrollHeight);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", getScrollHeight);
        };
    },[scrollHeight]);


    const categoryChange = (changeName:string) =>  {
        setCategory(changeName)
    }

    const value = {
        category,
        widthSize,
        scrollHeight,
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
