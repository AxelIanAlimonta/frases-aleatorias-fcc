import PropTypes from "prop-types";
import "../css/Boton.css";

export default function Boton({
  children,
  id,
  className,
  onClick,
  colorPrincipal,
}) {

  return (
    <button
      className={className}
      id={id}
      onClick={onClick}
      style={{backgroundColor:colorPrincipal}}
    >
      {children}
    </button>
  );
}

Boton.propTypes = {
  children: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  colorPrincipal: PropTypes.string,
};
