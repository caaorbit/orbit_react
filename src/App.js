import './App.css';
import Hello from './Hello';
import Customer from './Customer';

function App() {
  const employee = [{ name: 'Abel', age: 23, email: 'abelmut99', id: 1 }, { name: 'dickson', age: 40, email: 'k@gmail.com', id: 2 }, { name: 'Jule', age: 24, email: 'j@gmail.com', id: 3 }]
  return (
    <div className="App">
      {/* {
        employee.map(employe => (
          <div key={employe.id}>
            <Hello name={employe.name} age={employe.age} />
          </div>
        ))
      } */}
      {/* <Hello name='Abel'/>
      <Hello name='Dicson'/>
      <Hello name='Theo'/> */}
      <Customer />
    </div>
  );
}

export default App;
