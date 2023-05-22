export class DecBase64 implements ToolInterface<String>{

    parameter: string;
    role: string = 'decodificador'

    constructor(value : string){
        this.parameter = value;
    }
    
    execute(){
        let utf8 = Buffer.from(this.parameter,'base64').toString('utf-8');
        return utf8;
    };

    setParameters(param : string){
        this.parameter = param;
    };

}