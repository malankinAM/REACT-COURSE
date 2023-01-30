import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo  animal="Vitalik" name="Galina" hasPet />
      <PetInfo  animal="Alex" name="Ira" hasPet={false}/>
    </div>
  );
}

export default App;
