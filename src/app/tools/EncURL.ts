import ToolInterface from "@/app/tools/ToolInterface";

export class EncURL implements ToolInterface<String>{

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