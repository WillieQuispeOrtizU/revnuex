/* mockup-screens-tech.jsx — Tech field app (Android, glove-friendly) */
/* global React, APhone, SB, ANav, Tab, Icon, Mark, Chip, Money, Btn, MapBg, MapPin, Wave, Hdr, Card */

// Big tap target for gloves
function BigBtn({ children, kind = 'primary', icon, full = false, sub, style = {} }) {
  const bg = kind === 'primary' ? 'var(--ember-500)' : kind === 'ok' ? 'var(--ok)' : kind === 'danger' ? 'var(--hot)' : 'var(--bg-2)';
  const fg = kind === 'secondary' ? 'var(--ink-0)' : '#0A0B0D';
  const bd = kind === 'secondary' ? '1px solid var(--line)' : 'none';
  return (
    <button style={{
      minHeight: 56, padding: '0 18px', borderRadius: 14,
      background: bg, color: fg, border: bd, fontWeight: 700, fontSize: 16,
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
      cursor: 'pointer', width: full ? '100%' : 'auto',
      boxShadow: kind === 'primary' ? '0 6px 16px rgba(255,106,26,0.35)' : kind === 'ok' ? '0 6px 16px rgba(43,210,122,0.3)' : 'none',
      ...style,
    }}>
      {icon && <Icon name={icon} size={20} color={fg}/>}
      <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',lineHeight:1.1}}>
        <span>{children}</span>
        {sub && <span style={{fontSize:10,fontWeight:500,opacity:0.7,marginTop:2}}>{sub}</span>}
      </div>
    </button>
  );
}

