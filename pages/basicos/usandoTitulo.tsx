import Titulo from "../../components/Titulo";

function usandoTitulo() {
    return (
        <>
            <Titulo
                principal="Usando o componente Titulo"
                sub="Aqui vai o subtítulo"
            />
            <Titulo
                principal="Usando o componente Titulo pequeno"
                sub="Aqui vai o subtítulo pequeno"
                pequeno /* pequeno = {true} */
            />
        </>
    );
}

export default usandoTitulo;
