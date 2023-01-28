import watherData from "./weatherDataStore.js"

const UI = {

    loadSelactors() {
        const cityElm = document.querySelector('#city')
        const cityInfoElm = document.querySelector('#w-city')
        const iconElm = document.querySelector('#w-icon')
        const temperatureElm = document.querySelector('#w-temp')
        const pressureElm = document.querySelector('#w-pressure')
        const humidityElm = document.querySelector('#w-humidity')
        const fellElm = document.querySelector('#w-fell')
        const formElm = document.querySelector('#form')
        const countryElm = document.querySelector('#country')
        const messageElm = document.querySelector('#messageWrapper')

        return {
            cityElm,
            cityInfoElm,
            iconElm,
            temperatureElm,
            pressureElm,
            humidityElm,
            fellElm,
            formElm,
            messageElm,
            countryElm
        }
    },

    hideMessage() {
        const messageElm = document.querySelector('#message')
        setTimeout(() => {
            messageElm.remove()
        }, 2000)
    },

    showMessage(msg, type) {
        const {messageElm} = this.loadSelactors()
        const elm = `<div class="alert alert-${type}" id="message">${msg}</div>`
        messageElm.insertAdjacentHTML('afterbegin', elm)
        this.hideMessage()
    },

    validateInputs(country, city) {
        // validation chek
        if(country === '' || city === '') {
           this.showMessage('Please provide nessary information', 'danger')
           return true
        }else {
            return false
        }
    },

    getInputValues() {
        const { cityElm, countryElm } = this.loadSelactors()

        const isInValide = this.validateInputs(countryElm.value, cityElm.value)
        if(isInValide) return

        return {
            country: countryElm.value,
            city: cityElm.value
        }
    },
    
    resetInput() {
        const { cityElm, countryElm } = this.loadSelactors()
        cityElm.value = ""
        countryElm.value = ""
    },

    async handleRemoteData() {
        const data = await watherData.getWeather()
        return data
    },
    getIcon(iconCode) {
        return `https://openweathermap.org/img/w/${iconCode}.png`
    },
    populateUI(data) {
        const {
            cityInfoElm,
            temperatureElm,
            pressureElm,
            humidityElm,
            fellElm,
            iconElm
        } = this.loadSelactors()

        const {
          name, 
          main: { temp, pressure, humidity },
          weather,  
        } = data

        cityInfoElm.textContent = name
        temperatureElm.textContent = `Temperature: ${temp}°C`
        pressureElm.textContent = `Pressure: ${pressure}Kpa`
        humidityElm.textContent = `Humidity: ${humidity}`
        fellElm.textContent = weather[0].description
        iconElm.setAttribute('src', this.getIcon(weather[0].icon))
    },

    init() {
        const { formElm } = this.loadSelactors()

        formElm.addEventListener('submit', async (evt) => {
            evt.preventDefault()
            // get input values
            const {country, city} = this.getInputValues()
            // seating data to data storage
            watherData.city = city
            watherData.country = country
            // reset the input values
            this.resetInput()
            // send data to api server
            const data = await this.handleRemoteData()
            // populate UI
            this.populateUI(data)
        })
    }
}

export default UI