// Tech bottom nav (4 items, larger)
function TNav({ active = 'today' }) {
  const tabs = [['today','Today','calendar'],['job','Job','wrench'],['route','Route','map'],['me','Me','user']];
  return (
    <div style={{
      position:'absolute',bottom:24,left:0,right:0,
      paddingTop:10,paddingBottom:6,
      background:'var(--bg-1)',borderTop:'1px solid var(--line-soft)',
      display:'flex',justifyContent:'space-around',zIndex:60,
    }}>
      {tabs.map(([id,l,ic])=>(
        <div key={id} style={{
          display:'flex',flexDirection:'column',alignItems:'center',gap:3,
          color: active===id ? 'var(--ember-500)' : 'var(--ink-2)',
          fontSize:11,fontWeight:700,padding:'4px 12px',
        }}>
          <Icon name={ic} active={active===id} size={26}/>
          <span>{l}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Login / Accept invite ─────────────────────────────────
function T_Login() {
  return (
    <div className="screen">
      <SB/>
      <div style={{padding:'80px 24px',textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center',gap:16}}>
        <Mark size={64}/>
        <div style={{fontSize:24,fontWeight:700,marginTop:12}}>Welcome, Jose</div>
        <div style={{fontSize:13,color:'var(--ink-2)',marginBottom:20}}>Vences HVAC · Tech</div>
        <Card ember style={{width:'100%',textAlign:'left'}}>
          <div style={{fontFamily:'var(--font-mono)',fontSize:9,color:'var(--ember-300)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:6}}>Today's preview</div>
          <div style={{fontSize:22,fontWeight:700}}>5 jobs · ~$3,840</div>
          <div style={{fontSize:11,color:'var(--ink-2)',marginTop:4}}>First stop: Maria H. · 9:30 AM</div>
        </Card>
      </div>
      <div style={{position:'absolute',bottom:60,left:24,right:24}}>
        <BigBtn kind="primary" full icon="check">Clock in &amp; start day</BigBtn>
      </div>
      <ANav/>
    </div>
  );
}

// ─── Today queue ───────────────────────────────────────────
function T_Today() {
  const stops = [
    ['9:30','Maria H.','AC not cooling','2204 Bouldin','live','ember','1.2 mi'],
    ['11:00','R. Patel','Capacitor + freon','405 Hyde Park','next','neutral','3.4 mi'],
    ['1:00','J. Wong','Maintenance','78704','later','neutral','2.1 mi'],
    ['3:00','D. Ortiz','No heat','Mueller','later','neutral','4.8 mi'],
  ];
  return (
    <div className="screen">
      <SB/>
      <div style={{padding:'4px 18px 8px'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
          <div>
            <div style={{fontSize:11,color:'var(--ink-2)',fontFamily:'var(--font-mono)',letterSpacing:'0.08em',textTransform:'uppercase'}}>Tuesday · Apr 30</div>
            <div style={{fontSize:24,fontWeight:800,marginTop:2}}>4 stops · $3,840</div>
          </div>
          <Chip color="ok" pulse>clocked in</Chip>
        </div>
      </div>
      <div style={{padding:'6px 14px',overflow:'auto',height:'calc(100% - 184px)'}}>
        {stops.map(([t,c,j,addr,tag,col,dist],i)=>(
          <Card key={i} style={{
            marginBottom:10,padding:14,
            background:tag==='live'?'linear-gradient(90deg,rgba(255,106,26,0.10),var(--bg-1))':'var(--bg-1)',
            borderColor:tag==='live'?'var(--ember-500)':'var(--line)',
            borderWidth:tag==='live'?2:1,
          }}>
            <div style={{display:'flex',gap:12}}>
              <div style={{
                width:54,minHeight:54,borderRadius:12,background:tag==='live'?'var(--ember-500)':'var(--bg-2)',
                color:tag==='live'?'#0A0B0D':'var(--ink-0)',
                display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',
                fontFamily:'var(--font-mono)',fontSize:13,fontWeight:700,flexShrink:0,
              }}>
                <span>{t.split(':')[0]}</span>
                <span style={{fontSize:10,opacity:0.7}}>{t.split(':')[1]}</span>
              </div>
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontSize:15,fontWeight:700}}>{j}</div>
                <div style={{fontSize:11,color:'var(--ink-2)',marginTop:2}}>{c} · {addr}</div>
                <div style={{display:'flex',gap:8,marginTop:8,alignItems:'center'}}>
                  <Chip color={col} pulse={tag==='live'} size="sm">{tag==='live'?'live':tag==='next'?'up next':'queued'}</Chip>
                  <span style={{fontSize:10,color:'var(--ink-2)',display:'flex',alignItems:'center',gap:3}}><Icon name="nav" size={10}/> {dist}</span>
                </div>
              </div>
              {tag==='live' && <Icon name="arrow" size={20} color="var(--ember-500)"/>}
            </div>
          </Card>
        ))}
      </div>
      <TNav active="today"/>
      <ANav/>
    </div>
  );
}

// ─── En route (navigation) ─────────────────────────────────
function T_EnRoute() {
  return (
    <div className="screen">
      <MapBg/>
      <SB/>
      <div style={{position:'absolute',top:48,left:14,right:14,zIndex:10}}>
        <Card style={{padding:'12px 14px',background:'rgba(20,22,28,0.95)',backdropFilter:'blur(8px)'}}>
          <div style={{display:'flex',alignItems:'center',gap:10}}>
            <Icon name="nav" size={28} color="var(--ember-500)"/>
            <div style={{flex:1}}>
              <div style={{fontSize:18,fontWeight:700}}>1.2 mi · 4 min</div>
              <div style={{fontSize:11,color:'var(--ink-2)'}}>To 2204 Bouldin Ave</div>
            </div>
            <BigBtn kind="primary" style={{minHeight:42,padding:'0 12px',fontSize:12}}>Open Maps</BigBtn>
          </div>
        </Card>
      </div>
      {/* Route on map */}
      <svg style={{position:'absolute',inset:0,zIndex:3}} width="100%" height="100%">
        <path d="M 90 540 Q 130 460, 170 380 Q 200 320, 220 260" stroke="var(--ember-500)" strokeWidth="5" strokeDasharray="0" fill="none" strokeLinecap="round" opacity="0.9"/>
        <path d="M 90 540 Q 130 460, 170 380 Q 200 320, 220 260" stroke="white" strokeWidth="2" strokeDasharray="3 6" fill="none" strokeLinecap="round" opacity="0.6"/>
      </svg>
      <div style={{position:'absolute',left:'24%',top:'80%',transform:'translate(-50%,-50%)',width:36,height:36,borderRadius:99,background:'var(--info)',border:'3px solid #0A0B0D',display:'grid',placeItems:'center',color:'#0A0B0D',fontWeight:700,zIndex:5}}>JR</div>
      <MapPin x={222} y={262} pulse/>
      <div style={{position:'absolute',bottom:140,left:14,right:14,zIndex:10}}>
        <Card>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div>
              <div style={{fontSize:14,fontWeight:700}}>Maria H.</div>
              <div style={{fontSize:10,color:'var(--ink-2)'}}>AC not cooling · upstairs</div>
            </div>
            <div style={{display:'flex',gap:6}}>
              <div style={{width:40,height:40,borderRadius:99,background:'var(--bg-2)',display:'grid',placeItems:'center'}}><Icon name="phone" size={16}/></div>
              <div style={{width:40,height:40,borderRadius:99,background:'var(--bg-2)',display:'grid',placeItems:'center'}}><Icon name="msg" size={16}/></div>
            </div>
          </div>
        </Card>
      </div>
      <div style={{position:'absolute',bottom:60,left:14,right:14,zIndex:10}}>
        <BigBtn kind="ok" full icon="check">I&apos;ve arrived</BigBtn>
      </div>
      <ANav/>
    </div>
  );
}

// ─── On-site / Job in progress ─────────────────────────────
function T_OnSite() {
  return (
    <div className="screen">
      <SB/>
      <Hdr title="Job #2841" sub="Live · 22 min on-site"/>
      <div style={{padding:'0 16px',overflow:'auto',height:'calc(100% - 90px)',paddingBottom:80}}>
        <Card ember style={{marginBottom:10}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:6}}>
            <div>
              <div style={{fontSize:18,fontWeight:700}}>Maria H.</div>
              <div style={{fontSize:11,color:'var(--ink-2)'}}>2204 Bouldin Ave</div>
            </div>
            <Chip color="ember" pulse>on-site</Chip>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:6,marginTop:10}}>
            <BigBtn kind="secondary" icon="phone" style={{minHeight:44,fontSize:11,padding:'0 8px'}}>Call</BigBtn>
            <BigBtn kind="secondary" icon="msg" style={{minHeight:44,fontSize:11,padding:'0 8px'}}>Text</BigBtn>
            <BigBtn kind="secondary" icon="nav" style={{minHeight:44,fontSize:11,padding:'0 8px'}}>Map</BigBtn>
          </div>
        </Card>
        <Card style={{marginBottom:10}}>
          <div style={{fontFamily:'var(--font-mono)',fontSize:9,color:'var(--ink-2)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:10}}>Customer notes (from Iris)</div>
          <div style={{fontSize:12,color:'var(--ink-1)',lineHeight:1.5,padding:10,background:'var(--bg-2)',borderRadius:8}}>
            "Upstairs unit only. Fan running, no cold air. Issue started ~1 hr ago. Last service: 3 mo ago — capacitor replaced then."
          </div>
        </Card>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginBottom:10}}>
          <BigBtn kind="primary" icon="cam">Photos</BigBtn>
          <BigBtn kind="primary" icon="mic" sub="Iris will write notes">Voice note</BigBtn>
        </div>
        <Card>
          <div style={{fontFamily:'var(--font-mono)',fontSize:9,color:'var(--ink-2)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:10}}>Steps</div>
          {[['Diagnose','active'],['Build estimate','pending'],['Get approval','pending'],['Repair','pending'],['Collect payment','pending']].map(([t,s],i)=>(
            <div key={i} style={{display:'flex',gap:10,padding:'8px 0',alignItems:'center'}}>
              <div style={{width:22,height:22,borderRadius:99,background:s==='active'?'var(--ember-500)':'var(--bg-2)',border:s==='pending'?'1px solid var(--line)':'none',display:'grid',placeItems:'center'}}>
                {s==='active' && <div style={{width:8,height:8,background:'#0A0B0D',borderRadius:99,animation:'pulse-ember 1.5s infinite'}}/>}
              </div>
              <span style={{fontSize:13,color:s==='pending'?'var(--ink-2)':'var(--ink-0)',fontWeight:s==='active'?700:400}}>{t}</span>
              {s==='active' && <Chip color="ember" size="sm" style={{marginLeft:'auto'}}>now</Chip>}
            </div>
          ))}
        </Card>
      </div>
      <ANav/>
    </div>
  );
}

// ─── Diagnosis voice note ──────────────────────────────────
function T_Diagnose() {
  return (
    <div className="screen">
      <SB/>
      <Hdr title="Voice diagnosis" sub="Tap to speak — Iris transcribes"/>
      <div style={{padding:'20px 22px',display:'flex',flexDirection:'column',gap:16,height:'calc(100% - 80px)'}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:18,padding:'24px 0'}}>
          <div style={{position:'relative'}}>
            <div style={{position:'absolute',inset:-12,borderRadius:99,border:'2px solid var(--ember-500)',animation:'radar 1.6s infinite'}}/>
            <div style={{position:'absolute',inset:-24,borderRadius:99,border:'2px solid var(--ember-500)',animation:'radar 1.6s infinite',animationDelay:'0.6s'}}/>
            <div style={{width:120,height:120,borderRadius:99,background:'var(--ember-500)',display:'grid',placeItems:'center',boxShadow:'0 16px 40px rgba(255,106,26,0.4)'}}>
              <Icon name="mic" size={48} color="#0A0B0D"/>
            </div>
          </div>
          <Wave w={260} h={36}/>
          <div style={{fontFamily:'var(--font-mono)',fontSize:12,color:'var(--ember-300)'}}>RECORDING · 0:24</div>
        </div>
        <Card>
          <div style={{fontFamily:'var(--font-mono)',fontSize:9,color:'var(--ember-300)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:8}}>Iris is transcribing</div>
          <div style={{fontSize:13,color:'var(--ink-1)',lineHeight:1.6}}>
            "Capacitor on the upstairs condenser is bulging. Compressor still cycles fine. Refrigerant looks low — gauge reads 145 psi.<span style={{borderRight:'2px solid var(--ember-500)',marginLeft:2,animation:'pulse-ember 1s infinite'}}>&nbsp;</span>"
          </div>
        </Card>
        <div style={{flex:1}}/>
        <BigBtn kind="ok" full icon="check">Done · build estimate</BigBtn>
      </div>
      <ANav/>
    </div>
  );
}

// ─── Build estimate ────────────────────────────────────────
function T_Estimate() {
  const lines = [
    ['Capacitor (45/5 µF)','Part','$84','1'],
    ['R-410A refrigerant','Part','$120','2 lb'],
    ['Diagnostic + labor','Service','$180','1 hr'],
    ['Refrigerant labor','Service','$160','45 min'],
  ];
  return (
    <div className="screen">
      <SB/>
      <Hdr title="Estimate" sub="Maria H. · #2841"/>
      <div style={{padding:'0 16px',overflow:'auto',height:'calc(100% - 240px)'}}>
        <Card ember style={{marginBottom:12}}>
          <div style={{fontFamily:'var(--font-mono)',fontSize:9,color:'var(--ember-300)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:6}}>Iris suggested · matches your past jobs</div>
          <div style={{fontSize:12,color:'var(--ink-1)',lineHeight:1.4}}>Standard cap + freon repair. Pulled from your last 3 jobs of this type.</div>
        </Card>
        {lines.map(([name,kind,amt,qty],i)=>(
          <Card key={i} style={{marginBottom:8,padding:12}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
              <div>
                <div style={{fontSize:13,fontWeight:600}}>{name}</div>
                <div style={{fontSize:10,color:'var(--ink-2)',marginTop:2}}>{kind} · {qty}</div>
              </div>
              <div style={{fontFamily:'var(--font-mono)',fontSize:14,fontWeight:700}}>{amt}</div>
            </div>
          </Card>
        ))}
        <Btn kind="ghost" size="md" full icon="plus" style={{marginTop:8}}>Add line</Btn>
      </div>
      <div style={{position:'absolute',bottom:88,left:16,right:16,padding:'14px 16px',background:'var(--bg-1)',border:'1px solid var(--ember-500)',borderRadius:14,boxShadow:'0 0 0 4px rgba(255,106,26,0.1)'}}>
        <div style={{display:'flex',justifyContent:'space-between',marginBottom:4,fontSize:11,color:'var(--ink-2)'}}>
          <span>Subtotal</span><span>$544</span>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',marginBottom:8,fontSize:11,color:'var(--ink-2)'}}>
          <span>Tax (8.25%)</span><span>$45</span>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <span style={{fontSize:13,fontWeight:600}}>Total</span>
          <Money value="589" size={28}/>
        </div>
      </div>
      <div style={{position:'absolute',bottom:30,left:16,right:16}}>
        <BigBtn kind="primary" full icon="arrow">Send to customer</BigBtn>
      </div>
      <ANav/>
    </div>
  );
}

// ─── Customer signature ────────────────────────────────────
function T_Signature() {
  return (
    <div className="screen">
      <SB/>
      <Hdr title="Customer approval" sub="Hand phone to Maria H."/>
      <div style={{padding:'0 16px'}}>
        <Card ember style={{marginBottom:12}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div>
              <div style={{fontSize:11,color:'var(--ink-2)'}}>Total</div>
              <Money value="589" size={32}/>
            </div>
            <Chip color="ok" size="sm" pulse>Awaiting signature</Chip>
          </div>
        </Card>
        <div style={{height:240,background:'var(--bg-1)',border:'2px dashed var(--line)',borderRadius:14,position:'relative',marginBottom:14,display:'flex',alignItems:'center',justifyContent:'center'}}>
          <svg width="80%" height="60%" viewBox="0 0 240 100" style={{position:'absolute'}}>
            <path d="M 20 60 Q 30 30, 50 50 Q 70 70, 90 40 Q 110 20, 130 50 T 180 55 L 200 70" stroke="var(--ember-500)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          </svg>
          <div style={{position:'absolute',bottom:12,left:14,right:14,display:'flex',justifyContent:'space-between',fontSize:10,color:'var(--ink-2)'}}>
            <span>Sign here</span>
            <span style={{textDecoration:'underline'}}>Clear</span>
          </div>
        </div>
        <Card style={{padding:10,marginBottom:12,background:'rgba(255,255,255,0.03)'}}>
          <label style={{display:'flex',gap:10,alignItems:'flex-start',fontSize:11,color:'var(--ink-1)',lineHeight:1.4}}>
            <div style={{width:18,height:18,borderRadius:4,background:'var(--ember-500)',display:'grid',placeItems:'center',flexShrink:0,marginTop:1}}>
              <Icon name="check" size={12} color="#0A0B0D"/>
            </div>
            I authorize Vences HVAC to perform the work above for $589.
          </label>
        </Card>
      </div>
      <div style={{position:'absolute',bottom:30,left:16,right:16}}>
        <BigBtn kind="ok" full icon="check">Approve &amp; start repair</BigBtn>
      </div>
      <ANav/>
    </div>
  );
}

// ─── Photo capture ─────────────────────────────────────────
function T_Photo() {
  return (
    <div className="screen">
      <div style={{position:'absolute',inset:0,background:'#0A0B0D',backgroundImage:'linear-gradient(180deg,#1A1D22,#0A0B0D)'}}/>
      <SB/>
      {/* Camera viewfinder */}
      <div style={{position:'absolute',top:60,left:14,right:14,bottom:200,borderRadius:18,background:'#1F2329',overflow:'hidden',display:'grid',placeItems:'center'}}>
        <svg width="200" height="200" viewBox="0 0 200 200" opacity="0.3">
          <path d="M40 60 L40 140 L160 140 L160 60 Z M60 80 L60 120 L140 120 L140 80 Z" fill="none" stroke="var(--ink-2)" strokeWidth="2"/>
          <circle cx="100" cy="100" r="20" fill="none" stroke="var(--ink-2)" strokeWidth="2"/>
          <circle cx="140" cy="68" r="3" fill="var(--ink-2)"/>
        </svg>
        <div style={{position:'absolute',top:14,left:14,padding:'4px 10px',background:'rgba(0,0,0,0.5)',borderRadius:99,fontSize:10,fontFamily:'var(--font-mono)',color:'white',letterSpacing:'0.08em'}}>BEFORE · 2 of 4</div>
        <div style={{position:'absolute',inset:14,border:'2px solid rgba(255,106,26,0.4)',borderRadius:8,pointerEvents:'none'}}>
          <div style={{position:'absolute',top:-1,left:-1,width:20,height:20,borderTop:'3px solid var(--ember-500)',borderLeft:'3px solid var(--ember-500)'}}/>
          <div style={{position:'absolute',top:-1,right:-1,width:20,height:20,borderTop:'3px solid var(--ember-500)',borderRight:'3px solid var(--ember-500)'}}/>
          <div style={{position:'absolute',bottom:-1,left:-1,width:20,height:20,borderBottom:'3px solid var(--ember-500)',borderLeft:'3px solid var(--ember-500)'}}/>
          <div style={{position:'absolute',bottom:-1,right:-1,width:20,height:20,borderBottom:'3px solid var(--ember-500)',borderRight:'3px solid var(--ember-500)'}}/>
        </div>
      </div>
      {/* Filmstrip */}
      <div style={{position:'absolute',bottom:140,left:14,right:14,display:'flex',gap:6}}>
        {[1,2,3,4].map(i=>(
          <div key={i} style={{
            flex:1,height:56,borderRadius:8,
            background:i<=1?'#2A2F36':i===2?'rgba(255,106,26,0.2)':'transparent',
            border:i===2?'2px solid var(--ember-500)':'1px dashed var(--line)',
            display:'grid',placeItems:'center',
            fontSize:10,color:'var(--ink-2)',
          }}>{i<=1?<Icon name="check" size={16} color="var(--ok)"/>:i===2?'NOW':`${i}`}</div>
        ))}
      </div>
      {/* Shutter */}
      <div style={{position:'absolute',bottom:40,left:0,right:0,display:'flex',alignItems:'center',justifyContent:'center',gap:36}}>
        <div style={{width:48,height:48,borderRadius:99,background:'rgba(20,22,28,0.7)',backdropFilter:'blur(8px)',display:'grid',placeItems:'center',border:'1px solid var(--line)'}}>
          <Icon name="x" size={20}/>
        </div>
        <div style={{width:80,height:80,borderRadius:99,background:'white',padding:4,display:'grid',placeItems:'center',cursor:'pointer'}}>
          <div style={{width:'100%',height:'100%',borderRadius:99,background:'white',border:'4px solid #0A0B0D'}}/>
        </div>
        <div style={{width:48,height:48,borderRadius:99,background:'rgba(20,22,28,0.7)',backdropFilter:'blur(8px)',display:'grid',placeItems:'center',border:'1px solid var(--line)',color:'var(--ember-500)'}}>
          <Icon name="check" size={20} color="var(--ember-500)"/>
        </div>
      </div>
      <ANav/>
    </div>
  );
}

// ─── Payment capture ───────────────────────────────────────
function T_Payment() {
  return (
    <div className="screen">
      <SB/>
      <Hdr title="Collect payment" sub="$589 · Maria H."/>
      <div style={{padding:'0 16px'}}>
        <div style={{textAlign:'center',padding:'24px 0'}}>
          <Money value="589.00" size={56}/>
          <div style={{fontSize:11,color:'var(--ok)',marginTop:8}}>Estimate approved at 2:14 PM</div>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:10}}>
          <BigBtn kind="primary" full icon="card" sub="Tap, dip, or insert"><span>Card · tap to pay</span></BigBtn>
          <BigBtn kind="secondary" full icon="cash">Cash</BigBtn>
          <BigBtn kind="secondary" full icon="msg" sub="SMS or email">Send invoice link</BigBtn>
        </div>
      </div>
      <ANav/>
    </div>
  );
}

// ─── Tap to pay (NFC) ──────────────────────────────────────
function T_TapPay() {
  return (
    <div className="screen">
      <div style={{position:'absolute',inset:0,background:'radial-gradient(600px 400px at 50% 50%, rgba(255,106,26,0.18), #0A0B0D)'}}/>
      <SB/>
      <Hdr title="Tap to pay"/>
      <div style={{padding:'40px 22px',textAlign:'center',position:'relative'}}>
        <div style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--ember-300)',letterSpacing:'0.1em',marginBottom:6}}>WAITING FOR CARD</div>
        <Money value="589.00" size={44}/>
      </div>
      <div style={{position:'absolute',top:'42%',left:'50%',transform:'translateX(-50%)',display:'grid',placeItems:'center'}}>
        <div style={{position:'absolute',inset:-40,borderRadius:99,border:'2px solid var(--ember-500)',animation:'nfc-ring 1.6s infinite'}}/>
        <div style={{position:'absolute',inset:-80,borderRadius:99,border:'2px solid var(--ember-500)',animation:'nfc-ring 1.6s infinite',animationDelay:'0.6s'}}/>
        <div style={{position:'absolute',inset:-120,borderRadius:99,border:'2px solid var(--ember-500)',animation:'nfc-ring 1.6s infinite',animationDelay:'1.2s'}}/>
        <div style={{width:120,height:120,borderRadius:99,background:'var(--ember-500)',display:'grid',placeItems:'center',boxShadow:'0 0 60px rgba(255,106,26,0.5)'}}>
          <Icon name="wifi" size={60} color="#0A0B0D"/>
        </div>
      </div>
      <div style={{position:'absolute',bottom:80,left:22,right:22,textAlign:'center'}}>
        <div style={{fontSize:14,color:'var(--ink-1)',marginBottom:14}}>Hold customer's card to the back of the phone</div>
        <Btn kind="ghost" size="md" full>Cancel</Btn>
      </div>
      <ANav/>
    </div>
  );
}

// ─── Payment success ───────────────────────────────────────
function T_PaySuccess() {
  return (
    <div className="screen">
      <div style={{position:'absolute',inset:0,background:'radial-gradient(600px 400px at 50% 30%, rgba(43,210,122,0.15), #0A0B0D)'}}/>
      <SB/>
      <div style={{padding:'80px 24px',textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center',gap:18,position:'relative'}}>
        <div style={{width:120,height:120,borderRadius:99,background:'var(--ok)',display:'grid',placeItems:'center',boxShadow:'0 0 80px rgba(43,210,122,0.4)'}}>
          <Icon name="check" size={64} color="#0A0B0D"/>
        </div>
        <Money value="589.00" size={48}/>
        <div style={{fontSize:18,fontWeight:700,color:'var(--ok)'}}>Paid · Visa 4242</div>
        <div style={{fontSize:12,color:'var(--ink-2)'}}>2:38 PM · 24 min job · receipt sent</div>
        <Card style={{width:'100%',textAlign:'left',marginTop:14}}>
          <div style={{display:'flex',justifyContent:'space-between',marginBottom:6}}>
            <span style={{fontSize:11,color:'var(--ink-2)'}}>Your earnings</span>
            <span style={{fontSize:13,fontWeight:700,color:'var(--ok)',fontFamily:'var(--font-mono)'}}>+$118</span>
          </div>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <span style={{fontSize:11,color:'var(--ink-2)'}}>Today's earnings</span>
            <span style={{fontSize:13,fontWeight:700,fontFamily:'var(--font-mono)'}}>$284 / $640 goal</span>
          </div>
          <div style={{height:5,background:'var(--bg-2)',borderRadius:99,marginTop:8,overflow:'hidden'}}>
            <div style={{height:'100%',width:'44%',background:'var(--ok)',borderRadius:99}}/>
          </div>
        </Card>
      </div>
      <div style={{position:'absolute',bottom:50,left:24,right:24,display:'flex',flexDirection:'column',gap:8}}>
        <BigBtn kind="primary" full icon="arrow">Next stop · R. Patel</BigBtn>
        <Btn kind="ghost" size="md" full>Take a break</Btn>
      </div>
      <ANav/>
    </div>
  );
}

// ─── Day end summary ───────────────────────────────────────
function T_EndOfDay() {
  return (
    <div className="screen">
      <SB/>
      <Hdr title="Day complete" sub="Great work, Jose"/>
      <div style={{padding:'0 16px',overflow:'auto',height:'calc(100% - 130px)'}}>
        <Card ember glow style={{marginBottom:12,padding:18}}>
          <div style={{fontFamily:'var(--font-mono)',fontSize:9,color:'var(--ember-300)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:6}}>Today's earnings</div>
          <Money value="640" size={48}/>
          <div style={{fontSize:11,color:'var(--ok)',marginTop:6,display:'flex',alignItems:'center',gap:4}}>
            <Icon name="arrow" size={11} color="var(--ok)"/> +18% vs your weekly avg
          </div>
        </Card>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginBottom:12}}>
          <Card><div style={{fontSize:9,color:'var(--ink-2)',fontFamily:'var(--font-mono)',textTransform:'uppercase'}}>Jobs done</div><div style={{fontSize:24,fontWeight:700,marginTop:4}}>5 / 5</div></Card>
          <Card><div style={{fontSize:9,color:'var(--ink-2)',fontFamily:'var(--font-mono)',textTransform:'uppercase'}}>Avg time</div><div style={{fontSize:24,fontWeight:700,marginTop:4}}>52m</div></Card>
        </div>
        <Card style={{marginBottom:12}}>
          <div style={{fontFamily:'var(--font-mono)',fontSize:9,color:'var(--ink-2)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:10}}>Reviews collected</div>
          <div style={{display:'flex',gap:6,marginBottom:6}}>
            {[1,1,1,1,1].map((_,i)=>(
              <Icon key={i} name="star" size={20} color="var(--warn)"/>
            ))}
            <span style={{marginLeft:'auto',fontSize:13,fontWeight:700}}>4.9 · 3 new</span>
          </div>
          <div style={{fontSize:11,color:'var(--ink-1)',fontStyle:'italic',marginTop:6}}>"Jose was super fast and explained everything. Highly recommend." — Maria H.</div>
        </Card>
        <Card>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div>
              <div style={{fontSize:13,fontWeight:600}}>Hours logged</div>
              <div style={{fontSize:11,color:'var(--ink-2)',marginTop:2}}>8:32 AM → 5:14 PM</div>
            </div>
            <span style={{fontFamily:'var(--font-mono)',fontSize:18,fontWeight:700}}>8h 42m</span>
          </div>
        </Card>
      </div>
      <div style={{position:'absolute',bottom:30,left:16,right:16}}>
        <BigBtn kind="ok" full icon="check">Clock out</BigBtn>
      </div>
      <ANav/>
    </div>
  );
}

// ─── Profile / Me ──────────────────────────────────────────
function T_Profile() {
  return (
    <div className="screen">
      <SB/>
      <div style={{padding:'8px 18px 16px'}}>
        <div style={{fontSize:24,fontWeight:800}}>Account</div>
      </div>
      <div style={{padding:'0 18px',overflow:'auto',height:'calc(100% - 180px)'}}>
        <Card style={{marginBottom:14,padding:16,display:'flex',gap:12,alignItems:'center'}}>
          <div style={{width:64,height:64,borderRadius:99,background:'linear-gradient(135deg,#FF8A3A,#C43E04)',display:'grid',placeItems:'center',color:'white',fontSize:24,fontWeight:700}}>JR</div>
          <div style={{flex:1}}>
            <div style={{fontSize:18,fontWeight:700}}>Jose Ramirez</div>
            <div style={{fontSize:11,color:'var(--ink-2)'}}>Tech · Vences HVAC · 2 yrs</div>
            <div style={{display:'flex',gap:6,marginTop:6}}>
              <Chip color="ok" size="sm">EPA 608</Chip>
              <Chip color="info" size="sm">★ 4.9</Chip>
            </div>
          </div>
        </Card>
        <Card style={{marginBottom:10}}>
          <div style={{fontFamily:'var(--font-mono)',fontSize:9,color:'var(--ink-2)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:10}}>This week</div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
            <div><div style={{fontSize:11,color:'var(--ink-2)'}}>Earnings</div><div style={{fontSize:20,fontWeight:700,marginTop:2}}>$2,840</div></div>
            <div><div style={{fontSize:11,color:'var(--ink-2)'}}>Jobs</div><div style={{fontSize:20,fontWeight:700,marginTop:2}}>22</div></div>
          </div>
        </Card>
        {[
          ['Schedule + availability','calendar'],
          ['Truck inventory','truck'],
          ['Certifications','shield'],
          ['Pay + bank','dollar'],
          ['Help','msg'],
        ].map(([l,ic],i)=>(
          <div key={i} style={{padding:'14px 4px',borderBottom:i<4?'1px solid var(--line-soft)':'none',display:'flex',alignItems:'center',gap:12}}>
            <Icon name={ic} size={20}/>
            <span style={{flex:1,fontSize:14}}>{l}</span>
            <Icon name="arrow" size={14}/>
          </div>
        ))}
      </div>
      <TNav active="me"/>
      <ANav/>
    </div>
  );
}

// ─── Empty state (no jobs) ─────────────────────────────────
function T_Empty() {
  return (
    <div className="screen">
      <SB/>
      <Hdr title="Today" onBack={false}/>
      <div style={{padding:'40px 24px',textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center',gap:18,height:'calc(100% - 200px)',justifyContent:'center'}}>
        <div style={{width:80,height:80,borderRadius:99,background:'var(--bg-2)',display:'grid',placeItems:'center',border:'1px dashed var(--line)'}}>
          <Icon name="calendar" size={36} color="var(--ink-2)"/>
        </div>
        <div>
          <div style={{fontSize:20,fontWeight:700}}>No jobs yet</div>
          <div style={{fontSize:13,color:'var(--ink-2)',marginTop:6,lineHeight:1.4}}>Diego will dispatch you when a lead comes in. We'll buzz your phone.</div>
        </div>
        <Card ember style={{textAlign:'left',width:'100%',marginTop:12}}>
          <div style={{fontFamily:'var(--font-mono)',fontSize:9,color:'var(--ember-300)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:6}}>Tip</div>
          <div style={{fontSize:12,color:'var(--ink-1)',lineHeight:1.4}}>Average wait between jobs in your area: ~38 min. Stay close to Bouldin / Travis Heights.</div>
        </Card>
      </div>
      <TNav active="today"/>
      <ANav/>
    </div>
  );
}

Object.assign(window, {
  T_Login, T_Today, T_EnRoute, T_OnSite, T_Diagnose, T_Estimate, T_Signature,
  T_Photo, T_Payment, T_TapPay, T_PaySuccess, T_EndOfDay, T_Profile, T_Empty,
  BigBtn, TNav,
});
