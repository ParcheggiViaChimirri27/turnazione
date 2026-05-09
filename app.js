const groupA = [
  ["TRAPASSO - AVERSA ENRICHETTA",34],
  ["PUCCIO ANNA MARIA LUISA",35],
  ["CARTOLANO-LOMBARDI",17],
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
  ["CAMPENNI POLITO",20],
  ["PISTOIA - GEMELLI",13],
  ["MILANO",29],
  ["RICCI DANTE",32],
  ["AGOSTO - AB. P.R.",28],
  ["JIRILLO LUIGI",21],
  ["STAIANO",22],
  ["DEMASI ANTONINO INT. 8",27],
  ["RICCI ANGELO",8],
  ["MARASCO",26],
  ["DEMASI - SCALA B PIANO 2",25],
  ["BOVIO",10],
  ["POLITI",23],
  ["MIRIGLIANI ROSA",24],
  ["CATRAMBONE",16]
];

const groupB = [
  ["AGOSTO VIOLETTA 3° P.",34],
  ["SANZI",36],
  ["SQUILLACIOTI",2],
  ["PILÒ",35],
  ["ELIA",22],
  ["AVERSA ENRICHETTA",29],
  ["DEMASI FRANCESCO",21],
  ["BARBUTO",30],
  ["D' AGOSTINO",31],
  ["RICCELLI",26],
  ["AVERSA - GEMELLI",28],
  ["MANNO",24],
  ["VARANO",27],
  ["LUCENTE",25],
  ["COLACINO",23],
  ["CIANFLONE",32],
  ["MANCUSO",20],
  ["MIRIGLIANI RAFFAELE",33],
  ["AGOSTO - SEMINT.",17],
  ["EREDI PUCCIO ANGELA",9],
  ["EREDI SPADARO",19],
  ["SELVAGGIO",37],
  ["JIRILLO QUINTINO",18],
  ["RUSSO",11],
  ["PISTOIA FRANCESCO",15],
  ["DEMASI INT.6",12],
  ["MARASCO [C]",8],
  ["CATRAMBONE",16]
];

