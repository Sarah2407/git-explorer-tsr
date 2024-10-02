import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";

interface Repo {
  id: number;
  name: string;
  language: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Home = () => {
  //State management
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const gitRepos = async () => {
    const response = await axios.get(
      "https://api.github.com/search/repositories?q=XXX"
    );
    console.log(response.data.items);
    setRepos(response.data.items);
    return response.data;
  };
  useEffect(() => {
    gitRepos().catch((e) => console.error(e));
  }, []);
  return (
    <div className="users-cont">
      {repos ? (
        repos.map((repo: Repo) => (
          <div className="user-card-cont" key={repo.id}>
            <img
              src={repo.owner.avatar_url}
              alt="userAvatar"
              className="user-avatar"
            />
            <span className="username">{repo.name}</span>

            <span className="repo-lang-span">Language: {repo.language}</span>
            <div>
              By: <button className="repo-owner">{repo.owner.login}</button>
            </div>

            <button>
              <button>View Repo</button>
            </button>
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
      <Link to="/users">Go to Users Page</Link>
    </div>
  );
};

export default Home;
