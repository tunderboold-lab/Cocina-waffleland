"use client";
import { useState, useEffect, useRef } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://auweubelcxsvkifyibfw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1d2V1YmVsY3hzdmtpZnlpYmZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3NTk5MTYsImV4cCI6MjA5NDMzNTkxNn0.NLV2t1haEXKM-n8iyVpzCU9gx-CmTMPVJjmM0ZDlsXM"
);

const TU_NUMERO = "5215613980508";

// ===== PRODUCTOS POR ÁREA =====
const PRODUCTOS_AREA = {
  "Cajera": [
    {nombre:"Portavasos",id:172,unidad:"Pz",optimo:35},
    {nombre:"Servilletas",id:167,unidad:"Paquete",optimo:1},
    {nombre:"Tenedores",id:280,unidad:"Bolsa",optimo:1},
    {nombre:"Cucharas",id:169,unidad:"Paquete",optimo:2},
    {nombre:"Popotes grueso",id:160,unidad:"Pz",optimo:60},
    {nombre:"Popotes delgado",id:159,unidad:"Pz",optimo:60},
    {nombre:"Playo",id:281,unidad:"Rollo",optimo:1},
    {nombre:"Bolsas 25x40",id:161,unidad:"Paquete",optimo:1},
    {nombre:"Bolsas 25x50",id:1778912277146,unidad:"Paquete",optimo:1},
    {nombre:"Bolsas 30x60",id:162,unidad:"Paquete",optimo:1},
    {nombre:"Tenedores para cubiertos",id:170,unidad:"Paquete",optimo:4},
    {nombre:"Cuchillos para cubiertos",id:171,unidad:"Paquete",optimo:4},
    {nombre:"Rollos para impresora",id:316,unidad:"Pz",optimo:4},
    {nombre:"Rollos para terminal",id:317,unidad:"Pz",optimo:4},
    {nombre:"Toallas desinfectantes",id:182,unidad:"Paquete",optimo:1},
    {nombre:"Guantes CH",id:319,unidad:"Paquete",optimo:1},
    {nombre:"Guantes M",id:181,unidad:"Paquete",optimo:1},
    {nombre:"Guantes G",id:320,unidad:"Paquete",optimo:1},
    {nombre:"Pluma",id:290,unidad:"Pz",optimo:1},
    {nombre:"Plumón",id:291,unidad:"Pz",optimo:1},
  ],
  "Pedidos a Domicilio": [
    {nombre:"Portavasos",id:172,unidad:"Pz",optimo:35},
    {nombre:"Servilletas",id:167,unidad:"Paquete",optimo:1},
    {nombre:"Tenedores",id:280,unidad:"Bolsa",optimo:1},
    {nombre:"Cucharas",id:169,unidad:"Paquete",optimo:2},
    {nombre:"Popotes grueso",id:160,unidad:"Pz",optimo:60},
    {nombre:"Popotes delgado",id:159,unidad:"Pz",optimo:60},
    {nombre:"Playo",id:281,unidad:"Rollo",optimo:1},
    {nombre:"Bolsas 25x40",id:161,unidad:"Paquete",optimo:1},
    {nombre:"Bolsas 25x50",id:1778912277146,unidad:"Paquete",optimo:1},
    {nombre:"Bolsas 30x60",id:162,unidad:"Paquete",optimo:1},
    {nombre:"Tenedores para cubiertos",id:170,unidad:"Paquete",optimo:4},
    {nombre:"Cuchillos para cubiertos",id:171,unidad:"Paquete",optimo:4},
    {nombre:"Rollos para impresora",id:316,unidad:"Pz",optimo:4},
    {nombre:"Rollos para terminal",id:317,unidad:"Pz",optimo:4},
    {nombre:"Toallas desinfectantes",id:182,unidad:"Paquete",optimo:1},
    {nombre:"Guantes CH",id:319,unidad:"Paquete",optimo:1},
    {nombre:"Guantes M",id:181,unidad:"Paquete",optimo:1},
    {nombre:"Guantes G",id:320,unidad:"Paquete",optimo:1},
    {nombre:"Pluma",id:290,unidad:"Pz",optimo:1},
    {nombre:"Plumón",id:291,unidad:"Pz",optimo:1},
  ],
  "Bebidas": [
    {nombre:"Leche entera",id:2,unidad:"Pz",optimo:6},
    {nombre:"Leche deslactosada",id:6,unidad:"Pz",optimo:5},
    {nombre:"Leche de coco",id:5,unidad:"Pz",optimo:2},
    {nombre:"Leche de almendra",id:4,unidad:"Pz",optimo:2},
    {nombre:"Leche de avena",id:3,unidad:"Pz",optimo:1},
    {nombre:"Azúcar",id:50,unidad:"kg",optimo:5},
    {nombre:"Hielo",id:285,unidad:"bolsa",optimo:4},
    {nombre:"Polvo fresa",id:302,unidad:"Bote",optimo:1},
    {nombre:"Polvo chocolate",id:303,unidad:"Bote",optimo:1},
    {nombre:"Polvo chocolate abuelita",id:42,unidad:"Bote",optimo:1},
    {nombre:"Polvo taro",id:30,unidad:"Bote",optimo:1},
    {nombre:"Polvo chocolate blanco",id:38,unidad:"Bote",optimo:1},
    {nombre:"Polvo horchata",id:31,unidad:"Bote",optimo:1},
    {nombre:"Polvo chai vainilla",id:44,unidad:"Bote",optimo:1},
    {nombre:"Polvo caramelo",id:37,unidad:"Bote",optimo:1},
    {nombre:"Polvo capuchino",id:28,unidad:"Bote",optimo:1},
    {nombre:"Polvo flan",id:45,unidad:"Bote",optimo:1},
    {nombre:"Polvo mazapán",id:32,unidad:"Bote",optimo:1},
    {nombre:"Polvo crème brûlée",id:40,unidad:"Bote",optimo:1},
    {nombre:"Polvo coco",id:41,unidad:"Bote",optimo:1},
    {nombre:"Polvo mora azul",id:33,unidad:"Bote",optimo:1},
    {nombre:"Polvo plátano",id:1778915604968,unidad:"Bote",optimo:1},
    {nombre:"Polvo pistache",id:34,unidad:"Bote",optimo:1},
    {nombre:"Polvo matcha",id:29,unidad:"Bote",optimo:1},
    {nombre:"Polvo red velvet",id:35,unidad:"Bote",optimo:1},
    {nombre:"Polvo cookies",id:39,unidad:"Bote",optimo:1},
    {nombre:"Jarabe frutos rojos",id:245,unidad:"Botella",optimo:1},
    {nombre:"Jarabe mora azul",id:257,unidad:"Botella",optimo:1},
    {nombre:"Jarabe manzana verde",id:250,unidad:"Botella",optimo:1},
    {nombre:"Jarabe tamarindo",id:254,unidad:"Botella",optimo:1},
    {nombre:"Jarabe fresa",id:244,unidad:"Botella",optimo:1},
    {nombre:"Jarabe lichi",id:248,unidad:"Botella",optimo:1},
    {nombre:"Jarabe maracuyá",id:256,unidad:"Botella",optimo:1},
    {nombre:"Jarabe rompope",id:206,unidad:"Botella",optimo:1},
    {nombre:"Jarabe baileys",id:13,unidad:"Botella",optimo:1},
    {nombre:"Jarabe piñón",id:207,unidad:"Botella",optimo:1},
    {nombre:"Jarabe picafresa",id:213,unidad:"Botella",optimo:1},
    {nombre:"Jarabe pelón pelo rico",id:218,unidad:"Botella",optimo:1},
    {nombre:"Jarabe pulparindo",id:212,unidad:"Bote",optimo:1},
    {nombre:"Jarabe avellana",id:241,unidad:"Botella",optimo:1},
    {nombre:"Jarabe caramelo",id:311,unidad:"Botella",optimo:1},
    {nombre:"Jarabe frambuesa",id:243,unidad:"Botella",optimo:1},
    {nombre:"Jarabe kiwi",id:247,unidad:"Botella",optimo:1},
    {nombre:"Jarabe limonada",id:253,unidad:"Botella",optimo:1},
    {nombre:"Jarabe mango",id:249,unidad:"Botella",optimo:1},
    {nombre:"Jarabe menta",id:251,unidad:"Botella",optimo:1},
    {nombre:"Jarabe uva",id:255,unidad:"Botella",optimo:1},
    {nombre:"Yakult",id:24,unidad:"Paquete",optimo:1},
    {nombre:"Yogurt griego",id:78,unidad:"Bote",optimo:1},
    {nombre:"Mermelada",id:55,unidad:"Mamila",optimo:1},
    {nombre:"Hershey's",id:87,unidad:"Mamila",optimo:1},
    {nombre:"Peñafiel",id:20,unidad:"Pz",optimo:1},
    {nombre:"Sprite",id:17,unidad:"Pz",optimo:1},
    {nombre:"Tapioca",id:1779715504409,unidad:"Toper",optimo:1},
    {nombre:"Perlas explosivas",id:1779014643990,unidad:"Bote",optimo:1},
    {nombre:"Chamoy",id:135,unidad:"Mamila",optimo:1},
    {nombre:"Miguelito",id:95,unidad:"Mamila",optimo:1},
    {nombre:"Canela",id:203,unidad:"Bote",optimo:1},
    {nombre:"Galletas Marías",id:296,unidad:"Paquete",optimo:1},
    {nombre:"Galletas Oreo",id:225,unidad:"Caja",optimo:1},
    {nombre:"Conejitos Turín",id:98,unidad:"Paquete",optimo:1},
    {nombre:"Gansito",id:217,unidad:"Pz",optimo:4},
    {nombre:"Chocorrol",id:215,unidad:"Pz",optimo:4},
    {nombre:"M&MS",id:84,unidad:"Pz",optimo:4},
    {nombre:"Gomitas de aro",id:195,unidad:"gr",optimo:100},
    {nombre:"Gomitas panditas",id:221,unidad:"gr",optimo:100},
    {nombre:"Helado de chocolate",id:114,unidad:"Cubeta",optimo:1},
    {nombre:"Helado de fresa",id:113,unidad:"Cubeta",optimo:1},
    {nombre:"Helado de vainilla",id:115,unidad:"Cubeta",optimo:1},
    {nombre:"Helado de limón",id:298,unidad:"Cubeta",optimo:1},
    {nombre:"Helado cookies and cream",id:116,unidad:"Cubeta",optimo:1},
    {nombre:"Paleta Magnum",id:117,unidad:"Pz",optimo:8},
    {nombre:"Paleta Ferrero",id:119,unidad:"Pz",optimo:3},
    {nombre:"Paleta Huevo Kinder",id:315,unidad:"Pz",optimo:2},
    {nombre:"Paleta Raffaello",id:120,unidad:"Pz",optimo:3},
    {nombre:"Mordisko",id:219,unidad:"Pz",optimo:5},
  ],
  "Crepas": [
    {nombre:"Cajeta",id:56,unidad:"Mamila",optimo:1},
    {nombre:"Lechera",id:9,unidad:"Lata",optimo:4},
    {nombre:"Nutella",id:85,unidad:"Bote 3kg",optimo:2},
    {nombre:"Mermelada de fresa",id:55,unidad:"Mamila",optimo:1},
    {nombre:"Mermelada de zarzamora",id:297,unidad:"Mamila",optimo:1},
    {nombre:"Crema de cacahuate",id:200,unidad:"Bote",optimo:1},
    {nombre:"Maple",id:57,unidad:"Botella",optimo:1},
    {nombre:"Hershey's líquido",id:87,unidad:"Mamila",optimo:1},
    {nombre:"Cereza",id:75,unidad:"Bote",optimo:1},
    {nombre:"Durazno",id:198,unidad:"Lata",optimo:1},
    {nombre:"Bombón de chocolate",id:223,unidad:"Pz",optimo:6},
    {nombre:"Bombones",id:94,unidad:"Bolsa",optimo:2},
    {nombre:"Ferrero",id:79,unidad:"Pz",optimo:25},
    {nombre:"Chocoretas",id:92,unidad:"Pz",optimo:10},
    {nombre:"Kranky",id:93,unidad:"Pz",optimo:15},
    {nombre:"Crunch",id:301,unidad:"Pz",optimo:5},
    {nombre:"Chocolate Hershey's barra",id:86,unidad:"Pz",optimo:4},
    {nombre:"Pingüino",id:118,unidad:"Pz",optimo:9},
    {nombre:"Chocorrol",id:215,unidad:"Pz",optimo:9},
    {nombre:"Gansito",id:217,unidad:"Pz",optimo:9},
    {nombre:"Huevo Kinder",id:97,unidad:"Pz",optimo:10},
    {nombre:"Kinder chocolate",id:81,unidad:"Pz",optimo:15},
    {nombre:"Kinder Delice",id:82,unidad:"Pz",optimo:15},
    {nombre:"Kinder Bueno",id:80,unidad:"Pz",optimo:20},
    {nombre:"Kit Kat",id:83,unidad:"Pz",optimo:10},
    {nombre:"Carlos V",id:88,unidad:"Pz",optimo:10},
    {nombre:"Pretzel",id:104,unidad:"gr",optimo:200},
    {nombre:"Conejito Turín",id:98,unidad:"Pz",optimo:24},
    {nombre:"Mazapán",id:90,unidad:"Pz",optimo:25},
    {nombre:"Bubulubu",id:91,unidad:"Pz",optimo:9},
    {nombre:"Galleta Lotus",id:53,unidad:"Paquete",optimo:1},
    {nombre:"Granillo Turín",id:190,unidad:"Bolsa 250gr",optimo:2},
    {nombre:"Nuez",id:189,unidad:"Bolsa 250gr",optimo:1},
    {nombre:"Almendra",id:187,unidad:"Bolsa 250gr",optimo:1},
    {nombre:"Chispas Cafe",id:193,unidad:"Bolsa 250gr",optimo:2},
    {nombre:"Oreo",id:225,unidad:"Caja",optimo:1},
    {nombre:"Chispas blancas",id:192,unidad:"Bolsa 250gr",optimo:1},
    {nombre:"Charola 8x8",id:165,unidad:"Pz",optimo:50},
    {nombre:"Plato para comer dentro",id:164,unidad:"Pz",optimo:30},
    {nombre:"Papeles para los platos",id:176,unidad:"Pz",optimo:100},
    {nombre:"Aluminio",id:168,unidad:"Rollo",optimo:1},
    {nombre:"Gas",id:286,unidad:"Tanque",optimo:1},
  ],
  "Estación Dulce": [
    {nombre:"Crema de Baileys",id:12,unidad:"Manga",optimo:1},
    {nombre:"Mantequilla",id:52,unidad:"Barra",optimo:4},
    {nombre:"Queso manchego",id:122,unidad:"Paquetes",optimo:6},
    {nombre:"Queso mozzarella",id:123,unidad:"Paquetes",optimo:8},
    {nombre:"Queso 4 quesos",id:235,unidad:"Paquetes",optimo:5},
    {nombre:"Philadelphia",id:127,unidad:"Dosis",optimo:20},
    {nombre:"Danoninos",id:77,unidad:"Pz",optimo:6},
    {nombre:"Duraznos",id:198,unidad:"Lata",optimo:1},
    {nombre:"Piña",id:196,unidad:"Lata",optimo:1},
    {nombre:"Cereza",id:75,unidad:"Bote",optimo:1},
    {nombre:"Jamón",id:132,unidad:"Paquetes",optimo:8},
    {nombre:"Pechuga de Pavo",id:133,unidad:"kg",optimo:1},
    {nombre:"Pepperoni",id:134,unidad:"gr",optimo:400},
    {nombre:"Salsa de tomate",id:144,unidad:"Frasco",optimo:1},
    {nombre:"Charola 8x8",id:165,unidad:"Pz",optimo:50},
    {nombre:"Charola Hamburguesera",id:166,unidad:"Pz",optimo:30},
    {nombre:"Papeles",id:176,unidad:"Pz",optimo:100},
  ],
  "Frito": [
    {nombre:"Alitas",id:109,unidad:"Pz",optimo:50},
    {nombre:"Salchicha",id:131,unidad:"Paquete",optimo:1},
    {nombre:"Tocino",id:130,unidad:"Paquete",optimo:1},
    {nombre:"Tocino en trozos",id:314,unidad:"Bote",optimo:1},
    {nombre:"Queso barra",id:124,unidad:"Barra",optimo:1},
    {nombre:"Queso amarillo",id:126,unidad:"Bolsa",optimo:1},
    {nombre:"Queso parmesano",id:125,unidad:"Bote",optimo:1},
    {nombre:"Jalapeño",id:112,unidad:"Bolsa",optimo:1},
    {nombre:"Aros de cebolla",id:107,unidad:"Bolsa",optimo:1},
    {nombre:"Papas francesa",id:106,unidad:"Bolsa",optimo:4},
    {nombre:"Papas gajo",id:105,unidad:"Bolsa",optimo:4},
    {nombre:"Aceite",id:199,unidad:"Bidón",optimo:1},
    {nombre:"Panko",id:1779574772988,unidad:"kg",optimo:1},
    {nombre:"Ramen",id:234,unidad:"Paquete",optimo:2},
    {nombre:"Polvo Flamin'",id:304,unidad:"gr",optimo:250},
    {nombre:"Polvo Azul Fuego",id:305,unidad:"gr",optimo:250},
    {nombre:"Polvo Chipotle",id:270,unidad:"gr",optimo:250},
    {nombre:"Polvo Sabritas",id:306,unidad:"gr",optimo:250},
    {nombre:"Polvo Habanero",id:307,unidad:"gr",optimo:250},
    {nombre:"Polvo Adobado",id:308,unidad:"gr",optimo:250},
    {nombre:"Polvo Jalapeño",id:309,unidad:"gr",optimo:250},
    {nombre:"Tajín",id:136,unidad:"Bote",optimo:1},
    {nombre:"Cheetos Flamin",id:102,unidad:"Bolsa",optimo:1},
    {nombre:"Cheesy Cheddar",id:310,unidad:"gr",optimo:250},
    {nombre:"Doritos",id:101,unidad:"Bolsa",optimo:1},
    {nombre:"Takis Azules",id:100,unidad:"Bolsa",optimo:1},
    {nombre:"Bonolees",id:110,unidad:"Bolsa",optimo:3},
    {nombre:"Chipotle líquido",id:141,unidad:"Botella",optimo:1},
    {nombre:"Valentina",id:137,unidad:"Botella",optimo:1},
    {nombre:"Maggi",id:147,unidad:"Botella",optimo:1},
    {nombre:"Botanera",id:313,unidad:"Botella",optimo:1},
    {nombre:"Salsa Fantasma",id:149,unidad:"Botella",optimo:1},
    {nombre:"Limón Pepee",id:145,unidad:"Galón",optimo:1},
    {nombre:"Búfalo",id:140,unidad:"Galón",optimo:1},
    {nombre:"Ranch",id:138,unidad:"Galón",optimo:1},
    {nombre:"Mango Habanero",id:269,unidad:"Galón",optimo:1},
    {nombre:"BBQ",id:139,unidad:"Galón",optimo:1},
    {nombre:"Catsup",id:143,unidad:"Galón",optimo:1},
    {nombre:"Salsa Doritos",id:259,unidad:"Botella",optimo:1},
    {nombre:"Salsa Original Alitas",id:239,unidad:"Botella",optimo:1},
    {nombre:"Salsa Tamarindo 3 Chiles",id:150,unidad:"Botella",optimo:1},
    {nombre:"Salsa Cheetos",id:261,unidad:"Botella",optimo:1},
    {nombre:"Salsa Takis Fuego",id:260,unidad:"Botella",optimo:1},
    {nombre:"Salsa Sabritas Habanero",id:312,unidad:"Botella",optimo:1},
    {nombre:"Crema",id:128,unidad:"Cubeta",optimo:1},
    {nombre:"Sal",id:148,unidad:"Bote",optimo:1},
    {nombre:"Charola 8x8",id:165,unidad:"Pz",optimo:30},
    {nombre:"Charola hamburguesera",id:166,unidad:"Pz",optimo:30},
    {nombre:"Charola blanca banderilla",id:282,unidad:"Pz",optimo:20},
    {nombre:"Cono de cartón",id:318,unidad:"Pz",optimo:20},
    {nombre:"Caja banderilla coreana",id:276,unidad:"Pz",optimo:30},
    {nombre:"Papel cuadriculado",id:176,unidad:"Pz",optimo:100},
    {nombre:"Palillos banderilla",id:174,unidad:"Pz",optimo:30},
    {nombre:"Cloro",id:179,unidad:"Bidón",optimo:1},
    {nombre:"Jabón Roma",id:27,unidad:"Bolsa",optimo:1},
    {nombre:"Fabuloso",id:284,unidad:"Bidón",optimo:1},
    {nombre:"Bolsas de basura",id:186,unidad:"Pz",optimo:1},
    {nombre:"Esponja para trastes",id:1779144761764,unidad:"Pz",optimo:2},
    {nombre:"Cofia",id:321,unidad:"Pz",optimo:2},
    {nombre:"Gas",id:286,unidad:"Tanque",optimo:1},
  ],
};

