import React from 'react'


export default function Contact() {
return (
<section id="contact" className="mt-12">
<h2 className="text-2xl font-bold mb-4">Contact</h2>
<div className="grid md:grid-cols-2 gap-6">
<div className="card">
<p>If you'd like to collaborate or learn more about my work — get in touch.</p>
<ul className="mt-4 text-sm text-gray-600">
<li>Email: <strong>fathimanasar56@gmail.com</strong></li>
<li>GitHub: <a href="https://github.com/fathimanasar284" className="underline">github.com/fathimanasar284</a></li>
<li>LinkedIn: <a href="https://linkedin.com/in/fathima-nasar-467980257" className="underline">linkedin.com/in/fathima-nasar-467980257</a></li>
</ul>
</div>


<form className="card">
<label className="block text-sm">Name</label>
<input className="w-full mt-1 p-2 rounded border" />


<label className="block text-sm mt-3">Message</label>
<textarea className="w-full mt-1 p-2 rounded border" rows={5} />


<div className="mt-4">
<button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">Send</button>
</div>
</form>
</div>
</section>
)
}