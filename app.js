const groupA = [
  ["TRAPASSO - AVERSA ENRICHETTA",34],
  ["PUCCIO MARISA",35],
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
  ["AGOSTO - PIANO RIALZ.",28],
  ["JIRILLO LUIGI",21],
  ["STAIANO",22],
  ["DEMASI ANTONINO INT. 8",27],
  ["RICCI ANGELO",8],
  ["MARASCO [B]",26],
  ["DEMASI - SCALA B PIANO 2",25],
  ["BOVIO",10],
  ["POLITI",23],
  ["MIRIGLIANI ROSA",24],
  ["CATRAMBONE",16]
];

const groupB = [
  ["AGOSTO VIOLETTA 3° P.",34],
  ["SANZI",36],
  ["SQUILLACIOTI - VERALDI",2],
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
  ["AGOSTO SEMINT.",17],
  ["EREDI PUCCIO ANGELA",9],
  ["EREDI SPADARO",19],
  ["SELVAGGIO",37],
  ["JIRILLO QUINTINO",18],
  ["RUSSO",11],
  ["PISTOIA FRANCESCO",15],
  ["DEMASI INT. 6",12],
  ["MARASCO [C]",8],
  ["CATRAMBONE",16]
];

const smallGroups = {
  A1:[
    ["TRAPASSO - AVERSA ENRICHETTA",5],
    ["PUCCIO MARISA",10],
    ["CARTOLANO - LOMBARDI",14],
    ["LEONE",3],
    ["LE PIANE",13],
    ["MAZZUCA PATRIZIA",4],
    ["ALESSIO CAVARRETTA",1]
  ],
  A2:[
    ["SALERNI",10],
    ["SANDULLI",1],
    ["PRESTA",5],
    ["ROMITI - MONTILLA",14],
    ["SANZI",13],
    ["MANGONE",4],
    ["CAMPENNÌ - POLITO",3]
  ],
  A3:[
    ["PISTOIA - GEMELLI",13],
    ["MILANO",14],
    ["RICCI DANTE",1],
    ["AGOSTO - PIANO RIALZ.",10],
    ["JIRILLO LUIGI",5],
    ["STAIANO",4],
    ["DEMASI ANTONINO INT. 8",3]
  ],
  A4:[
    ["RICCI ANGELO",1],
    ["MARASCO [B]",5],
    ["DEMASI - SCALA B PIANO 2",4],
    ["BOVIO",14],
    ["POLITI",13],
    ["MIRIGLIANI ROSA",10],
    ["PORTIERE",3]
  ],
  B1:[
    ["AGOSTO VIOLETTA 3° P.",5],
    ["SANZI",1],
    ["SQUILLACIOTI - VERALDI",3],
    ["PILÒ",9],
    ["ELIA",2],
    ["AVERSA ENRICHETTA",4],
    ["DEMASI FRANCESCO",15]
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
    ["AGOSTO SEMINT.",2],
    ["EREDI PUCCIO ANGELA",5],
    ["EREDI SPADARO",4]
  ],
  B4:[
    ["SELVAGGIO",15],
    ["JIRILLO QUINTINO",3],
    ["RUSSO",1],
    ["PISTOIA FRANCESCO",4],
    ["DEMASI INT. 6",5],
    ["MARASCO [C]",9],
    ["PORTIERE",2]
  ]
};

const cycle = [
  ["A","B3"], ["A","B4"], ["B","A3"], ["A","B1"],
  ["B","A4"], ["B","A1"], ["A","B2"], ["A","B3"],
  ["B","A2"], ["B","A3"], ["A","B4"], ["B","A4"],
  ["A","B1"], ["A","B2"], ["B","A1"], ["B","A2"]
];

const periodTemplates = [
  ["09-01","10-08"], ["10-09","11-15"], ["11-16","12-23"], ["12-24","01-31"],
  ["02-01","03-09"], ["03-10","04-15"], ["04-16","05-23"], ["05-24","06-30"],
  ["09-01","10-08"], ["10-09","11-15"], ["11-16","12-23"], ["12-24","01-31"],
  ["02-01","03-09"], ["03-10","04-15"], ["04-16","05-23"], ["05-24","06-30"]
];

