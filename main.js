import './style.css'


 document.querySelector('#app').innerHTML = 
 `
 <div class="container" id="container">
 <div class="weather-card" id="weather-card">
   <div class="reg-info">
    <div class="left" id="left"></div>
    <div class="right" id="right"></div>
   </div>
   <div class="more-info" id="below"></div>
 </div>
</div>
`

document.getElementById('select-zone').innerHTML =
`
<div class="search-box" id="search-box">
  <h1>Select!</h1>
  <select id="country-list" name="country" class="country-list">
    <option disabled selected value> -- Select List -- </option>
    <option value="Afghanistan">Afghanistan</option>
    <option value="Åland Islands">Åland Islands</option>
    <option value="Albania">Albania</option>
    <option value="Algeria">Algeria</option>
    <option value="American Samoa">American Samoa</option>
    <option value="Andorra">Andorra</option>
    <option value="Angola">Angola</option>
    <option value="Anguilla">Anguilla</option>
    <option value="Antarctica">Antarctica</option>
    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
    <option value="Argentina">Argentina</option>
    <option value="Armenia">Armenia</option>
    <option value="Aruba">Aruba</option>
    <option value="Australia">Australia</option>
    <option value="Austria">Austria</option>
    <option value="Azerbaijan">Azerbaijan</option>
    <option value="Bahamas">Bahamas</option>
    <option value="Bahrain">Bahrain</option>
    <option value="Bangladesh">Bangladesh</option>
    <option value="Barbados">Barbados</option>
    <option value="Belarus">Belarus</option>
    <option value="Belgium">Belgium</option>
    <option value="Belize">Belize</option>
    <option value="Benin">Benin</option>
    <option value="Bermuda">Bermuda</option>
    <option value="Bhutan">Bhutan</option>
    <option value="Bolivia">Bolivia</option>
    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
    <option value="Botswana">Botswana</option>
    <option value="Bouvet Island">Bouvet Island</option>
    <option value="Brazil">Brazil</option>
    <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
    <option value="Brunei Darussalam">Brunei Darussalam</option>
    <option value="Bulgaria">Bulgaria</option>
    <option value="Burkina Faso">Burkina Faso</option>
    <option value="Burundi">Burundi</option>
    <option value="Cambodia">Cambodia</option>
    <option value="Cameroon">Cameroon</option>
    <option value="Canada">Canada</option>
    <option value="Cape Verde">Cape Verde</option>
    <option value="Cayman Islands">Cayman Islands</option>
    <option value="Central African Republic">Central African Republic</option>
    <option value="Chad">Chad</option>
    <option value="Chile">Chile</option>
    <option value="China">China</option>
    <option value="Christmas Island">Christmas Island</option>
    <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
    <option value="Colombia">Colombia</option>
    <option value="Comoros">Comoros</option>
    <option value="Congo">Congo</option>
    <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
    <option value="Cook Islands">Cook Islands</option>
    <option value="Costa Rica">Costa Rica</option>
    <option value="Cote D'ivoire">Cote D'ivoire</option>
    <option value="Croatia">Croatia</option>
    <option value="Cuba">Cuba</option>
    <option value="Cyprus">Cyprus</option>
    <option value="Czech Republic">Czech Republic</option>
    <option value="Denmark">Denmark</option>
    <option value="Djibouti">Djibouti</option>
    <option value="Dominica">Dominica</option>
    <option value="Dominican Republic">Dominican Republic</option>
    <option value="Ecuador">Ecuador</option>
    <option value="Egypt">Egypt</option>
    <option value="El Salvador">El Salvador</option>
    <option value="Equatorial Guinea">Equatorial Guinea</option>
    <option value="Eritrea">Eritrea</option>
    <option value="Estonia">Estonia</option>
    <option value="Ethiopia">Ethiopia</option>
    <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
    <option value="Faroe Islands">Faroe Islands</option>
    <option value="Fiji">Fiji</option>
    <option value="Finland">Finland</option>
    <option value="France">France</option>
    <option value="French Guiana">French Guiana</option>
    <option value="French Polynesia">French Polynesia</option>
    <option value="French Southern Territories">French Southern Territories</option>
    <option value="Gabon">Gabon</option>
    <option value="Gambia">Gambia</option>
    <option value="Georgia">Georgia</option>
    <option value="Germany">Germany</option>
    <option value="Ghana">Ghana</option>
    <option value="Gibraltar">Gibraltar</option>
    <option value="Greece">Greece</option>
    <option value="Greenland">Greenland</option>
    <option value="Grenada">Grenada</option>
    <option value="Guadeloupe">Guadeloupe</option>
    <option value="Guam">Guam</option>
    <option value="Guatemala">Guatemala</option>
    <option value="Guernsey">Guernsey</option>
    <option value="Guinea">Guinea</option>
    <option value="Guinea-bissau">Guinea-bissau</option>
    <option value="Guyana">Guyana</option>
    <option value="Haiti">Haiti</option>
    <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
    <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
    <option value="Honduras">Honduras</option>
    <option value="Hong Kong">Hong Kong</option>
    <option value="Hungary">Hungary</option>
    <option value="Iceland">Iceland</option>
    <option value="India">India</option>
    <option value="Indonesia">Indonesia</option>
    <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
    <option value="Iraq">Iraq</option>
    <option value="Ireland">Ireland</option>
    <option value="Isle of Man">Isle of Man</option>
    <option value="Israel">Israel</option>
    <option value="Italy">Italy</option>
    <option value="Jamaica">Jamaica</option>
    <option value="Japan">Japan</option>
    <option value="Jersey">Jersey</option>
    <option value="Jordan">Jordan</option>
    <option value="Kazakhstan">Kazakhstan</option>
    <option value="Kenya">Kenya</option>
    <option value="Kiribati">Kiribati</option>
    <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
    <option value="Korea, Republic of">Korea, Republic of</option>
    <option value="Kuwait">Kuwait</option>
    <option value="Kyrgyzstan">Kyrgyzstan</option>
    <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
    <option value="Latvia">Latvia</option>
    <option value="Lebanon">Lebanon</option>
    <option value="Lesotho">Lesotho</option>
    <option value="Liberia">Liberia</option>
    <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
    <option value="Liechtenstein">Liechtenstein</option>
    <option value="Lithuania">Lithuania</option>
    <option value="Luxembourg">Luxembourg</option>
    <option value="Macao">Macao</option>
    <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
    <option value="Madagascar">Madagascar</option>
    <option value="Malawi">Malawi</option>
    <option value="Malaysia">Malaysia</option>
    <option value="Maldives">Maldives</option>
    <option value="Mali">Mali</option>
    <option value="Malta">Malta</option>
    <option value="Marshall Islands">Marshall Islands</option>
    <option value="Martinique">Martinique</option>
    <option value="Mauritania">Mauritania</option>
    <option value="Mauritius">Mauritius</option>
    <option value="Mayotte">Mayotte</option>
    <option value="Mexico">Mexico</option>
    <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
    <option value="Moldova, Republic of">Moldova, Republic of</option>
    <option value="Monaco">Monaco</option>
    <option value="Mongolia">Mongolia</option>
    <option value="Montenegro">Montenegro</option>
    <option value="Montserrat">Montserrat</option>
    <option value="Morocco">Morocco</option>
    <option value="Mozambique">Mozambique</option>
    <option value="Myanmar">Myanmar</option>
    <option value="Namibia">Namibia</option>
    <option value="Nauru">Nauru</option>
    <option value="Nepal">Nepal</option>
    <option value="Netherlands">Netherlands</option>
    <option value="Netherlands Antilles">Netherlands Antilles</option>
    <option value="New Caledonia">New Caledonia</option>
    <option value="New Zealand">New Zealand</option>
    <option value="Nicaragua">Nicaragua</option>
    <option value="Niger">Niger</option>
    <option value="Nigeria">Nigeria</option>
    <option value="Niue">Niue</option>
    <option value="Norfolk Island">Norfolk Island</option>
    <option value="Northern Mariana Islands">Northern Mariana Islands</option>
    <option value="Norway">Norway</option>
    <option value="Oman">Oman</option>
    <option value="Pakistan">Pakistan</option>
    <option value="Palau">Palau</option>
    <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
    <option value="Panama">Panama</option>
    <option value="Papua New Guinea">Papua New Guinea</option>
    <option value="Paraguay">Paraguay</option>
    <option value="Peru">Peru</option>
    <option value="Philippines">Philippines</option>
    <option value="Pitcairn">Pitcairn</option>
    <option value="Poland">Poland</option>
    <option value="Portugal">Portugal</option>
    <option value="Puerto Rico">Puerto Rico</option>
    <option value="Qatar">Qatar</option>
    <option value="Reunion">Reunion</option>
    <option value="Romania">Romania</option>
    <option value="Russian Federation">Russian Federation</option>
    <option value="Rwanda">Rwanda</option>
    <option value="Saint Helena">Saint Helena</option>
    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
    <option value="Saint Lucia">Saint Lucia</option>
    <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
    <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
    <option value="Samoa">Samoa</option>
    <option value="San Marino">San Marino</option>
    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
    <option value="Saudi Arabia">Saudi Arabia</option>
    <option value="Senegal">Senegal</option>
    <option value="Serbia">Serbia</option>
    <option value="Seychelles">Seychelles</option>
    <option value="Sierra Leone">Sierra Leone</option>
    <option value="Singapore">Singapore</option>
    <option value="Slovakia">Slovakia</option>
    <option value="Slovenia">Slovenia</option>
    <option value="Solomon Islands">Solomon Islands</option>
    <option value="Somalia">Somalia</option>
    <option value="South Africa">South Africa</option>
    <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
    <option value="Spain">Spain</option>
    <option value="Sri Lanka">Sri Lanka</option>
    <option value="Sudan">Sudan</option>
    <option value="Suriname">Suriname</option>
    <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
    <option value="Swaziland">Swaziland</option>
    <option value="Sweden">Sweden</option>
    <option value="Switzerland">Switzerland</option>
    <option value="Syrian Arab Republic">Syrian Arab Republic</option>
    <option value="Taiwan">Taiwan</option>
    <option value="Tajikistan">Tajikistan</option>
    <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
    <option value="Thailand">Thailand</option>
    <option value="Timor-leste">Timor-leste</option>
    <option value="Togo">Togo</option>
    <option value="Tokelau">Tokelau</option>
    <option value="Tonga">Tonga</option>
    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
    <option value="Tunisia">Tunisia</option>
    <option value="Turkey">Turkey</option>
    <option value="Turkmenistan">Turkmenistan</option>
    <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
    <option value="Tuvalu">Tuvalu</option>
    <option value="Uganda">Uganda</option>
    <option value="Ukraine">Ukraine</option>
    <option value="United Arab Emirates">United Arab Emirates</option>
    <option value="United Kingdom">United Kingdom</option>
    <option value="United States">United States</option>
    <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
    <option value="Uruguay">Uruguay</option>
    <option value="Uzbekistan">Uzbekistan</option>
    <option value="Vanuatu">Vanuatu</option>
    <option value="Venezuela">Venezuela</option>
    <option value="Viet Nam">Viet Nam</option>
    <option value="Virgin Islands, British">Virgin Islands, British</option>
    <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
    <option value="Wallis and Futuna">Wallis and Futuna</option>
    <option value="Western Sahara">Western Sahara</option>
    <option value="Yemen">Yemen</option>
    <option value="Zambia">Zambia</option>
    <option value="Zimbabwe">Zimbabwe</option>
  </select>
  <h1>Or Write it!</h1>
  <form id="form">
    <input type="text" placeholder="Buenos Aires" id="search" autocomplete="off" class="form-input">
    <button class="button" id="search-btn">Do!</button>
  </form>
</div>
`



