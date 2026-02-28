import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";



function CTA() {
  return (
    <section className="cta">
      <div className="container">

        <h2>Vamos identificar oportunidades no seu negócio?</h2>

        <p>
          Solicite um diagnóstico inicial e descubra onde estão os
          principais ganhos potenciais de performance.
        </p>

        <div className="social-links">

          <a
            href="https://linkedin.com/company/little-birds-consultoria"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={40} />
          </a>

          <a
            href="https://wa.me/5531982208900"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={40} />
          </a>

        </div>

      </div>
    </section>
  );
}

export default CTA;