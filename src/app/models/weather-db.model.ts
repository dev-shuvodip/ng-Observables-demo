export interface IWeatherDB {
    region: string;
    currentConditions: CurrentConditions;
    next_days: Next_Day[];
}

export interface CurrentConditions {
    dayhour: string;
    temp: Temperature;
    precip: string;
    humidity: string;
    wind: Wind;
    iconURL: string;
    comment: string;
}

export interface Next_Day {
    day: string;
    comment: string;
    max_temp: Temperature;
    min_temp: Temperature;
}

export interface Temperature {
    C: Number;
    f: Number;
}

export interface Wind {
    km: string;
    mile: string;
}
