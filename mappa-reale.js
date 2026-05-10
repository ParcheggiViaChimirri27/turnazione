const spots = [
  { n:1, name:"ALESSIO CAVARRETTA", type:"small", x:110, y:210 },
  { n:2, name:"SQUILLACIOTI - VERALDI", type:"main", x:110, y:270 },
  { n:3, name:"LEONE", type:"small", x:110, y:330 },
  { n:4, name:"MANGONE", type:"small", x:110, y:390 },
  { n:5, name:"PRESTA", type:"small", x:110, y:450 },

  { n:6, name:"", type:"empty", x:200, y:210 },
  { n:7, name:"", type:"empty", x:200, y:270 },
  { n:8, name:"MARASCO [C]", type:"main", x:200, y:330 },
  { n:9, name:"PILÒ", type:"small", x:200, y:390 },
  { n:10, name:"PUCCIO MARISA", type:"small", x:200, y:450 },

  { n:11, name:"RUSSO", type:"main", x:300, y:210 },
  { n:12, name:"DEMASI INT. 6", type:"main", x:300, y:270 },
  { n:13, name:"PISTOIA - GEMELLI", type:"small", x:300, y:330 },
  { n:14, name:"CARTOLANO - LOMBARDI", type:"small", x:300, y:390 },
  { n:15, name:"DEMASI FRANCESCO", type:"small", x:300, y:450 },

  { n:16, name:"CATRAMBONE", type:"main", x:425, y:540 },
  { n:17, name:"CARTOLANO - LOMBARDI", type:"main", x:505, y:540 },
  { n:18, name:"JIRILLO QUINTINO", type:"main", x:585, y:540 },
  { n:19, name:"ROMITI - MONTILLA", type:"main", x:665, y:540 },

  { n:20, name:"MANCUSO", type:"main", x:410, y:105 },
  { n:21, name:"JIRILLO LUIGI", type:"main", x:490, y:105 },
  { n:22, name:"STAIANO", type:"main", x:570, y:105 },
  { n:23, name:"COLACINO", type:"main", x:650, y:105 },

  { n:24, name:"MANNO", type:"main", x:410, y:170 },
  { n:25, name:"LUCENTE", type:"main", x:490, y:170 },
  { n:26, name:"RICCELLI", type:"main", x:570, y:170 },
  { n:27, name:"VARANO", type:"main", x:650, y:170 },

  { n:28, name:"AGOSTO - PIANO RIALZ.", type:"main", x:410, y:235 },
  { n:29, name:"AVERSA ENRICHETTA", type:"main", x:490, y:235 },
  { n:30, name:"BARBUTO", type:"main", x:570, y:235 },
  { n:31, name:"D'AGOSTINO", type:"main", x:650, y:235 },

  { n:32, name:"CIANFLONE", type:"main", x:410, y:300 },
  { n:33, name:"MIRIGLIANI RAFFAELE", type:"main", x:490, y:300 },
  { n:34, name:"AGOSTO VIOLETTA 3° P.", type:"main", x:570, y:300 },
  { n:35, name:"PILÒ", type:"main", x:650, y:300 },

  { n:36, name:"SANZI", type:"main", x:760, y:240 },
  { n:37, name:"SELVAGGIO", type:"main", x:760, y:310 }
];

function renderSpots(){
  const layer = document.getElementById("spotsLayer");

  layer.innerHTML = spots.map(spot => `
    <div class="spot-wrap" style="left:${spot.x}px; top:${spot.y}px;">
      <div class="spot-inner">
        <div class="spot-front ${spot.type === "main" ? "active-main" : spot.type === "small" ? "active-small" : ""}">
          <div class="spot-num">${spot.n}</div>
          <div class="spot-name">${spot.name}</div>
        </div>

        <div class="spot-back">
          <div class="back-list">
            <span>• ${spot.name || "Nessun condomino"}</span>
          </div>

          <div class="back-footer">Posto ${spot.n}</div>
        </div>
      </div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderSpots();

  document.addEventListener("click", event => {
    const card = event.target.closest(".spot-wrap");
    if(card){
      card.classList.toggle("flipped");
    }
  });

  const todayInput = document.getElementById("mapDateInput");
  const todayBtn = document.getElementById("todayBtn");

  const today = new Date();
  todayInput.value =
    today.getFullYear() + "-" +
    String(today.getMonth() + 1).padStart(2, "0") + "-" +
    String(today.getDate()).padStart(2, "0");

  todayBtn.addEventListener("click", () => {
    todayInput.value =
      today.getFullYear() + "-" +
      String(today.getMonth() + 1).padStart(2, "0") + "-" +
      String(today.getDate()).padStart(2, "0");
  });
});
