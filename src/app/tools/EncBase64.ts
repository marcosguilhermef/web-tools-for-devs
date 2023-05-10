export class EncBase64 implements ToolInterface{

    parameter: string;
    role: string = 'codificador'

    constructor(value : string){
        this.parameter = value;
    }
    
    execute(){
        let base64 = Buffer.from(this.parameter,'utf-8').toString('base64');
        return base64;
    };

    setParameters(param : string){
        this.parameter = param;
    };

}