const AREAS = Object.keys(PRODUCTOS_AREA);
const AREA_EMOJIS = {
  "Cajera":"🧾","Pedidos a Domicilio":"🛵","Bebidas":"☕","Crepas":"🥞","Estación Dulce":"🧇","Frito":"🍟"
};

const ROLES = ["trabajador", "subgerente", "gerente", "admin"];

// ===== ÁREAS ADICIONALES POR USUARIO =====
// Un trabajador puede tener áreas extra (columna areas_extra en usuarios_cocina,
// texto separado por comas, ej. "Bebidas,Crepas,Estación Dulce").
// Ejemplo: Danna es de Pedidos a Domicilio pero entre semana cubre Bebidas, Crepas y Dulce.
function parseAreasExtra(u) {
  if (!u || !u.areas_extra) return [];
  return String(u.areas_extra).split(",").map(s => s.trim()).filter(a => AREAS.includes(a));
}

// Productos que requieren registrar cuántos gramos se sirvieron del bote.
// Formato: "Area||Nombre del producto"
const PRODUCTOS_RELLENABLES = [
  "Crepas||Cajeta",
  "Crepas||Mermelada de fresa",
  "Crepas||Mermelada de zarzamora",
  "Crepas||Hershey's líquido",
  "Frito||Panko",
  "Frito||Polvo Flamin'",
  "Frito||Polvo Azul Fuego",
  "Frito||Polvo Sabritas",
  "Frito||Polvo Habanero",
  "Frito||Polvo Adobado",
  "Frito||Polvo Jalapeño",
  "Frito||Cheesy Cheddar",
];
function esRellenable(area, nombre) {
  return PRODUCTOS_RELLENABLES.includes(area + "||" + nombre);
}

