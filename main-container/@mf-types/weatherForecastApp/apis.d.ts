
    export type RemoteKeys = 'weatherForecastApp/App' | 'weatherForecastApp/WeatherWidget';
    type PackageType<T> = T extends 'weatherForecastApp/WeatherWidget' ? typeof import('weatherForecastApp/WeatherWidget') :T extends 'weatherForecastApp/App' ? typeof import('weatherForecastApp/App') :any;