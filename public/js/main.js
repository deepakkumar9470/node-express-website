const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');

const temp_real_value = document.getElementById('temp_real_value');
const temp_status =  document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');
const getInfo = async (e) =>{
  e.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === '') {
    city_name.innerText = `Please write the before search`;
    datahide.classList.add('data_hide');
   }else {
    try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=65f00a13035e1b7fecfcb9e62f75c670`;
        const response =  await fetch(url);
        const data =await response.json()
        console.log(data)
        const arrdata = [data];

        city_name.innerText = arrdata[0].name;
        temp_real_value.innerText = arrdata[0].main.temp;
        const tempMod = arrdata[0].weather[0].main;
        if (tempMod == 'Clear') {
            temp_status.innerHTML =
            '<i class="fas fa-sun" style="color: #eccc68"></i>'
        } else if(tempMod == 'Clouds') {
             temp_status.innerHTML =
             '<i class="fas fa-cloud" style="color: #f1f2f6"></i>'
        }else if(tempMod == 'Rain') {
             temp_status.innerHTML =
             '<i class="fas fa-cloud-rain" style="color: #a4b0be"></i>'
        }else{
             temp_status.innerHTML =
             '<i class="fas fa-sun" style="color: #eccc68"></i>'
        }

        datahide.classList.remove('data_hide');
     } catch (error) {
        city_name.innerText = `Please enter the city name properly`;
        datahide.classList.add('data_hide');
    }
    
}

}


submitBtn.addEventListener('click', getInfo);