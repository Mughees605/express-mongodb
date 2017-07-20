import Ninja from '../models/ninja.model';

export let getNinja = (req, res) => {
    Ninja.find({}, function (err, user) {
        if (err) throw err;
        res.send({ status: true, data: user });
    })
}

export let postNinja = (req, res) => {
    console.log('req.body ', req.body);
    const newNinja = new Ninja(req.body);
    newNinja.save(function (err, record) {
        if (err) {
            res.send({ status: false });
        } else {
            res.send({ status: true, data: record });
        }
    })
}

export let putNinja = (req, res, next) => {
    console.log('req.body ', req.body);
    var id = req.params.id;
    Ninja.findByIdAndUpdate({ _id: id }, req.body).then(() => {
        Ninja.findOne({ _id: id }).then((ninja) => {
            res.send(ninja)
        });
    }).catch(next)
}

export let deleteNinja = (req, res, next) => {
    Ninja.findByIdAndRemove({ _id: req.params.id }).then((ninja) => {
        console.log(ninja);
        res.send(ninja)
    })

} 
