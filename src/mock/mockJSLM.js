const mockWeather = {
  "Headline": {
    "EffectiveDate": "2021-11-03T08:00:00+11:00",
    "EffectiveEpochDate": 1635886800,
    "Severity": 2,
    "Text": "Expect showers Wednesday morning",
    "Category": "rain",
    "EndDate": "2021-11-03T14:00:00+11:00",
    "EndEpochDate": 1635908400,
    "MobileLink": "http://www.accuweather.com/en/au/newstead/25854/daily-weather-forecast/25854?unit=c&lang=en-us",
    "Link": "http://www.accuweather.com/en/au/newstead/25854/daily-weather-forecast/25854?unit=c&lang=en-us"
  },
  "DailyForecasts": [
    {
      "Date": "2021-10-30T07:00:00+11:00",
      "EpochDate": 1635537600,
      "Temperature": {
        "Minimum": {
          "Value": 2.3,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 13,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "Day": {
        "Icon": 4,
        "IconPhrase": "Intermittent clouds",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 33,
        "IconPhrase": "Clear",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/au/newstead/25854/daily-weather-forecast/25854?day=1&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/au/newstead/25854/daily-weather-forecast/25854?day=1&unit=c&lang=en-us"
    },
    {
      "Date": "2021-10-31T07:00:00+11:00",
      "EpochDate": 1635624000,
      "Temperature": {
        "Minimum": {
          "Value": 5.5,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 17.8,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "Day": {
        "Icon": 1,
        "IconPhrase": "Sunny",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 33,
        "IconPhrase": "Clear",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/au/newstead/25854/daily-weather-forecast/25854?day=2&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/au/newstead/25854/daily-weather-forecast/25854?day=2&unit=c&lang=en-us"
    },
    {
      "Date": "2021-11-01T07:00:00+11:00",
      "EpochDate": 1635710400,
      "Temperature": {
        "Minimum": {
          "Value": 9.6,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 21.8,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "Day": {
        "Icon": 1,
        "IconPhrase": "Sunny",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 34,
        "IconPhrase": "Mostly clear",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/au/newstead/25854/daily-weather-forecast/25854?day=3&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/au/newstead/25854/daily-weather-forecast/25854?day=3&unit=c&lang=en-us"
    },
    {
      "Date": "2021-11-02T07:00:00+11:00",
      "EpochDate": 1635796800,
      "Temperature": {
        "Minimum": {
          "Value": 16.7,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 26.1,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "Day": {
        "Icon": 2,
        "IconPhrase": "Mostly sunny",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 38,
        "IconPhrase": "Mostly cloudy",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/au/newstead/25854/daily-weather-forecast/25854?day=4&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/au/newstead/25854/daily-weather-forecast/25854?day=4&unit=c&lang=en-us"
    },
    {
      "Date": "2021-11-03T07:00:00+11:00",
      "EpochDate": 1635883200,
      "Temperature": {
        "Minimum": {
          "Value": 13.5,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 18.5,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "Day": {
        "Icon": 12,
        "IconPhrase": "Showers",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Heavy"
      },
      "Night": {
        "Icon": 7,
        "IconPhrase": "Cloudy",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Moderate"
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/au/newstead/25854/daily-weather-forecast/25854?day=5&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/au/newstead/25854/daily-weather-forecast/25854?day=5&unit=c&lang=en-us"
    }
  ]
}


export default mockWeather;