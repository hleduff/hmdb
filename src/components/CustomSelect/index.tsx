export const CustomSelect = ({
    options,
    onChange,
    value,
}: {
    options: string[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    value: string;
}) => {
    return (
        <select value={value} onChange={onChange}>
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};
