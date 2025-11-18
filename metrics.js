// metrics.js


export function logRunMetric(runNumber, clickCount, elapsedMs, activeTerms) {
  const seconds = (elapsedMs / 1000).toFixed(1);
  const label =
    activeTerms.length > 0 ? activeTerms.join(", ") : "(no active terms)";

  const message = `Run ${runNumber} \u2014 ${clickCount} clicks in ${seconds}s (active terms: "${label}")`;

  try {
    console.log(message);

    // Bonus-ish: persist last run safely
    const payload = {
      runNumber,
      clickCount,
      elapsedMs,
      activeTerms,
      timestamp: new Date().toISOString(),
    };

    // Try/catch here satisfies the "try/catch" 
    localStorage.setItem("tinySearchFixer:lastRun", JSON.stringify(payload));
  } catch (error) {
    // In case localStorage is blocked or JSON fails
    console.warn("Metrics could not be saved:", error);
  }

  return message;
}
