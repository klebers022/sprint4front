// src/app/login/page.tsx
'use client'
import { useState } from "react";
import Link from 'next/link';
import "./login.css"; // Importa o CSS para a estilização

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", senha: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Simulação de autenticação (substitua com a chamada para sua API)
    if (formData.email === "usuario@exemplo.com" && formData.senha === "senha123") {
      window.location.href = "/dashboard"; // Redireciona para o painel do usuário
    } else {
      setError("Credenciais inválidas. Tente novamente.");
    }
  };

  return (
    <main>
        <div className="login-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="senha">Senha</label>
              <input type="password" id="senha" name="senha" value={formData.senha} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn-login">Entrar</button>
          </form>

            <p className="signup-link">
                Ainda não tem uma conta? <Link href="/cadastro">Cadastre-se</Link>
            </p>
        </div>
    </main>
  );
};

export default Login;
