import axios, { type AxiosResponse } from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/BamBamPatra/db_CompoBase' ,
    withCredentials: false ,
    headers: {
        Accept: 'application/json' ,
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents() : Promise<AxiosResponse<EventItem[]>>{
        return apiClient.get<EventItem[]('/events')
    } ,
    getEventById(id: number) : Promise<AxiosResponse<EventItem>>{
        return apiClient.get<EventItem>('/events' + id.toString())
    }
}