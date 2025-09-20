-- Script para criar tabelas básicas
-- Execute este script no seu banco de dados Azure

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Inserir alguns dados de exemplo
INSERT INTO users (name, email, age) VALUES 
('João Silva', 'joao@email.com', 25),
('Maria Santos', 'maria@email.com', 30),
('Pedro Oliveira', 'pedro@email.com', 28)
ON DUPLICATE KEY UPDATE name = VALUES(name);
