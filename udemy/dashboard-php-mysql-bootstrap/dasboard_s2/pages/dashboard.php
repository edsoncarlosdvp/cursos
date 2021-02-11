<!DOCTYPE html>
<!-- saved from url=(0056)https://getbootstrap.com.br/docs/4.1/examples/dashboard/ -->
<html lang="pt-br">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="">
        <link rel="icon" href="https://getbootstrap.com.br/favicon.ico">

        <title>Dashboard com Bootstrap</title>
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>

<body>
    <nav class="navbar navbar-expand-lg d-none d-sm-block navbar-dark bg-dark p-0 shadow">
        <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">ENI Dashboard</a>
        <ul class="navbar-nav px-3">
            <li class="nav-item text-nowrap">
                <a class="nav-link" href="https://getbootstrap.com.br/docs/4.1/examples/dashboard/#">Sair</a>
            </li>
        </ul>
    </nav>

    <!-- <div class="container bg-danger" style="margin-top: -50px">
        <div class="collapse navbar-collapse" id="menu_dashboard">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                        style="text-decoration: none;color: #fff">
                        ENI Dashboard
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Ação</a>
                        <a class="dropdown-item" href="#">Outra ação</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Algo mais aqui</a>
                    </div>
                </li>

            </ul>
        </div>
    </div> -->

    <div class="container-fluid">
        <div class="row">
            <nav class="col-md-2 d-none d-md-block bg-light sidebar" id="menu_dashboard">
                <div class="sidebar-sticky">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <a class="nav-link active" href="?pagina">

                                Dashboard <span class="sr-only">(atual)</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="?pagina=pedidos">

                                Pedidos
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="?pagina=clientes">

                                Cadastrar Clientes
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="?pagina=vendas">

                                Cadastrar Vendas
                            </a>
                        </li>
                        <!-- <li class="nav-item">
              <a class="nav-link" href="https://getbootstrap.com.br/docs/4.1/examples/dashboard/#">

                Relatórios
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://getbootstrap.com.br/docs/4.1/examples/dashboard/#">

                Integrações
              </a>
            </li> -->
                    </ul>
                </div>
            </nav>

            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div class="chartjs-size-monitor"
                    style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
                    <div class="chartjs-size-monitor-expand"
                        style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                        <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
                    </div>
                    <div class="chartjs-size-monitor-shrink"
                        style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                        <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
                    </div>
                </div>
                <div
                    class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Dashboard</h1>
                    <div class="btn-toolbar mb-2 mb-md-0">
                        <div class="btn-group mr-2">

                        </div>

                    </div>
                </div>

                <?php
          if (isset($_GET['pagina'])) {
              switch ($_GET['pagina']) {
              case 'pedidos':
                echo "<h2>Pedidos</h2>";
                include_once "../../graficos/graphArea.php";
                break;

              case 'clientes':
                echo "<h2>Clientes</h2>";
                include_once "cadastro_clientes.php";
              break;

              case 'vendas':
              echo "<h2>Cadastro de Vendas</h2>";
              include_once "cadastro_vendas.php";
              break;
              
              default:
                include_once "panel.php";
                break;
            }
          }
        ?>

            </main>
        </div>
    </div>

    <div class="d-block d-md-none">
        <nav class="navbar fixed-top navbar-dark bg-dark">
            <a class="navbar-brand" href="#">ENI Dashboar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu_dashboard_bottom"
                aria-controls="menu_dashboard_bottom" aria-expanded="false" aria-label="Alterna navegação">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="menu_dashboard_bottom">
                <ul class="navbar-nav mr-auto">
                    <a class="nav-link active" href="?pagina">

                        Dashboard <span class="sr-only">(atual)</span>
                    </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="?pagina=pedidos" style="text-decoration: none">

                            Pedidos
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="?pagina=clientes">

                            Cadastrar Clientes
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="?pagina=vendas">

                            Cadastrar Vendas
                        </a>
                    </li>

                </ul>
            </div>
        </nav>
    </div>


    <!-- Principal JavaScript do Bootstrap
    ================================================== -->
    <!-- Foi colocado no final para a página carregar mais rápido -->
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