"use client"; 
import { createContext, useState } from "react";

const WalletContext = createContext({
  rdt: null,
  connected: false,
  account: "",
  fungibles: 0,
  nonFungibles: [],
  nftTickets: [],
  setRDT: (rdt) => {},
  setConnected: (connected) => {},
  setAccount: (account) => {},
  setFungibles: (fungibles) => {},
  setNonFungibles: (nonFungibles) => {},
  setNftTickets: (nftTickets) => {},
});

export function WalletContextProvider({children}) {
  const [rdt, setRDT] = useState(null);
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState("");
  const [fungibles, setFungibles] = useState(0);
  const [nonFungibles, setNonFungibles] = useState([]);
  const [nftTickets, setNftTickets] = useState([]);

  function setRDTHandler(newRDT) {
    setRDT(newRDT);
  }

  function setConnectedHandler(newConnected) {
    setConnected(newConnected);
  }

  function setAccountHandler(newAccount) {
    setAccount(newAccount);
  }

  function setFungiblesHandler(newFungibles) {
    setFungibles(newFungibles);
  }

  function setNonFungiblesHandler(newNonFungibles) {
    setNonFungibles(newNonFungibles);
  }

  function setNftTicketsHandler(newNftTickets) {
    setNftTickets(newNftTickets);
  }

  const context = {
    rdt: rdt,
    connected: connected,
    account: account,  
    fungibles: fungibles,
    nonFungibles: nonFungibles,
    nftTickets: nftTickets,
    setRDT: setRDTHandler,
    setConnected: setConnectedHandler,
    setAccount: setAccountHandler,
    setFungibles: setFungiblesHandler,
    setNonFungibles: setNonFungiblesHandler,
    setNftTickets: setNftTicketsHandler,
  };

  return (
    <WalletContext.Provider value={context}>
      {children}
    </WalletContext.Provider>
  );
}

export default WalletContext;
