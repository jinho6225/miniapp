import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaRocket } from 'react-icons/fa';

const JobBoard = styled.div`
  background: green;
`;

const ProfileImg = styled.img`
  border: 1px solid black;
  border-radius: 50%;
`;

const Card = (props) => {
  console.log(props);
  return (
    <JobBoard>
      <ProfileImg alt="profilePic" src={props.collections[0].profile_picture} />
      <h2>{props.collections[0].name}</h2>
      <div>
        <a href={props.collections[0].gitHubUrl} target="_blank">
          <h3>
            <FaGithub />
          </h3>
        </a>
        <a href={props.collections[0].linkedInUrl} target="_blank">
          <h3>
            <FaLinkedin />
          </h3>
        </a>
        <a href={props.collections[0].portfolioUrl} target="_blank">
          <h3>
            <FaRocket />
          </h3>
        </a>
      </div>
    </JobBoard>
  );
};

export default Card;
