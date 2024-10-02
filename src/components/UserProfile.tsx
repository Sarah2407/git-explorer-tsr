import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/style.css";
import { useParams } from "react-router-dom";

interface GitUserData {
  avatar_url: string;
  login: string;
  name: string;
  company: string;
  public_repos: number;
  location: string;
  followers: number;
  following: number;
  html_url: string;
  bio: string;
}

const UserProfile = () => {
  const [gitUserData, setGitUserData] = useState<GitUserData | null>(null);
  const { username } = useParams();

  useEffect(() => {
    const getGitUser = async () => {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      console.log("USER IS HERE", response.data);
      setGitUserData(response.data);
      return response.data;
    };
    getGitUser().catch((e) => console.error(e));
  }, []);
  return (
    <div className="user-profile-main-cont">
      <div className="top-cont">
        <img
          src={gitUserData?.avatar_url}
          className="user-avatar-img"
          alt="user-img"
        />{" "}
        <div className="name-cont">
          <span>{gitUserData?.login}</span>
          <h2>{gitUserData?.name}</h2>
          <h3>{gitUserData?.location}</h3>
          <div className="follow-cont">
            <span className="followers">
              Followers: {gitUserData?.followers}
            </span>
            <span>Following: {gitUserData?.following}</span>
          </div>
          <a
            className="view-ongit-a"
            href={gitUserData?.html_url}
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
      <div className="bottom-cont">
        <h3>{gitUserData?.bio}</h3>
      </div>
    </div>
  );
};

export default UserProfile;
