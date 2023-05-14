import styled from "styled-components";

const Button = ({ children, className, ...props }) => {
    return (
        <StyledButton
            style={{
                background: "skyblue",
                color: "#000",
            }}
            className={`${className} block text-black px-6 rounded-md font-semibold hover:opacity-75 transition-opacity duration-500 ease-in`}
            type="button"
            {...props}
        >
            {children}
        </StyledButton>
    );
};

export default Button;