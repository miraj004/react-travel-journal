import './App.css'
import Navbar from "./components/Navbar.jsx";
import logo from './assets/icons8-airplane-96.png';
import {TravelCard} from "./components/TravelCard.jsx";
import travelData from './data/travelData.js';
import {ContainerGrid} from "./components/ContainerGrid.jsx";

function App() {

    const travels = travelData.map((travel) => <TravelCard key={travel._id} {...travel}/>)

    return (
        <>
            <Navbar logo={logo} text={"Travel Journal"}/>
            <ContainerGrid>
                {travels}
            </ContainerGrid>
        </>
    )
}

export default App
