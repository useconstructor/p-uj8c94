'use client';
import React, { useState } from 'react';

const SERVICES = [
  {
    num: '01',
    name: 'Branding & Identidad',
    tagline: 'Creamos la identidad visual completa de tu marca.',
    detail: 'Incluye logo, paleta de colores, tipografías, manual de marca y guía de uso en todos los formatos para digital e impresión.',
  },
  {
    num: '02',
    name: 'Diseño Web',
    tagline: 'Sitios web modernos, rápidos y con propósito.',
    detail: 'Diseñamos con Next.js y Tailwind, optimizado para SEO y mobile. Incluye hasta 5 páginas, formulario de contacto y analytics básico.',
  },
  {
    num: '03',
    name: 'Estrategia Digital',
    tagline: 'Posiciona tu marca donde están tus clientes.',
    detail: 'Auditoría de presencia digital, plan de contenidos, estrategia SEO on-page y configuración de Google Business Profile.',
  },
  {
    num: '04',
    name: 'Fotografía de Marca',
    tagline: 'Imágenes que comunican tu esencia.',
    detail: 'Sesión fotográfica, edición profesional, entrega de 30 imágenes en alta resolución para web y redes.',
  },
];

const PORTFOLIO = [
  { name: 'Aurum Studio', cat: 'Branding', bg: 'linear-gradient(135deg,#1a1a2e,#16213e)' },
  { name: 'Vitae Health', cat: 'Diseño Web', bg: 'linear-gradient(135deg,#0f3460,#533483)' },
  { name: 'Skiné', cat: 'E-commerce', bg: 'linear-gradient(135deg,#e94560,#0f3460)' },
  { name: 'Nórdika', cat: 'Branding', bg: 'linear-gradient(135deg,#2d6a4f,#1b4332)' },
  { name: 'Fitway App', cat: 'UX/UI', bg: 'linear-gradient(135deg,#f77f00,#d62828)' },
  { name: 'Luna Café', cat: 'Identidad', bg: 'linear-gradient(135deg,#3d405b,#81b29a)' },
];

