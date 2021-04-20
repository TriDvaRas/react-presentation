export default function Card(props) {
  return (
    <div class={`card m-3 ${props.cool?`bg-cool`:`bg-dark`}`}>
      <div class="card-header">
        <h2>
          {props.title}
        </h2>
      </div>
      <div class="card-body">
        <h4>Card Text</h4>
      </div>
    </div>
  )
}
