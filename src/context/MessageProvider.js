import { createContext, useMemo, useState } from "react";
// import auth from '@react-native-firebase/auth';
// import database, {firebase} from '@react-native-firebase/database';
import { app } from "../firebase_config";
import { getDatabase, ref, set } from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [emailVerified, setEmailVerify] = useState();

  const contextValue = useMemo(
    () => ({
      user,
      message,
      setMessage,
      register: async (email, password, phone, fullName, message) => {
        const auth = getAuth(app);
        const db = getDatabase();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log({ userCredential });
            const user = userCredential.user;
            sendEmailVerification(user).then(() => {
              console.log("Email Verification Sent");
            });
            setUser(user);

            set(ref(db, "users/" + user?.uid), {
              email: email,
              password: password,
              phone: phone,
              fullName: fullName,
              message: message,
            });
          })
          .catch((error) => {
            console.log({ error });
          });

        try {
        } catch (error) {
          console.log(error);
        }
      },
    }),
    [emailVerified, message, user]
  );

  return (
    <MessageContext.Provider value={contextValue}>
      {children}
    </MessageContext.Provider>
  );
};
