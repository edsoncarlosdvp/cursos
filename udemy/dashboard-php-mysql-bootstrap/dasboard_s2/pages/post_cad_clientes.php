<?php
    include_once "../../conect/Conexao.php";

    $mes_cliente = $_POST["cad_mes"];
    $qtd_cliente = $_POST["cad_qtd"];

    $stmt = $pdo->prepare("INSERT INTO clientes (mes_clientes, qtd_clientes) VALUES (:mes_clientes, :qtd_clientes)");
    $stmt->bindValue(":mes_clientes", $mes_cliente, PDO::PARAM_STR);
    $stmt->bindValue(":qtd_clientes", $qtd_cliente, PDO::PARAM_INT);

    $stmt->execute();

    header('Location: dashboard.php?pagina=clientes');