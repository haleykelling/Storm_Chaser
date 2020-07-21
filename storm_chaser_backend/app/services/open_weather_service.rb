class OpenWeatherService
    def weather_search(zipcode)
        response = Excon.get("http://api.openweathermap.org/data/2.5/weather?zip=#{zipcode}&units=imperial&appid=#{ENV['OPEN_WEATHER_API_KEY']}")

        JSON.parse(response.body)
    end

end

