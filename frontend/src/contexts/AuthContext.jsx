import { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

   
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const parsed = JSON.parse(storedUser);
          
            if (parsed.channel && !parsed.channelId) {
                parsed.channelId = typeof parsed.channel === "object" && parsed.channel?._id
                    ? parsed.channel._id
                    : parsed.channel;
                delete parsed.channel;
            }
            setUser(parsed);
        }
    }, []);

    useEffect(() => {
        if (user) {
       
            const toStore = { ...user };
            if (toStore.channel) {
                toStore.channelId = typeof toStore.channel === "object" && toStore.channel?._id
                    ? toStore.channel._id
                    : toStore.channel;
                delete toStore.channel;
            }
            localStorage.setItem("user", JSON.stringify(toStore));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};
