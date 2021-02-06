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
    <title>Meu Segundo Gráfico</title>
</head>

<body>
    <script type="text/javascript">
    google.charts.load('current', {
        'packages': ['corechart']
    });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Cidade', 'População', {
                role: 'style'
            }],
            <?php
          foreach ($recebedados as $todosOsDados) {
              $cidade = $todosOsDados["cidade"];
              $populacao = $todosOsDados["populacao"]; ?>

            ['<?php echo $cidade; ?>', <?php echo $populacao; ?>, '#000000'],
            <?php
          } ?>
        ]);

        var view = new google.visualization.DataView(data);
        view.setColumns([0, 1,
            {
                calc: "stringify",
                sourceColumn: 1,
                type: "string",
                role: "annotation"
            },
            2
        ]);

        var options = {
            title: "População das cidades",
            height: 400,
            bar: {
                groupWidth: "95%"
            },
            legend: {
                position: "top"
            },
        };
        var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
        chart.draw(view, options);
    }
    </script>
    <div id="columnchart_values" style="height: fit-content"></div>

</body>

</html>