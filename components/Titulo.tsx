function Titulo(props: any) {

    return props.pequeno ? (
        <>
            <p>{props.principal}</p>
            <p>{props.sub}</p>
        </>
    ) : (
        <>
            <h1>{props.principal}</h1>
            <h2>{props.sub}</h2>
        </>
    )

    /*
    if (props.pequeno) {
        return (
            <>
                <p>{props.principal}</p>
                <p>{props.sub}</p>
            </>
        );
    } else {
        return (
            <>
                <h1>{props.principal}</h1>
                <h2>{props.sub}</h2>
            </>
        );
    }
    

    */

}

export default Titulo;