const smallGroups = {
  A1:[
    ["TRAPASSO-AVERSA ENRICHETTA",5],
    ["PUCCIO MARISA",10],
    ["CARTOLANO-LOMBARDI",14],
    ["LEONE",3],
    ["LE PIANE",13],
    ["MAZZUCA",4],
    ["ALESSIO-CAVARRETTA",1]
  ],
  A2:[
    ["SALERNI",10],
    ["SANDULLI",1],
    ["PRESTA",5],
    ["ROMITA",14],
    ["SANZI",13],
    ["MANGONE",4],
    ["CAMPENNI - POLITO",3]
  ],
  A3:[
    ["PISTOIA - GEMELLI",13],
    ["MILANO",14],
    ["RICCI DANTE",1],
    ["AGOSTO - PIANO RIALZ.",10],
    ["JIRILLO LUIGI",5],
    ["STAIANO",4],
    ["DEMASI ANTONINO INT.8",3]
  ],
  A4:[
    ["RICCI ANGELO",1],
    ["MARASCO B",5],
    ["DEMASI SCALA B PIANO 2",4],
    ["BOVIO",14],
    ["POLITI",13],
    ["MIRIGLIANI ROSA",10],
    ["VERALDI",3]
  ],
  B1:[
    ["AGOSTO AB 3° PIANO",5],
    ["SANZI",1],
    ["SQUILLACIOTI",3],
    ["PILÒ",9],
    ["ELIA",2],
    ["AVERSA ENRICHETTA",4],
    ["DE MASI",15]
  ],
  B2:[
    ["BARBUTO",1],
    ["D' AGOSTINO",15],
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
    ["DEMASI INT.6",5],
    ["MARASCO C",9],
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
    .replaceAll("[", " ")
    .replaceAll("]", " ")
    .replace(/\s+/g, " ")
    .trim();
}

function makeDate(year, mmdd){
  const [month, day] = mmdd.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function dateFromInput(value){
  return new Date(value + "T00:00:00");
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

function isSameDate(a,b){
  return a.getFullYear() === b.getFullYear() &&
         a.getMonth() === b.getMonth() &&
         a.getDate() === b.getDate();
}

function dateLabel(date){
  return isSameDate(date, new Date())
    ? `oggi ${formatDate(date)}`
    : `nella data ${formatDate(date)}`;
}

function getCycleStartYear(date){
  const year = date.getFullYear();
  const afterSeptember = date.getMonth() >= 8;

  let candidate = afterSeptember ? year : year - 1;

  if(candidate % 2 === 0){
    candidate -= 1;
  }

  return candidate;
}

function buildPeriodsForCycle(cycleStartYear){
  const periods = [];

  for(let i = 0; i < 16; i++){
    const [main, small] = cycle[i];
    const [startMD, endMD] = periodTemplates[i];

    const yearOffset = i < 4 ? 0 : i < 12 ? 1 : 2;
    const startYear = cycleStartYear + yearOffset;
    const endYear = startMD === "12-24" ? startYear + 1 : startYear;

    periods.push({
      main,
      small,
      start: makeDate(startYear, startMD),
      end: makeDate(endYear, endMD),
      cycleStartYear
    });
  }

  return periods;
}

function findPeriodByDate(date){
  const cycleStartYear = getCycleStartYear(date);

  const possiblePeriods = [
    ...buildPeriodsForCycle(cycleStartYear - 2),
    ...buildPeriodsForCycle(cycleStartYear),
    ...buildPeriodsForCycle(cycleStartYear + 2)
  ];

  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  return possiblePeriods.find(period => d >= period.start && d <= period.end) || null;
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

function buildSpotRights(){
  const rights = new Map();

  for(let i = 1; i <= 37; i++){
    rights.set(i, {
      main: [],
      small: []
    });
  }

  function addUnique(list, name){
    const cleaned = cleanName(name);
    if(!list.some(existing => normalizeName(existing) === normalizeName(cleaned))){
      list.push(cleaned);
    }
  }

  [...groupA, ...groupB].forEach(row=>{
    const spot = Number(row[1]);
    if(!rights.has(spot)){
      rights.set(spot, {main:[], small:[]});
    }

    addUnique(rights.get(spot).main, row[0]);
  });

  Object.values(smallGroups).flat().forEach(row=>{
    const spot = Number(row[1]);
    if(!rights.has(spot)){
      rights.set(spot, {main:[], small:[]});
    }

    addUnique(rights.get(spot).small, row[0]);
  });

  return rights;
}

const spotRights = buildSpotRights();

function listNames(names){
  if(!names || names.length === 0){
    return `<span>-</span>`;
  }

  return names
    .map(name => `<span>• ${name}</span>`)
    .join("");
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
    const rights = spotRights.get(i) || {main:[], small:[]};

    html += `
      <div class="spot-wrap" data-spot="${i}">
        <div class="spot-inner">
          <div class="spot-front">
            <div class="spot ${occupant ? `active-${occupant.type}` : "empty"}">
              <div class="spot-num">${i}</div>
              <div class="spot-name">${occupant ? occupant.name : ""}</div>
            </div>
          </div>

          <div class="spot-back">
            <div class="back-title">Posto ${i}</div>

            <div class="back-group">
              <strong>Turno</strong>
              ${listNames(rights.main)}
            </div>

            <div class="back-group">
              <strong>Turnetto</strong>
              ${listNames(rights.small)}
            </div>
          </div>
        </div>
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

function findPermanentMainSpot(selectedName){
  if(!selectedName) return null;

  const target = normalizeName(selectedName);

  const matchA = groupA.find(row => normalizeName(row[0]) === target);
  if(matchA){
    return { group:"A", spot:matchA[1], name:cleanName(matchA[0]) };
  }

  const matchB = groupB.find(row => normalizeName(row[0]) === target);
  if(matchB){
    return { group:"B", spot:matchB[1], name:cleanName(matchB[0]) };
  }

  return null;
}

function findPermanentSmallSpot(selectedName){
  if(!selectedName) return null;

  const target = normalizeName(selectedName);

  for(const groupName of Object.keys(smallGroups)){
    const match = smallGroups[groupName].find(row => normalizeName(row[0]) === target);

    if(match){
      return { group:groupName, spot:match[1], name:cleanName(match[0]) };
    }
  }

  return null;
}

function resetResidentBoxes(){
  const mainBox = byId("residentMainSpot");
  const smallBox = byId("residentSmallSpot");

  mainBox.textContent = "-";
  smallBox.textContent = "-";

  mainBox.parentElement.classList.remove("active-turn");
  smallBox.parentElement.classList.remove("active-turn");
}

function highlightResidentBox(type){
  const mainBox = byId("residentMainSpot");
  const smallBox = byId("residentSmallSpot");

  if(type === "main"){
    mainBox.parentElement.classList.add("active-turn");
  }

  if(type === "small"){
    smallBox.parentElement.classList.add("active-turn");
  }
}

function updateResidentFixedInfo(selectedName, activeType){
  resetResidentBoxes();

  if(!selectedName) return;

  const permanentMain = findPermanentMainSpot(selectedName);
  const permanentSmall = findPermanentSmallSpot(selectedName);

  byId("residentMainSpot").textContent = permanentMain ? permanentMain.spot : "-";
  byId("residentSmallSpot").textContent = permanentSmall ? permanentSmall.spot : "-";

  if(activeType){
    highlightResidentBox(activeType);
  }
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

  if(!selected){
    updateResidentFixedInfo("", null);
    result.className = "resident-result";
    result.textContent = "Seleziona un condomino.";
    return;
  }

  if(!dateValue){
    const today = new Date();
    byId("residentDateInput").value = isoDate(today);
  }

  const selectedDate = dateFromInput(byId("residentDateInput").value);
  const period = findPeriodByDate(selectedDate);

  if(!period){
    updateResidentFixedInfo(selected, null);
    result.className = "resident-result out";
    result.textContent = `Nessun turno trovato ${dateLabel(selectedDate)}.`;
    return;
  }

  const target = normalizeName(selected);

  const mainRows = period.main === "A" ? groupA : groupB;
  const smallRows = smallGroups[period.small];

  const mainMatch = mainRows.find(row => normalizeName(row[0]) === target);
  const smallMatch = smallRows.find(row => normalizeName(row[0]) === target);

  if(smallMatch){
    updateResidentFixedInfo(selected, "small");
    result.className = "resident-result ok";
    result.textContent =
      `Il condomino ${cleanName(smallMatch[0])} ${dateLabel(selectedDate)} è in turnetto e ha diritto al posto ${smallMatch[1]}.`;
  }else if(mainMatch){
    updateResidentFixedInfo(selected, "main");
    result.className = "resident-result ok";
    result.textContent =
      `Il condomino ${cleanName(mainMatch[0])} ${dateLabel(selectedDate)} è in turno principale e ha diritto al posto ${mainMatch[1]}.`;
  }else{
    updateResidentFixedInfo(selected, null);
    result.className = "resident-result out";
    result.textContent =
      `${selected} ${dateLabel(selectedDate)} è fuori turno.`;
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
  const currentPeriod = findPeriodByDate(today);

  render(currentPeriod);

  byId("homeDateInput").value = isoDate(today);
  byId("residentDateInput").value = isoDate(today);
  byId("mapDateInput").value = isoDate(today);

  setupPanel("openHomeDate","homeDatePanel");
  setupPanel("openResidentDate","residentDatePanel");
  setupPanel("openResidentSearch","residentSearchPanel");
  setupPanel("openMapDate","mapDatePanel");

  byId("homeDateInput").addEventListener("change", e=>{
    render(findPeriodByDate(dateFromInput(e.target.value)));
  });

  byId("mapDateInput").addEventListener("change", e=>{
    render(findPeriodByDate(dateFromInput(e.target.value)));
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

    if(button){
      const column = button.dataset.sort;

      if(sortColumn === column){
        sortDirection = sortDirection === "asc" ? "desc" : "asc";
      }else{
        sortColumn = column;
        sortDirection = "asc";
      }

      render(selectedPeriod);
      return;
    }

    const spotCard = event.target.closest(".spot-wrap");

    if(spotCard){
      spotCard.classList.toggle("flipped");
    }
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

  updateResidentResult();
});
