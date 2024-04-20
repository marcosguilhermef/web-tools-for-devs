import ToolInterface from "@/app/tools/ToolInterface";

var crypto = require('crypto');

export class EncSHA3_224 implements ToolInterface<String>{

    parameter: string;
    role: string = 'codificador'

    constructor(value : string){
        this.parameter = value;
    }
    
    execute(){
        let sha256 = crypto.createHash('sha3-224').update(this.parameter).digest("hex");
        return sha256;
    };

    setParameters(param : string){
        this.parameter = param;
    };

}