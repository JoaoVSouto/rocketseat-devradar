import React, { useState, useEffect } from 'react';

import api from './services/api';

import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude.toPrecision(10));
        setLongitude(longitude.toPrecision(10));
      },
      err => console.error('error getting the user location', err),
      { timeout: 3000 }
    );
  }, []);

  const handleAddDev = async e => {
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,
    });

    console.log(response.data);
  };

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input
              type="text"
              name="github_username"
              id="github_username"
              required
              value={github_username}
              onChange={({ target }) => setGithubUsername(target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              type="text"
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={({ target }) => setTechs(target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={({ target }) => setLatitude(target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={({ target }) => setLongitude(target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/42191629?s=460&v=4"
                alt="João Vítor"
              />
              <div className="user-info">
                <strong>João Vítor</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Student undergraduate of Information Technology at UFRN. I just
              wanna code in peace.
            </p>
            <a
              href="https://github.com/JoaoVSouto"
              rel="noopener noreferrer"
              target="_blank"
            >
              Acessar perfil no Github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/42191629?s=460&v=4"
                alt="João Vítor"
              />
              <div className="user-info">
                <strong>João Vítor</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Student undergraduate of Information Technology at UFRN. I just
              wanna code in peace.
            </p>
            <a
              href="https://github.com/JoaoVSouto"
              rel="noopener noreferrer"
              target="_blank"
            >
              Acessar perfil no Github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/42191629?s=460&v=4"
                alt="João Vítor"
              />
              <div className="user-info">
                <strong>João Vítor</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Student undergraduate of Information Technology at UFRN. I just
              wanna code in peace.
            </p>
            <a
              href="https://github.com/JoaoVSouto"
              rel="noopener noreferrer"
              target="_blank"
            >
              Acessar perfil no Github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/42191629?s=460&v=4"
                alt="João Vítor"
              />
              <div className="user-info">
                <strong>João Vítor</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Student undergraduate of Information Technology at UFRN. I just
              wanna code in peace.
            </p>
            <a
              href="https://github.com/JoaoVSouto"
              rel="noopener noreferrer"
              target="_blank"
            >
              Acessar perfil no Github
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
