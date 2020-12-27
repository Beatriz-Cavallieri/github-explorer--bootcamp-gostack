import React, { FormEvent, useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import api from "../../api";
import Header from "../../components/Header";
import "../../components/RepositoryItem/styles";
import { Repo } from "../../components/RepositoryItem/styles";
import "./styles";
import { Title, Form, Repositories, Error } from "./styles";

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepositories = localStorage.getItem(
      "@GithubExplorer:repositories"
    );

    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    }

    return [];
  });
  const [newRepo, setNewRepo] = useState("");
  const [inputError, setInputError] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "@GithubExplorer:repositories",
      JSON.stringify(repositories)
    );
  }, [repositories]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!newRepo) {
      setInputError("Digite autor/nome do repositório");
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo("");
    } catch (error) {
      setInputError("Erro na busca pelo repositório");
    }
  }

  return (
    <>
      <Header />
      <Title>Explore repositórios no Github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          type="text"
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map((repo) => (
          <Repo key={repo.full_name} to={`/repository/${repo.full_name}`}>
            <img src={repo.owner.avatar_url} alt="" />
            <div>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </div>
            <FiChevronRight size="20" />
          </Repo>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
