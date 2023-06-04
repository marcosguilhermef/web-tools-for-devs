export default interface ToolInterface<T>{
    parameter?: T | string;
    role: T | string;
    execute(): any;
    setParameters(param : string | T) : any;
}