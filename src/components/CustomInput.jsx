import "../styles/CustomInput.css";

function CustomInput({id, placeholder, type, labelText, value, optional}) {
    return (
        <div className="custom-input">
            <label htmlFor="{id}">
                <span className="label-text">{labelText}</span>
                {optional && <span className="optional-text">Optional</span>}
            </label>

            <input type={type} id={id} placeholder={placeholder} value={value} />
        </div>
    );
}

export default CustomInput;