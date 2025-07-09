// enum tipoUsuarioEnum{
//     ADMIN = 'admin'
// }

// interface CardUsuarioProps = {
//     nome: string;
//     // tipoUsuario: string;
//      tipoUsuario: "admin" | "visitante" | "editor";
// }

type CardUsuarioProps = {
    nome: string;
    // tipoUsuario: string;
     tipoUsuario: "admin" | "visitante" | "editor";
}

function CardUsuario({ nome, tipoUsuario }: CardUsuarioProps) {
    return (
        <div>

            {/* <p>{props.nome}</p><p>{props.tipoUsuario}</p> */}
            {tipoUsuario === 'admin' && <p>Bem-vindo, admin </p>}
            {tipoUsuario === 'visitante' && <p>Bem-vindo, visitante</p>}
            {tipoUsuario === 'editor' && <p>Bem-vindo, edito</p>}
        </div>
    );
}

export default CardUsuario