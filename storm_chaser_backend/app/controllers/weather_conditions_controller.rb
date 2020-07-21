class WeatherConditionsController < ApplicationController
    before_action :authenticate, only: [:save]

    def index
        @weather = OpenWeatherService.new.weather_search(params:[:zipcode])

        render json: @weather
    end


end
