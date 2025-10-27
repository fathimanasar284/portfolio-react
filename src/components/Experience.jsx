import React from 'react'


const experiences = [
{
role: 'B.Tech — Computer Science Engineering',
company: 'Jain (Deemed-to-be) University',
period: '2022 – 2026',
details:
'Focused on AI, full-stack development, and data-driven applications. Built multiple academic and personal projects involving Flask, React, and machine learning.'
}
]


export default function Experience() {
return (
<section id="experience" className="mt-12">
<h2 className="text-2xl font-bold mb-4">Education</h2>
<div className="space-y-4">
{experiences.map((e, i) => (
<div key={i} className="card">
<div className="flex justify-between items-start">
<div>
<div className="font-semibold">{e.role}</div>
<div className="text-sm text-gray-500">{e.company}</div>
</div>
<div className="text-sm text-gray-500">{e.period}</div>
</div>
<p className="mt-2 text-sm text-gray-600">{e.details}</p>
</div>
))}
</div>
</section>
)
}