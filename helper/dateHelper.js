import moment from "moment";

export const startDate = (date) => {
  return moment(new Date(date))
    .utc()
    .startOf("day")
    .format("dddd MMMM DD YYYY");
};
