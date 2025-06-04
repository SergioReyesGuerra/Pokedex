export default function Contact() {
  return (
    <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📬 Contacto</h1>
      <p style={{ marginBottom: '2rem' }}>
        Si tienes alguna sugerencia o encuentras un error en la Pokédex, puedes escribirnos usando este formulario.
      </p>

      <form
        onSubmit={e => {
          e.preventDefault();
          alert('Gracias por tu mensaje 📨');
        }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <input type="text" placeholder="Tu nombre" required />
        <input type="email" placeholder="Tu correo electrónico" required />
        <textarea placeholder="Tu mensaje..." rows="5" required />
        <button type="submit">Enviar mensaje</button>
      </form>
    </div>
  );
}
