
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


  //Pintar el nombre de las Adalabers en HTML.Para ello necesito una variable de estado y un map que recorra el array

  const [adalabersList, setAdalabersList] = useState(adalabers.results)
  // setAdalabersList([...adalabersList])
  // console.log(adalabersList);

  const renderData = adalabersList.map((adalaber, index) => {
    return (


      <tr key={index}>
        <td>{adalaber.name}</td>
        <td>{adalaber.counselor}</td>
        <td>{adalaber.speciality}</td>

      </tr>




    )
  })






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
            {/* <!-- Primera fila --> */}
            {renderData}
            {/* <!-- Segunda fila --> */}
            <tr>
              <td>Columa 1 de la fila 2</td>
              <td>Columa 2 de la fila 2</td>
              <td>Columa 3 de la fila 2</td>
            </tr>
            {/* <!-- Tercera fila --> */}
            <tr>
              <td>Columa 1 de la fila 3</td>
              <td>Columa 2 de la fila 3</td>
              <td>Columa 3 de la fila 3</td>
            </tr>
          </tbody>
        </table>
      </section>

    </div>

  );
}

export default App;
