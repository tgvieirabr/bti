CREATE TABLE usuario (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  cpf VARCHAR(11) NOT NULL,
  data_nascimento DATE NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE passagem (
  id INT NOT NULL AUTO_INCREMENT,
  data_hora DATETIME NOT NULL,
  valor DECIMAL(10,2) NOT NULL,
  usuario_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (usuario_id) REFERENCES usuario (id)
);

CREATE TABLE desconto (
  id INT NOT NULL AUTO_INCREMENT,
  percentual DECIMAL(2,2) NOT NULL,
  limite_passagens INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE usuario_desconto (
  usuario_id INT NOT NULL,
  desconto_id INT NOT NULL,
  PRIMARY KEY (usuario_id, desconto_id),
  FOREIGN KEY (usuario_id) REFERENCES usuario (id),
  FOREIGN KEY (desconto_id) REFERENCES desconto (id)
);


Para inserir um novo usuário:

INSERT INTO usuario (nome, cpf, data_nascimento)
VALUES ('Fulano da Silva', '123.456.789-00', '1990-01-01');



Para consultar os dados de um usuário:
SELECT *
FROM usuario
WHERE id = 1;

Para atualizar os dados de um usuário:

UPDATE usuario
SET nome = 'Beltrano da Silva'
WHERE id = 1;

Para remover um usuário:

DELETE FROM usuario
WHERE id = 1;

