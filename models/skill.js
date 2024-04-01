const skills = [
    {name: "Web Development", level: "Expert"},
    {name: "Data Science", level: "Master"},
    {name: "Cybersecurity", level: "Expert"},
    {name: "UI/UX Design", level: "Advanced"},
    {name: "DevOps", level: "Advanced"},
    {name: "AR/VR Development", level: "Expert"},
    {name: "Python Programming", level: "Expert"},
];


module.exports = {
    getAll: () => skills,
    getOne: (id) => skills[id],
    create: (skill) => skills.push(skill),
    deleteOne: (id) => skills.splice(id, 1),
    update: (id, skill) => { Object.assign(skills[id], skill) },
}
