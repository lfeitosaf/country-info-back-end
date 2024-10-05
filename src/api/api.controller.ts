import { Controller, Get, Param } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

    @Get('countries')
    async getCountries(){
      const data = await this.apiService.getDataCountries()

      return data
    }

    @Get('countries/border/:countryCode')
    async getBorderCountries(@Param('countryCode') countryCode: string){
      const data = await this.apiService.getBorderCountries(countryCode)

      return data
    }

    @Get('countries/population/:countryName')
    async getCountryPopulation(@Param('countryName') countryName: string){
      const data = await this.apiService.getCountryPopulation(countryName)

      return data
    }

    @Get('countries/flag/:countryName')
    async getCountryFlag(@Param('countryName') countryName: string){
      const data = await this.apiService.getCountryFlag(countryName)

      return data
    }
}
