import { useState, useEffect} from 'react'
import './App.css'
import { sequence } from '0xsequence'

function App() {
  
  sequence.initWallet(import.meta.env.VITE_PROJECT_ACCESS_KEY, {defaultNetwork: 'arbitrum-sepolia'})
  
  const [isLoggedIn, setIsLoggedIn] = useState<any>(false)

  const signIn = async () => {
    const wallet = await sequence.getWallet()
    const details = await wallet.connect({app: 'react starter boilerplate'})
    if(details.connected){
      setIsLoggedIn(true)
    }
  }

  useEffect(() => {

  },[isLoggedIn])

  return (
    <>
      <div>
      <h1 className='title'>Sequence Universal Wallet Starter - React</h1>
      <br/>
      <br/>
      {isLoggedIn && <div className='sign-out-button' onClick={()=> setIsLoggedIn(false)}>sign out</div>}
      <div className='container'>
      {!isLoggedIn ? <button onClick={() => signIn()}>sign in</button> : 'isConnected'}
      </div>
      </div>

    </>
  )
}

export default App
