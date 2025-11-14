const ScoreBadge = ({ score }: { score: number }) => {
  let badgeClasses = "";
  let badgeText = "";

  if (score > 70) {
    badgeClasses = "bg-badge-green text-green-600";
    badgeText = "Strong";
  } else if (score > 49) {
    badgeClasses = "bg-badge-yellow text-yellow-600";
    badgeText = "Good Start";
  } else {
    badgeClasses = "bg-badge-red text-red-600";
    badgeText = "Needs Work";
  }

  return (
    <div
      className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${badgeClasses}`}
    >
      <p>{badgeText}</p>
    </div>
  );
};

export default ScoreBadge;