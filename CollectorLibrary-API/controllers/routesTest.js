let getTest = async (request, response) => {
    response.json({
        message: "Este es un test de un endpoint",
        hora: "18:14 del 18 de febrero de 2026"
    })
}

const postTest = async () => {

}

module.exports = {
    getTest,
    postTest
}