<?php

    try {
        $msg = "";
        $host = "localhost";
        $bancodedados = "dashboard_mod2";
        $usuario = "root";
        $senha = "1234";

        $pdo = new PDO("mysql:host=$host;dbname=$bancodedados", "$usuario", "$senha");
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        echo "Erro: " . $e->getMessage() . "<br>";
    }