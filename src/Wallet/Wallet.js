import { useEffect, useState, useContext } from "react";
// import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
// import {
//   NoEthereumProviderError,
//   UserRejectedRequestError as UserRejectedRequestErrorInjected,
// } from "@web3-react/injected-connector";
// import { UserRejectedRequestError as UserRejectedRequestErrorFrame } from "@web3-react/frame-connector";
// import { Web3Provider } from "@ethersproject/providers";
import { motion } from "framer-motion";

// import _ from "lodash";

// import { injected } from "../lib/contracts/connectors";
import { Spinner } from "../components/Spinner";
// import { AbstractConnector } from "@web3-react/abstract-connector";
import { walletMeta } from "assets/walletMeta";

import { ViewContext } from "../context/AppContext"
// import { connect } from "http2";

// function getErrorMessage(error: Error) {
//   if (error instanceof NoEthereumProviderError) {
//     return "No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.";
//   } else if (error instanceof UnsupportedChainIdError) {
//     return "You're connected to an unsupported network.";
//   } else if (
//     error instanceof UserRejectedRequestErrorInjected ||
//     error instanceof UserRejectedRequestErrorFrame
//   ) {
//     return "Please authorize this website to access your Ethereum account.";
//   } else {
//     console.error(error);
//     return "An unknown error occurred. Check the console for more details.";
//   }
// }

const Wallet = () => {
  const { state, dispatch, user, provider, contracts, chainId, actions, isLoading } = useContext(ViewContext)
  const { connect } = actions
  // const context = useWeb3React<Web3Provider>();
  // const { connector, activate, error } = context;
  // // handle logic to recognize the connector currently being activated
  // const [activatingConnector, setActivatingConnector] = useState<any>();
  // useEffect(() => {
  //   if (activatingConnector && activatingConnector === connector) {
  //     console.log("disconnect happening");
  //     setActivatingConnector(undefined);
  //   }
  // }, [activatingConnector, connector]);

  return (
    <>
      <header className="text-center">
        <h2 className="header1">Sign in with Web3</h2>
      </header>
      <div className="walletButtonContainer">
        {/* {
          (_.keys(connectorsByName) as ConnectorNames[]).map((name) => {
            const currentConnector = connectorsByName[name];
            const activating = currentConnector === activatingConnector;
            const connected = currentConnector === connector;
            const disabled = !!activatingConnector || connected || !!error;
            const nameLookupKey = name.toLowerCase();

            return ( */}
              <div className="mx-auto block w-full h-full text-center">
                <button onClick={() => connect()} disabled={false} type="button" className="network-btns text-center relative block w-full h-full">
                  {isLoading && (
                    <Spinner
                      className="top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2 h-8 z-10"
                    />
                  )}
                  <motion.img
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.075 }}
                    className="mx-auto mb-10" src={walletMeta['metamask']?.uri} alt="" role="presentation" />
                  {/* <h3 className="header5 font-sans">{name}</h3> */}
                  <motion.h4
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                    className="btn-primary">
                    {walletMeta['metamask']?.description}
                  </motion.h4>
                </button>
              </div>
            {/* );
          })

        } */}
      </div>
    </>
  );
}

export default Wallet;