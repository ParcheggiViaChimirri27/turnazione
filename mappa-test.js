const spots = [
  { n:1, name:"ALESSIO CAVARRETTA", type:"small", x:150, y:150 },
  { n:2, name:"SQUILLACIOTI - VERALDI", type:"main", x:150, y:215 },
  { n:3, name:"LEONE", type:"small", x:150, y:280 },
  { n:4, name:"MANGONE", type:"small", x:150, y:345 },
  { n:5, name:"PRESTA", type:"small", x:150, y:410 },

  { n:6, name:"", type:"empty", x:250, y:150 },
  { n:7, name:"", type:"empty", x:250, y:215 },
  { n:8, name:"MARASCO [C]", type:"main", x:250, y:280 },
  { n:9, name:"PILÒ", type:"small", x:250, y:345 },
  { n:10, name:"PUCCIO MARISA", type:"small", x:250, y:410 },

  { n:11, name:"RUSSO", type:"main", x:350, y:150 },
  { n:12, name:"DEMASI INT. 6", type:"main", x:350, y:215 },
  { n:13, name:"PISTOIA - GEMELLI", type:"small", x:350, y:280 },
  { n:14, name:"CARTOLANO - LOMBARDI", type:"small", x:350, y:345 },
  { n:15, name:"DEMASI FRANCESCO", type:"small", x:350, y:410 },

  { n:16, name:"CATRAMBONE", type:"main", x:470, y:505 },
  { n:17, name:"CARTOLANO - LOMBARDI", type:"main", x:565, y:505 },
  { n:18, name:"JIRILLO QUINTINO", type:"main", x:660, y:505 },
  { n:19, name:"ROMITI - MONTILLA", type:"main", x:755, y:505 },

  { n:20, name:"MANCUSO", type:"main", x:470, y:120 },
  { n:21, name:"JIRILLO LUIGI", type:"main", x:565, y:120 },
  { n:22, name:"STAIANO", type:"main", x:660, y:120 },
  { n:23, name:"COLACINO", type:"main", x:755, y:120 },

  { n:24, name:"MANNO", type:"main", x:470, y:190 },
  { n:25, name:"LUCENTE", type:"main", x:565, y:190 },
  { n:26, name:"RICCELLI", type:"main", x:660, y:190 },
  { n:27, name:"VARANO", type:"main", x:755, y:190 },

  { n:28, name:"AGOSTO - PIANO RIALZ.", type:"main", x:470, y:265 },
  { n:29, name:"AVERSA ENRICHETTA", type:"main", x:565, y:265 },
  { n:30, name:"BARBUTO", type:"main", x:660, y:265 },
  { n:31, name:"D'AGOSTINO", type:"main", x:755, y:265 },

  { n:32, name:"CIANFLONE", type:"main", x:470, y:340 },
  { n:33, name:"MIRIGLIANI RAFFAELE", type:"main", x:565, y:340 },
  { n:34, name:"AGOSTO VIOLETTA 3° P.", type:"main", x:660, y:340 },
  { n:35, name:"PILÒ", type:"main", x:755, y:340 },

  { n:36, name:"SANZI", type:"main", x:835, y:220 },
  { n:37, name:"SELVAGGIO", type:"main", x:835, y:290 }
];

function renderSpots(){
  const layer = document.getElementById("spotsLayer");

  layer.innerHTML = spots.map(spot => `
    <div
      class="spot ${spot.type === "main" ? "active-main" : spot.type === "small" ? "active-small" : ""}"
      style="left:${spot.x}px; top:${spot.y}px;"
    >
      <div class="spot-num">${spot.n}</div>
      <div class="spot-name">${spot.name}</div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderSpots);
