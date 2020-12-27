import React, { FormEvent, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import api from "../../api";
import Header from "../../components/Header";
import "../../components/RepositoryItem/styles";
import { Repo } from "../../components/RepositoryItem/styles";
import "./styles";
import { Title, Form, Repositories } from "./styles";

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [newRepo, setNewRepo] = useState("");

  async function handleAddRepository(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await api.get<Repository>(`repos/${newRepo}`);

    const repository = response.data;

    setRepositories([...repositories, repository]);
    setNewRepo("");
  }

  return (
    <>
      <Header />
      <Title>Explore repositórios no Github</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          type="text"
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        {repositories.map((repo) => (
          <Repo href="https://app.rocketseat.com.br/node/nivel-03/group/criando-a-aplicacao/lesson/estilizando-dashboard">
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
