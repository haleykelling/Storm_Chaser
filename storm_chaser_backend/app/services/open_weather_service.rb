class OpenWeatherService
    def weather_search(search_params)
        params = URI.encode(search_params)
        response = Excon.get("http://api.openweathermap.org/data/2.5/forecast?zip=#{params}&units=imperial&appid=#{ENV['OPEN_WEATHER_API_KEY']}")
        JSON.parse(response, body)
    end

end

