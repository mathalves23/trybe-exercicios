USE sakila;
**Solução:**
SELECT COUNT(*) AS quantidade_de_clientes_ativos FROM customer
WHERE active = 1 AND store_id = 1;