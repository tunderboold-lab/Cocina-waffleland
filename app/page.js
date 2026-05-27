"use client";
import { useState, useEffect, useRef } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://auweubelcxsvkifyibfw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1d2V1YmVsY3hzdmtpZnlpYmZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3NTk5MTYsImV4cCI6MjA5NDMzNTkxNn0.NLV2t1haEXKM-n8iyVpzCU9gx-CmTMPVJjmM0ZDlsXM"
);

const TU_NUMERO = "5215544690495";

// ===== PRODUCTOS POR ÁREA =====
const PRODUCTOS_AREA = {
  "Cajera": [
    {nombre:"Portavasos",unidad:"Pz",optimo:35},
    {nombre:"Servilletas",unidad:"Paquete",optimo:1},
    {nombre:"Tenedores",unidad:"Bolsa",optimo:1},
    {nombre:"Cucharas",unidad:"Paquete",optimo:2},
    {nombre:"Popotes grueso",unidad:"Pz",optimo:60},
    {nombre:"Popotes delgado",unidad:"Pz",optimo:60},
    {nombre:"Playo",unidad:"Rollo",optimo:1},
    {nombre:"Bolsas 25x40",unidad:"Paquete",optimo:1},
    {nombre:"Bolsas 25x50",unidad:"Paquete",optimo:1},
    {nombre:"Bolsas 30x60",unidad:"Paquete",optimo:1},
    {nombre:"Tenedores para cubiertos",unidad:"Paquete",optimo:4},
    {nombre:"Cuchillos para cubiertos",unidad:"Paquete",optimo:4},
    {nombre:"Rollos para impresora",unidad:"Pz",optimo:4},
    {nombre:"Rollos para terminal",unidad:"Pz",optimo:4},
    {nombre:"Toallas desinfectantes",unidad:"Paquete",optimo:1},
    {nombre:"Guantes M",unidad:"Paquete",optimo:1},
    {nombre:"Guantes G",unidad:"Paquete",optimo:1},
    {nombre:"Pluma",unidad:"Pz",optimo:1},
    {nombre:"Plumón",unidad:"Pz",optimo:1},
  ],
  "Pedidos a Domicilio": [
    {nombre:"Portavasos",unidad:"Pz",optimo:35},
    {nombre:"Servilletas",unidad:"Paquete",optimo:1},
    {nombre:"Tenedores",unidad:"Paquete",optimo:1},
    {nombre:"Cucharas",unidad:"Paquete",optimo:2},
    {nombre:"Popotes grueso",unidad:"Pz",optimo:60},
    {nombre:"Popotes delgado",unidad:"Pz",optimo:60},
    {nombre:"Playo",unidad:"Rollo",optimo:1},
    {nombre:"Bolsas 25x40",unidad:"Paquete",optimo:1},
    {nombre:"Bolsas 25x50",unidad:"Paquete",optimo:1},
    {nombre:"Bolsas 30x60",unidad:"Paquete",optimo:1},
    {nombre:"Tenedores para cubiertos",unidad:"Paquete",optimo:4},
    {nombre:"Cuchillos para cubiertos",unidad:"Paquete",optimo:4},
    {nombre:"Rollos para impresora",unidad:"Pz",optimo:4},
    {nombre:"Rollos para terminal",unidad:"Pz",optimo:4},
    {nombre:"Toallas desinfectantes",unidad:"Paquete",optimo:1},
    {nombre:"Guantes M",unidad:"Paquete",optimo:1},
    {nombre:"Guantes G",unidad:"Paquete",optimo:1},
    {nombre:"Pluma",unidad:"Pz",optimo:1},
    {nombre:"Plumón",unidad:"Pz",optimo:1},
  ],
  "Bebidas": [
    {nombre:"Leche entera",unidad:"Pz",optimo:6},
    {nombre:"Leche deslactosada",unidad:"Pz",optimo:5},
    {nombre:"Leche de coco",unidad:"Pz",optimo:2},
    {nombre:"Leche de almendra",unidad:"Pz",optimo:2},
    {nombre:"Leche de avena",unidad:"Pz",optimo:1},
    {nombre:"Base en polvo",unidad:"kg",optimo:2},
    {nombre:"Azúcar",unidad:"kg",optimo:5},
    {nombre:"Hielo",unidad:"bolsa",optimo:4},
    {nombre:"Polvo fresa",unidad:"Bote",optimo:1},
    {nombre:"Polvo chicozera",unidad:"Bote",optimo:1},
    {nombre:"Polvo taro",unidad:"Bote",optimo:1},
    {nombre:"Polvo chocolate",unidad:"Bote",optimo:1},
    {nombre:"Polvo chocolate blanco",unidad:"Bote",optimo:1},
    {nombre:"Polvo horchata",unidad:"Bote",optimo:1},
    {nombre:"Polvo chai vainilla",unidad:"Bote",optimo:1},
    {nombre:"Polvo caramelo",unidad:"Bote",optimo:1},
    {nombre:"Polvo capuchino",unidad:"Bote",optimo:1},
    {nombre:"Polvo flan",unidad:"Bote",optimo:1},
    {nombre:"Polvo mazapán",unidad:"Bote",optimo:1},
    {nombre:"Polvo crème brûlée",unidad:"Bote",optimo:1},
    {nombre:"Polvo coco",unidad:"Bote",optimo:1},
    {nombre:"Polvo mora azul",unidad:"Bote",optimo:1},
    {nombre:"Polvo plátano",unidad:"Bote",optimo:1},
    {nombre:"Polvo pistache",unidad:"Bote",optimo:1},
    {nombre:"Polvo matcha",unidad:"Bote",optimo:1},
    {nombre:"Polvo red velvet",unidad:"Bote",optimo:1},
    {nombre:"Polvo cookies",unidad:"Bote",optimo:1},
    {nombre:"Jarabe frutos rojos",unidad:"Botella",optimo:1},
    {nombre:"Jarabe mora azul",unidad:"Botella",optimo:1},
    {nombre:"Jarabe manzana verde",unidad:"Botella",optimo:1},
    {nombre:"Jarabe tamarindo",unidad:"Botella",optimo:1},
    {nombre:"Jarabe fresa",unidad:"Botella",optimo:1},
    {nombre:"Jarabe lichi",unidad:"Botella",optimo:1},
    {nombre:"Jarabe maracuyá",unidad:"Botella",optimo:1},
    {nombre:"Jarabe rompope",unidad:"Botella",optimo:1},
    {nombre:"Jarabe baileys",unidad:"Botella",optimo:1},
    {nombre:"Jarabe piñón",unidad:"Botella",optimo:1},
    {nombre:"Jarabe picafresa",unidad:"Botella",optimo:1},
    {nombre:"Jarabe pelón pelo rico",unidad:"Botella",optimo:1},
    {nombre:"Jarabe pulparindo",unidad:"Bote",optimo:1},
    {nombre:"Jarabe avellana",unidad:"Botella",optimo:1},
    {nombre:"Jarabe caramelo",unidad:"Botella",optimo:1},
    {nombre:"Jarabe frambuesa",unidad:"Botella",optimo:1},
    {nombre:"Jarabe kiwi",unidad:"Botella",optimo:1},
    {nombre:"Jarabe limonada",unidad:"Botella",optimo:1},
    {nombre:"Jarabe mango",unidad:"Botella",optimo:1},
    {nombre:"Jarabe menta",unidad:"Botella",optimo:1},
    {nombre:"Jarabe uva",unidad:"Botella",optimo:1},
    {nombre:"Mango",unidad:"Pz",optimo:5},
    {nombre:"Blueberries",unidad:"Domo",optimo:2},
    {nombre:"Sandía",unidad:"Pedazo",optimo:1},
    {nombre:"Limón",unidad:"kg",optimo:1},
    {nombre:"Pepino",unidad:"Pz",optimo:2},
    {nombre:"Arándano",unidad:"Bolsa",optimo:1},
    {nombre:"Yakult",unidad:"Paquete",optimo:1},
    {nombre:"Yogurt griego",unidad:"Bote",optimo:1},
    {nombre:"Mermelada",unidad:"Mamila",optimo:1},
    {nombre:"Hershey's",unidad:"Mamila",optimo:1},
    {nombre:"Peñafiel",unidad:"Pz",optimo:1},
    {nombre:"Sprite",unidad:"Pz",optimo:1},
    {nombre:"Tapioca",unidad:"Toper",optimo:1},
    {nombre:"Perlas explosivas",unidad:"Bote",optimo:1},
    {nombre:"Chamoy",unidad:"Mamila",optimo:1},
    {nombre:"Miguelito",unidad:"Mamila",optimo:1},
    {nombre:"Canela",unidad:"Bote",optimo:1},
    {nombre:"Galletas Marías",unidad:"Paquete",optimo:1},
    {nombre:"Galletas Oreo",unidad:"Caja",optimo:1},
    {nombre:"Conejitos Turín",unidad:"Paquete",optimo:1},
    {nombre:"Gansito",unidad:"Pz",optimo:4},
    {nombre:"Chocorrol",unidad:"Pz",optimo:4},
    {nombre:"M&MS",unidad:"Pz",optimo:4},
    {nombre:"Gomitas de aro",unidad:"gr",optimo:100},
    {nombre:"Gomitas panditas",unidad:"gr",optimo:100},
    {nombre:"Helado de chocolate",unidad:"Cubeta",optimo:1},
    {nombre:"Helado de fresa",unidad:"Cubeta",optimo:1},
    {nombre:"Helado de vainilla",unidad:"Cubeta",optimo:1},
    {nombre:"Helado de limón",unidad:"Cubeta",optimo:1},
    {nombre:"Helado cookies and cream",unidad:"Cubeta",optimo:1},
    {nombre:"Paleta Magnum",unidad:"Pz",optimo:8},
    {nombre:"Paleta Ferrero",unidad:"Pz",optimo:3},
    {nombre:"Paleta Huevo Kinder",unidad:"Pz",optimo:2},
    {nombre:"Paleta Raffaello",unidad:"Pz",optimo:3},
    {nombre:"Mordisko",unidad:"Pz",optimo:5},
  ],
  "Crepas": [
    {nombre:"Cajeta",unidad:"Mamila",optimo:1},
    {nombre:"Lechera",unidad:"Lata",optimo:4},
    {nombre:"Nutella",unidad:"Bote 3kg",optimo:2},
    {nombre:"Mermelada de fresa",unidad:"Mamila",optimo:1},
    {nombre:"Mermelada de zarzamora",unidad:"Mamila",optimo:1},
    {nombre:"Crema de cacahuate",unidad:"Bote",optimo:1},
    {nombre:"Maple",unidad:"Botella",optimo:1},
    {nombre:"Hershey's líquido",unidad:"Mamila",optimo:1},
    {nombre:"Zarzamora",unidad:"Domo",optimo:2},
    {nombre:"Frambuesa",unidad:"Domo",optimo:1},
    {nombre:"Cereza",unidad:"Bote",optimo:1},
    {nombre:"Durazno",unidad:"Lata",optimo:1},
    {nombre:"Kiwi",unidad:"Pz",optimo:4},
    {nombre:"Uva",unidad:"gr",optimo:500},
    {nombre:"Mora",unidad:"Domo",optimo:1},
    {nombre:"Fresa",unidad:"Caja",optimo:1},
    {nombre:"Bombón de chocolate",unidad:"Pz",optimo:6},
    {nombre:"Bombones",unidad:"Bolsa",optimo:2},
    {nombre:"Ferrero",unidad:"Pz",optimo:25},
    {nombre:"Chocoretas",unidad:"Pz",optimo:10},
    {nombre:"Kranky",unidad:"Pz",optimo:15},
    {nombre:"Crunch",unidad:"Pz",optimo:5},
    {nombre:"Chocolate Hershey's barra",unidad:"Pz",optimo:4},
    {nombre:"Pingüino",unidad:"Pz",optimo:9},
    {nombre:"Chocorrol",unidad:"Pz",optimo:9},
    {nombre:"Gansito",unidad:"Pz",optimo:9},
    {nombre:"Huevo Kinder",unidad:"Pz",optimo:10},
    {nombre:"Kinder chocolate",unidad:"Pz",optimo:15},
    {nombre:"Kinder Delice",unidad:"Pz",optimo:15},
    {nombre:"Kinder Bueno",unidad:"Pz",optimo:20},
    {nombre:"Kit Kat",unidad:"Pz",optimo:10},
    {nombre:"Carlos V",unidad:"Pz",optimo:10},
    {nombre:"Pretzel",unidad:"gr",optimo:200},
    {nombre:"Conejito Turín",unidad:"Pz",optimo:24},
    {nombre:"Mazapán",unidad:"Pz",optimo:25},
    {nombre:"Bubulubu",unidad:"Pz",optimo:9},
    {nombre:"Galleta Lotus",unidad:"Paquete",optimo:1},
    {nombre:"Granillo Turín",unidad:"Bolsa 250gr",optimo:2},
    {nombre:"Nuez",unidad:"Bolsa 250gr",optimo:1},
    {nombre:"Almendra",unidad:"Bolsa 250gr",optimo:1},
    {nombre:"Chispas Cafe",unidad:"Bolsa 250gr",optimo:2},
    {nombre:"Oreo",unidad:"Caja",optimo:1},
    {nombre:"Chispas blancas",unidad:"Bolsa 250gr",optimo:1},
    {nombre:"Charola 8x8",unidad:"Pz",optimo:50},
    {nombre:"Plato para comer dentro",unidad:"Pz",optimo:30},
    {nombre:"Papeles para los platos",unidad:"Pz",optimo:100},
    {nombre:"Aluminio",unidad:"Rollo",optimo:1},
    {nombre:"Gas",unidad:"Tanque",optimo:1},
  ],
  "Estación Dulce": [
    {nombre:"Mezcla de hot cakes",unidad:"Bote",optimo:1},
    {nombre:"Mezcla de crepas",unidad:"Bote",optimo:1},
    {nombre:"Mezcla de waffles",unidad:"Bote",optimo:1},
    {nombre:"Crema Raffaello",unidad:"Bote",optimo:1},
    {nombre:"Crema Ferrero",unidad:"Bote",optimo:1},
    {nombre:"Crema batida",unidad:"Bote",optimo:2},
    {nombre:"Crema de fresas",unidad:"Bote",optimo:1},
    {nombre:"Crema de Baileys",unidad:"Manga",optimo:1},
    {nombre:"Mantequilla",unidad:"Barra",optimo:4},
    {nombre:"Queso manchego",unidad:"Paquetes",optimo:6},
    {nombre:"Queso mozzarella",unidad:"Paquetes",optimo:8},
    {nombre:"Queso 4 quesos",unidad:"Paquetes",optimo:5},
    {nombre:"Philadelphia",unidad:"Dosis",optimo:20},
    {nombre:"Danoninos",unidad:"Pz",optimo:6},
    {nombre:"Duraznos",unidad:"Lata",optimo:1},
    {nombre:"Piña",unidad:"Lata",optimo:1},
    {nombre:"Cereza",unidad:"Bote",optimo:1},
    {nombre:"Jamón",unidad:"Paquetes",optimo:8},
    {nombre:"Pepperoni",unidad:"gr",optimo:400},
    {nombre:"Salsa de tomate",unidad:"Frasco",optimo:1},
    {nombre:"Charola 8x8",unidad:"Pz",optimo:50},
    {nombre:"Charola Hamburguesera",unidad:"Pz",optimo:30},
    {nombre:"Papeles",unidad:"Pz",optimo:100},
  ],
  "Frito": [
    {nombre:"Alitas",unidad:"Pz",optimo:50},
    {nombre:"Salchicha",unidad:"Paquete",optimo:1},
    {nombre:"Tocino",unidad:"Paquete",optimo:1},
    {nombre:"Tocino en trozos",unidad:"Bote",optimo:1},
    {nombre:"Queso barra",unidad:"Barra",optimo:1},
    {nombre:"Queso amarillo",unidad:"Bolsa",optimo:1},
    {nombre:"Queso parmesano",unidad:"Bote",optimo:1},
    {nombre:"Limones",unidad:"kg",optimo:1},
    {nombre:"Plátanos macho",unidad:"Pz",optimo:10},
    {nombre:"Lechuga",unidad:"Pz",optimo:1},
    {nombre:"Jalapeño",unidad:"Bolsa",optimo:1},
    {nombre:"Aros de cebolla",unidad:"Bolsa",optimo:1},
    {nombre:"Papas francesa",unidad:"Bolsa",optimo:4},
    {nombre:"Papas gajo",unidad:"Bolsa",optimo:4},
    {nombre:"Aceite",unidad:"Bidón",optimo:1},
    {nombre:"Panko",unidad:"kg",optimo:1},
    {nombre:"Ramen",unidad:"Paquete",optimo:2},
    {nombre:"Polvo Flamin'",unidad:"gr",optimo:250},
    {nombre:"Polvo Azul Fuego",unidad:"gr",optimo:250},
    {nombre:"Polvo Chipotle",unidad:"gr",optimo:250},
    {nombre:"Polvo Sabritas",unidad:"gr",optimo:250},
    {nombre:"Polvo Habanero",unidad:"gr",optimo:250},
    {nombre:"Polvo Adobado",unidad:"gr",optimo:250},
    {nombre:"Polvo Jalapeño",unidad:"gr",optimo:250},
    {nombre:"Tajín",unidad:"Bote",optimo:1},
    {nombre:"Cheetos Flamin'",unidad:"Bolsa",optimo:1},
    {nombre:"Cheesy Cheddar",unidad:"gr",optimo:250},
    {nombre:"Doritos",unidad:"Bolsa",optimo:1},
    {nombre:"Takis Azules",unidad:"Bolsa",optimo:1},
    {nombre:"Bonolees",unidad:"Bolsa",optimo:3},
    {nombre:"Chipotle líquido",unidad:"Botella",optimo:1},
    {nombre:"Valentina",unidad:"Botella",optimo:1},
    {nombre:"Maggi",unidad:"Botella",optimo:1},
    {nombre:"Botanera",unidad:"Botella",optimo:1},
    {nombre:"Salsa Fantasma",unidad:"Botella",optimo:1},
    {nombre:"Limón Pepee",unidad:"Galón",optimo:1},
    {nombre:"Búfalo",unidad:"Galón",optimo:1},
    {nombre:"Ranch",unidad:"Galón",optimo:1},
    {nombre:"Mango Habanero",unidad:"Galón",optimo:1},
    {nombre:"BBQ",unidad:"Galón",optimo:1},
    {nombre:"Catsup",unidad:"Galón",optimo:1},
    {nombre:"Salsa Doritos",unidad:"Botella",optimo:1},
    {nombre:"Salsa Original Alitas",unidad:"Botella",optimo:1},
    {nombre:"Salsa Sabritas Adobado",unidad:"Botella",optimo:1},
    {nombre:"Salsa Tamarindo 3 Chiles",unidad:"Botella",optimo:1},
    {nombre:"Salsa Cheetos",unidad:"Botella",optimo:1},
    {nombre:"Salsa Takis Fuego",unidad:"Botella",optimo:1},
    {nombre:"Salsa Sabritas Habanero",unidad:"Botella",optimo:1},
    {nombre:"Crema",unidad:"Cubeta",optimo:1},
    {nombre:"Sal",unidad:"Bote",optimo:1},
    {nombre:"Charola 8x8",unidad:"Pz",optimo:30},
    {nombre:"Charola hamburguesera",unidad:"Pz",optimo:30},
    {nombre:"Charola blanca banderilla",unidad:"Pz",optimo:20},
    {nombre:"Cono de cartón",unidad:"Pz",optimo:20},
    {nombre:"Caja banderilla coreana",unidad:"Pz",optimo:30},
    {nombre:"Papel cuadriculado",unidad:"Pz",optimo:100},
    {nombre:"Palillos banderilla",unidad:"Pz",optimo:30},
    {nombre:"Cloro",unidad:"Bidón",optimo:1},
    {nombre:"Jabón Roma",unidad:"Bolsa",optimo:1},
    {nombre:"Fabuloso",unidad:"Bidón",optimo:1},
    {nombre:"Bolsas de basura",unidad:"Pz",optimo:1},
    {nombre:"Esponja para trastes",unidad:"Pz",optimo:2},
    {nombre:"Trapos",unidad:"Pz",optimo:8},
    {nombre:"Cofia",unidad:"Pz",optimo:2},
    {nombre:"Gas",unidad:"Tanque",optimo:1},
  ],
};