const leftSide = document.getElementById('left');
const rightSide = document.getElementById('right');
const below = document.getElementById('below');
const containerCard = document.getElementById('container');
const countryList = document.getElementById('country-list');
const formValue = document.getElementById('search')
const form = document.getElementById('form');
const searchBox = document.getElementById('search-box');
const APIKEY = process.env.APIKEY;
const DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


const searchByCity = async (city) => {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`);
  const data = await res.json();
  const forecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}`);
  const forecastData = await forecast.json();

  //Getting all days at 12

  let forecastCollection = []
  for(let i = 4; i< forecastData.list.length; i+=4){
      forecastCollection.push(
          {
              sky: forecastData.list[i].weather[0].main,
              icon: forecastData.list[i].weather[0].icon,
              minTemp: toCelcius(forecastData.list[i].main.temp_min),
              maxTemp: toCelcius(forecastData.list[i].main.temp_max),

          }
          )
  };

  const dataCode = Number(data.cod);
  if(dataCode == 404) {
      alert('Please input a correct place!');
  } else {
    containerCard.style.backgroundColor = '#242424';
    displayData(data, forecastCollection, city);
  }
}


const displayData = async (data, forecast, city) => {

  //Datos de temp

  const temperature = toCelcius(data.main.temp);
  const minTemp = toCelcius(data.main.temp_min);
  const maxTemp = toCelcius(data.main.temp_max);
  const feelsLike = toCelcius(data.main.feels_like);
  const wind = toKm(data.wind.speed);

  //Reloj

  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  //Divs y Base
  
  const divLeft = document.createElement('div');
  const divRight = document.createElement('div');
  const divBelow = document.createElement('div');


  containerCard.classList.add('animate__animated')
  containerCard.classList.add('animate__bounceInDown')
  await delay(500);
  containerCard.classList.remove('animate__animated')
  containerCard.classList.remove('animate__bounceInDown')
  leftSide.innerHTML = '';
  rightSide.innerHTML = '';
  below.innerHTML = '';


  divLeft.innerHTML =
  `
  <p class="city-c">${city}</p>
  <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" id="weather-img">
    <h1 class="main">${data.weather[0].main}</h1>
    <p class="temperature">${temperature}°</p>
    <p class="description">${data.weather[0].description}</p>
  <div id="time-now">
    <p>${DAYS[day]}: ${hour}:${minutes}:${seconds}</p>
  </div>
  `

  divRight.innerHTML=
  `
  <p class="desc-title">Max and Min</p>
  <p>${maxTemp}° / </p>
  <p>${minTemp}°</p>
  <p class="desc-title">But feels like: </p>
  <p>${feelsLike}°</>
  <p class="desc-title">Humidity: </p>
  <p>${data.main.humidity}%</p>
  <p class="desc-title">Wind: </p>
  <p>${wind}km/h</p>
  `
  divBelow.innerHTML =
  `
  <p>Next days:</p>
  <div class="next-days-img">
    <img src="https://openweathermap.org/img/wn/${forecast[0].icon}@2x.png" class="next-img">
    <img src="https://openweathermap.org/img/wn/${forecast[1].icon}@2x.png" class="next-img">
    <img src="https://openweathermap.org/img/wn/${forecast[2].icon}@2x.png" class="next-img">
    <img src="https://openweathermap.org/img/wn/${forecast[3].icon}@2x.png" class="next-img">
    <img src="https://openweathermap.org/img/wn/${forecast[4].icon}@2x.png" class="next-img">
  </div>
  <div class="next-days-info">
    <span class="next-days-text">${forecast[0].minTemp}° / ${forecast[0].maxTemp}°</span>
    <span class="next-days-text">${forecast[1].minTemp}° / ${forecast[1].maxTemp}°</span>
    <span class="next-days-text">${forecast[2].minTemp}° / ${forecast[2].maxTemp}°</span>
    <span class="next-days-text">${forecast[3].minTemp}° / ${forecast[3].maxTemp}°</span>
    <span class="next-days-text">${forecast[4].minTemp}° / ${forecast[4].maxTemp}°</span>
  </div>
  <button class="change-btn" id="change-btn">Change Location</button>
  `

  rightSide.style.backgroundColor='rgba(0, 0, 0, .25)'
  leftSide.appendChild(divLeft);
  rightSide.appendChild(divRight);
  below.appendChild(divBelow);

  changeBackground(data.weather[0].main, temperature);
  const timing = setInterval(refreshTime, 1000);
  searchBox.classList.add('hide');


  const changeBtn = document.getElementById('change-btn');
  changeBtn.addEventListener('click', (e) => {
    searchBox.classList.remove('hide');
  })

};

