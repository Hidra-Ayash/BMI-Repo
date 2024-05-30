import "./BMI.css";
export default function PointerBmi({ bmiValue }) {
  return (
    <div className="list-bmi">
      <ul>
        <li className={bmiValue == 30 || bmiValue > 30 ? "mark-bmi" : null}>
          ~30
        </li>
        <li className={bmiValue >= 25 && bmiValue < 30 ? "mark-bmi" : null}>
          ~25
        </li>
        <li className={bmiValue >= 20 && bmiValue < 25 ? "mark-bmi" : null}>
          ~20
        </li>
        <li className={bmiValue >= 15 && bmiValue < 20 ? "mark-bmi" : null}>
          ~15
        </li>
        <li className={bmiValue >= 10 && bmiValue < 15 ? "mark-bmi" : null}>
          ~10
        </li>
        <h4>BMI RANGE</h4>
      </ul>
    </div>
  );
}
