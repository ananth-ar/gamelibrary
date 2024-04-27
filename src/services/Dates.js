export function last30days() {
  const today = new Date();

  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(today.getDate() - 30);

  const datesArray = [];
  datesArray.push(thirtyDaysAgo.toISOString().slice(0, 10));
  datesArray.push(today.toISOString().slice(0, 10));

  return datesArray.join(",");
}

export function thisweek() {
  const today = new Date();

  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(today.getDate() - 7);

  const datesArray = [];
  datesArray.push(thirtyDaysAgo.toISOString().slice(0, 10));
  datesArray.push(today.toISOString().slice(0, 10));

  return datesArray.join(",");
}

export function nextweek() {
  const today = new Date();

  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(today.getDate() + 7);

  const datesArray = [];
  datesArray.push(today.toISOString().slice(0, 10));
  datesArray.push(thirtyDaysAgo.toISOString().slice(0, 10));

  return datesArray.join(",");
}
