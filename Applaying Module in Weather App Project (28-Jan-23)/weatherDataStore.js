const watherData = {

    city: '',
    country: '',
    API_KEY: '3369900f5b58c49516413f8ecdb9439d',
    async getWeather() {
        try{
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=metric&appid=${this.API_KEY}`
            )
            const {name, main, weather} = await res.json()
            return{
                name,
                main,
                weather
            }
         } catch(err){
            UI.showMessage('Error in feaching data', 'danger')
         }
    },
}

export default watherData