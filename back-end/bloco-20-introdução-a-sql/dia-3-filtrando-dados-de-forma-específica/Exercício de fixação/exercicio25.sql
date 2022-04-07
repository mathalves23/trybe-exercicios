USE PecasFornecedores;
SELECT peca, preco, fornecedor FROM Fornecimentos
WHERE fornecedor LIKE '%N%';