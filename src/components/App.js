
import '../styles/App.scss';
import { useState } from 'react';
// import callToApi from '../services/api'
//import ls from '../services/localStorage';
import adalabers from '../data/adalabers.json'

function App() {

  //variables básicas para HTML
  const title = 'Adalabers'
  const name = 'Nombre'
  const tutor = 'Tutora'
  const area = 'Especialidad'
  const titleNewContact = 'Añade una nueva adalaber'

  //Variables para crear y añadir nuevo contacto

  const [newAdalaber, setNewAdalaber] = useState('');
  const [newTutor, setNewTutor] = useState('');
  const [newArea, setNewArea] = useState('');

  const handleName = (event) => {
    setNewAdalaber(event.currentTarget.value)
  }
  const handleTutor = (event) => {
    setNewTutor(event.currentTarget.value)
  }
  const handleArea = (event) => {
    setNewArea(event.currentTarget.value)
  }
  const handleClick = (event) => {
    event.preventDefault();
    const newContact = {

      name: newAdalaber,
      counselor: newTutor,
      speciality: newArea
    };
    setAdalabersList([...adalabersList, newContact]);
    setNewAdalaber('');
    setNewTutor('');
    setNewArea('');
  }



  //Pintar el nombre de las Adalabers en HTML.Para ello necesito una variable de estado y un map que recorra el array

  const [adalabersList, setAdalabersList] = useState(adalabers.results)
  // setAdalabersList([...adalabersList])



  const renderData = adalabersList.map((adalaber, index) => {
    return (


      <tr key={index}>
        <td>{adalaber.name}</td>
        <td>{adalaber.counselor}</td>
        <td>{adalaber.speciality}</td>

      </tr>




    )
  })

  //Ahora quiero añadir una nueva adalaber a mi lista






  return (

    <div>
      <header>
        <h1>{title}</h1>
      </header>
      <section>
        <table>
          {/* <!-- Fila de cabecera --> */}
          <thead><tr>
            <th>{name}</th>
            <th>{tutor}</th>
            <th>{area}</th>
          </tr></thead>


          {/* <!-- Fin fila de cabecera --> */}
          <tbody>

            {renderData}

          </tbody>
        </table>
      </section>
      <section>
        <form>
          <h2>{titleNewContact}</h2>
          <input
            className="new-contact__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            onChange={handleName}
            value={newAdalaber}
          />
          <input
            className="new-contact__input"
            type="text"
            name="name"
            id="name"
            placeholder="Tutor"
            onChange={handleTutor}
            value={newTutor}
          />
          <input
            className="new-contact__input"
            type="text"
            name="name"
            id="name"
            placeholder="Especialidad"
            onChange={handleArea}
            value={newArea}
          />
          <input
            className="new-contact__btn"
            type="submit"
            value="Añadir nueva Adalaber"
            onClick={handleClick}
          />



        </form>


      </section>


    </div>

  );
}

export default App;
