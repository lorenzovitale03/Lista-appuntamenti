import './App.css';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import ListPerson from './assets/Components/ListPerson';

function App() {
  const [person, setPerson] = useState(ListPerson);

  const deletePerson = (id) => {
    const newPerson = person.filter((el) => el.id !== id);
    setPerson(newPerson);
  };

  const deleteAll = () =>{
    setPerson([])
  };

  const restoreAll = () =>{
    setPerson(ListPerson);
  };

  return (
    <>
      <h1>Lista appuntamenti</h1>
      {person.map((el) => (
        <ListGroup key={el.id} {...el}>
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            {el.name}
            <button className='btn btn-danger btn-sm' onClick={() => deletePerson(el.id)}>X</button>
          </ListGroup.Item>
        </ListGroup>
      ))}
      <div className='d-flex flex-row justify-content-between mt-3'>
      <button className='btn btn-primary' onClick={() => restoreAll()}>Ripristina lista</button> 
      <button onClick={() => deleteAll()} className='btn btn-danger'>Cancella tutto</button>
      </div>
    </>
  );
}

export default App;