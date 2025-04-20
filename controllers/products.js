const getAllProducts = async(req,res) => {
    res.send('Retrieving all products 123');
};

const getAllProductsTesting = async(req,res) => {
    res.send('Retrieving all testing products');
};

module.exports = {getAllProducts,getAllProductsTesting};