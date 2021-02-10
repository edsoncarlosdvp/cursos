<?php
    include_once "../../conect/Conexao.php";

    $mes_venda = $_POST["cad_mes"];
    $qtd_venda = $_POST["cad_qtd"];
    $valor_venda = $_POST["cad_valor"];

    $stmt = $pdo->prepare("INSERT INTO venda (mes_venda, qtd_venda, valor_venda) VALUES (:mes_venda, :qtd_venda, :valor_venda)");
    $stmt->bindValue(":mes_venda", $mes_venda, PDO::PARAM_STR);
    $stmt->bindValue(":qtd_venda", $qtd_venda, PDO::PARAM_INT);
    $stmt->bindValue(":valor_venda", $valor_venda, PDO::PARAM_STR_CHAR);

    $stmt->execute();

    header('Location: dashboard.php?pagina=vendas');