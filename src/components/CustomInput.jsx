import "../styles/CustomInput.css";

function CustomInput({id, placeholder, type, labelText, value, optional, onChange}) {
    return (
        <div className="custom-input">
            <label htmlFor="{id}">
                <span className="label-text">{labelText}</span>
                {optional && <span className="optional-text">Optional</span>}
            </label>

            {type === "textarea" ? (
                <textarea 
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            ) : (
                <input type={type} id={id} placeholder={placeholder} value={value} onChange={onChange}/>
            )}
        </div>
    );
}

export default CustomInput;