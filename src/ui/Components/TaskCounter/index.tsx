interface ITaskCounter {
    label: string;
    count: number,
    color: "var(--purple)" | "var(--blue)"
}
export const TaskCounter = ({
    label,
    count,
    color
}: ITaskCounter) => {
    return (
        <span style={{ color }}>{label} <strong>{count}</strong></span>
    )
}