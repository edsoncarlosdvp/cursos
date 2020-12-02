<?php
    require_once "./conect/Conexao.php";

    //  FAZ A BUSCA COM BASE NOS DADOS VINDO DE UM ARQUIVO
    $pegadados = $pdo->prepare("SELECT * FROM dados");
    $pegadados->execute();

    $recebedados = $pegadados->fetchAll(PDO::FETCH_ASSOC);

?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Primeiro Gráfico</title>
</head>

<body>

    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
    google.charts.load('current', {
        'packages': ['corechart']
    });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Cidade', 'População', {
                role: 'annotation'
            }],
            <?php
          foreach ($recebedados as $todosOsDados) {
              $cidade = $todosOsDados["cidade"];
              $populacao = $todosOsDados["populacao"]; ?>

            ['<?php echo $cidade; ?>', <?php echo $populacao; ?>, <?php echo $populacao; ?>],
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

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
    }
    </script>
    <div id="curve_chart" style="height: 500px"></div>

</body>

</html>