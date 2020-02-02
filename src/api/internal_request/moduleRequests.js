// schema
const Module = require("../models/moduleModel");
const ModuleOfSchoolYear = require("../models/moduleOfSchoolYearModel");
// fucntions
const {
    requestManagment,
    serverError
} = require("../functions/errorManagment");

exports.getModuleById = (module_id, response) => { //FIXME: cette fonction devrait etre dans le moduleControllers
    Module.find({ module_id })
        .then((module, error) =>
            requestManagment(response, module, error, "Module introuvable.")
        )
        .catch(error => serverError(error, response));
};

exports.getModulesById = (modules_id, response) => { //FIXME: cette fonction devrait etre dans le moduleControllers
    Module.find({
        module_id: {
            $in: modules_id
        }
    })
        .then((module, error) =>
            requestManagment(response, module, error, "Aucun module trouvé.")
        )
        .catch(error => serverError(error, response));
};

exports.getModulesIdFromSchoolYear = (school_year_id, response) => { //FIXME: cette fonction devrait etre dans le moduleOfSchoolControllers
    ModuleOfSchoolYear.find({ school_year_id })
        .then((modules, error) =>
            requestManagment(
                response,
                modules,
                error,
                "Aucun module trouvé.",
                () => JSON.parse(modules).map(module => module.module_id)
            )
        )
        .catch(error => serverError(error, response));
};
