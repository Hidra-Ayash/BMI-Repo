import "./BMI.css";
export default function ScreenBmi({ bmiValue, isVisible }) {
  let rangeBmiRes = "";
  if (bmiValue <= 18) {
    rangeBmiRes = "UnderWeight";
  } else if (bmiValue >= 19 && bmiValue < 25) {
    rangeBmiRes = "Healthy weight";
  } else if (bmiValue >= 25) {
    rangeBmiRes = "Overweight";
  }
  if (isVisible === true) {
    return (
      <div className="screen-con">
        <div className="screen-bmi">
          <h2>{rangeBmiRes}</h2>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
