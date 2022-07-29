export default function Comprador({compradores, index, nAssento}) {
    
    const comprador = compradores[index];
    
    return (
        <>
            <label htmlFor={"nome"+nAssento}>Nome do comprador (Assento {nAssento}):</label>
            <input required type="text" id={"nome"+nAssento} placeholder="Digite seu nome..."
                onChange={(e) => comprador.nome = e.target.value}
            />
            
            <label htmlFor={"cpf"+nAssento}>CPF do comprador (Assento {nAssento}):</label>
            <input required type="text" id={"cpf"+nAssento} placeholder="Digite seu CPF..."
                onChange={(e) => comprador.cpf = e.target.value}
            />
        </>
    );
}