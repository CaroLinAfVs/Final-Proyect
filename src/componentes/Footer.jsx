import '../styles/footer.css';
function Footer() {
  return (
    <footer>
      <div class="contacto">
        <h3>Contacto</h3>
        <p>Teléfono: 123-456-7890</p>
        <p>Correo electrónico: info@ejemplo.com</p>
        <p>Dirección: 123 Calle Principal, Ciudad, Estado, País</p>
      </div>

      <div class="enlaces">
        <h3>Enlaces importantes</h3>
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/acerca-de">Acerca de</a>
          </li>
          <li>
            <a href="/productos">Productos</a>
          </li>
          <li>
            <a href="/contacto">Contacto</a>
          </li>
        </ul>
      </div>

      <div class="derechos">
        <p>&copy; 2023 Ejemplo, Inc. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
export default Footer;
