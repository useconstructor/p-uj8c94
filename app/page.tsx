export default function Home() {
  return (
    <div>
      <header style={{background:'#FFFFFF',color:'white',padding:'20px 40px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <span style={{fontSize:'1.5rem',fontWeight:'bold'}}>Studio Pixel</span>
        <nav style={{display:'flex',gap:'20px'}}>
          <a href="#nav_sticky" style={{color:'white',textDecoration:'none'}}>nav_sticky</a>
          <a href="#hero_centered" style={{color:'white',textDecoration:'none'}}>hero_centered</a>
          <a href="#stats_banner" style={{color:'white',textDecoration:'none'}}>stats_banner</a>
          <a href="#services_bento" style={{color:'white',textDecoration:'none'}}>services_bento</a>
          <a href="#products_grid" style={{color:'white',textDecoration:'none'}}>products_grid</a>
        </nav>
      </header>
      <section style={{background:'#FFFFFF',color:'white',padding:'100px 40px',textAlign:'center'}}>
        <h1 style={{fontSize:'3rem',fontWeight:'800',marginBottom:'20px'}}>Studio Pixel</h1>
        <p style={{fontSize:'1.2rem',opacity:0.85,maxWidth:'600px',margin:'0 auto 40px'}}>Landing page en español para Studio Pixel, una agencia creativa de Monterrey especializada en branding, diseño web, estrategia digital y fotografía de marca. La experiencia posiciona su trayectoria, metodología colaborativa y portafolio mediante una estética editorial, limpia y contemporánea.</p>
        <a href="#contact" style={{background:'#2563EB',color:'white',padding:'16px 32px',borderRadius:'50px',textDecoration:'none',fontWeight:'bold',display:'inline-block'}}>Get In Touch</a>
      </section>
      <section id="nav_sticky" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#FFFFFF'}}>nav_sticky</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our nav_sticky offerings.</p>
      </section>
      <section id="hero_centered" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#FFFFFF'}}>hero_centered</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our hero_centered offerings.</p>
      </section>
      <section id="stats_banner" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#FFFFFF'}}>stats_banner</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our stats_banner offerings.</p>
      </section>
      <section id="services_bento" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#FFFFFF'}}>services_bento</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our services_bento offerings.</p>
      </section>
      <section id="products_grid" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#FFFFFF'}}>products_grid</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our products_grid offerings.</p>
      </section>
      <footer style={{background:'#FFFFFF',color:'white',padding:'30px',textAlign:'center'}}>
        <p>Copyright 2026 Studio Pixel. All rights reserved.</p>
      </footer>
    </div>
  );
}