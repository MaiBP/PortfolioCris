import '../entreviews/entreviews.css'

const Entreviews = ({img,link}) => {
  return (
    <div className="e">
      <div className="e-browser">
        <div className="e-circle"></div>
        <div className="e-circle"></div>
        <div className="e-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="img" className="e-img" />
      </a>
    </div>
  );
};
export default Entreviews