// Busca un producto (con su id) dentro de PRODUCTOS_AREA por area+nombre
function buscarProducto(area, nombre) {
  const lista = PRODUCTOS_AREA[area] || [];
  return lista.find(p => p.nombre === nombre) || null;
}

const ESTADOS = {
  pendiente: {label:"⏳ Pendiente", color:"#fbbf24", bg:"#fbbf2415"},
  aprobada: {label:"✅ Aprobada", color:"#34d399", bg:"#34d39915"},
  ajustada: {label:"✂️ Ajustada", color:"#818cf8", bg:"#818cf815"},
  rechazada: {label:"❌ Rechazada", color:"#f87171", bg:"#f8717115"},
  agotado: {label:"📭 Agotado", color:"#fb923c", bg:"#fb923c15"},
  en_espera: {label:"⏳ En espera", color:"#94a3b8", bg:"#94a3b815"},
};

const C = {
  bg:"#060810", card:"#0d1117", border:"rgba(125,211,252,0.12)",
  accent:"#7dd3fc", text:"#e2e8f0", muted:"#64748b",
  warn:"#fbbf24", danger:"#f87171", success:"#34d399", info:"#818cf8"
};

export default function CocinaApp() {
  const [usuario, setUsuario] = useState(null);
  const [usuarios, setUsuarios] = useState([]);
  const [solicitudes, setSolicitudes] = useState([]);
  const [tab, setTab] = useState("solicitar");
  const [busq, setBusq] = useState("");
  const [carrito, setCarrito] = useState({});
  const [notaGeneral, setNotaGeneral] = useState("");
  const [modalLogin, setModalLogin] = useState(true);
  const [nombreSel, setNombreSel] = useState("");
  const [pinInput, setPinInput] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  const [modalAgotado, setModalAgotado] = useState(false);
  const [prodAgotado, setProdAgotado] = useState("");
  const [notaAgotado, setNotaAgotado] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [modalAprobar, setModalAprobar] = useState(null);
  const [cantAjuste, setCantAjuste] = useState({});
  const [motivoRechazo, setMotivoRechazo] = useState("");
  const [cargando, setCargando] = useState(true);
  const [modalNuevoProd, setModalNuevoProd] = useState(false);
  const [formNuevoProd, setFormNuevoProd] = useState({nombre:"",unidad:"",nota:""});

  // ===== ESTADO SUBPESTAÑA ÁREA (multi-área) =====
  const [areaActiva, setAreaActiva] = useState("");

  // ===== ESTADOS PANEL USUARIOS =====
  const [busqUsuarios, setBusqUsuarios] = useState("");
  const [filtroAreaUsuarios, setFiltroAreaUsuarios] = useState("");
  const [mostrarInactivos, setMostrarInactivos] = useState(false);
  const [modalUsuario, setModalUsuario] = useState(null); // null | {nuevo:true} | {usuario obj}
  const [formUsuario, setFormUsuario] = useState({nombre:"",pin:"",area:"",rol:"trabajador",notas:"",activo:true,areas_extra:[]});
  const [pinVisible, setPinVisible] = useState(false);
  const [errorForm, setErrorForm] = useState("");
  const [guardandoUsuario, setGuardandoUsuario] = useState(false);

  const esAdmin = usuario?.rol === "admin";
  const esGerenteOAdmin = usuario?.rol === "admin" || usuario?.rol === "gerente";
  // Roles que ven TODAS las áreas (en subpestañas) y auto-aprueban
  const esMultiArea = usuario?.rol === "admin" || usuario?.rol === "gerente" || usuario?.rol === "subgerente";
  // Roles que pueden gestionar usuarios (admin y gerente)
  const puedeGestionarUsuarios = usuario?.rol === "admin" || usuario?.rol === "gerente";
  // Áreas que este usuario puede ver en la pestaña Solicitar:
  // admin/gerente/subgerente ven todas; trabajadores ven su área + sus áreas extra.
  const areasVisibles = usuario
    ? (esMultiArea ? AREAS : [usuario.area, ...parseAreasExtra(usuario).filter(a => a !== usuario.area)])
    : [];
  const vistaMultiple = areasVisibles.length > 1;
  // Área que se está mostrando en la pestaña Solicitar
  const areaMostrada = vistaMultiple
    ? (areaActiva && areasVisibles.includes(areaActiva) ? areaActiva : (usuario?.area || areasVisibles[0]))
    : usuario?.area;
  const productosArea = areaMostrada ? (PRODUCTOS_AREA[areaMostrada] || []) : [];
  const productosFiltrados = productosArea.filter(p =>
    !busq || p.nombre.toLowerCase().includes(busq.toLowerCase())
  );

  useEffect(() => {
    cargarDatos();
  }, []);

  async function cargarDatos() {
    setCargando(true);
    const [rU, rS] = await Promise.all([
      supabase.from("usuarios_cocina").select("*").order("nombre"),
      supabase.from("solicitudes_cocina").select("*").order("creado_en", {ascending: false}).limit(200),
    ]);
    if (rU.data) setUsuarios(rU.data);
    if (rS.data) setSolicitudes(rS.data);
    setCargando(false);
  }

  function login() {
    const u = usuarios.find(x => x.nombre === nombreSel && x.activo);
    if (!u) { setErrorLogin("Usuario no encontrado o inactivo"); return; }
    if (u.pin !== pinInput) { setErrorLogin("PIN incorrecto"); setPinInput(""); return; }
    setUsuario(u);
    setAreaActiva(u.area || AREAS[0]);
    setModalLogin(false);
    setErrorLogin("");
    setPinInput("");
  }

  function logout() {
    setUsuario(null);
    setNombreSel("");
    setPinInput("");
    setCarrito({});
    setNotaGeneral("");
    setTab("solicitar");
    setModalLogin(true);
  }

  // ===== DESCUENTO DE INVENTARIO POR ID (núcleo del arreglo) =====
  // Descuenta del inventario los items aprobados, usando el id real del producto.
  // Si un item no tiene id (frutas/preparados tema futuro), se salta el descuento.
  async function descontarInventario(items, cantidades, sol) {
    for (const item of items) {
      const cantFinal = cantidades ? (cantidades[item.nombre] ?? item.cantidad) : item.cantidad;
      if (cantFinal <= 0) continue;

      // Buscar el id: primero el que viene guardado en el item, si no, en la lista
      let idInv = item.id;
      if (!idInv) {
        const prod = buscarProducto(item.area || sol.area, item.nombre);
        idInv = prod ? prod.id : null;
      }
      // Sin id => producto no rastreado en inventario (tema futuro). Saltar.
      if (!idInv) continue;

      // Leer cantidad actual del producto
      const {data: invRows} = await supabase
        .from("inventario")
        .select("id,cantidad,nombre")
        .eq("id", idInv)
        .limit(1);
      if (!invRows || invRows.length === 0) continue;

      const prod = invRows[0];
      // Para productos grameables: descontar los gramos servidos, no la cantidad de botes
      const esGram = esRellenable(item.area || sol.area, item.nombre);
      const aDescontar = (esGram && item.gramos) ? +item.gramos : cantFinal;
      const nuevaCant = Math.max(0, prod.cantidad - aDescontar);

      await supabase.from("inventario").update({cantidad: nuevaCant}).eq("id", prod.id);
      await supabase.from("historial").insert({
        producto_id: prod.id,
        nombre: prod.nombre,
        unidad: item.unidad,
        tipo: "consumo",
        cantidad: aDescontar,
        antes: prod.cantidad,
        despues: nuevaCant,
        fecha: new Date().toISOString(),
        usuario: `${usuario.nombre} (Cocina - ${sol.area})`,
      });
    }
  }

  async function enviarSolicitud(urgente = false) {
    if (Object.keys(carrito).length === 0) return;

    // Validar gramos en productos rellenables antes de enviar
    const faltaGramos = Object.values(carrito).find(v =>
      v.cantidad > 0 && esRellenable(v.area || usuario.area, v.nombre) && (!v.gramos || +v.gramos <= 0)
    );
    if (faltaGramos) {
      alert(`Falta indicar los gramos servidos de "${faltaGramos.nombre}". Es obligatorio para llevar el control del bote.`);
      return;
    }

    setEnviando(true);
    // Cada item del carrito ya trae su area (para multi-área) y su id
    const items = Object.values(carrito)
      .filter(v => v.cantidad > 0)
      .map(v => {
        const item = {nombre: v.nombre, id: v.id || null, unidad: v.unidad, cantidad: v.cantidad, nota: v.nota || "", area: v.area || usuario.area};
        if (esRellenable(item.area, item.nombre) && v.gramos) item.gramos = +v.gramos;
        return item;
      });
    if (items.length === 0) { setEnviando(false); return; }

    // Auto-aprobación con registro (Opción D): admin/gerente/subgerente aprueban solos
    const autoAprobar = esMultiArea;
    const ahora = new Date().toISOString();

    const sol = {
      usuario_id: usuario.id,
      usuario_nombre: usuario.nombre,
      area: usuario.area,
      items: JSON.stringify(items),
      nota_general: notaGeneral,
      urgente,
      estado: autoAprobar ? "aprobada" : "pendiente",
      creado_en: ahora,
    };
    if (autoAprobar) {
      sol.aprobado_por = `${usuario.nombre} (auto · ${usuario.rol})`;
      sol.aprobado_en = ahora;
    }

    const {data, error} = await supabase.from("solicitudes_cocina").insert(sol).select().single();
    if (!error && data) {
      setSolicitudes(s => [data, ...s]);

      // [DESACTIVADO] Descuento de inventario apagado temporalmente.
      // El gerente/subgerente surte de bodega manualmente.
      // Para reactivar: descomentar la línea de abajo.
      // if (autoAprobar) { await descontarInventario(items, null, data); }

      // Agrupar productos por área para el mensaje
      const porArea = {};
      items.forEach(i => {
        if (!porArea[i.area]) porArea[i.area] = [];
        porArea[i.area].push(i);
      });

      const emoji = urgente ? "🚨 URGENTE 🚨" : "📋 Nueva solicitud";
      let msg = `${emoji}\n\n`;
      msg += `👤 ${usuario.nombre} — ${AREA_EMOJIS[usuario.area]||""} ${usuario.area}\n`;
      msg += `📅 ${new Date().toLocaleString("es-MX")}\n`;
      if (autoAprobar) msg += `✅ Auto-aprobada\n`;
      msg += `\n📦 LE FALTA:\n`;
      Object.entries(porArea).forEach(([area, prods]) => {
        msg += `\n${AREA_EMOJIS[area]||""} ${area.toUpperCase()}:\n`;
        prods.forEach(i => {
          msg += `• ${i.nombre}: ${i.cantidad} ${i.unidad}`;
          if (i.gramos) msg += ` (⚖️ ${i.gramos} gr servidos)`;
          if (i.nota) msg += ` (${i.nota})`;
          msg += "\n";
        });
      });
      if (notaGeneral) msg += `\n💬 Nota: ${notaGeneral}`;
      window.open(`https://wa.me/${TU_NUMERO}?text=${encodeURIComponent(msg)}`, "_blank");
      setCarrito({});
      setNotaGeneral("");
      setTab("pendientes");
    }
    setEnviando(false);
  }

  async function reportarAgotado() {
    if (!prodAgotado) return;
    const msg = `📭 PRODUCTO AGOTADO\n\n👤 ${usuario.nombre} — ${AREA_EMOJIS[usuario.area]} ${usuario.area}\n📦 ${prodAgotado}\n${notaAgotado ? `💬 ${notaAgotado}` : ""}\n📅 ${new Date().toLocaleString("es-MX")}`;
    window.open(`https://wa.me/${TU_NUMERO}?text=${encodeURIComponent(msg)}`, "_blank");
    await supabase.from("solicitudes_cocina").insert({
      usuario_id: usuario.id,
      usuario_nombre: usuario.nombre,
      area: usuario.area,
      items: JSON.stringify([{nombre: prodAgotado, unidad:"", cantidad:0, nota: notaAgotado}]),
      nota_general: "PRODUCTO AGOTADO EN TURNO",
      urgente: true,
      estado: "agotado",
      creado_en: new Date().toISOString(),
    });
    await cargarDatos();
    setModalAgotado(false);
    setProdAgotado("");
    setNotaAgotado("");
  }

  async function accionSolicitud(id, estado, cantidades = null, motivo = "") {
    const sol = solicitudes.find(s => s.id === id);
    if (!sol) return;

    const updates = {estado, aprobado_por: usuario.nombre, aprobado_en: new Date().toISOString()};
    if (motivo) updates.motivo_rechazo = motivo;

    if (estado === "aprobada" || estado === "ajustada") {
      // [DESACTIVADO] Descuento de inventario apagado temporalmente.
      // El gerente/subgerente surte de bodega manualmente.
      // Para reactivar: descomentar la línea de descontarInventario.
      // const items = JSON.parse(sol.items);
      // await descontarInventario(items, cantidades, sol);
      if (cantidades) updates.items_ajustados = JSON.stringify(cantidades);
    }

    await supabase.from("solicitudes_cocina").update(updates).eq("id", id);
    setSolicitudes(s => s.map(x => x.id === id ? {...x, ...updates} : x));
    setModalAprobar(null);
    setCantAjuste({});
    setMotivoRechazo("");
  }

  async function solicitarNuevoProducto() {
    if (!formNuevoProd.nombre) return;
    const msg = `🆕 SOLICITUD NUEVO PRODUCTO\n\n👤 ${usuario.nombre} — ${AREA_EMOJIS[usuario.area]} ${usuario.area}\n📦 ${formNuevoProd.nombre} (${formNuevoProd.unidad})\n💬 ${formNuevoProd.nota || "Sin nota"}\n📅 ${new Date().toLocaleString("es-MX")}`;
    window.open(`https://wa.me/${TU_NUMERO}?text=${encodeURIComponent(msg)}`, "_blank");
    setModalNuevoProd(false);
    setFormNuevoProd({nombre:"",unidad:"",nota:""});
  }

  // ===== FUNCIONES PANEL USUARIOS =====
  function abrirModalNuevoUsuario() {
    setFormUsuario({nombre:"",pin:"",area:AREAS[0],rol:"trabajador",notas:"",activo:true,areas_extra:[]});
    setModalUsuario({nuevo:true});
    setPinVisible(false);
    setErrorForm("");
  }

  function abrirModalEditarUsuario(u) {
    setFormUsuario({
      nombre: u.nombre || "",
      pin: u.pin || "",
      area: u.area || AREAS[0],
      rol: u.rol || "trabajador",
      notas: u.notas || "",
      activo: u.activo !== false,
      areas_extra: parseAreasExtra(u),
    });
    setModalUsuario(u);
    setPinVisible(false);
    setErrorForm("");
  }

  function toggleAreaExtra(a) {
    setFormUsuario(f => {
      const ya = f.areas_extra.includes(a);
      return {...f, areas_extra: ya ? f.areas_extra.filter(x => x !== a) : [...f.areas_extra, a]};
    });
  }

  async function guardarUsuario() {
    // Validaciones
    if (!formUsuario.nombre.trim()) { setErrorForm("El nombre es obligatorio"); return; }
    if (!formUsuario.pin.trim() || formUsuario.pin.length < 4) { setErrorForm("El PIN debe tener al menos 4 dígitos"); return; }
    if (!/^\d+$/.test(formUsuario.pin)) { setErrorForm("El PIN debe ser solo números"); return; }
    if (!formUsuario.area) { setErrorForm("Selecciona un área"); return; }
    
    // Verificar nombre duplicado
    const duplicado = usuarios.find(u => 
      u.nombre.toLowerCase() === formUsuario.nombre.trim().toLowerCase() && 
      (!modalUsuario.id || u.id !== modalUsuario.id)
    );
    if (duplicado) { setErrorForm("Ya existe un usuario con ese nombre"); return; }

    setGuardandoUsuario(true);
    
    const datos = {
      nombre: formUsuario.nombre.trim(),
      pin: formUsuario.pin.trim(),
      area: formUsuario.area,
      rol: formUsuario.rol,
      notas: formUsuario.notas.trim(),
      activo: formUsuario.activo,
      areas_extra: formUsuario.areas_extra.filter(a => a !== formUsuario.area).join(","),
    };

    if (modalUsuario.nuevo) {
      // Generar ID único basado en timestamp + random para evitar colisiones
      datos.id = Date.now() + Math.floor(Math.random() * 1000);
      const {data, error} = await supabase.from("usuarios_cocina").insert(datos).select().single();
      if (error) { setErrorForm("Error al crear: " + error.message); setGuardandoUsuario(false); return; }
      if (data) setUsuarios(u => [...u, data].sort((a,b) => a.nombre.localeCompare(b.nombre)));
    } else {
      const {error} = await supabase.from("usuarios_cocina").update(datos).eq("id", modalUsuario.id);
      if (error) { setErrorForm("Error al actualizar: " + error.message); setGuardandoUsuario(false); return; }
      setUsuarios(u => u.map(x => x.id === modalUsuario.id ? {...x, ...datos} : x).sort((a,b) => a.nombre.localeCompare(b.nombre)));
    }

    setGuardandoUsuario(false);
    setModalUsuario(null);
    setPinVisible(false);
  }

  async function toggleActivoUsuario(u) {
    if (u.id === usuario.id) { 
      alert("No puedes desactivarte a ti mismo"); 
      return; 
    }
    const nuevoEstado = !u.activo;
    const confirmar = window.confirm(`¿${nuevoEstado ? "Activar" : "Desactivar"} a ${u.nombre}?`);
    if (!confirmar) return;
    
    await supabase.from("usuarios_cocina").update({activo: nuevoEstado}).eq("id", u.id);
    setUsuarios(us => us.map(x => x.id === u.id ? {...x, activo: nuevoEstado} : x));
    setModalUsuario(null);
  }

  const misSolicitudes = solicitudes.filter(s => s.usuario_id === usuario?.id);
  const todasPendientes = solicitudes.filter(s => s.estado === "pendiente");

  // Usuarios filtrados para el panel
  const usuariosFiltrados = usuarios.filter(u => {
    if (!mostrarInactivos && !u.activo) return false;
    if (filtroAreaUsuarios && u.area !== filtroAreaUsuarios) return false;
    if (busqUsuarios && !u.nombre.toLowerCase().includes(busqUsuarios.toLowerCase())) return false;
    return true;
  });

  const totalActivos = usuarios.filter(u => u.activo).length;
  const totalInactivos = usuarios.filter(u => !u.activo).length;

  const inp = {width:"100%",background:"rgba(7,10,18,0.8)",border:`1px solid ${C.border}`,borderRadius:"10px",padding:"10px 13px",color:C.text,fontFamily:"inherit",fontSize:"14px",outline:"none",boxSizing:"border-box"};
  const btnP = {background:"linear-gradient(135deg,#7dd3fc,#818cf8)",border:"none",color:"#060810",padding:"10px 18px",borderRadius:"10px",cursor:"pointer",fontFamily:"inherit",fontWeight:"700",fontSize:"13px",boxShadow:"0 0 20px rgba(125,211,252,0.2)"};
  const btnG = {background:"rgba(13,17,23,0.8)",border:`1px solid ${C.border}`,color:C.muted,padding:"9px 14px",borderRadius:"10px",cursor:"pointer",fontFamily:"inherit",fontSize:"13px"};
  const lbl = {fontSize:"10px",color:"rgba(125,211,252,0.5)",textTransform:"uppercase",letterSpacing:"2px",display:"block",marginBottom:"5px",fontWeight:"500"};

  if (cargando) return (
    <div style={{minHeight:"100vh",background:C.bg,display:"flex",alignItems:"center",justifyContent:"center",color:C.accent,fontFamily:"'Outfit',sans-serif",fontSize:"16px"}}>
      <div style={{textAlign:"center"}}>
        <div style={{fontSize:"40px",marginBottom:"12px"}}>🧇</div>
        <div>Cargando Cocina Waffleland...</div>
      </div>
    </div>
  );

  return (
    <div style={{minHeight:"100vh",background:`linear-gradient(135deg,${C.bg} 0%,#080d1a 50%,${C.bg} 100%)`,color:C.text,fontFamily:"'Outfit','Segoe UI',sans-serif"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        *{box-sizing:border-box}
        ::-webkit-scrollbar{width:3px}
        ::-webkit-scrollbar-thumb{background:linear-gradient(180deg,#7dd3fc,#818cf8);border-radius:4px}
        select option{background:#0d1117}
        @keyframes holo{0%,100%{border-color:rgba(125,211,252,0.2)}50%{border-color:rgba(167,139,250,0.2)}}
        .holo{animation:holo 3s ease-in-out infinite}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.6}}
        .pulse{animation:pulse 2s ease-in-out infinite}
      `}</style>

      {/* ===== LOGIN ===== */}
      {modalLogin && (
        <div style={{position:"fixed",inset:0,background:"rgba(0,5,15,0.97)",zIndex:300,display:"flex",alignItems:"center",justifyContent:"center",padding:"16px"}}>
          <div style={{background:"rgba(8,12,22,0.98)",border:"1px solid rgba(125,211,252,0.2)",borderRadius:"20px",padding:"32px 24px",width:"100%",maxWidth:"380px",textAlign:"center",boxShadow:"0 0 60px rgba(125,211,252,0.1)"}}>
            <div style={{fontSize:"48px",marginBottom:"8px"}}>🧇</div>
            <div style={{fontWeight:"800",fontSize:"22px",color:C.accent,marginBottom:"4px"}}>Cocina Waffleland</div>
            <div style={{fontSize:"13px",color:C.muted,marginBottom:"28px"}}>Identifícate para continuar</div>

            <select value={nombreSel} onChange={e=>{setNombreSel(e.target.value);setPinInput("");setErrorLogin("");}}
              style={{...inp,marginBottom:"10px",cursor:"pointer",textAlign:"center"}}>
              <option value="">Selecciona tu nombre...</option>
              {usuarios.filter(u => u.activo).map(u=><option key={u.id} value={u.nombre}>{AREA_EMOJIS[u.area]||"👤"} {u.nombre} — {u.area}</option>)}
            </select>

            {nombreSel && (
              <input type="password" placeholder="Tu PIN..." value={pinInput}
                onChange={e=>{setPinInput(e.target.value);setErrorLogin("");}}
                onKeyDown={e=>e.key==="Enter"&&login()}
                style={{...inp,marginBottom:"8px",textAlign:"center",letterSpacing:"8px",fontSize:"20px"}}
                autoFocus
              />
            )}

            {errorLogin && <div style={{color:C.danger,fontSize:"12px",marginBottom:"8px"}}>{errorLogin}</div>}

            <button onClick={login} disabled={!nombreSel||!pinInput}
              style={{...btnP,width:"100%",opacity:nombreSel&&pinInput?1:0.4,marginTop:"8px"}}>
              Entrar
            </button>
          </div>
        </div>
      )}

      {/* ===== TOP BAR ===== */}
      {usuario && (
        <>
        <div style={{background:"rgba(6,8,16,0.95)",backdropFilter:"blur(20px)",borderBottom:`1px solid ${C.border}`,padding:"10px 16px",position:"sticky",top:0,zIndex:100}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px"}}>
            <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
              <div style={{fontSize:"24px"}}>{AREA_EMOJIS[usuario.area]}</div>
              <div>
                <div style={{fontWeight:"800",fontSize:"14px",color:C.accent}}>{usuario.nombre}</div>
                <div style={{fontSize:"10px",color:C.muted}}>{usuario.area} · {usuario.rol}</div>
              </div>
            </div>
            <div style={{display:"flex",gap:"6px",alignItems:"center"}}>
              {todasPendientes.length>0&&esGerenteOAdmin&&(
                <div style={{background:"#f8717120",border:"1px solid #f8717140",borderRadius:"6px",padding:"3px 8px",fontSize:"10px",color:C.danger,fontWeight:"700"}} className="pulse">
                  {todasPendientes.length} pendiente{todasPendientes.length!==1?"s":""}
                </div>
              )}
              <button onClick={()=>setModalAgotado(true)} style={{...btnG,fontSize:"11px",padding:"6px 10px",color:"#fb923c",borderColor:"rgba(251,146,60,0.3)"}}>📭 Agotado</button>
              <button onClick={logout} style={{...btnG,fontSize:"11px",padding:"6px 10px"}}>🚪</button>
            </div>
          </div>
        </div>

        {/* ===== TABS ===== */}
        <div style={{background:"rgba(6,8,16,0.95)",backdropFilter:"blur(20px)",borderBottom:`1px solid ${C.border}`,display:"flex",overflowX:"auto"}}>
          {[
            {id:"solicitar",label:"📋 Solicitar"},
            {id:"pendientes",label:`⏳ Mis pedidos${misSolicitudes.filter(s=>s.estado==="pendiente").length>0?" ("+misSolicitudes.filter(s=>s.estado==="pendiente").length+")":""}`},
            ...(esGerenteOAdmin?[{id:"aprobar",label:`✅ Aprobar${todasPendientes.length>0?" ("+todasPendientes.length+")":""}`},{id:"historial",label:"📊 Historial"}]:[]),
            ...(puedeGestionarUsuarios?[{id:"usuarios",label:"👥 Usuarios"}]:[]),
          ].map(t=>(
            <button key={t.id} onClick={()=>setTab(t.id)} style={{padding:"10px 14px",border:"none",background:"transparent",color:tab===t.id?C.accent:C.muted,cursor:"pointer",fontFamily:"inherit",fontWeight:tab===t.id?"700":"400",fontSize:"12px",whiteSpace:"nowrap",borderBottom:tab===t.id?`2px solid ${C.accent}`:"2px solid transparent",textShadow:tab===t.id?"0 0 10px rgba(125,211,252,0.5)":"none"}}>
              {t.label}
            </button>
          ))}
        </div>

        {/* ===== SOLICITAR ===== */}
        {tab==="solicitar"&&(
          <div style={{padding:"16px 16px 120px"}}>
            {/* Subpestañas de área (multi-área por rol o por áreas extra) */}
            {vistaMultiple&&(
              <div style={{display:"flex",gap:"6px",overflowX:"auto",marginBottom:"12px",paddingBottom:"4px"}}>
                {areasVisibles.map(a=>{
                  const itemsArea = Object.values(carrito).filter(v=>v.area===a&&v.cantidad>0).length;
                  const activa = areaMostrada===a;
                  return(
                    <button key={a} onClick={()=>{setAreaActiva(a);setBusq("");}}
                      style={{padding:"7px 12px",borderRadius:"10px",border:`1px solid ${activa?"rgba(125,211,252,0.4)":C.border}`,background:activa?"rgba(125,211,252,0.15)":"rgba(13,17,23,0.8)",color:activa?C.accent:C.muted,cursor:"pointer",fontFamily:"inherit",fontSize:"12px",fontWeight:activa?"700":"400",whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:"5px"}}>
                      {AREA_EMOJIS[a]} {a}
                      {itemsArea>0&&<span style={{background:C.accent,color:C.bg,borderRadius:"10px",padding:"0px 6px",fontSize:"10px",fontWeight:"700"}}>{itemsArea}</span>}
                    </button>
                  );
                })}
              </div>
            )}

            <div style={{display:"flex",gap:"8px",marginBottom:"14px"}}>
              <input placeholder="🔍 Buscar producto..." value={busq} onChange={e=>setBusq(e.target.value)}
                style={{...inp,flex:1}}/>
              <button onClick={()=>setModalNuevoProd(true)} style={{...btnG,fontSize:"12px",padding:"9px 12px",color:C.info,borderColor:"rgba(129,140,248,0.3)",whiteSpace:"nowrap"}}>+ Nuevo</button>
            </div>

            {vistaMultiple&&(
              <div style={{fontSize:"11px",color:C.muted,marginBottom:"10px"}}>
                Mostrando productos de <span style={{color:C.accent,fontWeight:"600"}}>{AREA_EMOJIS[areaMostrada]} {areaMostrada}</span>
              </div>
            )}

            <div style={{display:"grid",gap:"8px",marginBottom:"16px"}}>
              {productosFiltrados.map(p=>{
                const key = areaMostrada + "||" + p.nombre;
                const qty = carrito[key]?.cantidad || 0;
                return(
                  <div key={key} style={{background:"rgba(13,17,23,0.8)",border:`1px solid ${qty>0?"rgba(125,211,252,0.3)":C.border}`,borderRadius:"12px",padding:"12px 14px",backdropFilter:"blur(10px)"}}>
                    <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                      <div style={{flex:1}}>
                        <div style={{fontSize:"13px",fontWeight:"600"}}>{p.nombre}</div>
                      </div>
                      <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                        <div style={{fontSize:"10px",color:C.muted,textAlign:"right",lineHeight:"1.2",whiteSpace:"nowrap"}}>Óptimo<br/><span style={{color:C.accent,fontWeight:"700",fontSize:"12px"}}>{p.optimo} {p.unidad}</span></div>
                        <button onClick={()=>setCarrito(c=>({...c,[key]:{...c[key],nombre:p.nombre,id:p.id,area:areaMostrada,unidad:p.unidad,cantidad:Math.max(0,(c[key]?.cantidad||0)-1)}}))}
                          style={{background:"rgba(248,113,113,0.2)",border:"none",color:C.danger,width:"28px",height:"28px",borderRadius:"7px",cursor:"pointer",fontSize:"16px",fontWeight:"700"}}>−</button>
                        <div style={{background:qty>0?"rgba(125,211,252,0.15)":"rgba(255,255,255,0.05)",border:`1px solid ${qty>0?"rgba(125,211,252,0.3)":"rgba(255,255,255,0.1)"}`,borderRadius:"8px",padding:"4px 10px",fontFamily:"'JetBrains Mono',monospace",fontWeight:"600",color:qty>0?C.accent:C.muted,fontSize:"13px",minWidth:"64px",textAlign:"center"}}>
                          {qty} {p.unidad}
                        </div>
                        <button onClick={()=>setCarrito(c=>({...c,[key]:{...c[key],nombre:p.nombre,id:p.id,area:areaMostrada,unidad:p.unidad,cantidad:(c[key]?.cantidad||0)+1}}))}
                          style={{background:"rgba(52,211,153,0.2)",border:"none",color:C.success,width:"28px",height:"28px",borderRadius:"7px",cursor:"pointer",fontSize:"16px",fontWeight:"700"}}>+</button>
                      </div>
                    </div>
                    {qty>0&&esRellenable(areaMostrada,p.nombre)&&(
                      <div style={{marginTop:"8px",background:"rgba(251,191,36,0.08)",border:`1px solid ${(carrito[key]?.gramos&&+carrito[key].gramos>0)?"rgba(251,191,36,0.3)":"rgba(251,191,36,0.5)"}`,borderRadius:"8px",padding:"8px 10px"}}>
                        <div style={{fontSize:"10px",color:C.warn,fontWeight:"600",marginBottom:"5px"}}>⚖️ ¿Cuántos gramos agarraste del bote? *</div>
                        <div style={{display:"flex",alignItems:"center",gap:"6px"}}>
                          <input type="number" min="0" inputMode="numeric" placeholder="Ej. 350"
                            value={carrito[key]?.gramos||""}
                            onChange={e=>setCarrito(c=>({...c,[key]:{...c[key],gramos:e.target.value.replace(/\D/g,"")}}))}
                            style={{...inp,fontSize:"13px",padding:"6px 10px",fontFamily:"'JetBrains Mono',monospace",textAlign:"center"}}/>
                          <span style={{fontSize:"12px",color:C.muted,minWidth:"34px"}}>gr</span>
                        </div>
                      </div>
                    )}
                    {qty>0&&(
                      <input placeholder="Nota (opcional)..." value={carrito[key]?.nota||""}
                        onChange={e=>setCarrito(c=>({...c,[key]:{...c[key],nota:e.target.value}}))}
                        style={{...inp,marginTop:"8px",fontSize:"11px",padding:"6px 10px",color:C.muted}}/>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ===== PENDIENTES ===== */}
        {tab==="pendientes"&&(
          <div style={{padding:"16px 16px 40px"}}>
            <div style={{fontWeight:"700",fontSize:"15px",marginBottom:"4px"}}>Mis Pedidos</div>
            <div style={{fontSize:"11px",color:C.muted,marginBottom:"16px"}}>Estado de tus solicitudes</div>
            {misSolicitudes.length===0?(
              <div style={{textAlign:"center",color:C.muted,padding:"40px 20px",fontSize:"13px"}}>No tienes solicitudes aún</div>
            ):misSolicitudes.map(s=>{
              const items = JSON.parse(s.items||"[]");
              const est = ESTADOS[s.estado]||ESTADOS.pendiente;
              return(
                <div key={s.id} style={{background:"rgba(13,17,23,0.8)",border:`1px solid ${est.color}30`,borderRadius:"12px",padding:"14px",marginBottom:"10px"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px"}}>
                    <div>
                      <div style={{fontSize:"12px",color:C.muted}}>{new Date(s.creado_en).toLocaleString("es-MX")}</div>
                      {s.urgente&&<div style={{fontSize:"10px",color:C.danger,fontWeight:"700"}}>🚨 URGENTE</div>}
                    </div>
                    <div style={{background:est.bg,border:`1px solid ${est.color}40`,borderRadius:"6px",padding:"3px 10px",fontSize:"11px",fontWeight:"700",color:est.color}}>{est.label}</div>
                  </div>
                  {(()=>{const ajustes=s.items_ajustados?JSON.parse(s.items_ajustados):null;return items.map((i,idx)=>{
                    const tieneAjuste = ajustes && (ajustes[i.nombre]!==undefined) && (+ajustes[i.nombre]!==+i.cantidad);
                    const cantAjustada = ajustes ? ajustes[i.nombre] : null;
                    return(
                    <div key={idx} style={{display:"flex",justifyContent:"space-between",padding:"4px 0",borderBottom:`1px solid ${C.border}`,fontSize:"12px"}}>
                      <span>{i.area&&i.area!==s.area?`${AREA_EMOJIS[i.area]||""} `:""}{i.nombre}{i.gramos?<span style={{color:C.warn,fontSize:"10px"}}> ⚖️{i.gramos}gr</span>:null}</span>
                      {tieneAjuste?(
                        <span style={{fontFamily:"'JetBrains Mono',monospace"}}>
                          <span style={{color:C.muted,textDecoration:"line-through"}}>{i.cantidad}</span>
                          <span style={{color:C.info}}> → {cantAjustada} {i.unidad}</span>
                        </span>
                      ):(
                        <span style={{fontFamily:"'JetBrains Mono',monospace",color:C.accent}}>{i.cantidad} {i.unidad}</span>
                      )}
                    </div>
                    );
                  });})()}
                  {s.motivo_rechazo&&<div style={{fontSize:"11px",color:C.danger,marginTop:"8px"}}>❌ {s.motivo_rechazo}</div>}
                  {s.aprobado_por&&s.estado!=="rechazada"&&<div style={{fontSize:"10px",color:C.muted,marginTop:"6px"}}>✅ Aprobado por {s.aprobado_por}</div>}
                </div>
              );
            })}
          </div>
        )}

        {/* ===== APROBAR (Admin/Gerente) ===== */}
        {tab==="aprobar"&&esGerenteOAdmin&&(
          <div style={{padding:"16px 16px 40px"}}>
            <div style={{fontWeight:"700",fontSize:"15px",marginBottom:"4px"}}>Solicitudes Pendientes</div>
            <div style={{fontSize:"11px",color:C.muted,marginBottom:"16px"}}>Aprueba, ajusta o rechaza cada solicitud</div>
            {todasPendientes.length===0?(
              <div style={{textAlign:"center",color:C.muted,padding:"40px 20px",fontSize:"13px"}}>✅ No hay solicitudes pendientes</div>
            ):todasPendientes.map(s=>{
              const items = JSON.parse(s.items||"[]");
              return(
                <div key={s.id} style={{background:"rgba(13,17,23,0.8)",border:`1px solid ${s.urgente?"rgba(248,113,113,0.3)":C.border}`,borderRadius:"12px",padding:"14px",marginBottom:"10px"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"10px"}}>
                    <div>
                      <div style={{fontWeight:"700",fontSize:"13px",color:s.urgente?C.danger:C.accent}}>{AREA_EMOJIS[s.area]} {s.area}</div>
                      <div style={{fontSize:"11px",color:C.muted}}>👤 {s.usuario_nombre} · {new Date(s.creado_en).toLocaleString("es-MX")}</div>
                      {s.urgente&&<div style={{fontSize:"10px",color:C.danger,fontWeight:"700"}} className="pulse">🚨 URGENTE</div>}
                    </div>
                    <button onClick={()=>{setModalAprobar(s);const init={};items.forEach(i=>init[i.nombre]=i.cantidad);setCantAjuste(init);}}
                      style={{...btnP,fontSize:"12px",padding:"7px 12px"}}>Gestionar</button>
                  </div>
                  {items.map((i,idx)=>(
                    <div key={idx} style={{display:"flex",justifyContent:"space-between",padding:"4px 0",borderBottom:`1px solid ${C.border}`,fontSize:"12px"}}>
                      <span>{i.area&&i.area!==s.area?`${AREA_EMOJIS[i.area]||""} `:""}{i.nombre}{i.gramos?<span style={{color:C.warn,fontSize:"10px"}}> ⚖️{i.gramos}gr</span>:null}</span>
                      <span style={{fontFamily:"'JetBrains Mono',monospace",color:C.accent}}>{i.cantidad} {i.unidad}</span>
                    </div>
                  ))}
                  {s.nota_general&&<div style={{fontSize:"11px",color:C.muted,marginTop:"8px",fontStyle:"italic"}}>💬 {s.nota_general}</div>}
                </div>
              );
            })}
          </div>
        )}

        {/* ===== HISTORIAL (Admin/Gerente) ===== */}
        {tab==="historial"&&esGerenteOAdmin&&(
          <div style={{padding:"16px 16px 40px"}}>
            <div style={{fontWeight:"700",fontSize:"15px",marginBottom:"4px"}}>Historial Completo</div>
            <div style={{fontSize:"11px",color:C.muted,marginBottom:"16px"}}>Todas las solicitudes del equipo</div>
            {solicitudes.map(s=>{
              const items = JSON.parse(s.items||"[]");
              const est = ESTADOS[s.estado]||ESTADOS.pendiente;
              return(
                <div key={s.id} style={{background:"rgba(13,17,23,0.8)",border:`1px solid ${est.color}20`,borderRadius:"12px",padding:"12px 14px",marginBottom:"8px"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"6px"}}>
                    <div>
                      <div style={{fontSize:"12px",fontWeight:"700"}}>{AREA_EMOJIS[s.area]} {s.area} — {s.usuario_nombre}</div>
                      <div style={{fontSize:"10px",color:C.muted}}>{new Date(s.creado_en).toLocaleString("es-MX")}</div>
                    </div>
                    <div style={{background:est.bg,border:`1px solid ${est.color}40`,borderRadius:"6px",padding:"2px 8px",fontSize:"10px",fontWeight:"700",color:est.color}}>{est.label}</div>
                  </div>
                  <div style={{fontSize:"11px",color:C.muted}}>{items.map(i=>`${i.nombre} (${i.cantidad} ${i.unidad}${i.gramos?` ⚖️${i.gramos}gr`:""})`).join(" · ")}</div>
                  {s.aprobado_por&&<div style={{fontSize:"10px",color:C.muted,marginTop:"4px"}}>Por: {s.aprobado_por}</div>}
                </div>
              );
            })}
          </div>
        )}

        {/* ===== PANEL USUARIOS (Admin y Gerente) ===== */}
        {tab==="usuarios"&&puedeGestionarUsuarios&&(
          <div style={{padding:"16px 16px 40px"}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"14px",flexWrap:"wrap",gap:"8px"}}>
              <div>
                <div style={{fontWeight:"700",fontSize:"15px"}}>Gestión de Usuarios</div>
                <div style={{fontSize:"11px",color:C.muted}}>
                  <span style={{color:C.success,fontWeight:"600"}}>{totalActivos} activo{totalActivos!==1?"s":""}</span>
                  {totalInactivos>0&&<> · <span style={{color:C.muted}}>{totalInactivos} inactivo{totalInactivos!==1?"s":""}</span></>}
                </div>
              </div>
              <button onClick={abrirModalNuevoUsuario} style={{...btnP,fontSize:"12px",padding:"8px 14px"}}>+ Agregar usuario</button>
            </div>

            {/* Filtros */}
            <div style={{display:"grid",gridTemplateColumns:"1fr auto",gap:"8px",marginBottom:"10px"}}>
              <input placeholder="🔍 Buscar por nombre..." value={busqUsuarios} onChange={e=>setBusqUsuarios(e.target.value)} style={{...inp,fontSize:"13px"}}/>
              <select value={filtroAreaUsuarios} onChange={e=>setFiltroAreaUsuarios(e.target.value)} style={{...inp,fontSize:"13px",cursor:"pointer",width:"auto",minWidth:"140px"}}>
                <option value="">Todas las áreas</option>
                {AREAS.map(a=><option key={a} value={a}>{AREA_EMOJIS[a]} {a}</option>)}
              </select>
            </div>

            <label style={{display:"flex",alignItems:"center",gap:"6px",fontSize:"12px",color:C.muted,marginBottom:"16px",cursor:"pointer"}}>
              <input type="checkbox" checked={mostrarInactivos} onChange={e=>setMostrarInactivos(e.target.checked)} style={{cursor:"pointer"}}/>
              Mostrar usuarios inactivos
            </label>

            {/* Lista de usuarios */}
            {usuariosFiltrados.length===0?(
              <div style={{textAlign:"center",color:C.muted,padding:"40px 20px",fontSize:"13px"}}>No hay usuarios que coincidan</div>
            ):usuariosFiltrados.map(u=>(
              <div key={u.id} style={{background:"rgba(13,17,23,0.8)",border:`1px solid ${u.activo?C.border:"rgba(248,113,113,0.2)"}`,borderRadius:"12px",padding:"12px 14px",marginBottom:"8px",opacity:u.activo?1:0.6}}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"10px",marginBottom:u.notas?"6px":0}}>
                  <div style={{display:"flex",alignItems:"center",gap:"10px",flex:1,minWidth:0}}>
                    <div style={{fontSize:"22px"}}>{AREA_EMOJIS[u.area]||"👤"}</div>
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{display:"flex",alignItems:"center",gap:"6px",flexWrap:"wrap"}}>
                        <div style={{fontWeight:"700",fontSize:"13px"}}>{u.nombre}</div>
                        {!u.activo&&<span style={{fontSize:"9px",color:C.danger,background:"rgba(248,113,113,0.15)",padding:"1px 6px",borderRadius:"4px",fontWeight:"700"}}>INACTIVO</span>}
                        {u.id===usuario.id&&<span style={{fontSize:"9px",color:C.accent,background:"rgba(125,211,252,0.15)",padding:"1px 6px",borderRadius:"4px",fontWeight:"700"}}>TÚ</span>}
                      </div>
                      <div style={{fontSize:"10px",color:C.muted}}>{u.area} · <span style={{textTransform:"capitalize",color:u.rol==="admin"?C.accent:u.rol==="gerente"?C.info:C.muted}}>{u.rol}</span> · PIN: ••••</div>
                      {parseAreasExtra(u).length>0&&<div style={{fontSize:"10px",color:C.info}}>+ {parseAreasExtra(u).map(a=>`${AREA_EMOJIS[a]||""} ${a}`).join(" · ")}</div>}
                    </div>
                  </div>
                  <button onClick={()=>abrirModalEditarUsuario(u)} style={{...btnG,fontSize:"11px",padding:"6px 10px"}}>Editar</button>
                </div>
                {u.notas&&<div style={{fontSize:"11px",color:C.muted,fontStyle:"italic",paddingLeft:"32px",borderLeft:`2px solid ${C.border}`,marginLeft:"4px"}}>📝 {u.notas}</div>}
              </div>
            ))}
          </div>
        )}

        {/* ===== BOTTOM BAR SOLICITAR ===== */}
        {tab==="solicitar"&&(
          <div style={{position:"fixed",bottom:0,left:0,right:0,background:"rgba(6,8,16,0.97)",backdropFilter:"blur(20px)",borderTop:`1px solid ${C.border}`,padding:"12px 16px 20px"}}>
            {Object.values(carrito).some(v=>v.cantidad>0)&&(
              <div style={{fontSize:"11px",color:C.muted,marginBottom:"8px"}}>
                {Object.values(carrito).filter(v=>v.cantidad>0).length} producto(s) en tu solicitud
                {vistaMultiple&&(()=>{
                  const areasConItems=[...new Set(Object.values(carrito).filter(v=>v.cantidad>0).map(v=>v.area))];
                  return areasConItems.length>1?` · ${areasConItems.length} áreas`:"";
                })()}
              </div>
            )}
            <input placeholder="💬 Nota general (opcional)..." value={notaGeneral} onChange={e=>setNotaGeneral(e.target.value)}
              style={{...inp,marginBottom:"8px",fontSize:"12px"}}/>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"}}>
              <button onClick={()=>enviarSolicitud(false)} disabled={enviando||!Object.values(carrito).some(v=>v.cantidad>0)}
                style={{...btnP,opacity:Object.values(carrito).some(v=>v.cantidad>0)?1:0.4}}>
                {enviando?"Enviando...":"📋 Enviar solicitud"}
              </button>
              <button onClick={()=>enviarSolicitud(true)} disabled={enviando||!Object.values(carrito).some(v=>v.cantidad>0)}
                style={{...btnP,background:"linear-gradient(135deg,#f87171,#fb923c)",opacity:Object.values(carrito).some(v=>v.cantidad>0)?1:0.4}}>
                🚨 Urgente
              </button>
            </div>
          </div>
        )}

        {/* ===== MODAL APROBAR ===== */}
        {modalAprobar&&(
          <div style={{position:"fixed",inset:0,background:"rgba(0,5,15,0.9)",backdropFilter:"blur(8px)",zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",padding:"16px"}}>
            <div style={{background:"rgba(8,12,22,0.98)",border:`1px solid ${C.border}`,borderRadius:"16px",padding:"20px",width:"100%",maxWidth:"440px",maxHeight:"90vh",overflowY:"auto",boxShadow:"0 0 40px rgba(125,211,252,0.1)"}}>
              <div style={{fontWeight:"800",fontSize:"16px",color:C.accent,marginBottom:"4px"}}>Gestionar solicitud</div>
              <div style={{fontSize:"12px",color:C.muted,marginBottom:"16px"}}>{AREA_EMOJIS[modalAprobar.area]} {modalAprobar.area} · {modalAprobar.usuario_nombre}</div>
              
              <div style={{display:"grid",gap:"8px",marginBottom:"16px"}}>
                {JSON.parse(modalAprobar.items||"[]").map((i,idx)=>(
                  <div key={idx} style={{background:"rgba(7,10,18,0.6)",border:`1px solid ${C.border}`,borderRadius:"10px",padding:"10px 12px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"10px"}}>
                    <div style={{flex:1}}>
                      <div style={{fontSize:"12px",fontWeight:"600"}}>{i.area&&i.area!==modalAprobar.area?`${AREA_EMOJIS[i.area]||""} `:""}{i.nombre}</div>
                      <div style={{fontSize:"10px",color:C.muted}}>Solicitó: {i.cantidad} {i.unidad}</div>
                      {i.gramos&&<div style={{fontSize:"10px",color:C.warn}}>⚖️ {i.gramos} gr servidos</div>}
                      {i.nota&&<div style={{fontSize:"10px",color:C.muted,fontStyle:"italic"}}>💬 {i.nota}</div>}
                    </div>
                    <input type="number" min="0" value={cantAjuste[i.nombre]??i.cantidad}
                      onChange={e=>setCantAjuste(c=>({...c,[i.nombre]:+e.target.value}))}
                      style={{width:"70px",background:"rgba(13,17,23,0.8)",border:`1px solid ${C.border}`,borderRadius:"8px",padding:"6px 8px",color:C.accent,fontFamily:"'JetBrains Mono',monospace",fontSize:"13px",textAlign:"center",outline:"none"}}/>
                    <span style={{fontSize:"10px",color:C.muted,minWidth:"30px"}}>{i.unidad}</span>
                  </div>
                ))}
              </div>

              <div style={{marginBottom:"12px"}}>
                <label style={lbl}>Motivo rechazo (si aplica)</label>
                <input placeholder="Ej. No hay stock, fuera de horario..." value={motivoRechazo} onChange={e=>setMotivoRechazo(e.target.value)} style={inp}/>
              </div>

              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",marginBottom:"8px"}}>
                <button onClick={()=>accionSolicitud(modalAprobar.id,"aprobada",cantAjuste)}
                  style={{...btnP,background:"linear-gradient(135deg,#34d399,#059669)"}}>✅ Aprobar</button>
                <button onClick={()=>accionSolicitud(modalAprobar.id,"ajustada",cantAjuste)}
                  style={{...btnP,background:"linear-gradient(135deg,#818cf8,#6366f1)"}}>✂️ Ajustar</button>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",marginBottom:"8px"}}>
                <button onClick={()=>accionSolicitud(modalAprobar.id,"en_espera")}
                  style={{...btnG,textAlign:"center"}}>⏳ En espera</button>
                <button onClick={()=>accionSolicitud(modalAprobar.id,"agotado")}
                  style={{...btnG,color:"#fb923c",borderColor:"rgba(251,146,60,0.3)",textAlign:"center"}}>📭 Agotado</button>
              </div>
              <button onClick={()=>accionSolicitud(modalAprobar.id,"rechazada",null,motivoRechazo)}
                style={{...btnG,width:"100%",color:C.danger,borderColor:"rgba(248,113,113,0.3)",marginBottom:"8px",textAlign:"center"}}>❌ Rechazar</button>
              <button onClick={()=>{setModalAprobar(null);setCantAjuste({});setMotivoRechazo("");}}
                style={{...btnG,width:"100%",textAlign:"center"}}>Cancelar</button>
            </div>
          </div>
        )}

        {/* ===== MODAL AGOTADO ===== */}
        {modalAgotado&&(
          <div style={{position:"fixed",inset:0,background:"rgba(0,5,15,0.9)",backdropFilter:"blur(8px)",zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",padding:"16px"}}>
            <div style={{background:"rgba(8,12,22,0.98)",border:"1px solid rgba(251,146,60,0.3)",borderRadius:"16px",padding:"20px",width:"100%",maxWidth:"400px",boxShadow:"0 0 40px rgba(251,146,60,0.1)"}}>
              <div style={{fontWeight:"800",fontSize:"16px",color:"#fb923c",marginBottom:"4px"}}>📭 Reportar producto agotado</div>
              <div style={{fontSize:"12px",color:C.muted,marginBottom:"16px"}}>Se mandará WhatsApp inmediato al supervisor</div>
              <div style={{marginBottom:"10px"}}>
                <label style={lbl}>¿Qué producto se agotó? *</label>
                <input placeholder="Ej. Leche entera, Cajeta..." value={prodAgotado} onChange={e=>setProdAgotado(e.target.value)} style={inp}/>
              </div>
              <div style={{marginBottom:"16px"}}>
                <label style={lbl}>Nota adicional (opcional)</label>
                <input placeholder="Ej. Se acabó a las 3pm..." value={notaAgotado} onChange={e=>setNotaAgotado(e.target.value)} style={inp}/>
              </div>
              <div style={{display:"flex",gap:"8px"}}>
                <button onClick={()=>{setModalAgotado(false);setProdAgotado("");setNotaAgotado("");}} style={{...btnG,flex:1,textAlign:"center"}}>Cancelar</button>
                <button onClick={reportarAgotado} disabled={!prodAgotado} style={{...btnP,flex:2,background:"linear-gradient(135deg,#fb923c,#f87171)",opacity:prodAgotado?1:0.4}}>
                  📲 Reportar ahora
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ===== MODAL NUEVO PRODUCTO ===== */}
        {modalNuevoProd&&(
          <div style={{position:"fixed",inset:0,background:"rgba(0,5,15,0.9)",backdropFilter:"blur(8px)",zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",padding:"16px"}}>
            <div style={{background:"rgba(8,12,22,0.98)",border:`1px solid ${C.border}`,borderRadius:"16px",padding:"20px",width:"100%",maxWidth:"400px",boxShadow:"0 0 40px rgba(125,211,252,0.1)"}}>
              <div style={{fontWeight:"800",fontSize:"16px",color:C.info,marginBottom:"4px"}}>🆕 Solicitar nuevo producto</div>
              <div style={{fontSize:"12px",color:C.muted,marginBottom:"16px"}}>Requiere autorización del Gerente o Jefe</div>
              <div style={{marginBottom:"10px"}}>
                <label style={lbl}>Nombre del producto *</label>
                <input placeholder="Ej. Cajeta de vainilla..." value={formNuevoProd.nombre} onChange={e=>setFormNuevoProd(f=>({...f,nombre:e.target.value}))} style={inp}/>
              </div>
              <div style={{marginBottom:"10px"}}>
                <label style={lbl}>Unidad de medida</label>
                <input placeholder="Ej. kg, Bote, Pz..." value={formNuevoProd.unidad} onChange={e=>setFormNuevoProd(f=>({...f,unidad:e.target.value}))} style={inp}/>
              </div>
              <div style={{marginBottom:"16px"}}>
                <label style={lbl}>¿Para qué lo necesitas?</label>
                <input placeholder="Explica brevemente..." value={formNuevoProd.nota} onChange={e=>setFormNuevoProd(f=>({...f,nota:e.target.value}))} style={inp}/>
              </div>
              <div style={{display:"flex",gap:"8px"}}>
                <button onClick={()=>{setModalNuevoProd(false);setFormNuevoProd({nombre:"",unidad:"",nota:""});}} style={{...btnG,flex:1,textAlign:"center"}}>Cancelar</button>
                <button onClick={solicitarNuevoProducto} disabled={!formNuevoProd.nombre} style={{...btnP,flex:2,opacity:formNuevoProd.nombre?1:0.4}}>
                  📲 Enviar solicitud
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ===== MODAL GESTIONAR USUARIO (Admin) ===== */}
        {modalUsuario&&(
          <div style={{position:"fixed",inset:0,background:"rgba(0,5,15,0.9)",backdropFilter:"blur(8px)",zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",padding:"16px"}}>
            <div style={{background:"rgba(8,12,22,0.98)",border:`1px solid ${C.border}`,borderRadius:"16px",padding:"20px",width:"100%",maxWidth:"420px",maxHeight:"90vh",overflowY:"auto",boxShadow:"0 0 40px rgba(125,211,252,0.1)"}}>
              <div style={{fontWeight:"800",fontSize:"16px",color:C.accent,marginBottom:"4px"}}>
                {modalUsuario.nuevo?"➕ Nuevo usuario":"✏️ Editar usuario"}
              </div>
              <div style={{fontSize:"12px",color:C.muted,marginBottom:"16px"}}>
                {modalUsuario.nuevo?"Completa los datos del nuevo trabajador":`Modificar a ${modalUsuario.nombre}`}
              </div>

              <div style={{marginBottom:"10px"}}>
                <label style={lbl}>Nombre completo *</label>
                <input placeholder="Ej. Juan Pérez..." value={formUsuario.nombre} onChange={e=>{setFormUsuario(f=>({...f,nombre:e.target.value}));setErrorForm("");}} style={inp}/>
              </div>

              <div style={{marginBottom:"10px"}}>
                <label style={lbl}>PIN (mínimo 4 dígitos) *</label>
                <div style={{display:"flex",gap:"6px"}}>
                  <input 
                    type={pinVisible?"text":"password"}
                    placeholder="Ej. 1234..." 
                    value={formUsuario.pin} 
                    onChange={e=>{setFormUsuario(f=>({...f,pin:e.target.value.replace(/\D/g,"")}));setErrorForm("");}}
                    style={{...inp,letterSpacing:pinVisible?"normal":"6px",fontSize:"16px",textAlign:"center"}}
                    maxLength="8"
                  />
                  <button type="button" onClick={()=>setPinVisible(v=>!v)} style={{...btnG,padding:"0 12px",minWidth:"50px"}}>
                    {pinVisible?"🙈":"👁️"}
                  </button>
                </div>
              </div>

              <div style={{marginBottom:"10px"}}>
                <label style={lbl}>Área *</label>
                <select value={formUsuario.area} onChange={e=>{setFormUsuario(f=>({...f,area:e.target.value}));setErrorForm("");}} style={{...inp,cursor:"pointer"}}>
                  {AREAS.map(a=><option key={a} value={a}>{AREA_EMOJIS[a]} {a}</option>)}
                </select>
              </div>

              <div style={{marginBottom:"10px"}}>
                <label style={lbl}>Áreas adicionales (opcional)</label>
                <div style={{background:"rgba(7,10,18,0.6)",border:`1px solid ${C.border}`,borderRadius:"10px",padding:"10px 12px"}}>
                  {AREAS.filter(a=>a!==formUsuario.area).map(a=>(
                    <label key={a} style={{display:"flex",alignItems:"center",gap:"8px",fontSize:"12px",color:formUsuario.areas_extra.includes(a)?C.accent:C.muted,padding:"4px 0",cursor:"pointer"}}>
                      <input type="checkbox" checked={formUsuario.areas_extra.includes(a)} onChange={()=>toggleAreaExtra(a)} style={{cursor:"pointer"}}/>
                      {AREA_EMOJIS[a]} {a}
                    </label>
                  ))}
                </div>
                <div style={{fontSize:"10px",color:C.muted,marginTop:"4px"}}>
                  El usuario podrá pedir productos de estas áreas además de la suya (en pestañas). Ej. Danna: Domicilios + Bebidas, Crepas y Dulce.
                </div>
              </div>

              <div style={{marginBottom:"10px"}}>
                <label style={lbl}>Rol *</label>
                <select value={formUsuario.rol} onChange={e=>setFormUsuario(f=>({...f,rol:e.target.value}))} style={{...inp,cursor:"pointer",textTransform:"capitalize"}}>
                  {ROLES.map(r=><option key={r} value={r} style={{textTransform:"capitalize"}}>{r}</option>)}
                </select>
                <div style={{fontSize:"10px",color:C.muted,marginTop:"4px"}}>
                  {formUsuario.rol==="trabajador"&&"Solo puede solicitar productos (de su área y sus áreas adicionales)"}
                  {formUsuario.rol==="subgerente"&&"Ve todas las áreas en pestañas y sus pedidos se auto-aprueban"}
                  {formUsuario.rol==="gerente"&&"Ve todas las áreas en pestañas, aprueba solicitudes y ve historial"}
                  {formUsuario.rol==="admin"&&"Acceso total + gestión de usuarios"}
                </div>
              </div>

              <div style={{marginBottom:"16px"}}>
                <label style={lbl}>Notas (opcional)</label>
                <textarea 
                  placeholder="Ej. Solo trabaja fines de semana, encargado de cierre..." 
                  value={formUsuario.notas} 
                  onChange={e=>setFormUsuario(f=>({...f,notas:e.target.value}))}
                  rows="3"
                  style={{...inp,resize:"vertical",fontFamily:"inherit"}}
                />
              </div>

              {errorForm&&<div style={{color:C.danger,fontSize:"12px",marginBottom:"12px",padding:"8px 10px",background:"rgba(248,113,113,0.1)",border:"1px solid rgba(248,113,113,0.2)",borderRadius:"8px"}}>⚠️ {errorForm}</div>}

              {!modalUsuario.nuevo&&modalUsuario.id!==usuario.id&&(
                <button 
                  onClick={()=>toggleActivoUsuario(modalUsuario)}
                  style={{...btnG,width:"100%",marginBottom:"8px",color:modalUsuario.activo?C.danger:C.success,borderColor:modalUsuario.activo?"rgba(248,113,113,0.3)":"rgba(52,211,153,0.3)",textAlign:"center"}}
                >
                  {modalUsuario.activo?"🚫 Desactivar usuario":"✅ Reactivar usuario"}
                </button>
              )}

              <div style={{display:"flex",gap:"8px"}}>
                <button onClick={()=>{setModalUsuario(null);setPinVisible(false);setErrorForm("");}} style={{...btnG,flex:1,textAlign:"center"}}>Cancelar</button>
                <button onClick={guardarUsuario} disabled={guardandoUsuario} style={{...btnP,flex:2,opacity:guardandoUsuario?0.6:1}}>
                  {guardandoUsuario?"Guardando...":modalUsuario.nuevo?"➕ Crear usuario":"💾 Guardar cambios"}
                </button>
              </div>
            </div>
          </div>
        )}

        </>
      )}
    </div>
  );
}
