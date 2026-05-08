const groupA = [
  ["TRAPASSO - AVERSA ENRICHETTA",34],
  ["PUCCIO ANNA MARIA LUISA",35],
  ["CARTOLANO - LOMBARDI",17],
  ["LEONE",30],
  ["LE PIANE",37],
  ["MAZZUCA PATRIZIA",31],
  ["ALESSIO CAVARRETTA",33],
  ["SALERNI",12],
  ["SANDULLI",11],
  ["PRESTA",18],
  ["ROMITI - MONTILLA",19],
  ["SANZI",36],
  ["MANGONE",14],
  ["CAMPENNÌ - POLITO",20],
  ["PISTOIA - GEMELLI",13],
  ["MILANO",29],
  ["RICCI DANTE",32],
  ["AGOSTO [AB. P.R.]",28],
  ["JIRILLO LUIGI",21],
  ["STAIANO",22],
  ["DEMASI ANTONINO [INT. 8]",27],
  ["RICCI ANGELO",8],
  ["MARASCO",26],
  ["DEMASI [SCALA B PIANO 2]",25],
  ["BOVIO",10],
  ["POLITI",23],
  ["MIRIGLIANI ROSA",24],
  ["CATRAMBONE",16]
];

const groupB = [
  ["AGOSTO VIOLETTA [3° P.]",34],
  ["SANZI",36],
  ["SQUILLACIOTI",2],
  ["PILÒ",35],
  ["ELIA",22],
  ["AVERSA ENRICHETTA",29],
  ["DEMASI FRANCESCO",21],
  ["BARBUTO",30],
  ["D'AGOSTINO",31],
  ["RICCELLI",26],
  ["AVERSA - GEMELLI",28],
  ["MANNO",24],
  ["VARANO",27],
  ["LUCENTE",25],
  ["COLACINO",23],
  ["CIANFLONE",32],
  ["MANCUSO",20],
  ["MIRIGLIANI RAFFAELE",33],
  ["AGOSTO [SEMINT.]",17],
  ["EREDI PUCCIO ANGELA",9],
  ["EREDI SPADARO",19],
  ["SELVAGGIO",37],
  ["JIRILLO QUINTINO",18],
  ["RUSSO",11],
  ["PISTOIA FRANCESCO",15],
  ["DEMASI [INT.6]",12],
  ["O [C]",8],
  ["CATRAMBONE",16]
];

const smallGroups = {
  A1:[
    ["TRAPASSO - AVERSA ENRICHETTA",5],
    ["PUCCIO MARISA",10],
    ["CARTOLANO - LOMBARDI",14],
    ["LEONE",3],
    ["LE PIANE",13],
    ["MAZZUCA",4],
    ["ALESSIO CAVARRETTA",1]
  ],
  A2:[
    ["SALERNI",10],
    ["SANDULLI",1],
    ["PRESTA",5],
    ["ROMITA",14],
    ["SANZI",13],
    ["MANGONE",4],
    ["CAMPENNÌ - POLITO",3]
  ],
  A3:[
    ["PISTOIA - GEMELLI",13],
    ["MILANO",14],
    ["RICCI DANTE",1],
    ["AGOSTO [PIANO RIALZ.]",10],
    ["JIRILLO LUIGI",5],
    ["STAIANO",4],
    ["DEMASI ANTONINO [INT. 8]",3]
  ],
  A4:[
    ["RICCI ANGELO",1],
    ["MARASCO [B]",5],
    ["DEMASI [SCALA B PIANO 2]",4],
    ["BOVIO",14],
    ["POLITI",13],
    ["MIRIGLIANI ROSA",10],
    ["VERALDI",3]
  ],
  B1:[
    ["AGOSTO VIOLETTA [3° P.]",5],
    ["SANZI",1],
    ["SQUILLACIOTI",3],
    ["PILÒ",9],
    ["ELIA",2],
    ["AVERSA ENRICHETTA",4],
    ["DE MASI",15]
  ],
  B2:[
    ["BARBUTO",1],
    ["D'AGOSTINO",15],
    ["RICCELLI",2],
    ["AVERSA - GEMELLI",4],
    ["MANNO",3],
    ["VARANO",9],
    ["LUCENTE",5]
  ],
  B3:[
    ["COLACINO",15],
    ["CIANFLONE",9],
    ["MANCUSO",1],
    ["MIRIGLIANI RAFFAELE",3],
    ["AGOSTO (AMMEZZ.)",2],
    ["PUCCIO ANGELA",5],
    ["EREDI SPADARO",4]
  ],
  B4:[
    ["SELVAGGIO",15],
    ["JIRILLO QUINTINO",3],
    ["RUSSO",1],
    ["PISTOIA FRANCESCO",4],
    ["DEMASI [INT.6]",5],
    ["MARASCO [C]",9],
    ["PORTIERE",2]
  ]
};

