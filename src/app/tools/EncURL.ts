export class EncURL implements ToolInterface{

    parameter: string;
    role: string = 'codificador'

    constructor(value : string){
        this.parameter = value;
    }
    
    execute(){
        let text = encodeURIComponent(this.parameter);
        return text;
    };

    setParameters(param : string){
        this.parameter = param;
    };

}