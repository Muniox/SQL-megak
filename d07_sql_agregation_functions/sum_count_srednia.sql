-- funkcje agregujace
SELECT SUM(`price`), COUNT(*), (SUM(`price`)/COUNT(*)) AS `avgPrice` FROM `cars`