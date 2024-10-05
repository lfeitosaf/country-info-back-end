import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class ApiService {
    constructor(private configService: ConfigService){}
    
    async getDataCountries(): Promise<any>{
        try {
            const apiUrl = this.configService.get<string>('COUNTRY_INFO_API');
            const response = await axios.get(`${apiUrl}/AvailableCountries`)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    
    async getBorderCountries(countryCode: string): Promise<any>{
        const apiUrl = this.configService.get<string>('COUNTRY_INFO_API');
        try {
            const response = await axios.get(`${apiUrl}/CountryInfo/${countryCode}`)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    async getCountryPopulation(countryName: string): Promise<any>{
        const apiUrl = this.configService.get<string>('COUNTRIES_NOW_URL');
        try {
            const response = await axios.get(`${apiUrl}/population`)

            const data = response.data.data

            const filteredCountry = data.find( (item: any) => item.country.toLowerCase() === countryName.toLowerCase())

            return filteredCountry
        } catch (error) {
            console.log(error)
        }
        
    }

    async getCountryFlag(countryName: string): Promise<any>{
        const apiUrl = this.configService.get<string>('COUNTRIES_NOW_URL');
        try {
            const response = await axios.get(`${apiUrl}/flag/images`)

            const data = response.data.data

            const filteredCountry = data.find( (item: any) => item.name.toLowerCase() === countryName.toLowerCase())

            const countryFlag = filteredCountry.flag

            return countryFlag
        } catch (error) {
            console.log(error)
        }
        
    }

}