const realSpotPositions = [
  [1,15.43,13.93],
  [2,14.94,19.00],
  [3,14.45,24.20],
  [4,14.16,29.20],
  [5,13.77,34.30],
  [8,11.62,52.50],
  [9,11.52,57.72],
  [10,11.90,77.71],
  [11,25.27,87.17],
  [12,25.27,91.60],
  [13,33.58,91.60],
  [14,33.58,87.17],
  [15,47.00,82.00],
  [16,47.00,76.20],
  [17,46.47,64.77],
  [18,46.47,59.54],
  [19,46.47,54.51],
  [20,46.47,49.71],
  [21,46.07,39.70],
  [22,46.07,35.09],
  [23,46.07,30.00],
  [24,46.07,25.15],
  [25,46.07,20.85],
  [26,62.83,25.55],
  [27,62.83,30.00],
  [28,63.83,35.09],
  [29,63.83,39.70],
  [30,63.83,44.65],
  [31,64.00,49.71],
  [32,64.84,54.51],
  [33,64.84,59.54],
  [34,64.84,64.77],
  [35,65.80,76.20],
  [36,65.90,82.00],
  [37,66.00,88.05]
];



function buildSpotRights(){
  const rights = new Map();

  function add(spot, name){
    const key = Number(spot);
    if(!rights.has(key)) rights.set(key, []);
    const clean = cleanName(name);
    if(!rights.get(key).some(existing => normalizeName(existing) === normalizeName(clean))){
      rights.get(key).push(clean);
    }
  }

  [...groupA, ...groupB].forEach(([name, spot]) => add(spot, name));
  Object.values(smallGroups).flat().forEach(([name, spot]) => add(spot, name));

  for(const names of rights.values()){
    names.sort((a,b)=>a.localeCompare(b,"it",{sensitivity:"base"}));
  }

  return rights;
}

const spotRights = buildSpotRights();


let selectedPeriod = null;
let selectedDate = new Date();
let sortColumn = "name";
let sortDirection = "asc";
let homePicker = null;
let residentPicker = null;

const byId = id => document.getElementById(id);

function cleanName(name){
  return String(name).trim().replace(/^>\s*/, "");
}

function escapeHtml(value){
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
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

function parseItalianDateStrict(value){
  const raw = String(value || "").trim();

  if(!raw){
    return { date:null, error:"INSERISCI UNA DATA." };
  }

  const match = raw.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);

  if(!match){
    return {
      date:null,
      error:"DATA NON VALIDA: USA IL FORMATO GG/MM/AAAA, PER ESEMPIO 24/05/2026."
    };
  }

  const day = Number(match[1]);
  const month = Number(match[2]);
  const year = Number(match[3]);

  if(month < 1 || month > 12){
    return { date:null, error:"DATA NON VALIDA: IL MESE DEVE ESSERE COMPRESO TRA 1 E 12." };
  }

  if(day < 1 || day > 31){
    return { date:null, error:"DATA NON VALIDA: IL GIORNO NON È CORRETTO." };
  }

  const date = new Date(year, month - 1, day);

  if(
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ){
    return { date:null, error:"DATA NON VALIDA: QUESTO GIORNO NON ESISTE NEL CALENDARIO." };
  }

  return { date, error:null };
}

function dateFromInput(value){
  const parsed = parseItalianDateStrict(value);
  return parsed.date || new Date(NaN);
}

function italianInputDate(date){
  if(window.flatpickr){
    return flatpickr.formatDate(date, "d/m/Y");
  }
  return String(date.getDate()).padStart(2,"0") + "/" + String(date.getMonth()+1).padStart(2,"0") + "/" + date.getFullYear();
}

function formatDate(date){
  return date.toLocaleDateString("it-IT", { day:"numeric", month:"long", year:"numeric" });
}

