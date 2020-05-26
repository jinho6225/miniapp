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
  return (
    <CardWrapper>
      <CardBody>
        <CardFieldset>
          <CardImg
            alt="profilePic"
            src={props.collections[0].profile_picture}
          />
        </CardFieldset>
        <CardFieldset>
          <CardName>{props.collections[0].name}</CardName>
          <CardOptions>
            <CardOptionsItem>
              <CardLink
                href={props.collections[0].gitHubUrl}
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
                href={props.collections[0].linkedInUrl}
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
                href={props.collections[0].portfolioUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <CardIcon big>
                  <FaRocket />
                </CardIcon>
              </CardLink>
            </CardOptionsItem>
          </CardOptions>
          <CardTitle>{props.collections[0].title}</CardTitle>
        </CardFieldset>
      </CardBody>
    </CardWrapper>
  );
};

export default Card;
