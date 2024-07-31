import { createContext, useState } from "react";

const AuthContext = createContext({
  rdt: null,
  connected: false,
  badgeId: "",
  jwt: "",
  setRDT: (rdt) => {},
  setConnected: (connected) => {},
  setBadgeId: (id) => {},
  setJWT: (jwt) => {},
});

export function AuthContextProvider(props) {
  const [rdt, setRDT] = useState(null);
  const [connected, setConnected] = useState(false);
  const [badgeId, setBadgeId] = useState("");
  const [jwt, setJWT] = useState("");

  function setRDTHandler(newRDT) {
    setRDT(newRDT);
  }
  
  function setConnectedHandler(newConnected) {
    setConnected(newConnected);
  }
  
  function setBadgeIdHandler(newId) {
    setBadgeId(newId);
  }
  
  function setJWTHandler(newJWT) {
    setJWT(newJWT);
  }

  const context = {
    rdt: rdt,
    connected: connected,
    badgeId: badgeId,
    jwt: jwt,
    setRDT: setRDTHandler,
    setConnected: setConnectedHandler,
    setBadgeId: setBadgeIdHandler,
    setJWT: setJWTHandler,
  };

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
