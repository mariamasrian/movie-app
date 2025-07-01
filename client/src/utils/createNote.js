export const createNote = (text) => ({
    username: "Guest",
    text,
    date: new Date().toLocaleString("en-GB", {
      timeZone: "Asia/Yerevan",
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
  });
  