import { useState } from "react";
import "./BMI.css";
import ScreenBmi from "./ScreenBmi";
import PointerBmi from "./PointerBmi";
import Footer from "./Footer";
import IconFooter from "./IconFooter";
export default function BMI() {
  const [valueInputs, setInputValues] = useState({
    weight: 0,
    height: 0,
    bmi: 0,
  });
  const [boolState, setBoolState] = useState(false);
  function calcBMI() {
    if (valueInputs.weight > 0 && valueInputs.height > 0) {
      let calcbmi =
        (valueInputs.weight / Math.pow(valueInputs.height, 2)) * 10000;
      let calcInteger = Math.floor(calcbmi);
      setInputValues({ ...valueInputs, bmi: calcInteger });
      setBoolState(true);
    }
  }
  function closeScreen() {
    if (boolState) {
      setBoolState(false);
    }
  }
  return (
    <>
      <div onClick={closeScreen}>
        <div>
          <h1>BMI Tracker</h1>
          <form className="form-bmi">
            <label>Weight(in kg)</label>
            <input
              min={5}
              className="inp-form"
              value={valueInputs.weight}
              onChange={(e) => {
                setInputValues({ ...valueInputs, weight: e.target.value });
              }}
              type="number"
            />
            <label>Height(in cm)</label>
            <input
              min={80}
              className="inp-form"
              value={valueInputs.height}
              onChange={(e) => {
                setInputValues({ ...valueInputs, height: e.target.value });
              }}
              type="number"
            />
          </form>
          <div className="con-comp2">
            <button
              disabled={valueInputs.height == 0 && valueInputs.weight == 0}
              className={
                valueInputs.height > 0 && valueInputs.weight > 0
                  ? "btn-bmi"
                  : "err-btn"
              }
              onClick={calcBMI}
            >
              Calculate BMI
            </button>
            <label>BMI</label>
            <input
              className="show-bmi"
              value={valueInputs.bmi}
              disabled={false}
            />
          </div>
        </div>
        <ScreenBmi bmiValue={valueInputs.bmi} isVisible={boolState} />

        <div>
          <PointerBmi bmiValue={valueInputs.bmi} />
        </div>
      </div>
      <Footer />
      <IconFooter />
    </>
  );
}
