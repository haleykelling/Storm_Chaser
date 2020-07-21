Rails.application.routes.draw do
  post "/weather_conditions", to: "weather_conditions#get_weather"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
