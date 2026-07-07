export default function calculateReadingTime(text) {
  const words = text.split(" ").length;

  return Math.ceil(words / 200);
}
