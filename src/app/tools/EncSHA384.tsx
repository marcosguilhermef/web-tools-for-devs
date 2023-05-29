var crypto = require('crypto');

export class EncSHA384 implements ToolInterface<String>{

    parameter: string;
    role: string = 'codificador'

    constructor(value : string){
        this.parameter = value;
    }
    
    execute(){
        let sha256 = crypto.createHash('sha384').update(this.parameter).digest("hex");
        return sha256;
    };

    setParameters(param : string){
        this.parameter = param;
    };

}