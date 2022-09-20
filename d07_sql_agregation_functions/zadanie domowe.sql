-- SELECT * FROM `students` WHERE age LIKE '1%'
-- SELECT * FROM `students` WHERE age BETWEEN 10 AND 18
-- SELECT * FROM `students` WHERE `firstName` LIKE 'A%' AND age >= 18
-- SELECT *, COUNT(*) FROM `students` GROUP BY firstName, lastName HAVING COUNT(*) > 1
SELECT * FROM `students` WHERE `firstName` = `lastName` 