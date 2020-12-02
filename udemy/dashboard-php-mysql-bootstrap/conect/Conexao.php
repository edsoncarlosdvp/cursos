<?php

    try {
        $msg = "";
        $host = "localhost";
        $bancodedados = "demo_cidade";
        $usuario = "root";
        $senha = "1234";

        $pdo = new PDO("mysql:host=$host;dbname=$bancodedados", "$usuario", "$senha");
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        echo "Erro: " . $e->getMessage() . "<br>";
    }
