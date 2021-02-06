<?php
    require_once "./conect/Conexao.php";

    //  FAZ A BUSCA COM BASE NOS DADOS VINDO DE UM ARQUIVO
    $pegadados = $pdo->prepare("SELECT * FROM dados");
    $pegadados->execute();

    $recebedados = $pegadados->fetchAll(PDO::FETCH_ASSOC);

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Terceiro Gráfico</title>
</head>

<body>

    <script type="text/javascript">
    google.charts.load('current', {
        'packages': ['corechart']
    });

    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Cidade', 'População'],
            <?php
          foreach ($recebedados as $todosOsDados) {
              $cidade = $todosOsDados["cidade"];
              $populacao = $todosOsDados["populacao"]; ?>

            ['<?php echo $cidade; ?>', <?php echo $populacao; ?>],
            <?php
          } ?>
        ]);

        var options = {
            title: 'Gráfico Populacional',
            // curveType: 'function',

            legend: {
                position: 'top'
            }
        };

        var options = {
            title: 'Meu Gráfico'
        };

        var chart = new google.visualization.PieChart(document.getElementById('graficoPizza'));

        chart.draw(data, options);

    }
    </script>
    <div id="graficoPizza" style="height: 400px;"></div>

</body>

</html>