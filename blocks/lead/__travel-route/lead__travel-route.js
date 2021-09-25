let routePath = document.querySelector('.lead__travel-route-path');
let routePathStyles = getComputedStyle(routePath);
const timer = ms => new Promise(res => setTimeout(res, ms));

let novgorod = document.querySelector('.lead__travel-route-city_name_novgorod');
let pskov = document.querySelector('.lead__travel-route-city_name_pskov');
let tver = document.querySelector('.lead__travel-route-city_name_tver');
let yaroslavl = document.querySelector('.lead__travel-route-city_name_yaroslavl');
let manturovo = document.querySelector('.lead__travel-route-city_name_manturovo');
let kotelnich = document.querySelector('.lead__travel-route-city_name_kotelnich');
let glazov = document.querySelector('.lead__travel-route-city_name_glazov');
let perm = document.querySelector('.lead__travel-route-city_name_perm');
let tymen = document.querySelector('.lead__travel-route-city_name_tymen');
let omsk = document.querySelector('.lead__travel-route-city_name_omsk');
let krasnoyarsk = document.querySelector('.lead__travel-route-city_name_krasnoyarsk');
let ulanUde = document.querySelector('.lead__travel-route-city_name_ulan-ude');

function getCurrentDashOffset() {
  let offset = routePathStyles.strokeDashoffset.slice(0, -2);
  return Math.floor(offset);
}

async function trackOffset() { 
  while (getCurrentDashOffset() > 0 ) {
    switch (true)  {
      case (getCurrentDashOffset() < 15):
        ulanUde.classList.add('lead__travel-route-city_is-shown');
        break;
      case (getCurrentDashOffset() < 100):
        krasnoyarsk.classList.add('lead__travel-route-city_is-shown');
        break;
      case (getCurrentDashOffset() < 310):
        omsk.classList.add('lead__travel-route-city_is-shown');
        break;
      case (getCurrentDashOffset() < 430):
        tymen.classList.add('lead__travel-route-city_is-shown');
        break;
      case (getCurrentDashOffset() < 490):
        perm.classList.add('lead__travel-route-city_is-shown');
        break;
      case (getCurrentDashOffset() < 580):
        glazov.classList.add('lead__trav60el-route-city_is-shown');
        break;
      case (getCurrentDashOffset() < 770):
        kotelnich.classList.add('lead__travel-route-city_is-shown');
        break;
      case (getCurrentDashOffset() < 870):
        manturovo.classList.add('lead__travel-route-city_is-shown');
        break;
      case (getCurrentDashOffset() < 1000):
        yaroslavl.classList.add('lead__travel-route-city_is-shown');
        break;
      case (getCurrentDashOffset() < 1090):
        tver.classList.add('lead__travel-route-city_is-shown');
        break;
      case (getCurrentDashOffset() < 1270):
        novgorod.classList.add('lead__travel-route-city_is-shown');
        break;
      default:
        break;
    }
    await timer(50);
  }
}

trackOffset();