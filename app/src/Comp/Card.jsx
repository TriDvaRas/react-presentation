export default function Card(props) {
  return (
    <div class={`card m-3 ${props.cool?`bg-cool`:`bg-dark`}`}>
      <div class="card-header">
        <h2>
          {props.title}
        </h2>
      </div>
      <div class="card-body row">
        <h4 class="col-8">Я карта</h4>
        <button class="btn btn-primary col-4" onClick={props.click}>Click Me</button>
      </div>
    </div>
  )
}
