import { useEffect, useState } from "react"
import { authApi } from "../../datasources/remote/auth/authApi"
import { AppStorage } from "../../base/appStorage";
import { AuthContext } from "../context/AuthContext";

export const AUTH_KEY = "isLoggedIn";

export const AuthProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const saveLoginState = async (state) => AppStorage.save(AUTH_KEY, state);
    const getLoginState = async () => AppStorage.get(AUTH_KEY);
    const removeLoginState = async () => AppStorage.remove(AUTH_KEY);

    useEffect(() => {

        const initAuth = async () => {
            try {
            const loginState = await getLoginState();
            if (!loginState) return;
            setIsLoggedIn(loginState);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        initAuth();
    }, []);

    const login = async (email, password) => {
        setIsLoggedIn(true);
        saveLoginState(true);
    };

    const logout = async () => {
        setIsLoggedIn(false);
        removeLoginState();
    };


    useEffect(() => {
        authApi.interceptors.request.use(
            async (config) => {
                return config
            },
            (error) => {
                return Promise.reject(error)
            }
        );

        authApi.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response.status === 401) await logout();
                return Promise.reject(error)
            }
        );

    }, []);

    return (
        
        <AuthContext.Provider
            value={{
                isLoggedIn,
                login,
                logout
            }}
        >
            {children}

        </AuthContext.Provider>
    )
}