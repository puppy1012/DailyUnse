export declare function convertToGrid(lat: number, lon: number): {
    nx: number;
    ny: number;
};
export declare function getLatestBaseTime(): {
    base_date: string;
    base_time: string;
};
export declare const getForecastValues: (items: any[]) => {
    temperature: any;
    rain: any;
    sky: string;
    pop: any;
};
