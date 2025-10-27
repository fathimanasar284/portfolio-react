import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'


export default function App() {
return (
<div className="min-h-screen flex flex-col">
<Header />
<main className="flex-1 container py-12">
<Hero />
<About />
<Skills />
<Projects />
<Experience />
<Contact />
</main>
<Footer />
</div>
)
}