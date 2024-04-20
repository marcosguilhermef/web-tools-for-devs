import ToolInterface from "@/app/tools/ToolInterface";

var crypto = require('crypto');

export class DecMD5 implements ToolInterface<String>{

    parameter: string;
    role: string = 'decodificador'

    constructor(value : string){
        this.parameter = value;
    }
    
    execute(){
        let md5 =  Buffer.from(this.parameter, 'hex').toString('utf8');
        return md5;
    };

    setParameters(param : string){
        this.parameter = param;
    };

}