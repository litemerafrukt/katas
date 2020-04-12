defmodule SpaceAge do
  @type planet :: :mercury | :venus | :earth | :mars | :jupiter
                | :saturn | :uranus | :neptune

  @spec to_earth_years(pos_integer) :: float
  def to_earth_years(seconds) do
    seconds / 31557600
  end

  @spec age_on(planet, pos_integer) :: float
  def age_on(planet, seconds) do
    case planet do
      :mercury -> to_earth_years(seconds) / 0.2408467
      :venus -> to_earth_years(seconds) / 0.6151972
      :earth -> to_earth_years(seconds)
      :mars -> to_earth_years(seconds) / 1.8808158
      :jupiter -> to_earth_years(seconds) / 11.862615
      :saturn -> to_earth_years(seconds) / 29.447498
      :uranus -> to_earth_years(seconds) / 84.016846
      :neptune -> to_earth_years(seconds) / 164.79132
    end
  end
end
