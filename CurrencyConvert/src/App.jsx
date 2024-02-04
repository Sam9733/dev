import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurInfo'

function App() {
 
  const [amount, setAmount]=useState(0);
  const [from, setFrom]= useState("usd")
  const [to, setTo]= useState("inr")
  const [convertedAmount, setConvertedAmount]= useState(0)

  const currencyInfo= useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = ()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://imgs.search.brave.com/1wzyTtFfyWKN4oF02JVwwtIV-sMw742Q0nohweE1hDU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIy/NDgwMjg2MC9waG90/by9zdG9jay1leGNo/YW5nZS1jb25jZXB0/LWFwcC1ydW5uaW5n/LW9uLWxhcHRvcC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/RWNfNnBpQWQzX2k2/ZmlodWMzTkdvRnhY/bklXTE14M2NIcTIt/SDJCSlQ3WT0')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency)=>setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount)=>setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                             label="To"
                             amount={convertedAmount}
                             currencyOptions={options}
                             onCurrencyChange={(currency)=>setTo(currency)}
                             selectCurrency={to}
                             amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert { from.toUpperCase() } to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
