
import { HashRouter as Router } from 'react-router-dom'
import { useState } from "react";
export default function App() {
  const cardNames = ["Card", "Cooler Card"]
  return (
    <div className="bg-dark text-light">
      <Navigation title="C00L TitLE" links={["Link1", "Link2", "Link3"]} />
      <Card title={cardNames[0]} cool={false} />
      <Card title={cardNames[1]} cool={true} />
      <Card title={cardNames[0]} cool={false} />
      <Card title={cardNames[0]} cool={false} />
      <Card title={cardNames[0]} cool={false} />
    </div>
  )
}
function Navigation(props) {
  return (
    <nav class="navbar navbar-expand navbar-dark bg-secondary">
      <li class="navbar-brand">{props.title}</li>
      <ul class="navbar-nav">
        <li class="nav-item nav-link">{props.links[0]}</li>
        <li class="nav-item nav-link">{props.links[1]}</li>
      </ul>
    </nav>
  )
}
function Card(props) {
  const [cool, setCool] = useState(props.cool)
  const toggleCool = () => {
    setCool(!cool)
  }
  return (
    <div class={`card m-3 ${cool ? `bg-cool` : `bg-dark`}`}>
      <div class="card-header">
        <h2>{props.title}</h2>
      </div>
      <div class="card-body row">
        <h4 class="col-5">Я карта</h4>
        <button class="btn btn-primary col-7" onClick={toggleCool}>КРАСНАЯ КНОПКА</button>
      </div>
    </div>
  )
}