function isSameDate(a,b){
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function dateLabel(date){
  return isSameDate(date, new Date()) ? `oggi ${formatDate(date)}` : `nella data ${formatDate(date)}`;
}

function isFreeParkingPeriod(date){
  const month = date.getMonth() + 1;
  return month === 7 || month === 8;
}

function freeParkingText(year){
  return `Dal 1 luglio al 31 agosto ${year} il parcheggio è libero: ogni condomino può parcheggiare dove vuole.`;
}

function skipFreeForward(date){
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  while(isFreeParkingPeriod(d)) d.setDate(d.getDate() + 1);
  return d;
}

function skipFreeBackward(date){
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  while(isFreeParkingPeriod(d)) d.setDate(d.getDate() - 1);
  return d;
}

function getCycleStartYear(date){
  const year = date.getFullYear();
  const afterSeptember = date.getMonth() >= 8;
  let candidate = afterSeptember ? year : year - 1;
  if(candidate % 2 === 0) candidate -= 1;
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
    periods.push({ main, small, start:makeDate(startYear,startMD), end:makeDate(endYear,endMD), cycleStartYear });
  }
  return periods;
}

function findPeriodByDate(date){
  if(isFreeParkingPeriod(date)) return null;
  const cycleStartYear = getCycleStartYear(date);
  const possiblePeriods = [
    ...buildPeriodsForCycle(cycleStartYear - 2),
    ...buildPeriodsForCycle(cycleStartYear),
    ...buildPeriodsForCycle(cycleStartYear + 2)
  ];
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return possiblePeriods.find(period => d >= period.start && d <= period.end) || null;
}

function periodDateText(period){
  return `${formatDate(period.start)} – ${formatDate(period.end)}`;
}

function buildOccupants(mainRows, smallRows){
  const occupants = new Map();
  mainRows.forEach(row=> occupants.set(Number(row[1]), { name:cleanName(row[0]), type:"main" }));
  smallRows.forEach(row=> occupants.set(Number(row[1]), { name:cleanName(row[0]), type:"small" }));
  return occupants;
}

function getRowsForPeriod(period){
  if(!period) return { mainRows:[], smallRows:[] };
  return {
    mainRows: period.main === "A" ? groupA : groupB,
    smallRows: smallGroups[period.small] || []
  };
}

function getCurrentOccupants(){
  if(!selectedPeriod) return new Map();
  const {mainRows, smallRows} = getRowsForPeriod(selectedPeriod);
  return buildOccupants(mainRows, smallRows);
}

function findPermanentMainSpot(selectedName){
  if(!selectedName) return null;
  const target = normalizeName(selectedName);
  const matchA = groupA.find(row => normalizeName(row[0]) === target);
  if(matchA) return { group:"A", spot:matchA[1], name:cleanName(matchA[0]) };
  const matchB = groupB.find(row => normalizeName(row[0]) === target);
  if(matchB) return { group:"B", spot:matchB[1], name:cleanName(matchB[0]) };
  return null;
}

function findPermanentSmallSpot(selectedName){
  if(!selectedName) return null;
  const target = normalizeName(selectedName);
  for(const groupName of Object.keys(smallGroups)){
    const match = smallGroups[groupName].find(row => normalizeName(row[0]) === target);
    if(match) return { group:groupName, spot:match[1], name:cleanName(match[0]) };
  }
  return null;
}

function getAllResidents(){
  const names = new Set();
  [...groupA, ...groupB, ...Object.values(smallGroups).flat()].forEach(row => names.add(cleanName(row[0])));
  return [...names].sort((a,b)=>a.localeCompare(b,"it",{sensitivity:"base"}));
}

function getResidentActiveInfo(name){
  if(!selectedPeriod) return { activeType:null, activeSpot:null, activeName:cleanName(name) };
  const target = normalizeName(name);
  const {mainRows, smallRows} = getRowsForPeriod(selectedPeriod);
  const mainMatch = mainRows.find(row => normalizeName(row[0]) === target);
  const smallMatch = smallRows.find(row => normalizeName(row[0]) === target);
  if(smallMatch) return { activeType:"small", activeSpot:Number(smallMatch[1]), activeName:cleanName(smallMatch[0]) };
  if(mainMatch) return { activeType:"main", activeSpot:Number(mainMatch[1]), activeName:cleanName(mainMatch[0]) };
  return { activeType:null, activeSpot:null, activeName:cleanName(name) };
}

