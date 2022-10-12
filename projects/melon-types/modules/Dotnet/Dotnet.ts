declare interface Dotnet {
    getStaticMethod: <T>(expression: DotnetFetchExpession) => (...args: any) => T;
    getStaticProperty: <T>(expression: DotnetFetchExpession) => T;
    loadAssembly: (path: string) => string;
    removeAssembly: (fullName: string) => void;
    getLoadedAssemblies: () => string[];
    loadAsemblyAsync: (path: string) => Promise<string>;
    threading: {
        createTask: (action: Function) => any;
        createThread: (action: Function) => any;
    };
    types: {
        sbyte: (number: number) => {
            type: string;
            value: number;
        };
        byte: (number: number) => {
            type: string;
            value: number;
        };
        short: (number: number) => {
            type: string;
            value: number;
        };
        ushort: (number: number) => {
            type: string;
            value: number;
        };
        int: (number: number) => {
            type: string;
            value: number;
        };
        uint: (number: number) => {
            type: string;
            value: number;
        };
        long: (number: number) => {
            type: string;
            value: number;
        };
        ulong: (number: number) => {
            type: string;
            value: number;
        };
        float: (number: number) => {
            type: string;
            number: number;
        };
        double: (number: number) => {
            type: string;
            number: number;
        };
        decimal: (number: number) => {
            type: string;
            number: number;
        };
    };
    Realm: new(name?: string) => Realm;
}