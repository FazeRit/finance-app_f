/** @jsxImportSource @emotion/react */
import { Link } from "react-router";
import React from "react";
import { styles } from "./card.styles";

type CardProps = {
  icon?: React.ReactNode;
  to?: string;
  text: string;
  onClick?: () => void;
};

const Card: React.FC<CardProps> = ({ icon, to, text, onClick }) => {
  if (!to) {
    return (
      <div css={styles.container} onClick={onClick}>
        {icon}
        <p css={styles.text}>{text}</p>
      </div>
    );
  }

  return (
    <Link to={to} css={styles.container} onClick={onClick}>
      {icon}
      <p css={styles.text}>{text}</p>
    </Link>
  );
};

export default Card;
