import styled from "styled-components";
const Checkbox = ({ label, onChange, id, isChecked }) => {
    return (
        <Wrapper>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type="checkbox"
                name={label}
                onChange={() => {
                    onChange(!isChecked ? label : null);
                }}
                value={isChecked ? label : ""}
                checked={isChecked}
            />
            <span className="rounded-full" />
        </Wrapper>
    );
};