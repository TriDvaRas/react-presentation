

import Navigation from './Comp/Navigation'
import Card from './Comp/Card'
export default function App() {
  const cardNames = ["Card","Cooler Card"]
  return (
    <div className="bg-dark text-light">
      <Navigation title="C00L TitLE" links={["LinkA","LinkB"]}/>
      <Card title={cardNames[0]} cool={false}/>
      <Card title={cardNames[1]} cool={true}/>
    </div>
  )
}
