import { Kpopgroup } from "../models/kpopgroup.js"

function index(req, res) {
  Kpopgroup.find({})
  .then(kpopgroups => {
    res.json(kpopgroups)
  })
}

function show(req, res){
  Kpopgroup.findById(req.params.id)
  .then(kpopgroup => {
    res.json(kpopgroup)
  })
}

function create(req, res){
  Kpopgroup.create(req.body)
  .then(kpopgroup => {
    res.json(kpopgroup)
  })
}

function update(req, res){
  Kpopgroup.findByIdAndUpdate(req.param.id, req.body, {new: true})
  .then(kpopgroup => {
    res.json(kpopgroup)
  })
}

function deleteKpopgroup(req, res){
  Kpopgroup.findByIdAndDelete(req.param.id)
  .then(kpopgroup => {
    res.json(kpopgroup)
  })
}

export {
  index,
  show,
  create,
  update,
  deleteKpopgroup as delete
}