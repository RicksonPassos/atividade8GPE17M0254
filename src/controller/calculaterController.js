const indexView = (req, res) => {
    res.render('index.html');
}

const calcular = (req,res) => {
    let n1 = patseInt(req.body.n1,10);
    let n2 = patseInt(req.body.n2,10);
    
    if(n1.parseInt() == isNaN){
        return res.status(404).json({menssagem: "Isso não é um numero"})
    }
    if(n2 == isNaN){
        return res.status(404).json({menssagem: "Isso não é um numero"})
    }

    let operador = req.body.operador;

    res.send(`$(n1) $(operador) $(n2)`)
}

module.exports = {
    indexView
}