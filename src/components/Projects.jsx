import React from 'react'
import ProjectCard from './ProjectCard'


const projects = [
{
title: 'AI-Based Personal Health Care Assistant',
description:
'Developed a Flask + MongoDB health assistant that performs automated symptom checks, smart prescription reminders, and provides personalized dietary suggestions — improving user adherence by 40%.',
stack: ['Flask', 'MongoDB', 'Python', 'NLP'],
live: '#',
repo: 'https://github.com/fathimanasar284'
},
{
title: 'VoyageVista – AI-Powered Tourist Spot Exploration Website',
description:
'Created a full-stack travel platform using Flask and JavaScript, featuring smart search, personalized recommendations, and AI chatbot support for over 100+ destinations across India.',
stack: ['Flask', 'JavaScript', 'HTML', 'CSS'],
live: '#',
repo: 'https://github.com/fathimanasar284'
},
{
title: 'EduBot – AI-Powered University Assistant Chatbot',
description:
'Built a university chatbot using Flask and NLP to handle 70+ campus-related queries, student login, and timetable access — enhancing onboarding and self-service by 60%.',
stack: ['Flask', 'Python', 'NLP', 'HTML', 'CSS'],
live: '#',
repo: 'https://github.com/fathimanasar284'
}
]


export default function Projects() {
return (
<section id="projects" className="mt-12">
<h2 className="text-2xl font-bold mb-4">Projects</h2>
<div className="grid gap-4 md:grid-cols-2">
{projects.map((p) => (
<ProjectCard key={p.title} project={p} />
))}
</div>
</section>
)
}