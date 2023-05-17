import Fetch from "../util/Fetch";
export class ConsultCep implements ToolInterface{
    parameter: string;
    role: string = 'consulta'

    constructor(value : string){
        this.parameter = value;
    }
    
    async execute(){
        const request = await new Fetch(`https://viacep.com.br/ws/${this.parameter}/json/`, null, Fetch.GET).doFetch();
        if(request?.erro === true){
            return { data: "Erro no processamento da API." };
        }else if( request !== null){
            return request;
        }
        return { data: "Erro no processamento da API." };
        
    };

    setParameters(param : string){
        this.parameter = param;
    };
}