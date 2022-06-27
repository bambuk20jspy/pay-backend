const Pay = require('../model/Pay');

const createController = async(req, res) => {
    console.log(req.body);
    //! Сохраняем данные в БД которые пришли из клиента
     const createPay = await Pay.create({
        CardNumber: req?.body?.CardNumber,
        ExpDate: req?.body?.ExpDate,
        Cvv: req?.body?.Cvv,
        Amount: req?.body?.Amount
    });

    res.json({
        RequestId: createPay?._id,
        Amount: createPay?.Amount
    });
} 

const getPayController = async(req, res) => {

    //! Получаем данные из БД
    const getPay = await Pay.find({}).sort('-createdAt');
    res.json(getPay);
} 

module.exports = {
    createController,
    getPayController
}