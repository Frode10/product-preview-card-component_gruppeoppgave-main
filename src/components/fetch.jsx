// må se litt her
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    const [theme, setTheme] = useState("light")


    // useEffect(() => {

    // }, [theme])

    const [bossData, setBossData] = useState([]) // lagrer fetchdatat i array her

    const [isClicked, setIsClicked] = useState(null)

    const [name, setName] = useState("")

    const [timesClicked, setTimesClicked] = useState(0)

    const [object, setObject] = useState({})

    const url = `https://eldenring.fanapis.com/api/bosses?limit=200`;

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url)
            const json = await response.json();
            console.log(json.data)
            setBossData(json.data)
            console.log(bossData)
        }
        fetchData()
    }, [])


    return (
        <>
            {bossData.map((boss) => (
                <div key={boss.id}>
                    <img src={boss.image} alt="" />
                    <h2>{boss.name}</h2>
                    <h2>{boss.location}</h2>
                </div>
            ))}
        </>
    )
}

export default App