//import styles
import "./Image.css";
export default function Image({ srcText, altText }) {
  return (
    <>
      <img src={srcText} alt={altText} />
    </>
  );
}
