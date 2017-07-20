import NinjaModel from '../models/ninja.model';

export class Ninja {
    constructor() { }

    static getNinja(req, res) {
        NinjaModel.find({}, function (err, user) {
            if (err) throw err;
            res.send({ status: true, data: user });
        })
    }

    static postNinja(req, res) {
        console.log('req.body ', req.body);
        const newNinja = new NinjaModel(req.body);
        newNinja.save(function (err, record) {
            if (err) {
                res.send({ status: false });
            } else {
                res.send({ status: true, data: record });
            }
        })
    }

    static putNinja(req, res, next) {
        var id = req.params.id;
        NinjaModel.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
            NinjaModel.findOne({ _id: id }).then((ninja) => {
                res.send(ninja)
            });
        }).catch(next)
    }

    static deleteNinja(req, res, next) {
        NinjaModel.findByIdAndRemove({ _id: req.params.id }).then((ninja) => {
            console.log(ninja);
            res.send(ninja)
        })
    }


}






