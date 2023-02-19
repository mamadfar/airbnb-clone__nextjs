import {format} from "date-fns";

export const DateFormatter = (date: (string | null)): string => {
    if (date) return format(new Date(date), "dd MMMM yy");
    else return `${date}`;
};
