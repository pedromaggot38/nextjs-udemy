function Segundo() {
    const array = [
        <li key="1">Primeiro</li>,
        <li key="2">Segundo</li>,
        <li key="3">Terceiro</li>,
        <li key="4">Quarto</li>,
    ];

    return (
        <div>
            <h1>Segundo</h1>
            <ul>
                {array}
            </ul>
        </div>
    );
}

export default Segundo;