
const DATA = {"groupA": [["TRAPASSO - AVERSA ENRICHETTA", 34], ["PUCCIO MARISA", 35], ["CARTOLANO - LOMBARDI", 17], ["LEONE", 30], ["LE PIANE", 37], ["MAZZUCA PATRIZIA", 31], ["ALESSIO CAVARRETTA", 33], ["SALERNI", 12], ["SANDULLI", 11], ["PRESTA", 18], ["ROMITI - MONTILLA", 19], ["SANZI", 36], ["MANGONE", 14], ["CAMPENNÌ - POLITO", 20], ["PISTOIA - GEMELLI", 13], ["MILANO", 29], ["RICCI DANTE", 32], ["AGOSTO - PIANO RIALZ.", 28], ["JIRILLO LUIGI", 21], ["STAIANO", 22], ["DEMASI ANTONINO INT. 8", 27], ["RICCI ANGELO", 8], ["MARASCO [B]", 26], ["DEMASI - SCALA B PIANO 2", 25], ["BOVIO", 10], ["POLITI", 23], ["MIRIGLIANI ROSA", 24], ["CATRAMBONE", 16]], "groupB": [["AGOSTO VIOLETTA 3° P.", 34], ["SANZI", 36], ["SQUILLACIOTI - VERALDI", 2], ["PILÒ", 35], ["ELIA", 22], ["AVERSA ENRICHETTA", 29], ["DEMASI FRANCESCO", 21], ["BARBUTO", 30], ["D'AGOSTINO", 31], ["RICCELLI", 26], ["AVERSA - GEMELLI", 28], ["MANNO", 24], ["VARANO", 27], ["LUCENTE", 25], ["COLACINO", 23], ["CIANFLONE", 32], ["MANCUSO", 20], ["MIRIGLIANI RAFFAELE", 33], ["AGOSTO SEMINT.", 17], ["EREDI PUCCIO ANGELA", 9], ["EREDI SPADARO", 19], ["SELVAGGIO", 37], ["JIRILLO QUINTINO", 18], ["RUSSO", 11], ["PISTOIA FRANCESCO", 15], ["DEMASI INT. 6", 12], ["MARASCO [C]", 8], ["CATRAMBONE", 16]], "smallGroups": {"A1": [["TRAPASSO - AVERSA ENRICHETTA", 5], ["PUCCIO MARISA", 10], ["CARTOLANO - LOMBARDI", 14], ["LEONE", 3], ["LE PIANE", 13], ["MAZZUCA PATRIZIA", 4], ["ALESSIO CAVARRETTA", 1]], "A2": [["SALERNI", 10], ["SANDULLI", 1], ["PRESTA", 5], ["ROMITI - MONTILLA", 14], ["SANZI", 13], ["MANGONE", 4], ["CAMPENNÌ - POLITO", 3]], "A3": [["PISTOIA - GEMELLI", 13], ["MILANO", 14], ["RICCI DANTE", 1], ["AGOSTO - PIANO RIALZ.", 10], ["JIRILLO LUIGI", 5], ["STAIANO", 4], ["DEMASI ANTONINO INT. 8", 3]], "A4": [["RICCI ANGELO", 1], ["MARASCO [B]", 5], ["DEMASI - SCALA B PIANO 2", 4], ["BOVIO", 14], ["POLITI", 13], ["MIRIGLIANI ROSA", 10], ["PORTIERE", 3]], "B1": [["AGOSTO VIOLETTA 3° P.", 5], ["SANZI", 1], ["SQUILLACIOTI - VERALDI", 3], ["PILÒ", 9], ["ELIA", 2], ["AVERSA ENRICHETTA", 4], ["DEMASI FRANCESCO", 15]], "B2": [["BARBUTO", 1], ["D'AGOSTINO", 15], ["RICCELLI", 2], ["AVERSA - GEMELLI", 4], ["MANNO", 3], ["VARANO", 9], ["LUCENTE", 5]], "B3": [["COLACINO", 15], ["CIANFLONE", 9], ["MANCUSO", 1], ["MIRIGLIANI RAFFAELE", 3], ["AGOSTO SEMINT.", 2], ["EREDI PUCCIO ANGELA", 5], ["EREDI SPADARO", 4]], "B4": [["SELVAGGIO", 15], ["JIRILLO QUINTINO", 3], ["RUSSO", 1], ["PISTOIA FRANCESCO", 4], ["DEMASI INT. 6", 5], ["MARASCO [C]", 9], ["PORTIERE", 2]]}, "cycle": [["A", "B3"], ["A", "B4"], ["B", "A3"], ["A", "B1"], ["B", "A4"], ["B", "A1"], ["A", "B2"], ["A", "B3"], ["B", "A2"], ["B", "A3"], ["A", "B4"], ["B", "A4"], ["A", "B1"], ["A", "B2"], ["B", "A1"], ["B", "A2"]], "periodTemplates": [["09-01", "10-08"], ["10-09", "11-15"], ["11-16", "12-23"], ["12-24", "01-31"], ["02-01", "03-09"], ["03-10", "04-15"], ["04-16", "05-23"], ["05-24", "06-30"], ["09-01", "10-08"], ["10-09", "11-15"], ["11-16", "12-23"], ["12-24", "01-31"], ["02-01", "03-09"], ["03-10", "04-15"], ["04-16", "05-23"], ["05-24", "06-30"]], "realSpotPositions": [[1, 15.43, 13.93], [2, 14.94, 19.0], [3, 14.45, 24.2], [4, 14.16, 29.2], [5, 13.77, 34.3], [8, 11.62, 52.5], [9, 11.52, 57.72], [10, 11.9, 77.71], [13, 25.27, 87.17], [11, 25.27, 91.6], [12, 33.58, 91.6], [14, 33.58, 87.17], [15, 47.0, 82.0], [16, 47.0, 76.2], [17, 46.47, 64.77], [18, 46.47, 59.54], [19, 46.47, 54.51], [20, 46.47, 49.71], [21, 46.07, 39.7], [22, 46.07, 35.09], [23, 46.07, 30.0], [24, 46.07, 25.15], [25, 46.07, 20.85], [26, 62.83, 25.55], [27, 62.83, 30.0], [28, 63.83, 35.09], [29, 63.83, 39.7], [30, 63.83, 44.65], [31, 64.0, 49.71], [32, 64.84, 54.51], [33, 64.84, 59.54], [34, 64.84, 64.77], [35, 65.8, 76.2], [36, 65.9, 82.0], [37, 66.0, 88.05]]};
const byId = id => document.getElementById(id);
const SPOTS = Array.from({length:37},(_,i)=>i+1).filter(n=>n!==6 && n!==7);
const RESIDENT_SCALES = {
  "agosto piano rialz": "SCALA D",
  "agosto semint": "SCALA D",
  "agosto violetta 3° p": "SCALA D",
  "alessio cavarretta": "SCALA D",
  "aversa gemelli": "SCALA C",
  "aversa enrichetta": "SCALA C",
  "barbuto": "SCALA C",
  "bovio": "SCALA A",
  "campennì polito": "SCALA D",
  "cartolano lombardi": "SCALA D",
  "catrambone": "SCALA A",
  "cianflone": "SCALA C",
  "colacino": "SCALA C",
  "d agostino": "SCALA C",
  "demasi scala b piano 2": "SCALA B",
  "demasi antonino int 8": "SCALA A",
  "demasi francesco": "SCALA B",
  "demasi int 6": "SCALA A",
  "elia": "SCALA B",
  "eredi puccio angela": "SCALA B",
  "eredi spadaro": "SCALA B",
  "jirillo luigi": "SCALA B",
  "jirillo quintino": "SCALA B",
  "le piane": "SCALA D",
  "leone": "SCALA D",
  "lucente": "SCALA C",
  "mancuso": "SCALA B",
  "mangone": "SCALA A",
  "manno": "SCALA C",
  "marasco b": "SCALA B",
  "marasco c": "SCALA C",
  "mazzuca patrizia": "SCALA D",
  "milano": "SCALA D",
  "mirigliani raffaele": "SCALA A",
  "mirigliani rosa": "SCALA C",
  "pilò": "SCALA A",
  "pistoia gemelli": "SCALA B",
  "pistoia francesco": "SCALA B",
  "politi": "SCALA B",
  "portiere": "SCALA D",
  "presta": "SCALA A",
  "puccio marisa": "SCALA D",
  "riccelli": "SCALA C",
  "ricci angelo": "SCALA B",
  "ricci dante": "SCALA A",
  "romiti montilla": "SCALA A",
  "russo": "SCALA A",
  "salerni": "SCALA B",
  "sandulli": "SCALA D",
  "sanzi": "SCALA A",
  "selvaggio": "SCALA C",
  "squillacioti veraldi": "SCALA C",
  "staiano": "SCALA B",
  "trapasso aversa enrichetta": "SCALA D",
  "varano": "SCALA C"
};

