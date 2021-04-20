
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Slide1 from "./Comp/Slide1"
import Slide2 from "./Comp/Slide2"
import Slide3 from "./Comp/Slide3"
export default function App() {
  const cardNames = ["Card", "Cooler Card"]
  return (
    <Router basename='/'>
      <Switch>
        <Route path="/S1"><Slide1 /></Route>
        <Route path="/S2"><Slide2 /></Route>
        <Route path="/S3"><Slide3 /></Route>
      </Switch>
    </Router>
  )
}
