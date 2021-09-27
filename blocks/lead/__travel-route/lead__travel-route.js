const routePath = document.querySelector('.lead__travel-route-path');
const routePathStyles = getComputedStyle(routePath);
const timer = ms => new Promise(res => setTimeout(res, ms));

const OFFSETS = [
  { city: 'ulan-ude', offset: 25 },
  { city: 'krasnoyarsk', offset: 110 },
  { city: 'omsk', offset: 320 },
  { city: 'tymen', offset: 440 },
  { city: 'perm', offset: 500 },
  { city: 'glazov', offset: 590 },
  { city: 'kotelnich', offset: 780 },
  { city: 'manturovo', offset: 880 },
  { city: 'yaroslavl', offset: 1010 },
  { city: 'tver', offset: 1100 },
  { city: 'novgorod', offset: 1280 }
];

const cityElements = OFFSETS.map((item) => {
  let cityElement = document.querySelector(`.lead__travel-route-city_name_${item.city}`);
  return cityElement;
})

function getCurrentDashOffset() {
  let offset = routePathStyles.strokeDashoffset.slice(0, -2);
  return Math.floor(offset);
}

async function trackOffset() {
  let currentOffset = getCurrentDashOffset();
  i = 1;
  while (currentOffset > 0) {
    let lastElement = OFFSETS[OFFSETS.length - i];

    if (currentOffset < lastElement.offset) {
      cityElements[OFFSETS.length - i].classList.add('lead__travel-route-city_is-shown');
      i++;
    }

    await timer(50);
    currentOffset = getCurrentDashOffset();
  }
}     

trackOffset();