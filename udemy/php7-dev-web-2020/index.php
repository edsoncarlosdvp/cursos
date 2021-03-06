<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet">
    <title>Curso PHP 7</title>

    <!-- STYLE -->
    <link rel="stylesheet" href="./assets/css/style.css">
</head>

<body>
    <header class="cabecalho">
        <h1>Curso PHP</h1>
        <h2>Índice dos Exercícios</h2>
    </header>
    <main class="principal">
        <div class="conteudo">
            <nav class="modulos">
                <div class="modulo verde">

                    <h3>Módulo 01</h3>

                    <ul>
                        <li>
                            <a href="exercicio.php?dir=test&file=teste">Exercício A</a>
                        </li>
                        <li>
                            <a href="#">Exercício B</a>
                        </li>
                    </ul>

                </div>

            </nav>
        </div>
    </main>
    <footer class="rodape">
        cod3r & alunos <?= date('Y'); ?>
    </footer>
</body>

</html>