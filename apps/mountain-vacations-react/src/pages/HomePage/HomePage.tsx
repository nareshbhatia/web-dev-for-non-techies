import * as React from 'react';
import { Header } from '../../components';

export function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <div className="content">
          <div className="destination-list">
            <ul className="list">
              <li
                id="mountEverest"
                className="list__item list__item--selected"
              >
                Mount Everest Base Camp, Nepal
              </li>
              <li
                id="jotunheimenMountains"
                className="list__item"
              >
                Jotunheimen Mountains, Norway
              </li>
              <li
                id="denaliNationalPark"
                className="list__item"
              >
                Denali National Park, USA
              </li>
            </ul>
          </div>
          <div className="destination">
            <h1 className="destination__title">
              Mount Everest Base Camp, Nepal
            </h1>
            <img
              className="destination__img"
              src="images/mount-everest-base-camp.jpg"
              alt="Mount Everest Base Camp, Nepal"
            />
            <div className="destination__description">
              There are fourteen mountains on this planet that are higher than
              8,000 meters and ten of those mountains are within the Himalayas.
              At 8,848 meters (or 29,029 feet), Mount Everest stands above all
              others as the tallest mountain in the world.
            </div>
            <div className="citation">
              Joshua Hewitt (2020, May 16). The Top 20 Mountain Travel
              Destinations in the World. Retrieved from
              https://wanderlustphotosblog.com
            </div>
            <div className="destination__action-bar">
              <button className="button">Sign me up</button>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
