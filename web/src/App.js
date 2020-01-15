import React from 'react';

import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input
              type="text"
              name="github_username"
              id="github_username"
              required
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input type="text" name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="text" name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="text" name="longitude" id="longitude" required />
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
