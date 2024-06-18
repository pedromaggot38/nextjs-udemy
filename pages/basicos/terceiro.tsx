function entre(valor: number, min: number, max: number) {
    if (valor >= min && valor <= max) {
        return "Sim";
    } else {
        return "Não";
    }
}

function Terceiro() {
    const subtitulo: string = "Estou no JavaScript!";
    const exemplo = Math.max(13, 89);

    return (
        <>
            <h1>Terceiro</h1>
            <h2>{subtitulo}</h2>
            <p>{3 * 3}</p>
            <p>{exemplo}</p>
            <h4>{entre(25, 1, 10)}</h4>
        </>
    );
}

export default Terceiro;
