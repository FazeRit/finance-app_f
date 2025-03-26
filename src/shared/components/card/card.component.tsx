/** @jsxImportSource @emotion/react */
import { Link } from 'react-router';
import { COLORS } from '../../styles/colors';
import React from "react";
import { styles } from './card.styles';
type CardProps = {
  icon?: React.ReactNode;
  bgColor?: typeof COLORS;
  to: string;
  text: string;
};

const Card: React.FC<CardProps> = ({ icon, bgColor, to, text }) => {
  return (
    <Link to={to} css={styles.container}>
      {icon}
      <p>{text}</p>
    </Link>
  );
};

export default Card;
