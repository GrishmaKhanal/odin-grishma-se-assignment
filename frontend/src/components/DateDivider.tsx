type Props = {
  date: string;
};

const options: Intl.DateTimeFormatOptions = {
  month: "short",
  day: "2-digit",
  year: "numeric",
};

const dateDividerStyles: React.CSSProperties = {
  alignSelf: "center",
  fontSize: "0.9em",
  color: "#aaa",
};

const DateDivider: React.FC<Props> = ({ date }) => {
  const formatter = new Intl.DateTimeFormat("en-US", options);
  const parsedDate = formatter.format(new Date(date));
  const finalDate = parsedDate.replace(" ", "-");
  return <div style={dateDividerStyles}>{finalDate}</div>;
};

export default DateDivider;
