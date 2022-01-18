import "../styles/App.scss";
import { useState } from "react";
// import callToApi from '../services/api'
//import ls from '../services/localStorage';
import adalabers from "../data/adalabers.json";

function App() {
  //variables básicas para HTML
  const title = "Adalabers";
  const name = "Nombre";
  const tutor = "Tutora";
  const area = "Especialidad";
  const titleNewContact = "Añade una nueva adalaber";

  //Variables para crear y añadir nuevo contacto

  const [newAdalaber, setNewAdalaber] = useState("");
  const [newTutor, setNewTutor] = useState("");
  const [newArea, setNewArea] = useState("");

  const handleName = (event) => {
    setNewAdalaber(event.currentTarget.value);
  };
  const handleTutor = (event) => {
    setNewTutor(event.currentTarget.value);
  };
  const handleArea = (event) => {
    setNewArea(event.currentTarget.value);
  };
  const handleClick = (event) => {
    event.preventDefault();
    const newContact = {
      name: newAdalaber,
      counselor: newTutor,
      speciality: newArea,
    };
    setAdalabersList([...adalabersList, newContact]);
    setNewAdalaber("");
    setNewTutor("");
    setNewArea("");
  };

  //Filtrar

  const [search, setSearch] = useState('');
  const handleChangeSearch = (event) => {
    setSearch(event.currentTarget.value);
  }

  //Pintar el nombre de las Adalabers en HTML.Para ello necesito una variable de estado y un map que recorra el array

  const [adalabersList, setAdalabersList] = useState(adalabers.results);

  //Filtrar por nombre y tutor
  const filteredAdalabers = adalabersList.filter(
    (oneAdalaber) =>
      oneAdalaber.name.toLowerCase().includes(search.toLowerCase()) || oneAdalaber.counselor.toLowerCase().includes(search.toLowerCase())

  );


  const renderData = filteredAdalabers.map((adalaber, index) => {
    return (
      <tr key={adalaber.id}>
        <td>{adalaber.name}</td>
        <td>{adalaber.counselor}</td>
        <td>{adalaber.speciality}</td>
      </tr>
    );
  });

  return (
    <div>
      <header className="header">
        <h1>{title}</h1>

        <form>
          <select name="tutor" id="tutor">
            <option disabled value="">Cualquiera</option>
            <option value={adalabers.counselor}>Dayana</option>
            <option value={adalabers.counselor}>Iván</option>
            <option value={adalabers.counselor}>Yanelis</option>
          </select>
          <input
            className="header__search"
            autoComplete="off"
            type="search"
            name="search"
            placeholder="Filtrar contactos por nombre o tutor"
            onChange={handleChangeSearch}
            value={search}
          />


        </form>
      </header>
      <section className="result-names">
        <table className="table">

          <thead>
            <tr>
              <th>{name}</th>
              <th>{tutor}</th>
              <th>{area}</th>
            </tr>
          </thead>


          <tbody>{renderData}</tbody>
        </table>
      </section>
      <section className="results-names">
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
    </div >
  );
}

export default App;
