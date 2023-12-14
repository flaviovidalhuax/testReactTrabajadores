
import './App.css'
import CardUser from './componets/alluser/CardUser'
import CreatUSer from './componets/form/CreatUSer'
import Moves from './componets/formMoves/Moves'
import NominabyId from './componets/Nomina/NominabyId'


function App() {

  return (
    <div className="App">
      <CreatUSer/>
      <Moves/>
      <CardUser/>
      <NominabyId/>
    </div>
  )
}

export default App
