type LabelProps = {
    htmlFor: string;
    label: string;
};

const Label = ({htmlFor, label}: LabelProps) => {
    return (
        <label htmlFor={htmlFor}>
            <span>{label}</span>
        </label>
    );
}

export default Label;