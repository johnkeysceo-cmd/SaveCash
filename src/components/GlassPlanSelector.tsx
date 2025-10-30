import React from "react";

export default function GlassPlanSelector() {
  return (
    <div className="glass-radio-group-vertical">
      <input defaultChecked id="glass-silver" name="plan" type="radio" />
      <label data-color="silver" htmlFor="glass-silver">
        <span className="radio-indicator">
          <span className="checkmark">✓</span>
        </span>
        <span className="label-text">Silver</span>
      </label>

      <input id="glass-gold" name="plan" type="radio" />
      <label data-color="gold" htmlFor="glass-gold">
        <span className="radio-indicator">
          <span className="checkmark">✓</span>
        </span>
        <span className="label-text">Gold</span>
      </label>

      <input id="glass-platinum" name="plan" type="radio" />
      <label data-color="platinum" htmlFor="glass-platinum">
        <span className="radio-indicator">
          <span className="checkmark">✓</span>
        </span>
        <span className="label-text">Platinum</span>
      </label>

      <div className="glass-glider-vertical"></div>
    </div>
  );
}


