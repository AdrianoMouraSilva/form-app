type Produto = {
    nome: string
    preco: string
    emEstoque: boolean
}

function Produto(props: Produto) {
    return (
        <div>
            <p>NOME: {props.nome}</p>
            <p>PREÇO: {props.preco}</p>
            <p>PREÇO: {props.emEstoque}</p>
        </div>
    );
}

export default Produto