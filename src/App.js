// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import data from './data';

console.log(data)

function App() {
  const trevelDetail = data.map(data => {
    return <Card key={data} {...data}></Card>
  })
  return (
    <div className="App">
       <Header></Header>
       <div className="trevel-container">
          {trevelDetail}
       </div>
    </div>
  );
}

export default App;
