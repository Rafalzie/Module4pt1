import React, { useState } from 'react';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description, link }) => {
  const [hovered, setHovered] = useState(false);

  // Styles for the card container
  const cardStyle: React.CSSProperties = {
    width: '300px',
    borderRadius: '12px',
    boxShadow: hovered ? '0px 8px 20px rgba(0, 0, 0, 0.2)' : '0px 4px 10px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    transform: hovered ? 'scale(1.05)' : 'scale(1)',
    cursor: 'pointer',
  };

  // Styles for the image
  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
  };

  // Styles for the content inside the card
  const contentStyle: React.CSSProperties = {
    padding: '16px',
    backgroundColor: '#fff',
  };

  // Styles for the title
  const titleStyle: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '0 0 8px 0',
  };

  // Styles for the description
  const descriptionStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#555',
    marginBottom: '12px',
  };

  // Styles for the link
  const linkStyle: React.CSSProperties = {
    color: '#1e90ff',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.2s ease',
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <img src={imageSrc} alt={title} style={imageStyle} />
      
      {/* Content */}
      <div style={contentStyle}>
        <h2 style={titleStyle}>{title}</h2>
        <p style={descriptionStyle}>{description}</p>
        <a href={link} style={linkStyle} target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;
