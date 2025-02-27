const formatarTelefone = (numero) => {
    return numero.replace(/^(\d{2})(\d{2})(\d{5})(\d{4})$/, "+$1 ($2) $3-$4");
};

export default formatarTelefone;