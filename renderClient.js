:root{
  --bg: #0B0E14;
  --surface: #131824;
  --surface-2: #1A2130;
  --border: #262E3F;
  --text: #E6EAF2;
  --text-muted: #8B93A7;
  --accent: #7C5CFF;
  --accent-soft: #7C5CFF22;
  --success: #22D3A8;
  --warning: #F5B942;
  --radius: 10px;
}
*{box-sizing:border-box; margin:0; padding:0;}
body{
  background:var(--bg);
  color:var(--text);
  font-family:'Inter', sans-serif;
  min-height:100vh;
}
h1,h2{font-family:'Space Grotesk', sans-serif; letter-spacing:-0.02em;}
.mono{font-family:'JetBrains Mono', monospace;}
.muted{color:var(--text-muted);}
a{color:inherit; text-decoration:none;}

.app-shell{display:flex; min-height:100vh;}

/* SIDEBAR */
.sidebar{
  width:230px; flex-shrink:0;
  background:var(--surface);
  border-right:1px solid var(--border);
  padding:24px 18px;
  display:flex; flex-direction:column;
}
.logo{display:flex; align-items:center; gap:10px; font-weight:700; font-size:1.1rem; margin-bottom:36px;}
.logo-mark{
  width:26px; height:26px; border-radius:7px;
  background:linear-gradient(135deg, var(--accent), #4C2FE0);
  display:flex; align-items:center; justify-content:center;
  font-size:0.8rem; font-weight:700; color:white;
}
.side-nav{display:flex; flex-direction:column; gap:4px; flex:1;}
.side-link{
  padding:10px 12px; border-radius:8px; font-size:0.9rem;
  color:var(--text-muted); transition:all .15s;
}
.side-link:hover{background:var(--surface-2); color:var(--text);}
.side-link.active{background:var(--accent-soft); color:#B6A5FF;}
.mode-badge{
  font-size:0.75rem; color:var(--warning);
  background:#F5B94222; border:1px solid #F5B94244;
  padding:6px 10px; border-radius:100px; text-align:center;
}

/* MAIN */
.main{flex:1; padding:36px 40px; max-width:1100px;}
.main-header{
  display:flex; justify-content:space-between; align-items:flex-end;
  margin-bottom:32px; flex-wrap:wrap; gap:16px;
}
.main-header h1{font-size:1.6rem; margin-bottom:6px;}

.btn{
  display:inline-flex; align-items:center; gap:8px;
  padding:10px 18px; border-radius:8px;
  font-size:0.9rem; font-weight:600;
  border:1px solid transparent; cursor:pointer;
  transition:all .15s; font-family:inherit;
}
.btn-primary{background:var(--accent); color:white;}
.btn-primary:hover{background:#6A4AEF;}
.btn-ghost{border-color:var(--border); background:transparent; color:var(--text);}
.btn-ghost:hover{border-color:#3A4358; background:var(--surface-2);}
.btn-danger{background:transparent; color:#FF6B6B; border-color:#FF6B6B44;}
.btn-danger:hover{background:#FF6B6B18;}

/* SERVICE GRID */
.service-grid{
  display:grid; gap:18px;
  grid-template-columns:repeat(auto-fill, minmax(280px, 1fr));
}
.service-card{
  background:var(--surface); border:1px solid var(--border);
  border-radius:var(--radius); padding:22px;
  display:flex; flex-direction:column; gap:12px;
}
.service-card-top{display:flex; justify-content:space-between; align-items:flex-start;}
.service-name{font-weight:600; font-size:1.02rem;}
.service-type{
  font-size:0.72rem; color:var(--text-muted);
  text-transform:uppercase; letter-spacing:0.05em; margin-top:2px;
}
.status-badge{
  font-size:0.75rem; padding:4px 10px; border-radius:100px;
  display:inline-flex; align-items:center; gap:6px; font-weight:500;
}
.status-live{background:#22D3A822; color:var(--success);}
.status-building{background:#F5B94222; color:var(--warning);}
.status-dot{width:6px; height:6px; border-radius:50%; background:currentColor;}
.service-repo{font-size:0.82rem; color:var(--text-muted);}
.service-url{font-size:0.85rem; color:var(--accent);}
.service-actions{display:flex; gap:8px; margin-top:auto; padding-top:8px;}
.service-actions .btn{padding:7px 12px; font-size:0.8rem;}

/* MODAL */
.modal-overlay{
  position:fixed; inset:0; background:#00000099;
  display:none; align-items:center; justify-content:center;
  z-index:100; padding:20px;
}
.modal-overlay.open{display:flex;}
.modal{
  background:var(--surface); border:1px solid var(--border);
  border-radius:14px; padding:28px; width:100%; max-width:420px;
}
.modal-wide{max-width:600px;}
.modal h2{margin-bottom:20px; font-size:1.2rem;}
.modal-header-row{display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;}
.modal-header-row h2{margin:0;}
#newServiceForm{display:flex; flex-direction:column; gap:16px;}
#newServiceForm label{display:flex; flex-direction:column; gap:6px; font-size:0.85rem; color:var(--text-muted);}
#newServiceForm input, #newServiceForm select{
  background:var(--surface-2); border:1px solid var(--border);
  border-radius:8px; padding:10px 12px; color:var(--text);
  font-family:inherit; font-size:0.92rem;
}
#newServiceForm input:focus, #newServiceForm select:focus{outline:none; border-color:var(--accent);}
.modal-actions{display:flex; justify-content:flex-end; gap:10px; margin-top:8px;}

.log-window{
  background:var(--bg); border:1px solid var(--border); border-radius:8px;
  padding:16px; height:280px; overflow-y:auto; font-size:0.82rem;
  color:var(--text-muted); line-height:1.8;
}
.log-window div{color:var(--text);}
