SELECT t.name, t.location, m. title, m.director, m.year, m.length_minutes
FROM Pixar.Theater as t
RIGHT JOIN Pixar.Movies as m
ON t.id = m.id
ORDER BY m.title;