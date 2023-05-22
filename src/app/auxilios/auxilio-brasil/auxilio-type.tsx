export interface auxilioType{
    id: string;
    dataMesCompetencia: string;
    dataMesReferencia: string;
    dataSaque: string;
    valorSaque: string;
    municipio: {
        codigoIBGE: string,
        nomeIBGE: string,
        codigoRegiao: string,
        nomeRegiao: string,
        pais: string,
        uf: {
            sigla: string,
            nome: string
        }
    },
    beneficiarioAuxilioBrasil: {
        cpfFormatado: string,
        nis: string,
        nome: string,
    }

}