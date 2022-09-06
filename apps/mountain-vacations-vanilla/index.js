const listItems = document.querySelectorAll('.list__item');
const dstTitle = document.querySelector('.destination__title');
const dstImage = document.querySelector('.destination__img');
const dstDescription = document.querySelector('.destination__description');

const destinations = {
  mountEverest: {
    title: 'Mount Everest Base Camp, Nepal',
    image: 'images/mount-everest-base-camp.jpg',
    description: `
      There are fourteen mountains on this planet that are higher than
      8,000 meters and ten of those mountains are within the Himalayas. At
      8,848 meters (or 29,029 feet), Mount Everest stands above all others
      as the tallest mountain in the world.
  `,
  },
  jotunheimenMountains: {
    title: 'Jotunheimen Mountains, Norway',
    image: 'images/jotunheimen-mountains.jpg',
    description: `
      According to ancient Norse mythology, Jotunheimen was the place where
      the jotner, or the trolls, once lived. When you visit this jaw-dropping
      beautiful landscape, you won’t have much trouble understanding why.
  `,
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
  },
};

function select(selectedItem) {
  // Remove selected class from all items
  for (let item of listItems) {
    item.classList.remove('list__item--selected');
  }

  // Add selected class to selected item
  selectedItem.classList.add('list__item--selected');

  // Get the id of the selected item
  let dstId = selectedItem.getAttribute('id');

  // Set the details of the destination
  dstTitle.innerHTML = destinations[dstId].title;
  dstImage.setAttribute('src', destinations[dstId].image);
  dstDescription.innerHTML = destinations[dstId].description;
}
