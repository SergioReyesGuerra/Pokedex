export default function Contact() {
  const enviar = (e) => {
    e.preventDefault();
    alert("Mensaje enviado ✅");
  };

  return (
    <div>
      <h1>📬 Contacto</h1>
      <form onSubmit={enviar}>
        <input type="text" placeholder="Tu nombre" required /><br /><br />
        <input type="email" placeholder="Tu correo" required /><br /><br />
        <textarea placeholder="Tu mensaje..." rows="4" required></textarea><br /><br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
