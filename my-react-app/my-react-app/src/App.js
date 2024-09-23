
import './App.css';
import Productpg from './state/Pages/Product';
import Header from './state/Pages/Header';
import Card from './state/Pages/Card';
import Button from './state/Pages/Button';



function App() {
  return (
    <div className="App">
      <Card/>
      <Header/>
      <Productpg/>
      <Button/>
    </div>
  );
}

export default App;
