const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update,
}

function index(req, res) {
    res.render('skills/index', { skills: Skill.getAll(), title: 'All the Skills' });
}

function show(req, res) {
    res.render('skills/show', { skill: Skill.getOne(req.params.id), title: 'Skill Details', id: req.params.id });
}

function newSkill(req, res) {
    res.render('skills/new', { title: 'New Skill' })
}

function create(req, res) {
    Skill.create(req.body);
    // Always do a redirect when data has been changed
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function edit(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/edit', { skill, title: 'Edit Skill', id: req.params.id });
}

function update(req, res) {
    req.body.level = !!req.body.level ? 'Master' : 'Expert';
    Skill.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
}