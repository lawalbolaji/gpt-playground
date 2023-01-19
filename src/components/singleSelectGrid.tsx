export default function SingleSelectGrid() {
  const isChecked = true; // will change to track selected option later

  return (
    <div className="singleSelectContainer">
      <input
        type="radio"
        id="-radio-freeform"
        name="-switch"
        value="freeform"
        checked={isChecked}
        onChange={() => {}}
      />
      <label htmlFor="-radio-freeform">
        <div>
          <span className="material-symbols-outlined">text_snippet</span>
        </div>
      </label>

      <input type="radio" id="-radio-insert" name="-switch" value="insert" />
      <label htmlFor="-radio-insert">
        <div>
          <span className="material-symbols-outlined">download</span>
        </div>
      </label>

      <input type="radio" id="-radio-edit" name="-switch" value="edit" />
      <label htmlFor="-radio-edit">
        <div>
          <span className="material-symbols-outlined">auto_fix</span>
        </div>
      </label>

      <style jsx>{`
        .singleSelectContainer {
          background-color: var(--gray-50);
          border-radius: 3px;
          display: flex;
          position: relative;
        }

        .singleSelectContainer input {
          clip: rect(0, 0, 0, 0);
          border: 0;
          height: 1px;
          left: 0;
          overflow: hidden;
          position: absolute !important;
          top: 0;
          width: 1px;
        }

        .singleSelectContainer input:checked + label {
          background-color: var(--gray-100);
          border-radius: 3px;
          color: var(--gray-800);
        }

        .singleSelectContainer label {
          flex: 1 1;
          line-height: 0;
          padding: 6px 0;
          cursor: pointer;
          font-size: 12px;
          font-weight: 700;
          text-align: center;
          text-transform: uppercase;
          transition: all 0.1s ease-in-out;
        }
      `}</style>
    </div>
  );
}
