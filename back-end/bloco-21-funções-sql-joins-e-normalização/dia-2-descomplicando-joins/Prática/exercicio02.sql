SELECT m.title, (b.domestic_sales + b.international_sales) AS vendas
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
ON m.id = b.movie_id
WHERE b.international_sales > b.domestic_sales;