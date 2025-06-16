
    export type RemoteKeys = 'authenticationApp/App';
    type PackageType<T> = T extends 'authenticationApp/App' ? typeof import('authenticationApp/App') :any;