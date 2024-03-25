import { Remarks } from "./constants";

export const calculateWPM = (
  startTime: number | null,
  endTime: number | null,
  currentText: string
) => {
  if (!startTime || !endTime) {
    return 0;
  }

  const timeTaken = (endTime - startTime) / 60000;
  const wordCount = currentText.split(" ").length;

  return Number((wordCount / timeTaken).toFixed(2));
};

export const getRemarks = (score: number) => {
  if (score >= 90) {
    return Remarks.Perfect;
  }
  if (score >= 85) {
    return Remarks.High;
  }
  if (score >= 70) {
    return Remarks.Average;
  }
  return Remarks.Low;
};
