    <?php include_once "../../conect/Conexao.php";?>
    <html>

    <head>
        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
        <script type="text/javascript">
        google.charts.load('current', {
            'packages': ['corechart']
        });
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = google.visualization.arrayToDataTable([
                ['Mês', 'Quantidade'],

                <?php
                    $stmt = $pdo->prepare("SELECT * FROM clientes");
                    $stmt->execute();
                    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

                    foreach ($result as $row) {
                        $mes = $row["mes_clientes"];
                        $qtd = $row["qtd_clientes"]; ?>

                ['<?=$mes; ?>', <?=$qtd; ?>],
                <?php
                    }
                ?>
            ]);

            var options = {
                title: '',
                //   curveType: 'function',
                legend: {
                    position: 'none'
                }
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
        }
        </script>

        <!-- GRÁFICO EM PIZZA -->
        <script type="text/javascript">
        google.charts.load('current', {
            'packages': ['corechart']
        });
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {

            var data = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],

                <?php
                    $stmt = $pdo->prepare("SELECT * FROM venda");
                    $stmt->execute();
                    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

                    foreach ($result as $row) {
                        $mes_venda = $row["mes_venda"];
                        $qtd_venda = $row["qtd_venda"]; ?>

                ['<?=$mes_venda; ?>', <?=$qtd_venda; ?>],
                <?php
                    }
                ?>
            ]);

            var options = {
                title: '',
            };

            var chart = new google.visualization.PieChart(document.getElementById('piechart'));

            chart.draw(data, options);
        }
        </script>
    </head>

    <body>

        <div class="row mt-3">
            <div class="col-12 col-md-8">
                <h4>Clientes Cadastrados</h4>
                <div id="curve_chart"></div>
            </div>
            <div class="col-12 col-md-4">
                <h4>Quantidade de Vendas</h4>
                <div id="piechart"></div>
            </div>
        </div>

    </body>

    </html>