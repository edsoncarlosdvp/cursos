<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div class="container">
        <div class="text-right">
            <a href="" role="button" class="btn btn-primary">Relatório</a>
            <a href="" role="button" class="btn btn-danger">Voltar</a>
        </div>
        <h2>Cadastro de Vendas</h2>
        <form action="post_cad_vendas.php" method="post">
            <div class="form-group">
                <label for="cad_mes" name="sel_mes">Selecione o mês</label>
                <select name="cad_mes" id="cad_mes" class="form-control">
                    <option value="janeiro">Janeiro</option>
                    <option value="fevereiro">Fevereiro</option>
                    <option value="marco">Abril</option>
                    <option value="abril">Março</option>
                    <option value="maio">Maio</option>
                    <option value="junho">Junho</option>
                    <option value="julho">Julho</option>
                    <option value="agosto">Agosto</option>
                    <option value="setembro">Setembro</option>
                    <option value="outubro">Outubro</option>
                    <option value="novembri">Novembro</option>
                    <option value="dezembro">Dezembro</option>
                </select>
            </div>
            <div class="form-group">
                <label for="cad_qtd">Digite a quantidade</label>
                <input type="number" name="cad_qtd" id="cad_qtd" class="form-control">
            </div>
            <div class="form-group">
                <label for="cad_valor">Digite o valor</label>
                <input type="numeric" name="cad_valor" id="cad_valor" class="form-control">
            </div>
            <div>
                <button type="submit" class="btn btn-primary">Cadastrar</button>
            </div>
        </form>
    </div>
</body>

</html>