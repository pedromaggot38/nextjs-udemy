function gerarLista(final = 10) {
    const lista = [];
    for (let i = 0; i <= final; i++) {
        if (i != final) {
            lista.push(<span>{i}, </span>);
        } else {
            lista.push(<span>{i}.</span>);
        }
    }
    return lista;
}

function desafiolista() {
    return (
        <div>
            <div>
                {gerarLista()}
            </div>
            <div>
                {gerarLista(20)}
            </div>
            <div>
                {gerarLista(25)}
            </div>
        </div>
    );
}

export default desafiolista;