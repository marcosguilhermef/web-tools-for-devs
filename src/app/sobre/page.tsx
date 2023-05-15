import Layout from '@/app/Compoments/Layout/layout/Layout';
function Sobre() {
    return (
        
            <div>
                Teste
            </div>
       
    )
}
Sobre.getLayout = function getLayout(page: React.ReactNode) {
    return (
            <Layout title={"Sobre"}>
                {page}
            </Layout>
        );
  };

export default Sobre;