exports.serverError = (error, response) => {
    response.status(500);
    console.error(error);
    response.json({
        message: "Erreur serveur"
    });
};

exports.requestManagment = (response, result, error, message) => {
    if (error || !result) {
        response.status(400);
        console.error(error);
        response.json(message);
    } else {
        response.status(200);
        response.json(result);
    }
};