const AREAS = Object.keys(PRODUCTOS_AREA);
const AREA_EMOJIS = {
  "Cajera":"🧾","Pedidos a Domicilio":"🛵","Bebidas":"☕","Crepas":"🥞","Estación Dulce":"🧇","Frito":"🍟"
};

const ROLES = ["trabajador", "subgerente", "gerente", "admin"];

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

  // ===== ESTADOS PANEL USUARIOS =====
  const [busqUsuarios, setBusqUsuarios] = useState("");
  const [filtroAreaUsuarios, setFiltroAreaUsuarios] = useState("");
  const [mostrarInactivos, setMostrarInactivos] = useState(false);
  const [modalUsuario, setModalUsuario] = useState(null); // null | {nuevo:true} | {usuario obj}
  const [formUsuario, setFormUsuario] = useState({nombre:"",pin:"",area:"",rol:"trabajador",notas:"",activo:true});
  const [pinVisible, setPinVisible] = useState(false);
  const [errorForm, setErrorForm] = useState("");
  const [guardandoUsuario, setGuardandoUsuario] = useState(false);

  const esAdmin = usuario?.rol === "admin";
  const esGerenteOAdmin = usuario?.rol === "admin" || usuario?.rol === "gerente";
  const productosArea = usuario ? (PRODUCTOS_AREA[usuario.area] || []) : [];
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

  async function enviarSolicitud(urgente = false) {
    if (Object.keys(carrito).length === 0) return;
    setEnviando(true);
    const items = Object.entries(carrito)
      .filter(([,v]) => v.cantidad > 0)
      .map(([nombre, v]) => ({nombre, unidad: v.unidad, cantidad: v.cantidad, nota: v.nota || ""}));
    if (items.length === 0) { setEnviando(false); return; }

    const sol = {
      usuario_id: usuario.id,
      usuario_nombre: usuario.nombre,
      area: usuario.area,
      items: JSON.stringify(items),
      nota_general: notaGeneral,
      urgente,
      estado: "pendiente",
      creado_en: new Date().toISOString(),
    };

    const {data, error} = await supabase.from("solicitudes_cocina").insert(sol).select().single();
    if (!error && data) {
      setSolicitudes(s => [data, ...s]);
      const emoji = urgente ? "🚨 URGENTE 🚨" : "📋 Nueva solicitud";
      let msg = `${emoji}\n\n`;
      msg += `👤 ${usuario.nombre} — ${AREA_EMOJIS[usuario.area]} ${usuario.area}\n`;
      msg += `📅 ${new Date().toLocaleString("es-MX")}\n\n`;
      msg += `📦 PRODUCTOS:\n`;
      items.forEach(i => {
        msg += `• ${i.nombre}: ${i.cantidad} ${i.unidad}`;
        if (i.nota) msg += ` (${i.nota})`;
        msg += "\n";
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
      const items = JSON.parse(sol.items);
      for (const item of items) {
        const cantFinal = cantidades ? (cantidades[item.nombre] ?? item.cantidad) : item.cantidad;
        if (cantFinal <= 0) continue;
        const {data: inv} = await supabase
          .from("inventario")
          .select("id,cantidad,nombre")
          .ilike("nombre", `%${item.nombre.split(" ")[0]}%`)
          .limit(1);
        if (inv && inv.length > 0) {
          const prod = inv[0];
          const nuevaCant = Math.max(0, prod.cantidad - cantFinal);
          await supabase.from("inventario").update({cantidad: nuevaCant}).eq("id", prod.id);
          await supabase.from("historial").insert({
            producto_id: prod.id,
            nombre: prod.nombre,
            unidad: item.unidad,
            tipo: "consumo",
            cantidad: cantFinal,
            antes: prod.cantidad,
            despues: nuevaCant,
            fecha: new Date().toISOString(),
            usuario: `${usuario.nombre} (Cocina - ${sol.area})`,
          });
        }
      }
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
    setFormUsuario({nombre:"",pin:"",area:AREAS[0],rol:"trabajador",notas:"",activo:true});
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
    });
    setModalUsuario(u);
    setPinVisible(false);
    setErrorForm("");
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
            ...(esAdmin?[{id:"usuarios",label:"👥 Usuarios"}]:[]),
          ].map(t=>(
            <button key={t.id} onClick={()=>setTab(t.id)} style={{padding:"10px 14px",border:"none",background:"transparent",color:tab===t.id?C.accent:C.muted,cursor:"pointer",fontFamily:"inherit",fontWeight:tab===t.id?"700":"400",fontSize:"12px",whiteSpace:"nowrap",borderBottom:tab===t.id?`2px solid ${C.accent}`:"2px solid transparent",textShadow:tab===t.id?"0 0 10px rgba(125,211,252,0.5)":"none"}}>
              {t.label}
            </button>
          ))}
        </div>

        {/* ===== SOLICITAR ===== */}
        {tab==="solicitar"&&(
          <div style={{padding:"16px 16px 120px"}}>
            <div style={{display:"flex",gap:"8px",marginBottom:"14px"}}>
              <input placeholder="🔍 Buscar producto..." value={busq} onChange={e=>setBusq(e.target.value)}
                style={{...inp,flex:1}}/>
              <button onClick={()=>setModalNuevoProd(true)} style={{...btnG,fontSize:"12px",padding:"9px 12px",color:C.info,borderColor:"rgba(129,140,248,0.3)",whiteSpace:"nowrap"}}>+ Nuevo</button>
            </div>

            <div style={{display:"grid",gap:"8px",marginBottom:"16px"}}>
              {productosFiltrados.map(p=>{
                const qty = carrito[p.nombre]?.cantidad || 0;
                return(
                  <div key={p.nombre} style={{background:"rgba(13,17,23,0.8)",border:`1px solid ${qty>0?"rgba(125,211,252,0.3)":C.border}`,borderRadius:"12px",padding:"12px 14px",backdropFilter:"blur(10px)"}}>
                    <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                      <div style={{flex:1}}>
                        <div style={{fontSize:"13px",fontWeight:"600"}}>{p.nombre}</div>
                        <div style={{fontSize:"10px",color:C.muted}}>Óptimo: {p.optimo} {p.unidad}</div>
                      </div>
                      <div style={{display:"flex",alignItems:"center",gap:"6px"}}>
                        <button onClick={()=>setCarrito(c=>({...c,[p.nombre]:{...c[p.nombre],unidad:p.unidad,cantidad:Math.max(0,(c[p.nombre]?.cantidad||0)-1)}}))}
                          style={{background:"rgba(248,113,113,0.2)",border:"none",color:C.danger,width:"28px",height:"28px",borderRadius:"7px",cursor:"pointer",fontSize:"16px",fontWeight:"700"}}>−</button>
                        <div style={{background:qty>0?"rgba(125,211,252,0.15)":"rgba(255,255,255,0.05)",border:`1px solid ${qty>0?"rgba(125,211,252,0.3)":"rgba(255,255,255,0.1)"}`,borderRadius:"8px",padding:"4px 10px",fontFamily:"'JetBrains Mono',monospace",fontWeight:"600",color:qty>0?C.accent:C.muted,fontSize:"13px",minWidth:"64px",textAlign:"center"}}>
                          {qty} {p.unidad}
                        </div>
                        <button onClick={()=>setCarrito(c=>({...c,[p.nombre]:{...c[p.nombre],unidad:p.unidad,cantidad:(c[p.nombre]?.cantidad||0)+1}}))}
                          style={{background:"rgba(52,211,153,0.2)",border:"none",color:C.success,width:"28px",height:"28px",borderRadius:"7px",cursor:"pointer",fontSize:"16px",fontWeight:"700"}}>+</button>
                      </div>
                    </div>
                    {qty>0&&(
                      <input placeholder="Nota (opcional)..." value={carrito[p.nombre]?.nota||""}
                        onChange={e=>setCarrito(c=>({...c,[p.nombre]:{...c[p.nombre],nota:e.target.value}}))}
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
                  {items.map((i,idx)=>(
                    <div key={idx} style={{display:"flex",justifyContent:"space-between",padding:"4px 0",borderBottom:`1px solid ${C.border}`,fontSize:"12px"}}>
                      <span>{i.nombre}</span>
                      <span style={{fontFamily:"'JetBrains Mono',monospace",color:C.accent}}>{i.cantidad} {i.unidad}</span>
                    </div>
                  ))}
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
                      <span>{i.nombre}</span>
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
                  <div style={{fontSize:"11px",color:C.muted}}>{items.map(i=>`${i.nombre} (${i.cantidad} ${i.unidad})`).join(" · ")}</div>
                  {s.aprobado_por&&<div style={{fontSize:"10px",color:C.muted,marginTop:"4px"}}>Por: {s.aprobado_por}</div>}
                </div>
              );
            })}
          </div>
        )}

        {/* ===== PANEL USUARIOS (Solo Admin) ===== */}
        {tab==="usuarios"&&esAdmin&&(
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
                      <div style={{fontSize:"12px",fontWeight:"600"}}>{i.nombre}</div>
                      <div style={{fontSize:"10px",color:C.muted}}>Solicitó: {i.cantidad} {i.unidad}</div>
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
                <label style={lbl}>Rol *</label>
                <select value={formUsuario.rol} onChange={e=>setFormUsuario(f=>({...f,rol:e.target.value}))} style={{...inp,cursor:"pointer",textTransform:"capitalize"}}>
                  {ROLES.map(r=><option key={r} value={r} style={{textTransform:"capitalize"}}>{r}</option>)}
                </select>
                <div style={{fontSize:"10px",color:C.muted,marginTop:"4px"}}>
                  {formUsuario.rol==="trabajador"&&"Solo puede solicitar productos"}
                  {formUsuario.rol==="subgerente"&&"Puede solicitar productos"}
                  {formUsuario.rol==="gerente"&&"Puede solicitar, aprobar y ver historial"}
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
