const {Device} = require('../models/models')
const apiError = require('../error/apiError')
const uuid = require('uuid')
const path = require('path')
class DeviceController {
    async create(req,res,next){
        try {
            const {name,price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const device = await Device.create({name, price, brandId, typeId, img: fileName})
            return res.json(device)
        } catch (e){
            next(apiError.badRequest(e.message))
        }
    }

    async getALl(req,res){
        const {brandId, typeId} = req.query
        let devices;
        if (!brandId && !typeId){
            devices = await Device.findAll()
        }
        else if (brandId && !typeId){
            devices = await Device.findAll({where: {brandId}})
        }
        else if (!brandId && typeId){
            devices = await Device.findAll({where: {typeId}})
        }
        else if (brandId && typeId){
            devices = await Device.findAll({where: {brandId, typeId}})
        }
        return res.json(devices)
    }

    async getOne(req,res){

    }
}

module.exports = new DeviceController()