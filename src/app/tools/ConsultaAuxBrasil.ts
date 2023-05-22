import Fetch from "../util/Fetch";
export class ConsultaAuxBrasil implements ToolInterface<AuxilioType>{
    
    parameter: AuxilioType
    role = "consulta"
    private static readonly TOKEN = '7c63870a71e799003b5bec0a1d2f9f83'
    private static readonly HTTP = 'https://api.portaldatransparencia.gov.br/api-de-dados/auxilio-brasil-sacado-por-nis'
    private head : Headers = new Headers({'chave-api-dados': ConsultaAuxBrasil.TOKEN});
    private Fe : Fetch;

    constructor(parameter: AuxilioType){
        this.parameter = parameter;
        this.Fe = new Fetch(`${ConsultaAuxBrasil.HTTP}?nis=${parameter.nis}&anoMesCompetencia=${parameter.mesRef}`,{},Fetch.GET,this.head);
    }  

    public async execute(){
        let reponse = await this.Fe.doFetch();
        if(reponse == null){
            return {
                'erro': 'dados não econtrados'
            }
        }
        return reponse;
    }

    public setParameters(param : AuxilioType) {
        this.parameter = param;
    }

}