/* Reset all'avvio:
   - conserva SOLO i preferiti
   - cancella cookie/sessionStorage/localStorage non essenziali
   - evita che una vecchia sessione riapra una pagina diversa dalla home
*/
function resetVolatileStateOnOpen(){
  const keepFavorites = localStorage.getItem('parkingFavorites');
  const keepFavoriteResidents = localStorage.getItem('parkingFavoriteResidents') || keepFavorites;

  try{ sessionStorage.clear(); }catch(_){}

  try{
    localStorage.clear();
    if(keepFavorites) localStorage.setItem('parkingFavorites', keepFavorites);
    if(keepFavoriteResidents) localStorage.setItem('parkingFavoriteResidents', keepFavoriteResidents);
  }catch(_){}

  try{
    document.cookie.split(';').forEach(cookie=>{
      const name = cookie.split('=')[0].trim();
      if(!name) return;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=${location.pathname}`;
    });
  }catch(_){}
}

resetVolatileStateOnOpen();

let selectedDate = stripTime(new Date());
let selectedPeriod = null;
let currentView = 'map';
let favorites = loadFavorites();
let activeMapContext = null;

function stripTime(date){ return new Date(date.getFullYear(), date.getMonth(), date.getDate()); }
function escapeHtml(value){ return String(value ?? '').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;'); }
function cleanName(name){ return String(name || '').trim().replace(/^>\s*/, ''); }
function normalizeName(name){ return cleanName(name).toLowerCase().replace(/[-.'"\[\]]/g,' ').replace(/\s+/g,' ').trim(); }
function getResidentScale(name){ return RESIDENT_SCALES[normalizeName(name)] || 'SCALA A'; }
function toInputDate(date){ return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`; }
function fromInputDate(value){ const [y,m,d] = String(value).split('-').map(Number); return new Date(y,m-1,d); }
function fmt(date){ return date.toLocaleDateString('it-IT',{day:'2-digit',month:'2-digit',year:'numeric'}); }
function fullFmt(date){
  const months=['GEN','FEB','MAR','APR','MAG','GIU','LUG','AGO','SET','OTT','NOV','DIC'];
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}
function daysBetween(a,b){ return Math.max(0, Math.ceil((stripTime(b)-stripTime(a))/86400000)); }
function isSameDay(a,b){ a=stripTime(a); b=stripTime(b); return a.getTime()===b.getTime(); }
function makeDate(year, mmdd){ const [m,d]=mmdd.split('-').map(Number); return new Date(year,m-1,d); }
function isFreeParkingPeriod(date){ const m = date.getMonth()+1; return m===7 || m===8; }
function freeParkingText(year){ return `Dal 1 luglio al 31 agosto ${year} il parcheggio è libero: ogni condomino può parcheggiare dove vuole.`; }
function skipFree(date, dir){ const d=stripTime(date); while(isFreeParkingPeriod(d)) d.setDate(d.getDate()+dir); return d; }
function getCycleStartYear(date){ let candidate = date.getMonth()>=8 ? date.getFullYear() : date.getFullYear()-1; if(candidate % 2 === 0) candidate -= 1; return candidate; }
function buildPeriodsForCycle(cycleStartYear){
  return DATA.cycle.map(([main,small],i)=>{
    const [startMD,endMD] = DATA.periodTemplates[i];
    const yearOffset = i < 4 ? 0 : i < 12 ? 1 : 2;
    const startYear = cycleStartYear + yearOffset;
    const endYear = startMD === '12-24' ? startYear + 1 : startYear;
    return {main, small, start:makeDate(startYear,startMD), end:makeDate(endYear,endMD), cycleStartYear, index:i};
  });
}
function findPeriodByDate(date){
  if(isFreeParkingPeriod(date)) return null;
  const key = toInputDate(date);
  if(_periodCache.has(key)) return _periodCache.get(key);
  const start = getCycleStartYear(date);
  const result = [...buildPeriodsForCycle(start-2),...buildPeriodsForCycle(start),...buildPeriodsForCycle(start+2)].find(p => date >= p.start && date <= p.end) || null;
  _periodCache.set(key, result);
  return result;
}
function getNextPeriodStart(date){
  const period = findPeriodByDate(date);
  if(period){ const d = new Date(period.end); d.setDate(d.getDate()+1); return skipFree(d,1); }
  const d = new Date(date); d.setDate(d.getDate()+1); return skipFree(d,1);
}
function getNextTurnBoundary(date){
  const today = stripTime(date);
  if(isFreeParkingPeriod(today)) return skipFree(today, 1);
  const period = findPeriodByDate(today);
  if(period){
    const d = new Date(period.end);
    d.setDate(d.getDate()+1);
    return d;
  }
  return getNextPeriodStart(today);
}
function periodDateText(period){ return period ? `${fullFmt(period.start)} – ${fullFmt(period.end)}` : 'Nessun periodo trovato'; }
function rowsForPeriod(period){
  if(!period) return {mainRows:[], smallRows:[]};
  return { mainRows: period.main === 'A' ? DATA.groupA : DATA.groupB, smallRows: DATA.smallGroups[period.small] || [] };
}
function buildOccupants(mainRows, smallRows){
  const map = new Map();
  mainRows.forEach(([name,spot]) => map.set(Number(spot), {name:cleanName(name), type:'main'}));
  smallRows.forEach(([name,spot]) => map.set(Number(spot), {name:cleanName(name), type:'small'}));
  return map;
}
function getCurrentOccupants(){
  if(_cachedOccupants) return _cachedOccupants;
  const rows = rowsForPeriod(selectedPeriod);
  _cachedOccupants = isFreeParkingPeriod(selectedDate) ? new Map() : buildOccupants(rows.mainRows, rows.smallRows);
  return _cachedOccupants;
}
function buildSpotRights(){
  const rights = new Map();
  const add = (spot,name) => { const key=Number(spot); if(!rights.has(key)) rights.set(key, []); const clean=cleanName(name); if(!rights.get(key).some(n=>normalizeName(n)===normalizeName(clean))) rights.get(key).push(clean); };
  [...DATA.groupA, ...DATA.groupB, ...Object.values(DATA.smallGroups).flat()].forEach(([name,spot]) => add(spot,name));
  rights.forEach(names => names.sort((a,b)=>a.localeCompare(b,'it',{sensitivity:'base'})));
  return rights;
}
const spotRights = buildSpotRights();

// ── CACHE: lista condomini (dati statici, calcolata una sola volta) ──
const ALL_RESIDENTS = [...new Set([...DATA.groupA, ...DATA.groupB, ...Object.values(DATA.smallGroups).flat()].map(([name])=>cleanName(name)))]
  .sort((a,b)=>a.localeCompare(b,'it',{sensitivity:'base'}));
function getAllResidents(){ return ALL_RESIDENTS; }

// ── CACHE: occupanti del periodo corrente (invalidata ad ogni cambio data) ──
let _cachedOccupants = null;

// ── CACHE: periodi per data (invalidata ad ogni cambio anno ciclico) ──
const _periodCache = new Map();
// ── CACHE: posti permanenti per residente (dati statici) ──
const _permMainSpotCache = new Map();
const _permSmallSpotCache = new Map();
function findPermanentMainSpot(name){
  const t = normalizeName(name);
  if(_permMainSpotCache.has(t)) return _permMainSpotCache.get(t);
  const row = [...DATA.groupA,...DATA.groupB].find(([n])=>normalizeName(n)===t);
  const result = row ? Number(row[1]) : null;
  _permMainSpotCache.set(t, result);
  return result;
}
function findPermanentSmallSpot(name){
  const t = normalizeName(name);
  if(_permSmallSpotCache.has(t)) return _permSmallSpotCache.get(t);
  let result = null;
  for(const rows of Object.values(DATA.smallGroups)){ const row=rows.find(([n])=>normalizeName(n)===t); if(row){ result=Number(row[1]); break; } }
  _permSmallSpotCache.set(t, result);
  return result;
}
function getResidentActiveInfo(name){
  const target = normalizeName(name);
  const {mainRows,smallRows} = rowsForPeriod(selectedPeriod);
  const small = smallRows.find(([n]) => normalizeName(n) === target);
  const main = mainRows.find(([n]) => normalizeName(n) === target);
  if(small) return {type:'small', spot:Number(small[1])};
  if(main) return {type:'main', spot:Number(main[1])};
  return {type:null, spot:null};
}
const _initialsCache = new Map();
function initials(name){
  if(_initialsCache.has(name)) return _initialsCache.get(name);
  const clean = cleanName(name)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\[[^\]]*\]/g, '')
    .toUpperCase();

  const words = clean
    .replace(/[^A-Z]+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  let result;
  if(!words.length) result = '?';
  else if(words.length === 1) result = words[0].slice(0, 2);
  else result = (words[0][0] || '') + (words[1][0] || '');
  _initialsCache.set(name, result);
  return result;
}
function residentHue(name){
  const text = normalizeName(name) || 'condomino';
  let hash = 0;
  for(let i=0;i<text.length;i++) hash = (hash * 31 + text.charCodeAt(i)) >>> 0;
  return hash % 360;
}
const _colorStyleCache = new Map();
function residentColorStyle(name){
  if(_colorStyleCache.has(name)) return _colorStyleCache.get(name);
  const h = residentHue(name);
  const style = `--resident-color:hsl(${h} 72% 42%);--resident-soft:hsl(${h} 82% 94%);--resident-border:hsl(${h} 72% 84%);`;
  _colorStyleCache.set(name, style);
  return style;
}
function normalizeFavoriteName(name){ return cleanName(name); }
function loadFavorites(){
  try{
    const raw = JSON.parse(localStorage.getItem('parkingFavorites') || localStorage.getItem('parkingFavoriteResidents') || '[]');
    return raw.map(item => {
      if(typeof item === 'number'){
        const current = buildOccupants(rowsForPeriod(findPeriodByDate(stripTime(new Date()))).mainRows, rowsForPeriod(findPeriodByDate(stripTime(new Date()))).smallRows).get(item);
        return current?.name || null;
      }
      return normalizeFavoriteName(item);
    }).filter(Boolean).filter((name, idx, arr) => arr.findIndex(n => normalizeName(n) === normalizeName(name)) === idx).slice(0,4);
  }catch{return []}
}
function saveFavorites(){ localStorage.setItem('parkingFavorites', JSON.stringify(favorites)); localStorage.setItem('parkingFavoriteResidents', JSON.stringify(favorites)); }
function isFavoriteResident(name){ return !!name && favorites.some(n=>normalizeName(n)===normalizeName(name)); }
function toggleFavoriteResident(name){
  name = normalizeFavoriteName(name);
  if(!name || ['libero','parcheggio libero'].includes(normalizeName(name))) return;
  if(isFavoriteResident(name)) favorites = favorites.filter(n=>normalizeName(n)!==normalizeName(name));
  else {
    if(favorites.length >= 4){ alert('Puoi salvare massimo 4 condomini preferiti.'); return; }
    favorites.push(name);
  }
  saveFavorites(); renderAllDynamic();
}
function occupantLabel(spot){
  if(isFreeParkingPeriod(selectedDate)) return {name:'Parcheggio libero', type:'free', label:'Libero'};
  const o = getCurrentOccupants().get(Number(spot));
  if(!o) return {name:'Libero', type:'free', label:'Libero'};
  return {...o, label: o.type === 'small' ? 'Turnetto' : 'Turno'};
}
function updateCountdowns(){
  const today = stripTime(new Date());
  const next = getNextTurnBoundary(today);
  const days = daysBetween(today, next);
  const text = `${days} ${days === 1 ? 'giorno' : 'giorni'}`;
  ['mainCountdown','smallCountdown'].forEach(id=>{ const el=byId(id); if(el) el.textContent=text; });
  ['mainCountdownDate','smallCountdownDate'].forEach(id=>{ const el=byId(id); if(el) el.textContent=fullFmt(next); });
}
function allPeriodsAround(date){
  const start = getCycleStartYear(date);
  return [...buildPeriodsForCycle(start-2), ...buildPeriodsForCycle(start), ...buildPeriodsForCycle(start+2), ...buildPeriodsForCycle(start+4)];
}
function residentInfoForPeriod(name, period){
  if(!period) return {type:null, spot:null};
  const target = normalizeName(name);
  const {mainRows, smallRows} = rowsForPeriod(period);
  const small = smallRows.find(([n]) => normalizeName(n) === target);
  const main = mainRows.find(([n]) => normalizeName(n) === target);
  if(small) return {type:'small', spot:Number(small[1]), period};
  if(main) return {type:'main', spot:Number(main[1]), period};
  return {type:null, spot:null, period};
}
function nextResidentParking(name, fromDate){
  const start = stripTime(fromDate);
  const periods = allPeriodsAround(start).filter(p => p.start >= start || (start >= p.start && start <= p.end));
  for(const period of periods){
    const info = residentInfoForPeriod(name, period);
    if(info.type){
      const waitFrom = start <= period.start ? period.start : getNextPeriodStart(start);
      return {...info, days:daysBetween(start, waitFrom), start:period.start, end:period.end};
    }
  }
  return null;
}
function nextPeriodResidentInfo(name, fromPeriod){
  if(!fromPeriod) return null;
  const d = new Date(fromPeriod.end); d.setDate(d.getDate()+1);
  const nextStart = skipFree(d,1);
  const nextPeriod = findPeriodByDate(nextStart);
  if(!nextPeriod) return null;
  return {...residentInfoForPeriod(name, nextPeriod), start:nextPeriod.start, end:nextPeriod.end};
}
function typeLabel(type){ return type === 'small' ? 'turnetto' : type === 'main' ? 'turno' : 'fuori'; }
function statusClass(type){ return type === 'main' ? 'status-main' : type === 'small' ? 'status-small' : 'status-out'; }
function statusTextForDate(name, date){
  const period = findPeriodByDate(date);
  const info = isFreeParkingPeriod(date) ? {type:null, spot:null, free:true} : residentInfoForPeriod(name, period);
  return {info, period};
}
function statusInfoText(info){
  if(info.free) return {label:'PARCHEGGIO LIBERO', spot:'-', cls:'status-free'};
  if(info.type) return {label:`${typeLabel(info.type).toUpperCase()}`, spot:`${info.spot}`, cls:statusClass(info.type)};
  return {label:'FUORI', spot:'—', cls:'status-out'};
}
function nextResidentParkingAfter(name, fromDate){
  const start = stripTime(fromDate);
  const d = new Date(start); d.setDate(d.getDate()+1);
  const periods = allPeriodsAround(start).filter(p => p.end >= d);
  for(const period of periods){
    const info = residentInfoForPeriod(name, period);
    if(info.type){
      return {...info, days:daysBetween(start, period.start <= start ? start : period.start), start:period.start, end:period.end};
    }
  }
  return null;
}
function nextResidentChangeNotice(name, fromDate){
  const start = stripTime(fromDate);
  const currentPeriod = findPeriodByDate(start);
  const current = isFreeParkingPeriod(start) ? {type:'free', spot:null} : residentInfoForPeriod(name, currentPeriod);

  function firstActiveFrom(date){
    const from = stripTime(date);
    const periods = allPeriodsAround(from).filter(p => p.end >= from);
    for(const period of periods){
      const info = residentInfoForPeriod(name, period);
      if(info.type){
        const effectiveStart = period.start < from ? from : period.start;
        return {...info, start:period.start, end:period.end, days:daysBetween(start, effectiveStart)};
      }
    }
    return null;
  }

  function noFutureMessage(){
    return {
      cls:'status-out',
      html:'<strong class="remember-title">RICORDA</strong><p>NON HO TROVATO UN PROSSIMO POSTO NEI PERIODI CARICATI</p>'
    };
  }

  if(!current.type){
    const nextActive = firstActiveFrom(start);
    if(!nextActive) return noFutureMessage();
    return {
      cls:statusClass(nextActive.type),
      html:`<strong class="remember-title">RICORDA</strong><p>PURTROPPO DOVRAI ASPETTARE FINO AL <b class="date-highlight">${fullFmt(nextActive.start)}</b></p><p>PER AVERE DI NUOVO IL POSTO <b class="spot-highlight">${nextActive.spot}</b> NEL CORTILE</p>`
    };
  }

  let nextStart = currentPeriod ? new Date(currentPeriod.end) : new Date(start);
  nextStart.setDate(nextStart.getDate() + 1);
  nextStart = skipFree(nextStart, 1);
  const nextPeriod = findPeriodByDate(nextStart);
  const days = daysBetween(start, nextStart);
  const dayWord = days === 1 ? 'GIORNO' : 'GIORNI';

  if(!nextPeriod){
    const nextActive = firstActiveFrom(nextStart);
    if(!nextActive) return noFutureMessage();
    return {
      cls:statusClass(nextActive.type),
      html:`<strong class="remember-title">RICORDA</strong><p>IL TUO TURNO CAMBIA TRA <b class="days-highlight">${days}</b> ${dayWord}</p><p>IL PROSSIMO PARCHEGGIO SARÀ IL POSTO <b class="spot-highlight">${nextActive.spot}</b></p>`
    };
  }

  const nextInfo = residentInfoForPeriod(name, nextPeriod);
  if(nextInfo.type){
    return {
      cls:statusClass(nextInfo.type),
      html:`<strong class="remember-title">RICORDA</strong><p>IL TUO TURNO CAMBIA TRA <b class="days-highlight">${days}</b> ${dayWord}</p><p>IL PROSSIMO PARCHEGGIO SARÀ IL POSTO <b class="spot-highlight">${nextInfo.spot}</b></p>`
    };
  }

  const nextActive = firstActiveFrom(new Date(nextPeriod.end.getFullYear(), nextPeriod.end.getMonth(), nextPeriod.end.getDate()+1));
  if(nextActive){
    return {
      cls:'status-out',
      html:`<strong class="remember-title">RICORDA</strong><p>IL TUO TURNO CAMBIA TRA <b class="days-highlight">${days}</b> ${dayWord}</p><p>NEL PROSSIMO TURNO SARAI FUORI</p><p>AVRAI DI NUOVO IL POSTO <b class="spot-highlight">${nextActive.spot}</b> DAL <b class="date-highlight">${fullFmt(nextActive.start)}</b></p>`
    };
  }
  return {
    cls:'status-out',
    html:`<strong class="remember-title">RICORDA</strong><p>IL TUO TURNO CAMBIA TRA <b class="days-highlight">${days}</b> ${dayWord}</p><p>NEL PROSSIMO TURNO SARAI FUORI</p>`
  };
}
function residentStoryHtml(name){
  const picked = stripTime(selectedDate);
  const main = findPermanentMainSpot(name);
  const small = findPermanentSmallSpot(name);
  const scale = getResidentScale(name);
  const pickedStatus = statusTextForDate(name, picked);
  const pickedText = statusInfoText(pickedStatus.info);
  const nextNotice = nextResidentChangeNotice(name, stripTime(new Date()));

  const centralNumber = pickedStatus.info.type ? pickedStatus.info.spot : '—';
  const centralLabel = pickedStatus.info.free ? 'LIBERO' : pickedStatus.info.type ? typeLabel(pickedStatus.info.type).toUpperCase() : 'FUORI';

  function infoTile(kind, label, value){
    return `<div class="resident-info-tile ${kind}"><span>${label}</span><strong>${value}</strong></div>`;
  }

  return `<div class="resident-pop-header clean" style="${residentColorStyle(name)}">
    <span class="avatar resident-large" style="${residentColorStyle(name)}">${escapeHtml(initials(name).toUpperCase())}</span>
    <div><strong>${escapeHtml(name).toUpperCase()}</strong><small>${escapeHtml(scale)}</small></div>
    <button class="resident-inline-close" type="button" data-close-resident aria-label="Chiudi">×</button>
  </div>

  <div class="resident-focus-card ${pickedText.cls}">
    <span>${fullFmt(picked).toUpperCase()}</span>
    <div class="selected-status">
      <strong class="parking-status-label">${centralLabel}</strong>
      <span class="parking-number-circle" ${pickedStatus.info.type ? `data-open-current-spot="${centralNumber}"` : ''}>${centralNumber}</span>
    </div>
  </div>

  <div class="resident-dashboard">
    ${infoTile('scale', 'SCALA', scale)}
    ${infoTile('main', 'TURNO', main || '-')}
    ${infoTile('small', 'TURNETTO', small || '-')}
  </div>

  <div class="story-line story-alert ${nextNotice.cls}">${nextNotice.html}</div>`;
}
function openResidentModal(name){
  const modal = byId('residentModal'); if(!modal) return;
  byId('residentModalTitle').textContent = name;
  byId('residentModalSubtitle').textContent = 'Situazione parcheggio';
  byId('residentModalBody').innerHTML = residentStoryHtml(name);
  modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.classList.add('modal-open');
}
function closeResidentModal(){ const modal=byId('residentModal'); modal?.classList.remove('open'); modal?.setAttribute('aria-hidden','true'); document.body.classList.remove('modal-open'); const input=byId('residentSearchInput'); if(input) input.value=''; closeResidentSuggestions(); renderResidents(); }
function renderFavorites(){
  const list = byId('favoritesList'); if(!list) return;
  if(!favorites.length){ list.innerHTML = '<div class="favorite-empty">Aggiungi una stellina su un condomino per ritrovarlo qui.</div>'; return; }
  list.innerHTML = favorites.map(name=>{
    const active = isFreeParkingPeriod(selectedDate) ? {type:null,spot:null} : getResidentActiveInfo(name);
    const status = active.type ? typeLabel(active.type).toUpperCase() : 'FUORI';
    const statusKind = active.type === 'main' ? 'main' : active.type === 'small' ? 'small' : 'out';
    const shownSpot = active.type ? String(active.spot) : '—';
    return `<article class="favorite-card ${statusKind}" data-resident="${escapeHtml(name)}" style="${residentColorStyle(name)}">
      <button class="fav-remove" type="button" data-fav-remove-name="${escapeHtml(name)}" aria-label="Rimuovi preferito">×</button>
      <div class="fav-person">
        <span class="fav-initials">${escapeHtml(initials(name).toUpperCase())}</span>
        <strong>${escapeHtml(name)}</strong>
      </div>
      <div class="fav-status">
        <span class="fav-status-circle">${escapeHtml(shownSpot)}</span>
        <small>${escapeHtml(status)}</small>
      </div>
    </article>`;
  }).join('');
}
function renderParkingGrid(){
  const grid = byId('parkingGrid'); if(!grid) return;
  grid.innerHTML = SPOTS.map(spot=>{
    const o = occupantLabel(spot);
    return `<button class="spot-card ${o.type}" type="button" data-open-spot="${spot}">
      <span class="spot-number">${spot}</span><span class="spot-name">${escapeHtml(o.name)}</span>
      <span class="star-btn ${isFavoriteResident(o.name)?'active':''}" role="button" tabindex="0" data-fav-name="${escapeHtml(o.name)}" aria-label="Preferito ${escapeHtml(o.name)}">${isFavoriteResident(o.name)?'★':'☆'}</span>
    </button>`;
  }).join('');
}
function renderRealMap(targetId='realMap', highlightSpot=null){
  const map = byId(targetId); if(!map) return;
  const popupId = `${targetId}Popup`;
  map.innerHTML = DATA.realSpotPositions.map(([spot,x,y])=>{
    if(!SPOTS.includes(Number(spot))) return '';
    const o = occupantLabel(spot);
    return `<button class="real-spot ${o.type} ${Number(spot)===Number(highlightSpot)?'selected highlight':''}" type="button" style="left:${x}%;top:${y}%" data-map-spot="${spot}" data-map-context="${targetId}" aria-label="Posto ${spot}: ${escapeHtml(o.name)}"></button>`;
  }).join('') + `<div id="${popupId}" class="real-popup"></div>`;
  if(highlightSpot) openMapPopup(targetId, highlightSpot, true);
}
function openMapPopup(targetId, spot, keepHighlight=false){
  const map = byId(targetId); const popup = byId(`${targetId}Popup`); if(!map || !popup) return;
  const button = map.querySelector(`[data-map-spot="${spot}"]`); if(!button) return;

  const alreadyOpen = popup.classList.contains('open') && button.classList.contains('selected');
  map.querySelectorAll('.real-spot').forEach(btn=>btn.classList.remove('selected','highlight'));
  if(alreadyOpen){
    if(keepHighlight) button.classList.add('highlight');
    popup.classList.remove('open','below','left-edge','right-edge','spot-top-left','left-side');
    popup.innerHTML = '';
    return;
  }

  button.classList.add('selected');
  if(keepHighlight) button.classList.add('highlight');
  const o = occupantLabel(spot);
  const isNamedResident = o.name && !['LIBERO','PARCHEGGIO LIBERO'].includes(normalizeName(o.name).toUpperCase());
  popup.setAttribute('style', isNamedResident ? residentColorStyle(o.name) : '');
  popup.innerHTML = `<strong>Posto ${spot}</strong><span>${escapeHtml(o.name)}</span><small>${escapeHtml(o.label)} ${isFavoriteResident(o.name) ? '★' : ''}</small>`;
  const x = parseFloat(button.style.left), y = parseFloat(button.style.top);
  const leftSideSpot = [1,2,3,4,5,8,9,10].includes(Number(spot));
  const useBelow = !leftSideSpot && y < 20;
  popup.classList.toggle('below', useBelow);
  popup.classList.toggle('left-side', leftSideSpot);
  popup.classList.toggle('left-edge', !leftSideSpot && x < 24);
  popup.classList.toggle('right-edge', !leftSideSpot && x > 76);

  const left = leftSideSpot
    ? x
    : (x < 24 ? Math.min(x + 6, 24) : x > 76 ? Math.max(x - 6, 76) : x);

  const top = leftSideSpot
    ? y
    : (useBelow ? Math.min(y + 7, 92) : Math.max(y - 2, 8));

  popup.style.left = `${left}%`;
  popup.style.top = `${top}%`;
  popup.classList.add('open');
}
function closeAllMapPopups(){
  document.querySelectorAll('.real-popup').forEach(p=>{
    p.classList.remove('open','below','left-edge','right-edge','spot-top-left','left-side');
    p.innerHTML='';
  });
  document.querySelectorAll('.real-spot').forEach(btn=>btn.classList.remove('selected','highlight'));
}
function openSpotModal(spot){
  const modal = byId('spotModal');
  const o = occupantLabel(spot);
  byId('spotModalTitle').textContent = `Posto ${spot}`;
  byId('spotModalSubtitle').textContent = `${o.name} · ${o.label}`;
  modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.classList.add('modal-open');
  renderRealMap('modalRealMap', spot);
}
function closeSpotModal(){ const modal=byId('spotModal'); modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); if(!byId('residentModal')?.classList.contains('open')) document.body.classList.remove('modal-open'); }

function closeResidentSuggestions(){
  const box = byId('residentSuggestions');
  if(!box) return;
  box.hidden = true;
  box.innerHTML = '';
}
function renderResidentSuggestions(){
  const box = byId('residentSuggestions');
  const input = byId('residentSearchInput');
  if(!box || !input) return;
  const q = normalizeName(input.value || '');
  const residents = getAllResidents()
    .filter(name => !q || normalizeName(name).includes(q))
    .slice(0, 18);
  if(!residents.length){
    box.innerHTML = '<div class="suggestion-empty">Nessun condomino trovato</div>';
    box.hidden = false;
    return;
  }
  box.innerHTML = residents.map(name=>{
    const active = isFreeParkingPeriod(selectedDate) ? {type:null, spot:null} : getResidentActiveInfo(name);
    const status = active.type ? `${typeLabel(active.type)} · posto ${active.spot}` : 'fuori';
    return `<button class="suggestion-item" type="button" data-suggest-resident="${escapeHtml(name)}">
      <span class="avatar mini" style="${residentColorStyle(name)}">${escapeHtml(initials(name).toUpperCase())}</span>
      <span><strong>${escapeHtml(name)}</strong><small>${escapeHtml(status)}</small></span>
    </button>`;
  }).join('');
  box.hidden = false;
}

function renderResidents(){
  const list = byId('residentList'); if(!list) return;
  const q = normalizeName(byId('residentSearchInput')?.value || '');
  list.innerHTML = getAllResidents().map(name=>{
    const active = isFreeParkingPeriod(selectedDate) ? {type:null,spot:null} : getResidentActiveInfo(name);
    const main = findPermanentMainSpot(name); const small = findPermanentSmallSpot(name);
    const hidden = q && !normalizeName(name).includes(q);
    const cls = active.type === 'small' ? 'small-active' : active.type === 'main' ? 'main-active' : 'inactive';
    return `<article class="resident-row ${cls} ${hidden?'hidden':''}" data-resident-name="${escapeHtml(name)}">
      <button class="resident-main" type="button" data-resident="${escapeHtml(name)}">
        <span class="avatar" style="${residentColorStyle(name)}">${escapeHtml(initials(name).toUpperCase())}</span>
        <span class="resident-name">${escapeHtml(name)}</span>
      </button>
      <button class="resident-chip main ${active.type==='main'?'active':''}" type="button" data-resident="${escapeHtml(name)}">${main || '-'}</button>
      <button class="resident-chip small ${active.type==='small'?'active':''}" type="button" data-resident="${escapeHtml(name)}">${small || '-'}</button>
      <button class="row-star ${isFavoriteResident(name)?'active':''}" type="button" data-fav-name="${escapeHtml(name)}">${isFavoriteResident(name)?'★':'☆'}</button>
    </article>`;
  }).join('');
  const dates = byId('residentListDates'); if(dates) dates.textContent = isFreeParkingPeriod(selectedDate) ? freeParkingText(selectedDate.getFullYear()) : periodDateText(selectedPeriod);
}
function renderRights(){
  const list = byId('spotRightsList'); if(!list) return;
  const occupants = getCurrentOccupants();
  list.innerHTML = SPOTS.map(spot=>{
    const occ = occupants.get(spot); const activeName = occ ? normalizeName(occ.name) : '';
    const pills = (spotRights.get(spot) || []).map(name=>{
      const active = activeName && normalizeName(name) === activeName;
      const fav = isFavoriteResident(name);
      return `<span class="name-pill ${active ? `active-${occ.type}` : ''} ">${fav ? '<span class="inline-star">★</span>' : ''}${escapeHtml(name)}</span>`;
    }).join('');
    return `<article class="right-row"><div class="right-num">${spot}</div><div class="right-names">${pills || '<span class="name-pill">Nessun avente diritto</span>'}</div></article>`;
  }).join('');
  const dates = byId('rightsListDates'); if(dates) dates.textContent = isFreeParkingPeriod(selectedDate) ? freeParkingText(selectedDate.getFullYear()) : periodDateText(selectedPeriod);
}
function renderPeriodTexts(){
  const text = isFreeParkingPeriod(selectedDate) ? 'Parcheggio libero' : periodDateText(selectedPeriod);
  const mapDates = byId('mapDates'); if(mapDates) mapDates.textContent = text;
  updateMapTitle();
  const banner = byId('freeParkingBanner'); if(banner){ banner.hidden = !isFreeParkingPeriod(selectedDate); banner.textContent = freeParkingText(selectedDate.getFullYear()); }
}
function renderAllDynamic(){
  updateCountdowns();
  renderPeriodTexts();
  // Render lazy: solo la sezione visibile + preferiti (sempre visibili nei badge)
  const activeId = document.querySelector('.page.active')?.id;
  if(activeId === 'homeSection'){
    if(currentView === 'grid') renderParkingGrid();
    else renderRealMap('realMap');
  } else if(activeId === 'condominoSection'){
    renderResidents();
  } else if(activeId === 'rightsSection'){
    renderRights();
  } else if(activeId === 'favoritesSection'){
    renderFavorites();
  }
  // I preferiti nella nav badge non esistono, ma le stelle nella griglia/lista
  // si aggiornano già dentro le singole render. Nessun render aggiuntivo necessario.
}
function setDate(date){
  _cachedOccupants = null; // invalida cache occupanti
  selectedDate = stripTime(date); selectedPeriod = findPeriodByDate(selectedDate);
  ['homeDateInput','residentDateInput','rightsDateInput','favoritesDateInput'].forEach(id=>{ const el=byId(id); if(el) el.value = toInputDate(selectedDate); });
  [['homeDateLabel'],['residentDateLabel'],['rightsDateLabel'],['favoritesDateLabel']].forEach(([labelId])=>{ const label=byId(labelId); if(label) label.textContent = fullFmt(selectedDate); });
  renderAllDynamic();
}
function goToPeriod(direction){
  let target;
  if(selectedPeriod){ target = direction === 'next' ? new Date(selectedPeriod.end) : new Date(selectedPeriod.start); target.setDate(target.getDate() + (direction === 'next' ? 1 : -1)); }
  else { target = new Date(selectedDate); target.setDate(target.getDate() + (direction === 'next' ? 1 : -1)); }
  setDate(skipFree(target, direction === 'next' ? 1 : -1));
}
function updateMapTitle(){
  const title = document.querySelector('#homeSection .map-head h2');
  if(title) title.textContent = currentView === 'grid' ? 'Griglia posti' : 'Mappa posti';
}
function setView(view){
  currentView=view;
  byId('gridPanel').classList.toggle('active', view==='grid');
  byId('mapPanel').classList.toggle('active', view==='map');
  byId('gridViewBtn').classList.toggle('active', view==='grid');
  byId('realViewBtn').classList.toggle('active', view==='map');
  updateMapTitle();
  if(view==='map') renderRealMap('realMap');
}

function openDateModal(){
  const modal = byId('datePickerModal');
  const input = byId('modalDateInput');
  if(!modal || !input) return;
  input.value = toInputDate(selectedDate);
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  // setTimeout(()=>{
  //  try{ input.showPicker ? input.showPicker() : input.focus(); }
  //  catch(_){ input.focus(); }
  // }, 80);
  
  
}
function closeDateModal(){
  const modal = byId('datePickerModal');
  if(!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
}
function applyModalDate(){
  const input = byId('modalDateInput');
  if(input && input.value) setDate(fromInputDate(input.value));
  closeDateModal();
}


function forceHomeMapOnOpen(){
  currentView = 'map';

  document.querySelectorAll('.page').forEach(page=>page.classList.remove('active'));
  byId('homeSection')?.classList.add('active');

  document.querySelectorAll('.nav-btn').forEach(btn=>btn.classList.remove('active'));
  document.querySelector('.nav-btn[data-section="homeSection"]')?.classList.add('active');

  closeAllMapPopups();
  setView('map');

  requestAnimationFrame(()=>{
    window.scrollTo({top:0,left:0,behavior:'auto'});
  });
}

function bindEvents(){
  ['homeDateInput','residentDateInput','rightsDateInput','favoritesDateInput'].forEach(id=>{
    const input = byId(id);
    if(!input) return;
    input.tabIndex = -1;
    input.addEventListener('click', e=>{ e.preventDefault(); e.stopPropagation(); openDateModal(); });
    input.addEventListener('change', e=>setDate(fromInputDate(e.target.value)));
    const wrap = input.closest('.date-input-wrap');
    if(wrap){
      wrap.addEventListener('click', e=>{ e.preventDefault(); openDateModal(); });
    }
  });
  byId('modalDateInput')?.addEventListener('change', e=>{ if(e.target.value) setDate(fromInputDate(e.target.value)); });
  byId('modalDateInput')?.addEventListener('click', e=>{ e.stopPropagation();try{e.target.showPicker?.();}catch(_){}});
  byId('modalTodayBtn')?.addEventListener('click', ()=>{ setDate(new Date()); const input=byId('modalDateInput'); if(input) input.value=toInputDate(selectedDate); });
  byId('modalApplyDateBtn')?.addEventListener('click', applyModalDate);
  byId('dateModalClose')?.addEventListener('click', closeDateModal);
  byId('datePickerModal')?.addEventListener('click', e=>{ if(e.target.id==='datePickerModal') closeDateModal(); });
  ['homeNextPeriodBtn','residentNextPeriodBtn','rightsNextPeriodBtn','favoritesNextPeriodBtn'].forEach(id=>byId(id)?.addEventListener('click',()=>goToPeriod('next')));
  ['homePrevPeriodBtn','residentPrevPeriodBtn','rightsPrevPeriodBtn','favoritesPrevPeriodBtn'].forEach(id=>byId(id)?.addEventListener('click',()=>goToPeriod('prev')));
  byId('gridViewBtn').addEventListener('click',()=>setView('grid')); byId('realViewBtn').addEventListener('click',()=>setView('map'));
  byId('clearFavoritesBtn').addEventListener('click',()=>{ favorites=[]; saveFavorites(); renderFavorites(); renderAllDynamic(); });
  byId('residentSearchInput').addEventListener('input', ()=>{ closeResidentSuggestions(); renderResidents(); });
  byId('residentSearchInput').addEventListener('focus', closeResidentSuggestions);
  byId('spotModalClose').addEventListener('click', closeSpotModal); byId('spotModal').addEventListener('click', e=>{ if(e.target.id==='spotModal') closeSpotModal(); });
  byId('residentModalClose')?.addEventListener('click', closeResidentModal); byId('residentModal')?.addEventListener('click', e=>{ if(e.target.id==='residentModal') closeResidentModal(); });
  document.addEventListener('click', e=>{
    const mapPopup = e.target.closest('.real-popup'); if(mapPopup){ closeAllMapPopups(); return; }
    const mapSpot = e.target.closest('[data-map-spot]'); if(mapSpot){ openMapPopup(mapSpot.dataset.mapContext, Number(mapSpot.dataset.mapSpot), mapSpot.dataset.mapContext==='modalRealMap'); return; }
    const mapArea = e.target.closest('.real-map'); if(mapArea){ closeAllMapPopups(); return; }
    const closeResidentBtn = e.target.closest('[data-close-resident]'); if(closeResidentBtn){ closeResidentModal(); return; }
    const fav = e.target.closest('[data-fav-name]'); if(fav){ e.stopPropagation(); const name=fav.dataset.favName; if(name) toggleFavoriteResident(name); return; }
    const remove = e.target.closest('[data-fav-remove-name]'); if(remove){ e.stopPropagation(); const name=remove.dataset.favRemoveName; favorites=favorites.filter(n=>normalizeName(n)!==normalizeName(name)); saveFavorites(); renderAllDynamic(); return; }
    const suggested = e.target.closest('[data-suggest-resident]'); if(suggested){ const name=suggested.dataset.suggestResident; const input=byId('residentSearchInput'); if(input) input.value=''; closeResidentSuggestions(); renderResidents(); openResidentModal(name); return; }
    if(!e.target.closest('.search-card')) closeResidentSuggestions();
    const resident = e.target.closest('[data-resident]'); if(resident){ const name=resident.dataset.resident; if(name) openResidentModal(name); return; }
    const open = e.target.closest('[data-open-spot]'); if(open){ const spot=Number(open.dataset.openSpot); if(spot) openSpotModal(spot); return; }
    const currentSpot = e.target.closest('[data-open-current-spot]'); if(currentSpot){ const spot=Number(currentSpot.dataset.openCurrentSpot); if(spot){ closeResidentModal(); setTimeout(()=>openSpotModal(spot), 120); } return; }
  });
  document.addEventListener('keydown', e=>{ if(e.key==='Escape'){ closeSpotModal(); closeResidentModal(); closeDateModal(); } });
  document.querySelectorAll('.nav-btn').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active')); btn.classList.add('active');
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active')); byId(btn.dataset.section).classList.add('active');
    window.scrollTo({top:0,behavior:'smooth'});
    // Render della sezione appena attivata (lazy: prima non veniva renderizzata se non era attiva)
    const sec = btn.dataset.section;
    if(sec === 'homeSection'){ if(currentView === 'grid') renderParkingGrid(); else renderRealMap('realMap'); }
    else if(sec === 'condominoSection') renderResidents();
    else if(sec === 'rightsSection') renderRights();
    else if(sec === 'favoritesSection') renderFavorites();
  }));
}
document.addEventListener('DOMContentLoaded',()=>{ bindEvents(); setDate(new Date()); forceHomeMapOnOpen(); });
