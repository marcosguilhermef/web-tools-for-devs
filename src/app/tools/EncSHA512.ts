import ToolInterface from "@/app/tools/ToolInterface";

var crypto = require('crypto');

export class EncSHA512 implements ToolInterface<String>{

    parameter: string;
    role: string = 'codificador'

    constructor(value : string){
        this.parameter = value;
    }
    
    execute(){
        let sha512 = crypto.createHash('sha512').update(this.parameter).digest("hex");
        return sha512;
    };

    setParameters(param : string){
        this.parameter = param;
    };

}