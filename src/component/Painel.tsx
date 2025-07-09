
type Painel = {
    titulo: string;
    children: React.ReactNode
    // children : JS
}

const Painel = (props: Painel) => {
    return (
        <div>
            <p>{props.titulo}</p>
            <div>{props.children}</div>
        </div>
    );
}

// export default Painel

export {
    Painel
}