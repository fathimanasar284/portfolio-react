import React from 'react'


const skills = [
{ name: 'Python', level: 'Advanced' },
{ name: 'Java', level: 'Intermediate' },
{ name: 'JavaScript', level: 'Intermediate' },
{ name: 'ReactJS', level: 'Intermediate' },
{ name: 'Flask', level: 'Intermediate' },
{ name: 'MySQL', level: 'Intermediate' },
{ name: 'MongoDB', level: 'Intermediate' },
{ name: 'Node.js', level: 'Beginner' }
]


export default function Skills() {
return (
<section id="skills" className="mt-10">
<h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
{skills.map((s) => (
<div key={s.name} className="card text-center">
<div className="font-semibold">{s.name}</div>
<div className="text-sm text-gray-500">{s.level}</div>
</div>
))}
</div>
</section>
)
}