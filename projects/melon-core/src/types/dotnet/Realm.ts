import { DotnetInstanceExpression } from "./DotnetInstanceExpression";

interface Realm {
    name: string;
    setValue(name: string, value: any): void;
    setInstance(name: string, expression: DotnetInstanceExpression, ...parameters: any): void;
    get<T>(name: string): T;
}

export { Realm }