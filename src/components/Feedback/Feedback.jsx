export default function Feedback({
  good,
  neutral,
  bad,
  feedbackValue,
  positiveValue,
}) {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutrual: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {feedbackValue}</li>
      <li>Positive: {positiveValue}%</li>
    </ul>
  );
}
