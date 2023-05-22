export class DecURL implements ToolInterface<String>{

    parameter: string;
    role: string = 'decodificador'

    constructor(value : string){
        this.parameter = value;
    }
    
    execute(){
        let text = decodeURIComponent(this.parameter);
        return text;
    };

    setParameters(param : string){
        this.parameter = param;
    };

}