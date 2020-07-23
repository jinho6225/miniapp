import React from 'react';
import { FaGithub, FaLinkedin, FaRocket } from 'react-icons/fa';
import {
  CardWrapper,
  CardName,
  CardTitle,
  CardBody,
  CardIcon,
  CardFieldset,
  CardImg,
  CardOptionsItem,
  CardOptions,
  CardLink,
} from './Card-styled';

const Card = (props) => {
  const { card } = props;
  return (
    <CardWrapper>
      <CardBody>
        <CardFieldset>
          <CardImg alt="profilePic" src={card.profile_picture} />
        </CardFieldset>
        <CardFieldset>
          <CardName>{card.name}</CardName>
          <CardOptions>
            <CardOptionsItem>
              <CardLink
                href={card.gitHubUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <CardIcon big>
                  <FaGithub />
                </CardIcon>
              </CardLink>
            </CardOptionsItem>
            <CardOptionsItem>
              <CardLink
                href={card.linkedInUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <CardIcon big>
                  <FaLinkedin />
                </CardIcon>
              </CardLink>
            </CardOptionsItem>
            <CardOptionsItem>
              <CardLink
                href={card.portfolioUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <CardIcon big>
                  <FaRocket />
                </CardIcon>
              </CardLink>
            </CardOptionsItem>
          </CardOptions>
          <CardTitle>{card.title}</CardTitle>
        </CardFieldset>
      </CardBody>
    </CardWrapper>
  );
};

export default Card;
