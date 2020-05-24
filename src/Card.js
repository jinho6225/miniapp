import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaRocket } from 'react-icons/fa';

const JobBoard = styled.div`
  background: gray;
`;

const ProfileImg = styled.img`
  border: 1px solid black;
  border-radius: 50%;
`;

const Anchor = styled.a`
  text-decoration: none;
`;

const Name = styled.div`
  border: 1px solid black;
  border-radius: 16px;
  width: 14%;
  text-align: center;
  font-size: 1.3rem;
  padding: 0.3%;
  background-color: aliceblue;
`;

const Card = (props) => {
  console.log(props);
  return (
    <JobBoard>
      <div>
        <ProfileImg
          alt="profilePic"
          src={props.collections[0].profile_picture}
        />
        <Name>{props.collections[0].name}</Name>
        <div>
          <Anchor href={props.collections[0].gitHubUrl} target="_blank">
            <h3>
              <FaGithub />
            </h3>
          </Anchor>
          <Anchor href={props.collections[0].linkedInUrl} target="_blank">
            <h3>
              <FaLinkedin />
            </h3>
          </Anchor>
          <Anchor href={props.collections[0].portfolioUrl} target="_blank">
            <h3>
              <FaRocket />
            </h3>
          </Anchor>
        </div>
      </div>
    </JobBoard>
  );
};

export default Card;
