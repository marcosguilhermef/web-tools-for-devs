interface ToolInterface{
    parameter?: string;
    role: string;
    execute(): any;
    setParameters(param : string) : any;
}