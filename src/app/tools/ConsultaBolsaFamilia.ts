import Fetch from "../util/Fetch";
import ToolInterface from "@/app/tools/ToolInterface";
export class ConsultaAuxBrasil implements ToolInterface<AuxilioType>{
    
    parameter: BolsaFamiliaTypes
    role = "consulta"
    private static readonly TOKEN = '7c63870a71e799003b5bec0a1d2f9f83'
    private static readonly HTTP = 'https://api.portaldatransparencia.gov.br/api-de-dados/bolsa-familia-disponivel-por-cpf-ou-nis'
    private head : Headers = new Headers({'chave-api-dados': ConsultaAuxBrasil.TOKEN});
    private Fe : Fetch;

    constructor(parameter: BolsaFamiliaTypes){
        this.parameter = parameter;
        this.Fe = new Fetch(`${ConsultaAuxBrasil.HTTP}?codigo=${parameter.nis}&anoMesCompetencia=${parameter.mesRef}`,{},Fetch.GET,this.head);
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