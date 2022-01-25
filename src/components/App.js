import "../styles/App.scss";
import { useState } from "react";
// import callToApi from '../services/api'
//import ls from '../services/localStorage';
import adalabers from "../data/adalabers.json";

function App() {
  const title = "Adalabers";
  const name = "Nombre";
  const tutor = "Tutora";
  const area = "Especialidad";
  const titleNewContact = "Añade una nueva adalaber";
  const rrss = "Redes sociales"

  const [newAdalaber, setNewAdalaber] = useState("");
  const [newTutor, setNewTutor] = useState("");
  const [newArea, setNewArea] = useState("");
  const [socialNetworks, setSocialNetworks] = useState("");


  const handleName = (event) => {
    setNewAdalaber(event.currentTarget.value);
  };
  const handleTutor = (event) => {
    setNewTutor(event.currentTarget.value);
  };
  const handleArea = (event) => {
    setNewArea(event.currentTarget.value);

  };
  const handleRrss = (event) => {

    setSocialNetworks(event.currentTarget.value)
  };

  const handleClick = (event) => {
    event.preventDefault();
    const newContact = {
      name: newAdalaber,
      counselor: newTutor,
      speciality: newArea,
      rrss: socialNetworks

    };
    setAdalabersList([...adalabersList, newContact]);
    setNewAdalaber("");
    setNewTutor("");
    setNewArea("");
    setSocialNetworks = [];

  };


  const [search, setSearch] = useState("");
  const [counselor, setCounselor] = useState('All');

  const handleChangeSearch = (event) => {
    setSearch(event.currentTarget.value);
  };

  const [adalabersList, setAdalabersList] = useState(adalabers.results);


  const handleFilterCounselor = (event) => {
    setCounselor(event.currentTarget.value)

  }
  const adalabersListCounselor = adalabersList
    .filter((oneAdalaber) => {
      if (counselor === 'All') {
        return true;
      }
      else if (counselor === oneAdalaber.counselor) {
        return true;
      } else {
        return false;
      }
    })
    .filter((oneAdalaber) => oneAdalaber.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    .map((oneAdalaber) => (
      <tr key={oneAdalaber.id}>
        <td>{oneAdalaber.name}</td>
        <td>{oneAdalaber.counselor}</td>
        <td>{oneAdalaber.speciality}</td>
        <td>{oneAdalaber.social_networks.map((eachAdalaber) => (<a href={eachAdalaber.url}>{eachAdalaber.name}</a>))}
        </td>


      </tr>
    ));




  return (
    <div>
      <header className="header">
        <h1>{title}</h1>

        <form>
          <label> Escoge un tutor o tutora
            <select name="tutor" id="tutor" value={counselor} onChange={handleFilterCounselor}>
              <option value="All">Cualquiera</option>
              <option value={adalabers.counselor}>Dayana</option>
              <option value={adalabers.counselor}>Iván</option> b
              <option value={adalabers.counselor}>Yanelis</option>
              <option value={adalabers.counselor}>Miguel</option>
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
          </label>
        </form>
      </header>
      <section className="result-names">
        <table className="table">
          <thead>
            <tr>
              <th>{name}</th>
              <th>{tutor}</th>
              <th>{area}</th>
              <th>{rrss}</th>
            </tr>
          </thead>

          <tbody>{adalabersListCounselor}</tbody>
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
            className="new-contact__input"
            type="text"
            name="rrss"
            id="rss"
            placeholder="RRSS"
            onChange={handleRrss}
            value={socialNetworks}
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
