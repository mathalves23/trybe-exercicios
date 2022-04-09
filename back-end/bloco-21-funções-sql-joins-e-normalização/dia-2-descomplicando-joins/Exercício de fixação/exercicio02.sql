SELECT s.first_name, s.last_name, a.address_id
FROM sakila.staff AS s
INNER JOIN sakila.address AS a
ON a.address_id = s.address_id;
