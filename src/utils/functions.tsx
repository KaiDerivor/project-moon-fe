export function monthDiff(d1:Date, d2:Date):number {
   var months;
   months = (d2.getFullYear() - d1.getFullYear()) * 12;
   months -= d1.getMonth() + 1;
   months += d2.getMonth();
   return months <= 0 ? 0 : months;
}
