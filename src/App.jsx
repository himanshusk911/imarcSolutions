import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Login from "./components/Login"
import GraphForm from "./components/GraphForm"
import LineChart from "./components/LineGraph"
import Home from "./Home"
function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route  path="/login" element={<Login/>}/>
        <Route path="/graphForm" element={<GraphForm/>}/>
        <Route path="/lineGraph" element={<LineChart/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
