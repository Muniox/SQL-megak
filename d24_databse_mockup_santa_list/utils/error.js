class ValidationError extends Error {}


const handleError = (err, req, res, next) => {
    // if (err instanceof NotFoundError) {
    //     res
    //         .status(404)
    //         .render('error', {
    //             message: 'Nie można znaleść elementu o danym ID'
    //         });
    // return;
    // }

    console.error(err);

    res
        .status(err instanceof ValidationError ? 404 : 500)
        .render('error', {
            message: err instanceof ValidationError ? err.message : 'Przepraszamy, spróbuj ponownie za klika minut',
        });
};

module.exports = {
    handleError,
    ValidationError,
};