class WeatherConditionsController < ApplicationController
    
    def get_weather
        @weather = OpenWeatherService.new.weather_search(params[:zipcode])

        render json: @weather
    end


end
