import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "./firebase.config";

export const AuthContent = createContext();

const AuthProvider = ({ children }) => {

      const createUser = (email, password) => {
            return createUserWithEmailAndPassword(auth, email, password)
      }

      const login = (email, password) => {
            return signInWithEmailAndPassword(auth, email, password)
      }

      const authentication = {
            createUser,
            login
      }

      return (
            <AuthContent.Provider value={authentication}>
                  {children}
            </AuthContent.Provider>
      );
};

export default AuthProvider;