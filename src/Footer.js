import "./BMI.css";
import range from "./rangeBmi.png";
import IconFooter from "./IconFooter";
export default function Footer() {
  return (
    <div style={{ backgroundColor: "#222" }}>
      <div className="footer-con">
        <p className="parg-bmi">
          <span>What is BMI?</span>
          <br />
          Body Mass Index (BMI) is a medical screening tool used by healthcare
          providers to estimate the amount of body fat in an individual. It is
          calculated by dividing a person’s weight in kilograms (kg) by the
          square of their height in meters (m²). Although BMI correlates with
          body fat in most cases, it’s essential to recognize that it’s not
          always an accurate representation of body fatness.
        </p>
        <div className="img-bmi">
          <img src={range} width="50px" />
        </div>
      </div>
    </div>
  );
}
