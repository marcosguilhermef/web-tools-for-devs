var crypto = require('crypto');

export class EncMD5 implements ToolInterface{

    parameter: string;
    role: string = 'codificador'

    constructor(value : string){
        this.parameter = value;
    }
    
    execute(){
        let md5 = crypto.createHash('md5').update(this.parameter).digest("hex");
        return md5;
    };

    setParameters(param : string){
        this.parameter = param;
    };

}