export default function Navigation(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <li class="navbar-brand">{props.title}</li>
      <ul class="navbar-nav">
        <li class="nav-item nav-link">{props.links[0]}</li>
        <li class="nav-item nav-link">{props.links[1]}</li>
      </ul>
    </nav>
  )
}
