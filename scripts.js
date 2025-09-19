const DEMO_USERS = [
  { u: "user01", p: "BlueStar01!" },
  { u: "user02", p: "RedComet02!" },
  { u: "user03", p: "GreenLeaf03!" },
  { u: "user04", p: "NeonWave04!" },
  { u: "user05", p: "MoonLight05!" },
  { u: "user06", p: "PixelKing06!" },
  { u: "user07", p: "RetroGal07!" },
  { u: "user08", p: "TurboDog08!" },
  { u: "user09", p: "ByteNinja09!" },
  { u: "user10", p: "AceRunner10!" }
];

const form = document.getElementById('login-form');
const msg = document.getElementById('login-msg');
const loginSection = document.getElementById('login-section');
const dash = document.getElementById('dashboard');
const welcome = document.getElementById('welcome');
const logoutBtn = document.getElementById('logout');

function setLoggedIn(username){
  sessionStorage.setItem('arcade_user', username);
  renderDashboard(username);
}
function renderDashboard(username){
  loginSection.classList.add('hidden');
  dash.classList.remove('hidden');
  welcome.textContent = `Welcome, ${username}!`;
}
function checkStored(){
  const u = sessionStorage.getItem('arcade_user');
  if(u) renderDashboard(u);
}
form.addEventListener('submit', e=>{
  e.preventDefault();
  msg.textContent = '';
  const u = document.getElementById('username').value.trim();
  const p = document.getElementById('password').value;
  const ok = DEMO_USERS.some(ac => ac.u === u && ac.p === p);
  if(ok) setLoggedIn(u);
  else { msg.textContent = 'Invalid login'; msg.style.color = '#ffb3b3'; }
});
logoutBtn.addEventListener('click', ()=>{
  sessionStorage.removeItem('arcade_user');
  dash.classList.add('hidden');
  loginSection.classList.remove('hidden');
  document.getElementById('password').value = '';
  document.getElementById('username').value = '';
});
checkStored();
