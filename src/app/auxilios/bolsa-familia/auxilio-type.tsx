export interface BolsaFamiliaType{
    id: string;
    dataMesCompetencia: string;
    dataMesReferencia: string;
    titularBolsaFamilia: {
        cpfFormatado: string;
        nis: string;
        nome: string;
    },
    municipio: {
        codigoIBGE: string;
        nomeIBGE: string;
        codigoRegiao: string;
        nomeRegiao: string;
        pais: string;
        uf: {
            sigla: string;
            nome: string;
        }
    },
    valor: number;
    quantidadeDependentes: string;

}