<?php include_once "../../conect/Conexao.php"; ?>

<!doctype html>
<html lang="pt-br">

<head>
    <title>Dashboard Painel</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body>

    <div class="container-fluid">
        <div class="row text-white">
            <div class="col-md-4">
                <div class="card bg-dark text-center shadow">
                    <h2>Total de Clientes / Ano</h2>
                    <div class="card-body shadow">
                        <h4 class="card-title text-white text-center">
                            <?php
                                $stmt = $pdo->query("SELECT SUM(qtd_clientes) AS total FROM clientes")->fetchColumn();
                                echo $stmt;
                            ?>
                        </h4>
                        <span class="muted">/unid</span>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card bg-dark text-center shadow">
                    <h2>Faturamento Anual</h2>
                    <div class="card-body">
                        <h4 class="card-title">
                            <?php
                                $stmt = $pdo->query("SELECT SUM(valor_venda) AS total_vendas FROM venda")->fetchColumn();
                                echo "R$ ".number_format($stmt, 2, ',', '');
                            ?>
                        </h4>
                        <span class="muted">/BRL</span>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card bg-dark text-center shadow">
                    <h2>Total de Vendas (Anual)</h2>
                    <div class="card-body shadow">
                        <h4 class="card-title">
                            <?php
                                $stmt = $pdo->query("SELECT SUM(qtd_venda) AS total_vendas FROM venda")->fetchColumn();
                                echo $stmt;
                            ?>
                        </h4>
                        <span class="muted">/qtd</span>
                    </div>
                </div>
            </div>
        </div>

        <?php
            include_once "../graph/line-chart.php";
        ?>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
    </script>
</body>

</html>