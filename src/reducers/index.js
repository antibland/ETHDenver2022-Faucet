export const reducer = (state, action) => {
    switch (action.type) {
      case 'CONNECTED_PROVIDER': {
        state.provider = action.payload.provider
        state.signer = action.payload.signer
        state.name = action.payload.name
        state.chainId = action.payload.chainId
        state.contracts.buffiTruck = action.payload.buffiTruck
        state.contracts.faucet = action.payload.faucet
        return
      }
  
      case 'CONNECTED_NETWORK': {
        state.chainId = action.payload
        return
      }
  
      case 'CONNECTED_SIGNER': {
        state.signer = action.payload
        return
      }
  
      case 'CONNECTED_CONTRACTS': {
        // state.contracts.spread = action.payload.spread
        // state.contracts.dai = action.payload.dai
        return
      }
  
      case 'SET_ACCOUNT': {
        state.user = action.payload
        state.isLoading = false
        state.isConnected = true
        return
      }
  
      case 'DISCONNECT_ACCOUNT': {
        state = action.payload
        return
      }
  
      default: break
    }
  }