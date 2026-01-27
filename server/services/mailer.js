const mailer = ()=>{
    console.log(mailer)
}
const extractJsonArray = (text) => {
  const start = text.indexOf("[");
  const end = text.lastIndexOf("]");

  const timeline = path.timeline;

    const firstSalary = parseSalary(timeline[0].salary);
    const lastSalary = parseSalary(timeline[timeline.length - 1].salary);