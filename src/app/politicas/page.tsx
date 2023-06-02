
import { Metadata } from 'next';
import Image from 'next/image';
export const metadata: Metadata = {
  title: 'Políticas',
  alternates: { 
    canonical:"https://toolsfordevs.com.br/politicas"
    },
};
function Politicas() { 
    return (
        <div>
            <h1>Política de Privacidade</h1>

            <p>Esta Política de Privacidade descreve como os dados pessoais são coletados, usados e protegidos quando você utiliza nosso site. A proteção de seus dados pessoais é de extrema importância para nós, e nos comprometemos a garantir a segurança e confidencialidade das informações fornecidas. Por favor, leia atentamente esta política antes de utilizar o site.</p>

            <h2>Coleta de Dados</h2>

            <p>Nós coletamos os seguintes tipos de dados pessoais quando você utiliza nosso site:</p>

            <ol>
                <li>Dados de Localização: Podemos coletar dados de localização em tempo real quando você utiliza nossos serviços, desde que você tenha consentido a essa coleta.</li>
                <li>Google Analytics: Utilizamos o Google Analytics para obter informações estatísticas sobre o uso do nosso site. O Google Analytics pode coletar dados como endereço IP, informações do dispositivo e padrões de navegação. Essas informações são usadas para analisar tendências, administrar o site e melhorar a experiência do usuário. O Google Analytics pode utilizar cookies e tecnologias similares para realizar essa coleta de dados. As informações coletadas são tratadas de acordo com a Política de Privacidade do Google.</li>
                <li>Google AdSense: Utilizamos o Google AdSense para exibir anúncios relevantes em nosso site. O Google AdSense pode coletar informações sobre sua visita ao nosso site e a outros sites para fornecer anúncios personalizados com base em seus interesses. Essas informações podem incluir dados demográficos, padrões de navegação e informações contextuais. O Google AdSense utiliza cookies e tecnologias similares para coletar esses dados, e seu uso é regido pela Política de Privacidade do Google.</li>
                <li>Cadastro: Caso você opte por se cadastrar em nosso site, poderemos solicitar dados como email, nome, telefone e localização. Essas informações serão utilizadas para fornecer acesso a determinados recursos e personalizar sua experiência no site. Todos os dados fornecidos serão tratados de acordo com esta Política de Privacidade.</li>
            </ol>

            <h2>Uso dos Dados</h2>

            <p>Os dados pessoais coletados serão utilizados para os seguintes fins:</p>

            <ul>
                <li>Fornecer acesso a recursos personalizados e melhorar a experiência do usuário no site;</li>
                <li>Entender o uso do site e realizar análises estatísticas para melhorar nossos serviços;</li>
                <li>Exibir anúncios relevantes com base em seus interesses;</li>
                <li>Enviar comunicações relacionadas ao site, como atualizações, newsletters ou ofertas especiais.</li>
            </ul>

            <h2>Compartilhamento de Dados</h2>

            <p>Os dados pessoais coletados não serão vendidos, alugados ou compartilhados com terceiros, exceto nos seguintes casos:</p>

            <ul>
                <li>Quando houver consentimento expresso do usuário para compartilhar os dados;</li>
                <li>Para cumprir obrigações legais, como em resposta a uma solicitação judicial;</li>
                <li>Para proteger e defender nossos direitos e propriedade.</li>
            </ul>

            <h2>Segurança dos Dados</h2>

            <p>Tomamos medidas adequadas para proteger os dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela internet ou armazenamento eletrônico é completamente seguro, e não podemos garantir a segurança absoluta dos dados.</p>

            <h2>Seus Direitos</h2>

            <p>Você tem o direito de acessar, corrigir, atualizar ou excluir seus dados pessoais fornecidos a nós. Para exercer esses direitos ou caso tenha alguma dúvida ou preocupação sobre esta Política de Privacidade, entre em contato conosco através dos canais de comunicação fornecidos no site.</p>

            <h2>Alterações na Política de Privacidade</h2>

            <p>Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas de privacidade. Recomendamos que você reveja esta página regularmente para se manter informado sobre as atualizações.</p>

            <p>Ao utilizar nosso site, você concorda com os termos desta Política de Privacidade e consente com a coleta, uso e processamento de seus dados pessoais conforme descrito aqui.</p>

        </div>
       
    )
}
export default Politicas;