const cycle = [
  ["A","B3"],
  ["A","B4"],
  ["B","A3"],
  ["A","B1"],
  ["B","A4"],
  ["B","A1"],
  ["A","B2"],
  ["A","B3"],
  ["B","A2"],
  ["B","A3"],
  ["A","B4"],
  ["B","A4"],
  ["A","B1"],
  ["A","B2"],
  ["B","A1"],
  ["B","A2"]
];

const periodTemplates = [
  ["09-01","10-08"],
  ["10-09","11-15"],
  ["11-16","12-23"],
  ["12-24","01-31"],
  ["02-01","03-09"],
  ["03-10","04-15"],
  ["04-16","05-23"],
  ["05-24","06-30"],
  ["09-01","10-08"],
  ["10-09","11-15"],
  ["11-16","12-23"],
  ["12-24","01-31"],
  ["02-01","03-09"],
  ["03-10","04-15"],
  ["04-16","05-23"],
  ["05-24","06-30"]
];

let selectedPeriod = null;
let sortColumn = "name";
let sortDirection = "asc";

const byId = id => document.getElementById(id);

function cleanName(name){
  const text = String(name).trim();
  return text.startsWith(">") ? text.slice(1).trim() : text;
}

function normalizeName(name){
  return cleanName(name)
    .toLowerCase()
    .replaceAll("-", " ")
    .replaceAll(".", " ")
    .replaceAll("'", " ")
    .replaceAll('"', " ")
    .split(" ")
    .filter(Boolean)
    .join(" ");
}

