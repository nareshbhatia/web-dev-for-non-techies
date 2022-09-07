import * as React from 'react';
import { DestinationDetail, Header, List } from '../../components';
import { items, destinations } from './data';
import './HomePage.css';

export function HomePage() {
  const [selectedItemId, setSelectedItem] = React.useState('mountEverest');

  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <div className="content">
          <div className="destination-list">
            <List
              items={items}
              selectedItemId={selectedItemId}
              onItemSelected={setSelectedItem}
            />
          </div>
          <DestinationDetail destination={destinations[selectedItemId]} />
        </div>
      </main>
    </React.Fragment>
  );
}
