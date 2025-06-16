
    export type RemoteKeys = 'weatherForecastApp/App';
    type PackageType<T> = T extends 'weatherForecastApp/App' ? typeof import('weatherForecastApp/App') :any;