const currentHour = document.querySelector(".currentHour");
const currentDate = document.querySelector(".currentDate");

export function updateTime() {
  const now = new Date();
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  currentHour.textContent = `${now.getHours()}:${now
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

  currentDate.textContent = `${days[now.getDay()]}, ${now
    .getDate()
    .toString()
    .padStart(2, "0")} de ${months[now.getMonth()]}`;
}
