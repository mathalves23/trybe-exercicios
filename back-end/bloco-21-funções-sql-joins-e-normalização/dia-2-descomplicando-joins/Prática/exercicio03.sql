SELECT m.title, b.rating
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice as b
ON m.id = b.movie_id
ORDER BY b.rating DESC;