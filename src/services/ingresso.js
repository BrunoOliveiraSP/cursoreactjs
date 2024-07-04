

export function calcularTotalIngresso(qtd, meia, cupom) {
    let tot = 0;
    if (meia == true) {
        tot = qtd * 15.00;
    }
    else {
        tot = qtd * 30.00;
    }

    
    if (cupom == 'QUERO50') {
        let desc = tot * 50 / 100;
        tot = tot - desc;
    }

    return tot;
}