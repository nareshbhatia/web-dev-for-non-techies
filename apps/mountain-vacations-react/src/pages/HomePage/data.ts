import { Destination, ListItem } from '../../components';

const citation = `
  Joshua Hewitt (2020, May 16). The Top 20 Mountain Travel Destinations in
  the World. Retrieved from https://wanderlustphotosblog.com
`;

export const items: Array<ListItem> = [
  {
    id: 'mountEverest',
    name: 'Mount Everest Base Camp, Nepal',
  },
  {
    id: 'jotunheimenMountains',
    name: 'Jotunheimen Mountains, Norway',
  },
  {
    id: 'denaliNationalPark',
    name: 'Denali National Park, USA',
  },
];

export const destinations: { [key: string]: Destination } = {
  mountEverest: {
    title: 'Mount Everest Base Camp, Nepal',
    image: 'images/mount-everest-base-camp.jpg',
    description: `
      There are fourteen mountains on this planet that are higher than
      8,000 meters and ten of those mountains are within the Himalayas. At
      8,848 meters (or 29,029 feet), Mount Everest stands above all others
      as the tallest mountain in the world.
    `,
    citation,
  },
  jotunheimenMountains: {
    title: 'Jotunheimen Mountains, Norway',
    image: 'images/jotunheimen-mountains.jpg',
    description: `
      According to ancient Norse mythology, Jotunheimen was the place where
      the jotner, or the trolls, once lived. When you visit this jaw-dropping
      beautiful landscape, you won’t have much trouble understanding why.
    `,
    citation,
  },
  denaliNationalPark: {
    title: 'Denali National Park, USA',
    image: 'images/denali-national-park.jpg',
    description: `
      World-renowned for its phenomenal wildlife, breathtaking mountain peaks,
      and beautiful glacially-fed rivers, Denali National Park in Alaska, USA
      has earned every bit of its reputation as an outdoor enthusiast’s
      dreamland.
    `,
    citation,
  },
};