function makeDate(year, mmdd){
  const [month, day] = mmdd.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function isoDate(date){
  return date.getFullYear() + "-" +
    String(date.getMonth() + 1).padStart(2, "0") + "-" +
    String(date.getDate()).padStart(2, "0");
}

function formatDate(date){
  return date.toLocaleDateString("it-IT", {
    day:"numeric",
    month:"long",
    year:"numeric"
  });
}

function buildPeriods(){
  const periods = [];

  for(let bienniumStart = 2027; bienniumStart <= 2033; bienniumStart += 2){
    for(let i = 0; i < 16; i++){
      const [main, small] = cycle[i];
      const [startMD, endMD] = periodTemplates[i];

      const yearOffset = i < 4 ? 0 : i < 12 ? 1 : 2;
      const startYear = bienniumStart + yearOffset;
      const endYear = startMD === "12-24" ? startYear + 1 : startYear;

      periods.push({
        main,
        small,
        start: makeDate(startYear, startMD),
        end: makeDate(endYear, endMD)
      });
    }
  }

  periods.unshift(
    {main:"B",small:"A4",start:new Date(2026,1,1),end:new Date(2026,2,9)},
    {main:"B",small:"A1",start:new Date(2026,2,10),end:new Date(2026,3,15)},
    {main:"A",small:"B2",start:new Date(2026,3,16),end:new Date(2026,4,23)},
    {main:"A",small:"B3",start:new Date(2026,4,24),end:new Date(2026,5,30)},
    {main:"B",small:"A2",start:new Date(2026,8,1),end:new Date(2026,9,8)},
    {main:"B",small:"A3",start:new Date(2026,9,9),end:new Date(2026,10,15)},
    {main:"A",small:"B4",start:new Date(2026,10,16),end:new Date(2026,11,23)},
    {main:"B",small:"A4",start:new Date(2026,11,24),end:new Date(2027,0,31)}
  );

  return periods.sort((a,b)=>a.start-b.start);
}

const allPeriods = buildPeriods();

function findPeriodByDate(date){
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return allPeriods.find(period => d >= period.start && d <= period.end) || null;
}

function sortRows(rows){
  return [...rows].sort((a,b)=>{
    let result;

    if(sortColumn === "spot"){
      result = Number(a[1]) - Number(b[1]);
    }else{
      result = cleanName(a[0]).localeCompare(cleanName(b[0]), "it", {
        sensitivity:"base"
      });
    }

    return sortDirection === "asc" ? result : -result;
  });
}

function table(rows){
  const sorted = sortRows(rows);

  const nameArrow = sortColumn === "name"
    ? (sortDirection === "asc" ? "▲" : "▼")
    : "↕";

  const spotArrow = sortColumn === "spot"
    ? (sortDirection === "asc" ? "▲" : "▼")
    : "↕";

  return `
    <table>
      <thead>
        <tr>
          <th>
            <button class="sort-btn" data-sort="name">
              Condomino ${nameArrow}
            </button>
          </th>

          <th class="posto">
            <button class="sort-btn" data-sort="spot">
              Posto ${spotArrow}
            </button>
          </th>
        </tr>
      </thead>

      <tbody>
        ${sorted.map(row => `
          <tr>
            <td>${cleanName(row[0])}</td>
            <td class="posto">
              <span class="badge">${row[1]}</span>
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function renderMap(mainRows, smallRows){
  const occupants = new Map();

  mainRows.forEach(row=>{
    occupants.set(Number(row[1]), {
      name: cleanName(row[0]),
      type: "main"
    });
  });

  smallRows.forEach(row=>{
    occupants.set(Number(row[1]), {
      name: cleanName(row[0]),
      type: "small"
    });
  });

  let html = "";

  for(let i = 1; i <= 37; i++){
    const occupant = occupants.get(i);

    html += `
      <div class="spot ${occupant ? `active-${occupant.type}` : "empty"}">
        <div class="spot-num">${i}</div>
        <div class="spot-name">${occupant ? occupant.name : ""}</div>
      </div>
    `;
  }

  byId("parkingMap").innerHTML = html;
}

function render(period){
  selectedPeriod = period;

  if(!period) return;

  const mainRows = period.main === "A" ? groupA : groupB;
  const smallRows = smallGroups[period.small];

  byId("mainTitle").textContent = `Gruppo principale ${period.main}`;
  byId("smallTitle").textContent = `Gruppetto ${period.small}`;

  const dateText = `${formatDate(period.start)} – ${formatDate(period.end)}`;

  byId("mainDates").textContent = dateText;
  byId("smallDates").textContent = dateText;
  byId("mapDates").textContent = dateText;

  byId("mainTable").innerHTML = table(mainRows);
  byId("smallTable").innerHTML = table(smallRows);

  renderMap(mainRows, smallRows);
}

function populateResidents(){
  const names = new Set();

  [...groupA, ...groupB, ...Object.values(smallGroups).flat()]
    .forEach(row => names.add(cleanName(row[0])));

  byId("residentSelect").innerHTML =
    `<option value="">Seleziona condomino</option>` +
    [...names]
      .sort((a,b)=>a.localeCompare(b,"it",{sensitivity:"base"}))
      .map(name=>`<option value="${name}">${name}</option>`)
      .join("");
}

function updateResidentResult(){
  const selected = byId("residentSelect").value;
  const dateValue = byId("residentDateInput").value;
  const result = byId("residentResult");

  if(!selected || !dateValue){
    result.className = "resident-result";
    result.textContent = "Seleziona una data e un condomino.";
    return;
  }

  const period = findPeriodByDate(new Date(dateValue + "T00:00:00"));

  if(!period){
    result.className = "resident-result out";
    result.textContent = "Nessun turno trovato.";
    return;
  }

  const target = normalizeName(selected);

  const mainRows = period.main === "A" ? groupA : groupB;
  const smallRows = smallGroups[period.small];

  const mainMatch = mainRows.find(row => normalizeName(row[0]) === target);
  const smallMatch = smallRows.find(row => normalizeName(row[0]) === target);

  if(smallMatch){
    result.className = "resident-result ok";
    result.textContent =
      `Il condomino ${cleanName(smallMatch[0])} ha il posto ${smallMatch[1]} nella data ${formatDate(new Date(dateValue))}.`;
  }else if(mainMatch){
    result.className = "resident-result ok";
    result.textContent =
      `Il condomino ${cleanName(mainMatch[0])} ha il posto ${mainMatch[1]} nella data ${formatDate(new Date(dateValue))}.`;
  }else{
    result.className = "resident-result out";
    result.textContent =
      `${selected} è fuori turno nella data ${formatDate(new Date(dateValue))}.`;
  }
}

function setupPanel(buttonId, panelId){
  byId(buttonId).addEventListener("click", ()=>{
    byId(panelId).classList.toggle("open");
  });
}

document.addEventListener("DOMContentLoaded", ()=>{

  populateResidents();

  const today = new Date();
  const currentPeriod =
    findPeriodByDate(today) ||
    allPeriods.find(p=>p.start>=today) ||
    allPeriods[0];

  render(currentPeriod);

  byId("homeDateInput").value = isoDate(today);
  byId("residentDateInput").value = isoDate(today);
  byId("mapDateInput").value = isoDate(today);

  setupPanel("openHomeDate","homeDatePanel");
  setupPanel("openResidentDate","residentDatePanel");
  setupPanel("openResidentSearch","residentSearchPanel");
  setupPanel("openMapDate","mapDatePanel");

  byId("homeDateInput").addEventListener("change", e=>{
    render(findPeriodByDate(new Date(e.target.value + "T00:00:00")));
  });

  byId("mapDateInput").addEventListener("change", e=>{
    render(findPeriodByDate(new Date(e.target.value + "T00:00:00")));
  });

  byId("residentDateInput").addEventListener("change", updateResidentResult);

  byId("residentSelect").addEventListener("change", updateResidentResult);

  byId("homeTodayBtn").addEventListener("click", ()=>{
    const now = new Date();
    byId("homeDateInput").value = isoDate(now);
    render(findPeriodByDate(now));
  });

  byId("mapTodayBtn").addEventListener("click", ()=>{
    const now = new Date();
    byId("mapDateInput").value = isoDate(now);
    render(findPeriodByDate(now));
  });

  byId("residentTodayBtn").addEventListener("click", ()=>{
    const now = new Date();
    byId("residentDateInput").value = isoDate(now);
    updateResidentResult();
  });

  document.addEventListener("click", event=>{
    const button = event.target.closest(".sort-btn");

    if(!button) return;

    const column = button.dataset.sort;

    if(sortColumn === column){
      sortDirection = sortDirection === "asc" ? "desc" : "asc";
    }else{
      sortColumn = column;
      sortDirection = "asc";
    }

    render(selectedPeriod);
  });

  document.querySelectorAll(".nav-btn").forEach(button=>{
    button.addEventListener("click", ()=>{

      document.querySelectorAll(".nav-btn").forEach(btn=>{
        btn.classList.remove("active");
      });

      button.classList.add("active");

      document.querySelectorAll(".page-section").forEach(section=>{
        section.classList.remove("active");
      });

      byId(button.dataset.section).classList.add("active");
    });
  });
});
