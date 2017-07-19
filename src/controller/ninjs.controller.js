import Ninja from '../models/ninja.model';

export let getNinja = (req, res) => {
    Ninja.find({},function(err,user){
      if(err) throw err;
     res.send({ status: true, data: user });
    })
}

export let postNinja = (req, res) => {
    console.log('req.body ',req.body);
    const newNinja = new Ninja(req.body);
    newNinja.save(function (err, record) {
        if (err) {
            res.send({ status: false });
        } else {
            res.send({ status: true, data: record });
        }
    })
}