countryList.addEventListener('change', (e) => {
  formValue.value = countryList.value;
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(formValue.value)
  searchByCity(formValue.value)
});


//Movement Animation

const appCard = document.getElementById('app');
const weatherImg = document.getElementById('weather-img');

const rotSpeed = 20;

appCard.addEventListener('mousemove', (e) => {
  let xPos = ((window.innerWidth / 2 - e.pageX) / rotSpeed);
  let yPos = ((window.innerHeight / 2 - e.pageY) / rotSpeed);

  containerCard.style.transform = `rotateY(${xPos}deg) rotateX(${yPos}deg)`;
});

appCard.addEventListener('mouseenter', (e) => {
  containerCard.style.transition = `none`;
});

appCard.addEventListener('mouseleave', (e) => {
  containerCard.style.transition = `all 0.5s ease`;
  containerCard.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

function changeBackground (description) {
  switch(description) {
      case 'Clear': containerCard.style.backgroundColor = 'cadetblue';
      break;
      case "Clouds": containerCard.style.backgroundColor = 'darkgray';
      break;
      case 'Haze': containerCard.style.backgroundColor = '#5B5EA6';
      break;
      case 'Rain': containerCard.style.backgroundColor = '#040439';
      break;
  }
}

function refreshTime() {
  const timeNow = document.getElementById('time-now');
  const newDate = new Date();
  const day = newDate.getDay();
  const hour = newDate.getHours();
  const minutes = newDate.getMinutes();
  const seconds = newDate.getSeconds();
  timeNow.innerHTML=`${DAYS[day]}: ${hour}:${minutes}:${seconds}`
}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function toCelcius (temperature) {
  return Math.floor(temperature - 273.15)
}

function toKm (wind) {
  return Math.floor(wind * 3.6)
}