export default function Page() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const [form, setForm] = useState({ nombre: '', email: '', tipo: '', descripcion: '', presupuesto: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggle = (i: number) => setExpanded(p => ({ ...p, [i]: !p[i] }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_CONSTRUCTOR_API}/v1/forms/${process.env.NEXT_PUBLIC_PROJECT_ID}`,
        { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) }
      );
      setSubmitted(true);
    } catch {}
    setLoading(false);
  };

  const accent = '#2563eb';
  const inp: React.CSSProperties = { width: '100%', border: '1px solid #d1d5db', borderRadius: '0.5rem', padding: '0.75rem 1rem', fontSize: '1rem', boxSizing: 'border-box', background: '#fff', color: '#111' };
  const lbl: React.CSSProperties = { display: 'block', color: '#374151', marginBottom: '0.375rem', fontSize: '0.875rem', fontWeight: 600 };

  return (
    <div style={{ fontFamily: 'system-ui,sans-serif', background: '#fff', color: '#111', minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: '#fff', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 2rem' }}>
        <span style={{ fontWeight: 900, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
          <span style={{ color: accent }}>■</span> Studio Pixel
        </span>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {[['Servicios','#servicios'],['Portafolio','#portafolio'],['Nosotros','#nosotros'],['Contacto','#contacto']].map(([label,href]) => (
            <a key={href} href={href} style={{ color: '#374151', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>{label}</a>
          ))}
          <a href="#contacto" style={{ background: accent, color: '#fff', padding: '0.5rem 1.25rem', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem' }}>Iniciar proyecto</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ textAlign: 'center', padding: '6rem 2rem 5rem', background: 'radial-gradient(ellipse at 50% 0%,#eff6ff 0%,#fff 70%)' }}>
        <div style={{ display: 'inline-block', background: '#eff6ff', color: accent, padding: '0.375rem 1rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Agencia Creativa</div>
        <h1 style={{ fontSize: 'clamp(2.25rem,5vw,4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
          Diseñamos marcas<br/>que se recuerdan
        </h1>
        <p style={{ color: '#6b7280', maxWidth: '520px', margin: '0 auto 2.5rem', lineHeight: 1.7, fontSize: '1.1rem' }}>
          Branding, diseño web y estrategia digital para empresas con personalidad.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#portafolio" style={{ background: accent, color: '#fff', padding: '0.875rem 2rem', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: 700 }}>Ver portafolio</a>
          <a href="#contacto" style={{ border: '2px solid #d1d5db', color: '#111', padding: '0.875rem 2rem', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: 700 }}>Iniciar proyecto</a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" style={{ padding: '5rem 2rem', background: '#f9fafb' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ color: accent, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem', marginBottom: '0.75rem' }}>Servicios</p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '3rem', letterSpacing: '-0.02em' }}>Lo que hacemos</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(380px,1fr))', gap: '1.25rem' }}>
            {SERVICES.map((s, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '1rem', padding: '1.75rem', transition: 'box-shadow 0.2s' }}>
                <div style={{ color: accent, fontWeight: 900, fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>{s.num}</div>
                <h3 style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.5rem' }}>{s.name}</h3>
                <p style={{ color: '#6b7280', lineHeight: 1.6, marginBottom: '1rem' }}>{s.tagline}</p>
                {expanded[i] && (
                  <p style={{ color: '#374151', lineHeight: 1.7, marginBottom: '1rem', background: '#eff6ff', padding: '0.875rem', borderRadius: '0.5rem', fontSize: '0.95rem' }}>
                    {s.detail}
                  </p>
                )}
                <button
                  onClick={() => toggle(i)}
                  style={{ background: 'transparent', border: `1px solid ${accent}`, color: accent, padding: '0.375rem 0.875rem', borderRadius: '0.375rem', cursor: 'pointer', fontWeight: 600, fontSize: '0.875rem' }}
                >
                  {expanded[i] ? 'Ver menos' : 'Saber más'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portafolio" style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ color: accent, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem', marginBottom: '0.75rem' }}>Proyectos Destacados</p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '3rem', letterSpacing: '-0.02em' }}>Proyectos recientes</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: '1.25rem' }}>
            {PORTFOLIO.map(p => (
              <div key={p.name} style={{ borderRadius: '1rem', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
                <div style={{ height: 180, background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#fff', fontWeight: 900, fontSize: '1.5rem', opacity: 0.9 }}>{p.name}</span>
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <span style={{ background: '#eff6ff', color: accent, padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700 }}>{p.cat}</span>
                  <h3 style={{ fontWeight: 800, marginTop: '0.75rem', marginBottom: 0 }}>{p.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="nosotros" style={{ padding: '5rem 2rem', background: '#f9fafb' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: accent, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem', marginBottom: '0.75rem' }}>Nosotros</p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '3rem', letterSpacing: '-0.02em' }}>¿Por qué Studio Pixel?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1.5rem' }}>
            {[['5+ años','creando marcas'],['+ 80 proyectos','entregados'],['Clientes','en 4 países']].map(([v,l]) => (
              <div key={l} style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '1rem', padding: '2rem', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: accent, marginBottom: '0.5rem' }}>{v}</div>
                <div style={{ color: '#6b7280', fontWeight: 500 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p style={{ color: accent, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem', marginBottom: '0.75rem' }}>Contacto</p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>Hablemos de tu proyecto</h2>
          {submitted ? (
            <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '1rem', padding: '2.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
              <h3 style={{ color: accent, margin: '0 0 0.5rem', fontSize: '1.5rem', fontWeight: 800 }}>Propuesta enviada</h3>
              <p style={{ color: '#374151', margin: 0 }}>Te responderemos en 24 horas a tu email.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div><label style={lbl}>Nombre completo *</label><input type="text" required value={form.nombre} onChange={e => setForm(p => ({ ...p, nombre: e.target.value }))} style={inp} /></div>
              <div><label style={lbl}>Email *</label><input type="email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} style={inp} /></div>
              <div>
                <label style={lbl}>Tipo de proyecto</label>
                <select value={form.tipo} onChange={e => setForm(p => ({ ...p, tipo: e.target.value }))} style={inp}>
                  <option value="">Selecciona</option>
                  {['Branding','Diseño web','Estrategia digital','Fotografía','Otro'].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div><label style={lbl}>Descripción del proyecto *</label><textarea required rows={4} value={form.descripcion} onChange={e => setForm(p => ({ ...p, descripcion: e.target.value }))} style={{ ...inp, resize: 'vertical' }} /></div>
              <div>
                <label style={lbl}>Presupuesto estimado</label>
                <select value={form.presupuesto} onChange={e => setForm(p => ({ ...p, presupuesto: e.target.value }))} style={inp}>
                  <option value="">Selecciona</option>
                  {['Menos de $20k MXN','$20k–50k MXN','$50k–100k MXN','Más de $100k MXN'].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <button type="submit" disabled={loading} style={{ background: loading ? '#93c5fd' : accent, color: '#fff', padding: '1rem', borderRadius: '0.5rem', fontWeight: 700, fontSize: '1rem', border: 'none', cursor: loading ? 'not-allowed' : 'pointer' }}>
                {loading ? 'Enviando...' : 'Enviar propuesta'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#111', color: '#9ca3af', padding: '3rem 2rem', textAlign: 'center' }}>
        <div style={{ fontWeight: 900, color: '#fff', fontSize: '1.25rem', marginBottom: '1rem' }}>
          <span style={{ color: accent }}>■</span> Studio Pixel
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <a href="mailto:hola@studiopixel.mx" style={{ color: '#9ca3af', textDecoration: 'none' }}>hola@studiopixel.mx</a>
        </div>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
          {['IG','LI','BE','DR'].map(icon => (
            <a key={icon} href="#" style={{ background: '#1f2937', color: '#9ca3af', width: 36, height: 36, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 700 }}>{icon}</a>
          ))}
        </div>
        <p style={{ fontSize: '0.875rem', margin: 0 }}>© 2026 Studio Pixel. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