function populateResidents(){
  const residents = getAllResidents();
  const select = byId("residentSelect");

  if(select){
    select.innerHTML = `<option value="">Seleziona condomino</option>` +
      residents.map(name=>`<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join("");
  }
}

function closeResidentSuggestions(){
  const box = byId("residentSearchResults");
  if(box){
    box.hidden = true;
    box.innerHTML = "";
  }
}

function renderResidentSuggestions(query = ""){
  const box = byId("residentSearchResults");
  if(!box) return;

  const normalizedQuery = normalizeName(query);
  const residents = getAllResidents()
    .filter(name => !normalizedQuery || normalizeName(name).includes(normalizedQuery));

  if(residents.length === 0){
    box.innerHTML = `<div class="search-empty">Nessun condomino trovato</div>`;
    box.hidden = false;
    return;
  }

  box.innerHTML = residents.map(name=>{
    const active = getResidentActiveInfo(name);
    const status = isFreeParkingPeriod(selectedDate)
      ? "Parcheggio libero"
      : active.activeType === "main"
        ? `Dentro adesso · turno posto ${active.activeSpot}`
        : active.activeType === "small"
          ? `Dentro adesso · turnetto posto ${active.activeSpot}`
          : "Fuori turno in questa data";

    return `
      <button class="search-result-item" type="button" data-resident-choice="${escapeHtml(name)}">
        <strong>${escapeHtml(name)}</strong>
        <span>${escapeHtml(status)}</span>
      </button>
    `;
  }).join("");

  box.hidden = false;
}

function selectResidentFromSearch(name){
  const input = byId("residentSearchInput");
  const select = byId("residentSelect");

  if(input) input.value = name;
  if(select) select.value = name;

  closeResidentSuggestions();
  updateResidentResult();
}

function renderRealMap(){
  const realParkingMap = byId("realParkingMap");
  if(!realParkingMap) return;

  const occupants = getCurrentOccupants();
  const isFree = isFreeParkingPeriod(selectedDate);
  let html = "";

  realSpotPositions.forEach(([num,x,y])=>{
    const occupant = occupants.get(num);
    const name = isFree ? "Parcheggio libero" : occupant ? occupant.name : "Fuori turno / libero";
    const typeLabel = isFree ? "Luglio e agosto" : occupant?.type === "small" ? "Turnetto" : occupant?.type === "main" ? "Turno principale" : "Non assegnato";
    html += `
      <button
        class="real-spot-button ${occupant ? `active-${occupant.type}` : "empty"}"
        style="left:${x}%; top:${y}%;"
        type="button"
        data-spot="${num}"
        data-name="${escapeHtml(name)}"
        data-type="${escapeHtml(typeLabel)}"
        aria-label="Posto ${num}: ${escapeHtml(name)}"
      ></button>
    `;
  });
  html += `<div id="realSpotPopup" class="real-spot-popup" aria-live="polite"></div>`;
  realParkingMap.innerHTML = html;
}

function closeRealSpotPopup(){
  const popup = byId("realSpotPopup");
  if(popup) popup.classList.remove("open");
  document.querySelectorAll(".real-spot-button.selected").forEach(button=>button.classList.remove("selected"));
}

function openRealSpotPopup(button){
  const popup = byId("realSpotPopup");
  const realMap = byId("realMap");
  if(!popup || !realMap) return;

  if(button.classList.contains("selected") && popup.classList.contains("open")){
    closeRealSpotPopup();
    return;
  }

  document.querySelectorAll(".real-spot-button.selected").forEach(item=>item.classList.remove("selected"));
  button.classList.add("selected");

  popup.innerHTML = `<strong>Posto ${escapeHtml(button.dataset.spot)}</strong><span>${escapeHtml(button.dataset.name)}</span><small>${escapeHtml(button.dataset.type)}</small>`;
  popup.classList.remove("side-popup");

  const mapRect = realMap.getBoundingClientRect();
  const buttonRect = button.getBoundingClientRect();
  const left = ((buttonRect.left + buttonRect.width / 2 - mapRect.left) / mapRect.width) * 100;
  const topCenter = ((buttonRect.top + buttonRect.height / 2 - mapRect.top) / mapRect.height) * 100;
  const top = ((buttonRect.top - mapRect.top) / mapRect.height) * 100;
  const sidePopupSpots = [1,2,3,4,5,8,9,10,25];
  const spotNum = Number(button.dataset.spot);

  if(sidePopupSpots.includes(spotNum)){
    popup.classList.add("side-popup");
    popup.style.left = `${Math.min(left + 5.5, 82)}%`;
    popup.style.top = `${Math.min(Math.max(topCenter, 8), 92)}%`;
  }else{
    popup.style.left = `${Math.min(Math.max(left, 14), 86)}%`;
    popup.style.top = `${Math.max(top - 1.5, 6)}%`;
  }

  popup.classList.add("open");
}

function renderParkingCards(){
  const map = byId("parkingMap");
  if(!map) return;

  const occupants = getCurrentOccupants();
  const isFree = isFreeParkingPeriod(selectedDate);
  let html = "";

  for(let i = 1; i <= 37; i++){
    const occupant = occupants.get(i);
    const name = isFree ? "Parcheggio libero" : occupant ? occupant.name : "";
    html += `
      <button class="spot-card-button ${occupant ? `active-${occupant.type}` : "empty"}" type="button" data-show-map-spot="${i}" data-spot-name="${escapeHtml(name || 'Posizione sulla mappa')}">
        <span class="spot-num">${i}</span>
        <span class="spot-name">${escapeHtml(name)}</span>
      </button>
    `;
  }
  map.innerHTML = html;
}

function renderSpotRightsList(){
  const container = byId("spotRightsList");
  if(!container) return;

  const occupants = getCurrentOccupants();
  let html = "";

  for(let spot = 1; spot <= 37; spot++){
    const names = spotRights.get(spot) || [];
    const occupant = occupants.get(spot);
    const activeName = occupant ? normalizeName(occupant.name) : "";
    const activeType = occupant ? occupant.type : "";

    const namesHtml = names.length
      ? names.map(name => {
          const isActive = activeName && normalizeName(name) === activeName;
          const cls = isActive ? `spot-right-name active-${activeType}` : "spot-right-name inactive";
          return `<span class="${cls}">${escapeHtml(name)}</span>`;
        }).join("")
      : `<span class="spot-right-name inactive">NESSUN AVENTE DIRITTO</span>`;

    html += `
      <div class="spot-right-row">
        <div class="spot-right-num">${spot}</div>
        <div class="spot-right-names">${namesHtml}</div>
      </div>
    `;
  }

  container.innerHTML = html;
}

function renderResidentList(){
  const container = byId("residentList");
  if(!container) return;

  const isFree = isFreeParkingPeriod(selectedDate);
  const residents = getAllResidents();

  let html = `
    <div class="resident-row resident-row-head">
      <div>Condomino</div>
      <div>Turno</div>
      <div>Turnetto</div>
    </div>
  `;

  residents.forEach(name=>{
    const main = findPermanentMainSpot(name);
    const small = findPermanentSmallSpot(name);
    const active = isFree ? {activeType:null, activeSpot:null} : getResidentActiveInfo(name);
    const rowClass = active.activeType ? `resident-active-${active.activeType}` : "resident-inactive";

    html += `
      <div class="resident-row ${rowClass}" data-resident-name="${escapeHtml(name)}">
        <div class="resident-name-cell">${escapeHtml(name)}</div>
        <div>
          ${main ? `<button type="button" class="resident-spot-chip ${active.activeType === 'main' ? 'chip-main active' : 'muted'}" data-show-map-spot="${main.spot}" data-spot-name="${escapeHtml(name)}">${main.spot}</button>` : `<span class="resident-spot-chip muted">-</span>`}
        </div>
        <div>
          ${small ? `<button type="button" class="resident-spot-chip ${active.activeType === 'small' ? 'chip-small active' : 'muted'}" data-show-map-spot="${small.spot}" data-spot-name="${escapeHtml(name)}">${small.spot}</button>` : `<span class="resident-spot-chip muted">-</span>`}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  const dateLabel = isFree ? freeParkingText(selectedDate.getFullYear()) : selectedPeriod ? periodDateText(selectedPeriod) : "Nessun periodo trovato";
  const residentListDates = byId("residentListDates");
  if(residentListDates) residentListDates.textContent = dateLabel;
}

function getSelectedResidentName(){
  const searchInput = byId("residentSearchInput");
  if(searchInput) return searchInput.value.trim();
  return byId("residentSelect")?.value || "";
}

function updateResidentResult(){
  const selected = getSelectedResidentName();
  const result = byId("residentResult");
  if(!result) return;

  document.querySelectorAll(".resident-row.selected-resident").forEach(row=>row.classList.remove("selected-resident"));

  if(!selected){
    result.hidden = true;
    result.className = "resident-result compact-result";
    result.textContent = "";
    return;
  }

  result.hidden = false;

  const row = [...document.querySelectorAll(".resident-row[data-resident-name]")].find(item=>normalizeName(item.dataset.residentName) === normalizeName(selected));
  if(row){
    row.classList.add("selected-resident");
  }

  if(isFreeParkingPeriod(selectedDate)){
    result.className = "resident-result out";
    result.textContent = `${selected}: ${freeParkingText(selectedDate.getFullYear())}`;
    return;
  }

  const active = getResidentActiveInfo(selected);
  if(active.activeType === "main"){
    result.className = "resident-result ok";
    result.textContent = `${selected} ${dateLabel(selectedDate)} è in turno principale e ha diritto al posto ${active.activeSpot}.`;
  }else if(active.activeType === "small"){
    result.className = "resident-result ok";
    result.textContent = `${selected} ${dateLabel(selectedDate)} è in turnetto e ha diritto al posto ${active.activeSpot}.`;
  }else{
    result.className = "resident-result out";
    result.textContent = `${selected} ${dateLabel(selectedDate)} è fuori turno.`;
  }
}

function ensureSpotMapModal(){
  let modal = byId("spotMapModal");
  if(modal) return modal;

  modal = document.createElement("div");
  modal.id = "spotMapModal";
  modal.className = "spot-map-modal";
  modal.innerHTML = `
    <div class="spot-map-dialog" role="dialog" aria-modal="true" aria-labelledby="spotMapTitle">
      <div class="spot-map-head">
        <div>
          <div id="spotMapTitle" class="spot-map-title">Posto</div>
          <div id="spotMapSubtitle" class="spot-map-subtitle"></div>
        </div>
        <button id="spotMapClose" class="spot-map-close" type="button" aria-label="Chiudi">×</button>
      </div>
      <div class="spot-map-body">
        <div class="spot-map-preview">
          <div id="spotMapHighlight" class="spot-map-highlight"></div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  byId("spotMapClose").addEventListener("click", closeSpotMapModal);
  modal.addEventListener("click", event=>{ if(event.target === modal) closeSpotMapModal(); });
  return modal;
}

function closeSpotMapModal(){
  const modal = byId("spotMapModal");
  if(modal) modal.classList.remove("open");
}

function openSpotMapModal(spot, name){
  const modal = ensureSpotMapModal();
  const position = realSpotPositions.find(item => Number(item[0]) === Number(spot));
  if(!position) return;
  const [,x,y] = position;
  byId("spotMapTitle").textContent = `Posto ${spot}`;
  byId("spotMapSubtitle").textContent = name || "Posizione sulla mappa reale";
  const highlight = byId("spotMapHighlight");
  highlight.style.left = `${x}%`;
  highlight.style.top = `${y}%`;
  modal.classList.add("open");
}

function renderByDate(date, showFreePopup = false){
  selectedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  selectedPeriod = findPeriodByDate(selectedDate);
  const isFree = isFreeParkingPeriod(selectedDate);
  const freeBanner = byId("freeParkingBanner");

  if(isFree){
    byId("mapDates").textContent = "Parcheggio libero";
    if(freeBanner){
      freeBanner.hidden = false;
      freeBanner.textContent = freeParkingText(selectedDate.getFullYear());
    }
    if(showFreePopup) openFreeParkingModal(selectedDate);
  }else{
    const text = selectedPeriod ? periodDateText(selectedPeriod) : "Nessun periodo trovato";
    byId("mapDates").textContent = text;
    if(freeBanner) freeBanner.hidden = true;
  }

  closeRealSpotPopup();
  renderRealMap();
  renderParkingCards();
  renderResidentList();
  renderSpotRightsList();
  updateResidentResult();

  const suggestions = byId("residentSearchResults");
  const input = byId("residentSearchInput");
  if(suggestions && input && !suggestions.hidden){
    renderResidentSuggestions(input.value);
  }
}

function ensureFreeParkingModal(){
  let modal = byId("freeParkingModal");
  if(modal) return modal;
  modal = document.createElement("div");
  modal.id = "freeParkingModal";
  modal.className = "free-parking-modal";
  modal.innerHTML = `<div class="free-parking-dialog" role="dialog" aria-modal="true"><h3>Parcheggio libero</h3><p id="freeParkingModalText"></p><button id="freeParkingModalClose" type="button">Ho capito</button></div>`;
  document.body.appendChild(modal);
  byId("freeParkingModalClose").addEventListener("click", closeFreeParkingModal);
  modal.addEventListener("click", event=>{ if(event.target === modal) closeFreeParkingModal(); });
  return modal;
}

function openFreeParkingModal(date){
  const modal = ensureFreeParkingModal();
  byId("freeParkingModalText").textContent = freeParkingText(date.getFullYear());
  modal.classList.add("open");
}

function closeFreeParkingModal(){
  const modal = byId("freeParkingModal");
  if(modal) modal.classList.remove("open");
}

function setAllPickers(date, trigger = false){
  if(homePicker) homePicker.setDate(date, trigger);
  if(residentPicker) residentPicker.setDate(date, trigger);
}

function setDateAndRender(date, showFreePopup = false){
  setAllPickers(date, false);
  renderByDate(date, showFreePopup);
}

function goToPeriod(direction){
  let target;
  if(selectedPeriod){
    target = direction === "next" ? new Date(selectedPeriod.end) : new Date(selectedPeriod.start);
    target.setDate(target.getDate() + (direction === "next" ? 1 : -1));
  }else{
    target = new Date(selectedDate);
    target.setDate(target.getDate() + (direction === "next" ? 1 : -1));
  }
  target = direction === "next" ? skipFreeForward(target) : skipFreeBackward(target);
  setDateAndRender(target, false);
}

function setupPanel(buttonId, panelId){
  const button = byId(buttonId);
  const panel = byId(panelId);
  if(!button || !panel) return;
  button.addEventListener("click", ()=>panel.classList.toggle("open"));
}

document.addEventListener("DOMContentLoaded", ()=>{
  populateResidents();
  renderSpotRightsList();
  const today = new Date();

  function showDateError(message){
    window.alert(message);
  }

  function applyDateFromInput(inputId, picker){
    const input = byId(inputId);
    if(!input) return false;

    const parsed = parseItalianDateStrict(input.value);

    if(parsed.error){
      showDateError(parsed.error);
      input.focus();
      return false;
    }

    setDateAndRender(parsed.date, isFreeParkingPeriod(parsed.date));
    if(picker) picker.close();
    return true;
  }

  function addCalendarConfirmButton(picker, inputId){
    if(!picker || !picker.calendarContainer) return;

    let footer = picker.calendarContainer.querySelector(".calendar-confirm-footer");

    if(!footer){
      footer = document.createElement("div");
      footer.className = "calendar-confirm-footer";
      picker.calendarContainer.appendChild(footer);
    }

    footer.innerHTML = "";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "calendar-confirm-btn";
    button.textContent = "CERCA DATA";

    button.addEventListener("click", ()=>{
      applyDateFromInput(inputId, picker);
    });

    footer.appendChild(button);
  }

  function setupDateInputToggle(inputId, getPicker){
    const input = byId(inputId);
    if(!input) return;

    input.addEventListener("click", event=>{
      const picker = getPicker();
      if(!picker) return;

      event.preventDefault();

      if(picker.isOpen){
        picker.close();
      }else{
        picker.open();
        input.focus();
        input.select();
      }
    });

    input.addEventListener("keydown", event=>{
      if(event.key === "Enter"){
        event.preventDefault();
        applyDateFromInput(inputId, getPicker());
      }
    });
  }

  homePicker = flatpickr("#homeDateInput",{
    locale:"it",
    dateFormat:"d/m/Y",
    defaultDate:today,
    allowInput:true,
    disableMobile:true,
    clickOpens:false,
    closeOnSelect:false,
    onReady:function(){
      addCalendarConfirmButton(homePicker, "homeDateInput");
    },
    onOpen:function(){
      addCalendarConfirmButton(homePicker, "homeDateInput");
    },
    onChange:function(){
      addCalendarConfirmButton(homePicker, "homeDateInput");
    }
  });

  residentPicker = flatpickr("#residentDateInput",{
    locale:"it",
    dateFormat:"d/m/Y",
    defaultDate:today,
    allowInput:true,
    disableMobile:true,
    clickOpens:false,
    closeOnSelect:false,
    onReady:function(){
      addCalendarConfirmButton(residentPicker, "residentDateInput");
    },
    onOpen:function(){
      addCalendarConfirmButton(residentPicker, "residentDateInput");
    },
    onChange:function(){
      addCalendarConfirmButton(residentPicker, "residentDateInput");
    }
  });

  setupDateInputToggle("homeDateInput", ()=>homePicker);
  setupDateInputToggle("residentDateInput", ()=>residentPicker);

  byId("homeTodayBtn").addEventListener("click", ()=>setDateAndRender(new Date(), false));
  byId("residentTodayBtn").addEventListener("click", ()=>setDateAndRender(new Date(), false));

  ["homeNextPeriodBtn", "residentNextPeriodBtn"].forEach(id=>{
    const button = byId(id);
    if(button) button.addEventListener("click", ()=>goToPeriod("next"));
  });

  ["homePrevPeriodBtn", "residentPrevPeriodBtn"].forEach(id=>{
    const button = byId(id);
    if(button) button.addEventListener("click", ()=>goToPeriod("prev"));
  });

  const residentSelect = byId("residentSelect");
  if(residentSelect){
    residentSelect.addEventListener("change", event=>{
      const searchInput = byId("residentSearchInput");
      if(searchInput) searchInput.value = event.target.value;
      updateResidentResult();
    });
  }

  const residentSearchInput = byId("residentSearchInput");
  if(residentSearchInput){
    residentSearchInput.addEventListener("click", event=>{
      event.preventDefault();
      const box = byId("residentSearchResults");

      if(box && !box.hidden){
        closeResidentSuggestions();
        return;
      }

      renderResidentSuggestions("");
      residentSearchInput.focus();
      residentSearchInput.select();
    });

    residentSearchInput.addEventListener("input", ()=>{
      const select = byId("residentSelect");
      if(select) select.value = residentSearchInput.value;
      renderResidentSuggestions(residentSearchInput.value);
      updateResidentResult();
    });

    residentSearchInput.addEventListener("change", ()=>{
      const select = byId("residentSelect");
      if(select) select.value = residentSearchInput.value;
      updateResidentResult();
    });
  }

  document.addEventListener("click", event=>{
    const residentChoice = event.target.closest("[data-resident-choice]");
    if(residentChoice){
      selectResidentFromSearch(residentChoice.dataset.residentChoice);
      return;
    }

    if(!event.target.closest(".resident-search-wrap")){
      closeResidentSuggestions();
    }

    const realSpotButton = event.target.closest(".real-spot-button");
    if(realSpotButton){
      openRealSpotPopup(realSpotButton);
      return;
    }

    const mapSpotButton = event.target.closest("[data-show-map-spot]");
    if(mapSpotButton){
      openSpotMapModal(mapSpotButton.dataset.showMapSpot, mapSpotButton.dataset.spotName);
      return;
    }

    if(!event.target.closest(".real-spot-popup") && !event.target.closest(".real-map")){
      closeRealSpotPopup();
    }
  });

  document.addEventListener("keydown", event=>{
    if(event.key === "Escape"){
      closeRealSpotPopup();
      closeSpotMapModal();
      closeFreeParkingModal();
      closeResidentSuggestions();
      if(homePicker) homePicker.close();
      if(residentPicker) residentPicker.close();
    }
  });

  document.querySelectorAll(".nav-btn").forEach(button=>{
    button.addEventListener("click", ()=>{
      document.querySelectorAll(".nav-btn").forEach(btn=>btn.classList.remove("active"));
      button.classList.add("active");
      document.querySelectorAll(".page-section").forEach(section=>section.classList.remove("active"));
      byId(button.dataset.section).classList.add("active");

      window.scrollTo({ top:0, behavior:"smooth" });
      closeResidentSuggestions();
      if(homePicker) homePicker.close();
      if(residentPicker) residentPicker.close();
    });
  });

  setDateAndRender(today, false);
});
