const leaderboardWrappers = document.getElementsByClassName(
  "leaderboard-wrapper"
);
if (leaderboardWrappers.length > 0) {
  (leaderboardWrappers[0] as HTMLDivElement).style.display = "none";
}
const leaderboardContainers = document.getElementsByClassName(
  "leaderboard-container"
);
if (leaderboardContainers.length > 0) {
  (leaderboardContainers[0] as HTMLDivElement).style.display = "none";
}
