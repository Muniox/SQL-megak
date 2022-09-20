-- wyszukiwanie po dacie (optymalizacja)
-- SELECT * FROM `cars` WHERE `firstRegistrationAt` = '2022-01-05' 
SELECT * FROM `cars` WHERE `firstRegistrationAt` BETWEEN '2022-01-04' AND '2022-01-06'