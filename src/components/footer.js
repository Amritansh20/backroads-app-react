import { footerData, footerIcons } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {footerData.map((data) => {
          return (
            <li key={data.id}>
              <a href={data.href} className="footer-link">
                {data.text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="footer-icons">
        {footerIcons.map((data) => {
          return (
            <li key={data.id}>
              <a
                href={data.href}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className={data.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
