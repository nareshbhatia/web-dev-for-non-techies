import * as React from 'react';
import './DestinationDetail.css';

export interface Destination {
  title: string;
  image: string;
  description: string;
  citation: string;
}

interface DestinationDetailProps {
  destination: Destination;
}

export function DestinationDetail({ destination }: DestinationDetailProps) {
  const { title, image, description, citation } = destination;
  return (
    <div className="destination">
      <h1 className="destination__title">{title}</h1>
      <img
        className="destination__img"
        src={image}
        alt="Mount Everest Base Camp, Nepal"
      />
      <div className="destination__description">{description}</div>
      <div className="citation">{citation}</div>
      <div className="destination__action-bar">
        <button className="button">Sign me up</button>
      </div>
    </div>
  );
}
