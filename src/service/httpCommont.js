import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://newsapi.org/',
    headers:{
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
    }
})
const apiClient1 = axios.create({
    baseURL: 'https://api.weatherapi.com/',
    headers:{
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
    }
})

export default{
    getData(params){
        return apiClient.get('v2/everything?' + params)
    },
    getDateWeather(params){
        return apiClient1.get('v1/current.json?'+params)
    }
}