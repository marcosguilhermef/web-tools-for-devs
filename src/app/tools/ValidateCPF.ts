export class ValidateCPF implements ToolInterface<String>{
    parameter: string;
    role: string = 'validador'

    constructor(value : string){
        this.parameter = value;
    }
    
    execute(){
        let utf8 = Buffer.from(this.parameter,'base64').toString('utf-8');
        return this.validate();
    };

    setParameters(param : string){
        this.parameter = param;
    };

    private validate(){
        let cpf = this.parameter.replace(/[^0-9]/g,"");

        if( cpf.length !== 11 ){
            return false;
        }else if(
            cpf === '00000000000' ||
            cpf === '11111111111' ||
            cpf === '22222222222' ||
            cpf === '33333333333' ||
            cpf === '44444444444' ||
            cpf === '55555555555' ||
            cpf === '66666666666' ||
            cpf === '77777777777' ||
            cpf === '88888888888' ||
            cpf === '99999999999'
        ){
            return false;
        }else{
            for(let t = 9; t < 11 ; t++){
                    let d = 0;
                    let c;
                    for( c = 0 ;c < t;  c++ ){
                        d +=  Number.parseInt(cpf[c]) * ((t+1) - c)
                    }

                    d = ((10 * d) % 11) % 10;

                    if (Number.parseInt(cpf[c]) != d) {
                        return false;
                    }
            }
        }

        
        return true;
    }

}