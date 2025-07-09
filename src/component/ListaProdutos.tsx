import Produto from "./Produto";

interface Produto = {
    nome: string
    preco: string
    emEstoque: boolean
}

type Props = {
    produtos: Produto[]
}

// type Props = {
//     produtos: Array
// }

function ListarProdutos(props: Props) {
    return (
        <div>

            {/* console.log(Props.produtos); */}
            {
                props.produtos.map((produto, index) => {
                    return(
                        <Produto 
                        key={produto.preco}
                        nome={produto.nome}
                        preco={produto.preco}
                        emEstoque={produto.emEstoque}
                        />

                    )
                })
            }

     
        </div>
    );
}

export default ListarProdutos