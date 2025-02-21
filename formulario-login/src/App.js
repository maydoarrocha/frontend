
import React, { useState } from "react";
import "./App.css";

function App() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (login === "admin" && password === "admin") {
      setErrorMessage("");
      alert("Login bem-sucedido!");
    } else {
      setErrorMessage("Credenciais inválidas.");
    }
  };

  return (
    <div className="App">
      <h2>Sistema de Autenticação</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Login:</label>
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Digite seu login"
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
          />
        </div>
        {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
        <div>
          <button type="submit">Entrar</button>
        </div>
      </form>
      <div>
        <a href="#">Esqueci minha senha</a>
      </div>
    </div>
  );
}

export default App;

