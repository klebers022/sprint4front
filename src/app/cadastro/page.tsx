'use client';
import { useState } from "react";
import "./cadastro.css";

const Cadastro: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    telefone: "",
    email: "",
    senha: "",
    marca: "",
    modelo: "",
    ano: "",
    placa: "",
    descricao: "",
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: "",
  });

  const formatPhoneNumber = (value: string) => {
    const numericValue = value.replace(/\D/g, "");
    const formattedValue = numericValue.replace(/(\d{2})(\d{5})(\d{4})/, "+55 ($1) $2-$3");
    return formattedValue;
  };

  const fetchAddress = async (cep: string) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      
      if (!data.erro) {
        setFormData((prevData) => ({
          ...prevData,
          logradouro: data.logradouro,
          bairro: data.bairro,
          cidade: data.localidade,
          estado: data.uf,
        }));
      } else {
        alert("CEP não encontrado. Verifique se o CEP está correto.");
      }
    } catch (error) {
      console.error("Erro ao buscar dados do CEP:", error);
      alert("Erro ao conectar-se com o serviço de CEP.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === "telefone") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: formatPhoneNumber(value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.name === "cep") {
      fetchAddress(e.target.value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5050/Challenge_war/api/cadastro/dados", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Cadastro realizado com sucesso!");
      } else {
        alert("Erro ao realizar o cadastro. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      alert("Erro ao conectar-se com o servidor.");
    }
  };

  return (
    <div>
      <section className="cadastro-help-car">
        <div className="container-cadastro">
          <h2>Cadastro Help Car</h2>
          <form id="cadastro-form" onSubmit={handleSubmit}>
            <fieldset>
              <legend>Informações Pessoais</legend>
              <div className="form-group">
                <label htmlFor="nome">Nome Completo</label>
                <input type="text" id="nome" name="nome" placeholder="Digite seu nome" value={formData.nome} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="cpf">CPF</label>
                <input type="text" id="cpf" name="cpf" placeholder="Digite seu CPF" value={formData.cpf} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="telefone">Telefone</label>
                <input type="tel" id="telefone" name="telefone" placeholder="Digite seu telefone" value={formData.telefone} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Digite seu email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="senha">Senha</label>
                <input type="password" id="senha" name="senha" placeholder="Digite sua senha" value={formData.senha} onChange={handleChange} required />
              </div>
            </fieldset>

            <fieldset>
              <legend>Informações do Veículo</legend>
              <div className="form-group">
                <label htmlFor="marca">Marca</label>
                <input type="text" id="marca" name="marca" placeholder="Marca do veículo" value={formData.marca} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="modelo">Modelo</label>
                <input type="text" id="modelo" name="modelo" placeholder="Modelo do veículo" value={formData.modelo} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="ano">Ano de Fabricação</label>
                <input type="number" id="ano" name="ano" placeholder="Ano do veículo" value={formData.ano} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="placa">Placa</label>
                <input type="text" id="placa" name="placa" placeholder="Placa do veículo" value={formData.placa} onChange={handleChange} required />
              </div>
            </fieldset>

            <fieldset>
              <legend>Informações de Endereço</legend>
              <div className="form-group">
                <label htmlFor="cep">CEP</label>
                <input type="text" id="cep" name="cep" placeholder="Digite seu CEP" value={formData.cep} onChange={handleChange} onBlur={handleBlur} required />
              </div>
              <div className="form-group">
                <label htmlFor="logradouro">Logradouro</label>
                <input type="text" id="logradouro" name="logradouro" placeholder="Logradouro" value={formData.logradouro} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="numero">Número</label>
                <input type="text" id="numero" name="numero" placeholder="Número" value={formData.numero} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="complemento">Complemento</label>
                <input type="text" id="complemento" name="complemento" placeholder="Complemento" value={formData.complemento} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="bairro">Bairro</label>
                <input type="text" id="bairro" name="bairro" placeholder="Bairro" value={formData.bairro} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="cidade">Cidade</label>
                <input type="text" id="cidade" name="cidade" placeholder="Cidade" value={formData.cidade} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="estado">Estado</label>
                <input type="text" id="estado" name="estado" placeholder="Estado" value={formData.estado} onChange={handleChange} required />
              </div>
            </fieldset>

            <fieldset>
              <legend>Informações de Serviço</legend>
              <div className="form-group">
                <label htmlFor="descricao">Descrição do Problema</label>
                <textarea id="descricao" name="descricao" placeholder="Descreva o problema do veículo" value={formData.descricao} onChange={handleChange}></textarea>
              </div>
            </fieldset>

            <div className="form-group">
              <button type="submit" className="btn btn-submit">Cadastrar</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Cadastro;
