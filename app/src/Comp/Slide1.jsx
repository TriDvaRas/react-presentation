

export default function App() {
  return (
    <div className="bg-dark text-light">
      <Navigation />
      <Card />
      <Card />
    </div>
  )
}
function Navigation(props) {
  return (
    <nav class="navbar navbar-expand navbar-dark bg-secondary">
      <li class="navbar-brand">C00L TitLE</li>
      <ul class="navbar-nav">
        <li class="nav-item nav-link">LinkA</li>
        <li class="nav-item nav-link">LinkB</li>
      </ul>
    </nav>
  )
}
function Card(props) {
  return (
    <div class='card m-3 bg-dark'>
      <div class="card-header">
        <h2>Card</h2>
      </div>
      <div class="card-body row">
        <h4 class="col-8">Я карта</h4>
      </div>
    </div>
  )
}
