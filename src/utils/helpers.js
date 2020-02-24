import _ from "lodash";

export function formatDate(timestamp) {
  return new Date(timestamp * 1000).toLocaleString();
}

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
