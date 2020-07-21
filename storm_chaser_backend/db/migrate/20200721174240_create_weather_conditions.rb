class CreateWeatherConditions < ActiveRecord::Migration[6.0]
  def change
    create_table :weather_conditions do |t|

      t.timestamps
    end
  end
end
