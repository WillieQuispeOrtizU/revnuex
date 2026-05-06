/* mockup-screens-owner.jsx — Owner persona screens (compact) */
/* global React, IPhone, SB, HI, Tab, Icon, Mark, Chip, Money, Btn, MapBg, MapPin, TechPin, Wave, Hdr, Card */

// ─── Onboarding flow ────────────────────────────────────────
function S_Splash() {
  return (
    <div className="screen">
      <SB/>
      <div style={{padding:'120px 28px',textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center',gap:24}}>
        <Mark size={88}/>
        <div style={{fontSize:36,fontWeight:800,letterSpacing:'-0.03em'}}>RevnueX</div>
        <div style={{fontSize:14,color:'var(--ink-2)'}}>Revenue infrastructure for HVAC</div>
      </div>
      <div style={{position:'absolute',bottom:80,left:28,right:28,display:'flex',flexDirection:'column',gap:10}}>
        <Btn kind="primary" size="lg" full>Get started</Btn>
        <Btn kind="secondary" size="lg" full>I have an account</Btn>
      </div>
      <HI/>
    </div>
  );
}

function S_Welcome() {
  return (
    <div className="screen">
      <SB/>
      <div style={{padding:'24px 22px',display:'flex',flexDirection:'column',height:'calc(100% - 38px)'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <Mark size={28}/>
          <div style={{padding:3,background:'var(--bg-2)',border:'1px solid var(--line)',borderRadius:99,display:'inline-flex'}}>
            <span style={{padding:'4px 12px',borderRadius:99,background:'var(--ember-500)',color:'#0A0B0D',fontSize:10,fontWeight:700}}>EN</span>
            <span style={{padding:'4px 12px',fontSize:10,color:'var(--ink-2)',fontWeight:600}}>ES</span>
          </div>
        </div>
        <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center'}}>
          <div style={{fontSize:34,fontWeight:800,letterSpacing:'-0.03em',lineHeight:1.05,marginBottom:14}}>Stop missing<br/><span style={{color:'var(--ember-500)'}}>$5,000/mo</span><br/>in calls.</div>
          <div style={{fontSize:14,color:'var(--ink-1)',lineHeight:1.5}}>Iris answers every call in under 60 seconds. You keep every job.</div>
        </div>
        <Card ember style={{marginBottom:14}}>
          <div style={{fontFamily:'var(--font-mono)',fontSize:9,color:'var(--ember-300)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:6}}>Founder program · 3 of 10 left</div>
          <div style={{fontSize:12,color:'var(--ink-1)',lineHeight:1.4}}>Lock your city for 3 months. Setup waived if no first job in 30 days.</div>
        </Card>
        <Btn kind="primary" size="lg" full icon="arrow">Claim my city</Btn>
      </div>
      <HI/>
    </div>
  );
}

function S_OTP() {
  return (
    <div className="screen">
      <SB/>
      <Hdr title="Verify your number" sub="Sent to (512) 555 0142"/>
      <div style={{padding:'12px 22px'}}>
        <div style={{display:'flex',gap:8,marginBottom:24}}>
          {['7','3','9','4','•','•'].map((d,i)=>(
            <div key={i} style={{flex:1,height:54,borderRadius:10,background:'var(--bg-2)',border:`1px solid ${i<4?'var(--ember-500)':'var(--line)'}`,display:'grid',placeItems:'center',fontSize:22,fontWeight:700,fontFamily:'var(--font-mono)'}}>{d!=='•'?d:''}</div>
          ))}
        </div>
        <div style={{fontSize:12,color:'var(--ink-2)',textAlign:'center',marginBottom:140}}>Resend code in 0:18</div>
        <Btn kind="primary" size="lg" full disabled style={{opacity:0.4}}>Continue</Btn>
      </div>
      <div style={{position:'absolute',bottom:0,left:0,right:0,height:240,background:'#1A1D22',borderTop:'1px solid var(--line)'}}>
        <div style={{padding:'8px 6px',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:6}}>
          {['1','2','3','4','5','6','7','8','9','','0','⌫'].map((k,i)=>(
            <div key={i} style={{height:42,borderRadius:6,background:k===''?'transparent':'#2A2F36',color:'var(--ink-0)',display:'grid',placeItems:'center',fontSize:18,fontWeight:500}}>{k}</div>
          ))}
        </div>
      </div>
      <HI/>
    </div>
  );
}

function S_PickMarket() {
  return (
    <div className="screen">
      <SB/>
      <Hdr title="Pick your market"/>
      <div style={{padding:'4px 22px',display:'flex',flexDirection:'column',gap:14}}>
        <div style={{padding:'14px 16px',background:'var(--bg-2)',border:'1px solid var(--ember-500)',borderRadius:12,boxShadow:'0 0 0 4px rgba(255,106,26,0.15)'}}>
          <div style={{fontFamily:'var(--font-mono)',fontSize:9,color:'var(--ember-300)',letterSpacing:'0.06em',textTransform:'uppercase'}}>City + ZIP radius</div>
          <div style={{fontSize:16,marginTop:4,fontWeight:600}}>Austin, TX · 78704</div>
          <div style={{fontSize:11,color:'var(--ink-2)',marginTop:2}}>Radius: 15 mi · ~84,000 households</div>
        </div>
        <div style={{height:160,borderRadius:12,background:'var(--bg-1)',border:'1px solid var(--line)',position:'relative',overflow:'hidden'}}>
          <MapBg/>
          <div style={{position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%)'}}>
            <div style={{width:120,height:120,borderRadius:99,border:'2px dashed var(--ember-500)',background:'rgba(255,106,26,0.1)'}}/>
          </div>
          <MapPin x={154} y={80}/>
        </div>
        <div>
          <div style={{fontSize:11,color:'var(--ink-2)',marginBottom:6}}>Slider · radius</div>
          <div style={{height:6,borderRadius:99,background:'var(--bg-2)',position:'relative'}}>
            <div style={{position:'absolute',left:0,top:0,height:'100%',width:'40%',borderRadius:99,background:'var(--ember-500)'}}/>
            <div style={{position:'absolute',left:'40%',top:'50%',transform:'translate(-50%,-50%)',width:18,height:18,borderRadius:99,background:'var(--ember-500)',border:'3px solid #0A0B0D'}}/>
          </div>
        </div>
        <Card>
          <div style={{fontSize:11,color:'var(--ok)',display:'flex',alignItems:'center',gap:6}}><Icon name="check" size={12} color="var(--ok)"/> Available · be the first contractor here</div>
        </Card>
      </div>
      <div style={{position:'absolute',bottom:50,left:22,right:22}}>
        <Btn kind="primary" size="lg" full>Reserve Austin TX</Btn>
      </div>
      <HI/>
    </div>
  );
}

function S_AISetup() {
  return (
    <div className="screen">
      <SB/>
      <Hdr title="Meet Iris" sub="Your AI agent"/>
      <div style={{padding:'4px 22px',display:'flex',flexDirection:'column',gap:14}}>
        <Card ember>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
            <div style={{width:48,height:48,borderRadius:99,background:'linear-gradient(135deg,#FF8A3A,#C43E04)',display:'grid',placeItems:'center',fontSize:20}}>🎙</div>
            <div>
              <div style={{fontSize:15,fontWeight:700}}>Iris · default voice</div>
              <div style={{fontSize:11,color:'var(--ink-2)'}}>Warm · neutral · bilingual</div>
            </div>
            <div style={{marginLeft:'auto'}}><Icon name="play" size={20} color="var(--ember-500)"/></div>
          </div>
          <Wave w={240} h={26}/>
        </Card>
        <div>
          <div style={{fontFamily:'var(--font-mono)',fontSize:9,color:'var(--ink-2)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:8}}>Greeting script</div>
          <div style={{padding:12,background:'var(--bg-2)',borderRadius:10,fontSize:12,color:'var(--ink-1)',lineHeight:1.5}}>
            "Hi, this is <span style={{color:'var(--ember-300)'}}>{`{Iris}`}</span> with <span style={{color:'var(--ember-300)'}}>{`{Vences HVAC}`}</span> in <span style={{color:'var(--ember-300)'}}>{`{Austin}`}</span>. How can I help?"
          </div>
        </div>
        <div>
          <div style={{fontFamily:'var(--font-mono)',fontSize:9,color:'var(--ink-2)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:8}}>Pickup target</div>
          <div style={{display:'flex',justifyContent:'space-between',fontSize:12,color:'var(--ink-1)',marginBottom:6}}><span>30s</span><span style={{color:'var(--ember-500)',fontWeight:700}}>60s · default</span><span>120s</span></div>
          <div style={{height:6,borderRadius:99,background:'var(--bg-2)',position:'relative'}}>
            <div style={{position:'absolute',left:'40%',top:'50%',transform:'translate(-50%,-50%)',width:16,height:16,borderRadius:99,background:'var(--ember-500)'}}/>
          </div>
        </div>
      </div>
      <div style={{position:'absolute',bottom:50,left:22,right:22}}>
        <Btn kind="primary" size="lg" full>Activate Iris</Btn>
      </div>
      <HI/>
    </div>
  );
}

// ─── Login ──────────────────────────────────────────────────
function S_Login() {
  return (
    <div className="screen">
      <SB/>
      <div style={{padding:'80px 28px',textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center',gap:18}}>
        <Mark size={60}/>
        <div style={{fontSize:24,fontWeight:700}}>Welcome back, Diego</div>
        <div style={{fontSize:13,color:'var(--ink-2)'}}>Tap to sign in with Face ID</div>
      </div>
      <div style={{position:'absolute',bottom:140,left:0,right:0,display:'flex',justifyContent:'center'}}>
        <div style={{width:80,height:80,borderRadius:20,border:'2px solid var(--ember-500)',display:'grid',placeItems:'center',boxShadow:'0 0 40px rgba(255,106,26,0.3)'}}>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--ember-500)" strokeWidth="1.5">
            <path d="M9 8.5v1M15 8.5v1M9 14a3 3 0 006 0M4 4v3M4 17v3M20 4v3M20 17v3M4 4h3M17 4h3M4 20h3M17 20h3"/>
          </svg>
        </div>
      </div>
      <div style={{position:'absolute',bottom:60,left:28,right:28}}>
        <Btn kind="ghost" size="md" full>Use passcode instead</Btn>
      </div>
      <HI/>
    </div>
  );
}

// ─── Dashboard / Home ──────────────────────────────────────
function S_Dashboard() {
  return (
    <div className="screen">
      <SB/>
      <div style={{padding:'4px 18px 8px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div>
          <div style={{fontSize:11,color:'var(--ink-2)'}}>Hey, Diego</div>
          <div style={{fontSize:18,fontWeight:700}}>Tuesday · Apr 30</div>
        </div>
        <div style={{display:'flex',gap:10}}>
          <div style={{position:'relative'}}>
            <Icon name="bell" size={22}/>
            <div style={{position:'absolute',top:-2,right:-2,width:8,height:8,borderRadius:99,background:'var(--ember-500)'}}/>
          </div>
        </div>
      </div>
      <div style={{padding:'4px 18px',display:'flex',flexDirection:'column',gap:12,paddingBottom:90,overflow:'auto',height:'calc(100% - 130px)'}}>
        <Card ember glow>
          <div style={{fontFamily:'var(--font-mono)',fontSize:9,color:'var(--ember-300)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:6}}>Revenue today</div>
          <Money value="8,420" size={48}/>
          <div style={{display:'flex',alignItems:'center',gap:6,marginTop:8,fontSize:11,color:'var(--ok)'}}>
            <Icon name="arrow" size={12} color="var(--ok)"/> +$1,200 booked 2m ago
          </div>
        </Card>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
          <Card>
            <div style={{fontSize:9,color:'var(--ink-2)',fontFamily:'var(--font-mono)',letterSpacing:'0.08em',textTransform:'uppercase'}}>Live now</div>
            <div style={{fontSize:24,fontWeight:700,marginTop:4,display:'flex',alignItems:'center',gap:6}}>2 <Chip color="ember" pulse size="sm">calls</Chip></div>
          </Card>
          <Card>
            <div style={{fontSize:9,color:'var(--ink-2)',fontFamily:'var(--font-mono)',letterSpacing:'0.08em',textTransform:'uppercase'}}>Avg pickup</div>
            <div style={{fontSize:24,fontWeight:700,marginTop:4,color:'var(--ember-500)'}}>42<span style={{fontSize:14,color:'var(--ink-2)'}}>s</span></div>
          </Card>
        </div>
        <Card>
          <div style={{fontFamily:'var(--font-mono)',fontSize:9,color:'var(--ink-2)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:10}}>Funnel · today</div>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',height:52}}>
            {[['Leads','24',1],['AI called','24',1],['Booked','11',0.46],['Paid','7',0.29]].map(([l,n,h],i)=>(
              <div key={i} style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',gap:4}}>
                <div style={{fontSize:18,fontWeight:700,fontFamily:'var(--font-mono)'}}>{n}</div>
                <div style={{width:28,height:h*36,background:i===3?'var(--ok)':'var(--ember-500)',borderRadius:4,opacity:0.3+h*0.7}}/>
                <div style={{fontSize:9,color:'var(--ink-2)'}}>{l}</div>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <div style={{fontFamily:'var(--font-mono)',fontSize:9,color:'var(--ink-2)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:8}}>Next up</div>
          {[['10:30','AC not cooling','Maria H.','ember'],['12:00','Capacitor + freon','R. Patel','neutral'],['2:00','Maintenance','J. Wong','neutral']].map(([t,j,n,c],i)=>(
            <div key={i} style={{display:'flex',gap:10,padding:'8px 0',borderBottom:i<2?'1px solid var(--line-soft)':'none',alignItems:'center'}}>
              <div style={{fontFamily:'var(--font-mono)',fontSize:11,color:c==='ember'?'var(--ember-500)':'var(--ink-2)',fontWeight:600,width:42}}>{t}</div>
              <div style={{flex:1}}>
                <div style={{fontSize:13,fontWeight:600}}>{j}</div>
                <div style={{fontSize:10,color:'var(--ink-2)'}}>{n}</div>
              </div>
              {c==='ember' && <Chip color="ember" pulse size="sm">live</Chip>}
            </div>
          ))}
        </Card>
      </div>
      <Tab active="leads" role="owner"/>
      <HI/>
    </div>
  );
}

// ─── Live Dispatch (HERO) ──────────────────────────────────
function S_DispatchMap({ alert = true }) {
  return (
    <div className="screen">
      <MapBg w={308} h={680}/>
      <SB/>
      <div style={{position:'absolute',top:50,left:14,right:14,display:'flex',gap:8,zIndex:10}}>
        <div style={{flex:1,padding:'10px 14px',background:'rgba(20,22,28,0.85)',backdropFilter:'blur(8px)',borderRadius:12,border:'1px solid var(--line)',display:'flex',alignItems:'center',gap:8}}>
          <Icon name="search" size={14}/>
          <span style={{fontSize:12,color:'var(--ink-2)'}}>Search jobs, customers…</span>
        </div>
        <div style={{width:40,height:40,background:'rgba(20,22,28,0.85)',backdropFilter:'blur(8px)',borderRadius:12,border:'1px solid var(--line)',display:'grid',placeItems:'center'}}>
          <Icon name="cog" size={16}/>
        </div>
      </div>
      <div style={{position:'absolute',top:108,left:14,right:14,display:'flex',gap:6,zIndex:10}}>
        {['All','Live','Today','Late'].map((c,i)=>(
          <div key={i} style={{padding:'5px 12px',borderRadius:99,background:i===1?'var(--ember-500)':'rgba(20,22,28,0.85)',border:i!==1?'1px solid var(--line)':'none',color:i===1?'#0A0B0D':'var(--ink-1)',fontSize:11,fontWeight:600}}>{c}</div>
        ))}
      </div>
      {alert && <MapPin x={170} y={300} pulse drop label="!"/>}
      <TechPin x={90} y={420} initials="JR" status="enroute"/>
      <TechPin x={240} y={500} initials="AM" status="onsite"/>
      <TechPin x={130} y={560} initials="CP" status="idle"/>
      {alert && (
        <svg style={{position:'absolute',inset:0,zIndex:3,pointerEvents:'none'}} width="100%" height="100%">
          <path d="M 90 420 Q 130 360, 170 300" stroke="var(--ember-500)" strokeWidth="2" strokeDasharray="4 4" fill="none" opacity="0.7"/>
        </svg>
      )}
      {alert && (
        <div style={{position:'absolute',bottom:80,left:10,right:10,padding:14,background:'rgba(20,22,28,0.96)',backdropFilter:'blur(20px)',borderRadius:18,border:'1px solid var(--ember-500)',boxShadow:'0 0 0 4px rgba(255,106,26,0.15), 0 12px 32px rgba(0,0,0,0.5)',zIndex:55}}>
          <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:8}}>
            <Chip color="ember" pulse size="sm">Live · 00:38</Chip>
            <Chip color="hot" size="sm">Urgent</Chip>
            <span style={{marginLeft:'auto',fontSize:10,color:'var(--ink-2)',fontFamily:'var(--font-mono)'}}>NEW</span>
          </div>
          <div style={{fontSize:16,fontWeight:700}}>AC not cooling · upstairs</div>
          <div style={{fontSize:11,color:'var(--ink-2)',marginTop:2}}>2204 Bouldin Ave · 1.2 mi from Jose</div>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:10,gap:8}}>
            <Money value="1,200" size={22} prefix="~$"/>
            <Btn kind="primary" size="md" icon="arrow">Dispatch Jose</Btn>
          </div>
        </div>
      )}
      <Tab active="map" role="owner"/>
      <HI light/>
    </div>
  );
}

// ─── Lead Inbox ──────────────────────────────────────────────
function S_LeadInbox() {
  const leads = [
    ['🔥','AC not cooling','Maria H. · Bouldin','38s','urgent','live'],
    ['','Capacitor replacement','R. Patel · Hyde Park','12m','booked','ok'],
    ['','Maintenance','J. Wong · 78704','1h','booked','ok'],
    ['','No heat call','D. Ortiz · Mueller','2h','call','info'],
    ['','Drain line clog','S. Kim · S. Congress','4h','booked','ok'],
    ['','Quote request','M. Banks · Riverside','5h','quote','neutral'],
    ['','Voicemail','Unknown','6h','voicemail','warn'],
    ['','Spam · archived','-','8h','archived','neutral'],
  ];
  return (
    <div className="screen">
      <SB/>
      <Hdr title="Leads" sub="24 today · 7 booked" right={<Icon name="search" size={20}/>} onBack={false}/>
      <div style={{padding:'0 14px 6px',display:'flex',gap:6,overflow:'auto'}}>
        {['All','Live','Booked','Voicemail','Spam'].map((c,i)=>(
          <div key={i} style={{padding:'5px 12px',borderRadius:99,background:i===0?'var(--ember-500)':'var(--bg-2)',color:i===0?'#0A0B0D':'var(--ink-1)',fontSize:11,fontWeight:600,whiteSpace:'nowrap'}}>{c}</div>
        ))}
      </div>
      <div style={{padding:'4px 14px',overflow:'auto',height:'calc(100% - 160px)'}}>
        {leads.map(([emoji,title,sub,time,tag,color],i)=>(
          <div key={i} style={{display:'flex',gap:10,padding:'12px 6px',borderBottom:i<leads.length-1?'1px solid var(--line-soft)':'none',alignItems:'center',background:i===0?'linear-gradient(90deg,rgba(255,106,26,0.06),transparent)':'none',marginLeft:-6,marginRight:-6,paddingLeft:i===0?12:6,paddingRight:i===0?12:6,borderRadius:i===0?8:0}}>
            <div style={{width:36,height:36,borderRadius:99,background:'var(--bg-2)',display:'grid',placeItems:'center',fontSize:14,flexShrink:0}}>{emoji||'📞'}</div>
            <div style={{flex:1,minWidth:0}}>
              <div style={{fontSize:13,fontWeight:600,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{title}</div>
              <div style={{fontSize:10,color:'var(--ink-2)'}}>{sub}</div>
            </div>
            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:4}}>
              <Chip color={color} pulse={tag==='live'} size="sm">{tag}</Chip>
              <span style={{fontSize:9,color:'var(--ink-2)',fontFamily:'var(--font-mono)'}}>{time}</span>
            </div>
          </div>
        ))}
      </div>
      <Tab active="leads" role="owner"/>
      <HI/>
    </div>
  );
}

// ─── Lead Detail (HERO — live AI call streaming) ───────────
function S_LeadDetail() {
  return (
    <div className="screen">
      <SB/>
      <Hdr title="Maria H." sub="Lead #1142 · live"/>
      <div style={{padding:'0 16px',overflow:'auto',height:'calc(100% - 90px)',paddingBottom:20}}>
        <Card ember glow style={{marginBottom:12}}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:10}}>
            <div style={{width:38,height:38,borderRadius:99,background:'linear-gradient(135deg,#FF8A3A,#C43E04)',display:'grid',placeItems:'center',fontSize:16,animation:'pulse-ember 2s infinite'}}>🎙</div>
            <div>
              <div style={{fontSize:13,fontWeight:700}}>Iris is on the call</div>
              <div style={{fontSize:10,color:'var(--ink-2)'}}>(512) 555 0142 · live transcript below</div>
            </div>
            <Chip color="ember" pulse size="sm" style={{marginLeft:'auto'}}>00:47</Chip>
          </div>
          <Wave w={252} h={28}/>
        </Card>
        <div style={{display:'flex',flexDirection:'column',gap:8,marginBottom:14}}>
          <div style={{maxWidth:'80%',padding:'8px 12px',borderRadius:14,borderTopLeftRadius:4,background:'var(--bg-2)',fontSize:12,color:'var(--ink-1)',alignSelf:'flex-start'}}>"Hi, my upstairs AC just stopped cooling. It's 95 outside."</div>
          <div style={{maxWidth:'80%',padding:'8px 12px',borderRadius:14,borderTopRightRadius:4,background:'rgba(255,106,26,0.12)',border:'1px solid rgba(255,106,26,0.3)',fontSize:12,color:'var(--ember-300)',alignSelf:'flex-end'}}>"I'm sorry to hear that. Could you tell me when this started?"</div>
          <div style={{maxWidth:'80%',padding:'8px 12px',borderRadius:14,borderTopLeftRadius:4,background:'var(--bg-2)',fontSize:12,color:'var(--ink-1)',alignSelf:'flex-start'}}>"About an hour ago. The fan runs but no cold air."</div>
          <div style={{maxWidth:'80%',padding:'8px 12px',borderRadius:14,borderTopRightRadius:4,background:'rgba(255,106,26,0.12)',border:'1px solid rgba(255,106,26,0.3)',fontSize:12,color:'var(--ember-300)',alignSelf:'flex-end'}}>"Got it. Sounds like it could be a capacitor. We have an opening at 2 PM today<span style={{borderRight:'2px solid var(--ember-500)',marginLeft:2,animation:'pulse-ember 1s infinite'}}>&nbsp;</span>"</div>
        </div>
        <Card>
          <div style={{fontFamily:'var(--font-mono)',fontSize:9,color:'var(--ember-300)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:10}}>Auto-extracted</div>
          {[['Issue','AC not cooling · upstairs unit'],['Urgency','Today (heat advisory)'],['Equipment','Carrier 24ABB6 (from past job)'],['Address','2204 Bouldin Ave']].map(([k,v],i)=>(
            <div key={i} style={{display:'flex',justifyContent:'space-between',padding:'6px 0',borderBottom:i<3?'1px solid var(--line-soft)':'none'}}>
              <span style={{fontSize:11,color:'var(--ink-2)',fontFamily:'var(--font-mono)'}}>{k}</span>
              <span style={{fontSize:12,fontWeight:600,color:'var(--ink-0)'}}>{v}</span>
            </div>
          ))}
        </Card>
      </div>
      <div style={{position:'absolute',bottom:30,left:12,right:12,display:'flex',gap:8}}>
        <Btn kind="secondary" size="lg" icon="phone" style={{flex:1}}>Take over</Btn>
        <Btn kind="primary" size="lg" icon="arrow" style={{flex:1.4}}>Dispatch Jose</Btn>
      </div>
      <HI/>
    </div>
  );
}

// ─── Take-over (manual override) ───────────────────────────
function S_Takeover() {
  return (
    <div className="screen">
      <div style={{position:'absolute',inset:0,background:'radial-gradient(600px 400px at 50% 30%, rgba(255,106,26,0.18), #0A0B0D)'}}/>
      <SB/>
      <div style={{position:'relative',padding:'40px 22px',textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center',gap:16}}>
        <Chip color="ember" pulse>Live · 00:52</Chip>
        <div style={{width:140,height:140,borderRadius:99,background:'linear-gradient(135deg,#FF8A3A,#C43E04)',display:'grid',placeItems:'center',color:'white',fontSize:56,fontWeight:700,position:'relative'}}>
          MH
          <div style={{position:'absolute',inset:-8,borderRadius:99,border:'2px solid var(--ember-500)',animation:'radar 2s infinite'}}/>
        </div>
        <div>
          <div style={{fontSize:22,fontWeight:700}}>Maria H.</div>
          <div style={{fontSize:12,color:'var(--ink-2)'}}>(512) 555 0142</div>
        </div>
        <Card style={{width:'100%',textAlign:'left'}}>
          <div style={{fontSize:11,color:'var(--ember-300)',marginBottom:6}}>Iris briefing</div>
          <div style={{fontSize:12,color:'var(--ink-1)',lineHeight:1.5}}>AC not cooling, upstairs. Customer agreed to today 2 PM window. About to confirm. <strong style={{color:'var(--ember-300)'}}>Take over now?</strong></div>
        </Card>
      </div>
      <div style={{position:'absolute',bottom:50,left:22,right:22,display:'flex',gap:12,justifyContent:'center'}}>
        <div style={{width:64,height:64,borderRadius:99,background:'var(--bg-2)',display:'grid',placeItems:'center',border:'1px solid var(--line)'}}>
          <Icon name="mic" size={24}/>
        </div>
        <div style={{width:84,height:84,borderRadius:99,background:'var(--ember-500)',display:'grid',placeItems:'center',boxShadow:'0 12px 32px rgba(255,106,26,0.4)'}}>
          <Icon name="phone" size={32} color="#0A0B0D"/>
        </div>
        <div style={{width:64,height:64,borderRadius:99,background:'rgba(255,59,92,0.15)',border:'1px solid rgba(255,59,92,0.3)',display:'grid',placeItems:'center'}}>
          <Icon name="x" size={24} color="var(--hot)"/>
        </div>
      </div>
      <HI light/>
    </div>
  );
}

// ─── Jobs list ──────────────────────────────────────────────
function S_Jobs() {
  const jobs = [
    ['#2841','Maria H.','AC not cooling','Today 2-4 PM','$1,200','live','ember'],
    ['#2840','R. Patel','Capacitor + freon','Today 10:30','$840','enroute','warn'],
    ['#2839','J. Wong','Maintenance','Today 4 PM','$220','scheduled','neutral'],
    ['#2838','D. Ortiz','No heat','Yest','$1,684','done','ok'],
    ['#2837','S. Kim','Drain line','Yest','$280','done','ok'],
  ];
  return (
    <div className="screen">
      <SB/>
      <Hdr title="Jobs" right={<Icon name="plus" size={20}/>} onBack={false}/>
      <div style={{padding:'0 14px 6px',display:'flex',gap:6}}>
        {['Open · 7','Today','Scheduled','Done'].map((c,i)=>(
          <div key={i} style={{padding:'5px 10px',borderRadius:99,background:i===0?'var(--ember-500)':'var(--bg-2)',color:i===0?'#0A0B0D':'var(--ink-1)',fontSize:10,fontWeight:600,whiteSpace:'nowrap'}}>{c}</div>
        ))}
      </div>
      <div style={{padding:'4px 14px',overflow:'auto',height:'calc(100% - 160px)'}}>
        {jobs.map(([id,c,t,when,$$,tag,col],i)=>(
          <Card key={i} style={{marginBottom:8,padding:12,background:tag==='live'?'linear-gradient(90deg,rgba(255,106,26,0.06),var(--bg-1))':'var(--bg-1)',borderColor:tag==='live'?'rgba(255,106,26,0.3)':'var(--line)'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:6}}>
              <span style={{fontFamily:'var(--font-mono)',fontSize:10,color:'var(--ink-2)'}}>{id}</span>
              <Chip color={col} pulse={tag==='live'} size="sm">{tag}</Chip>
            </div>
            <div style={{fontSize:14,fontWeight:600}}>{t}</div>
            <div style={{fontSize:11,color:'var(--ink-2)',marginTop:2}}>{c} · {when}</div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:8,paddingTop:8,borderTop:'1px solid var(--line-soft)'}}>
              <span style={{fontSize:13,fontWeight:700,color:'var(--ember-300)',fontFamily:'var(--font-mono)'}}>{$$}</span>
              <Icon name="arrow" size={14}/>
            </div>
          </Card>
        ))}
      </div>
      <Tab active="jobs" role="owner"/>
      <HI/>
    </div>
  );
}

// ─── Job detail (Owner view) ───────────────────────────────
function S_JobDetail() {
  return (
    <div className="screen">
      <SB/>
      <Hdr title="Job #2841" sub="Live · in progress"/>
      <div style={{padding:'0 16px',overflow:'auto',height:'calc(100% - 90px)',paddingBottom:20}}>
        <Card ember style={{marginBottom:10}}>
          <div style={{display:'flex',justifyContent:'space-between',marginBottom:10}}>
            <div>
              <div style={{fontSize:16,fontWeight:700}}>Maria H.</div>
              <div style={{fontSize:11,color:'var(--ink-2)'}}>2204 Bouldin Ave · Austin</div>
            </div>
            <Chip color="ember" pulse>on-site</Chip>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
            <Btn kind="secondary" size="sm" icon="phone">Call</Btn>
            <Btn kind="secondary" size="sm" icon="msg">Text</Btn>
          </div>
        </Card>
        <Card style={{marginBottom:10}}>
          <div style={{display:'flex',gap:10,alignItems:'center'}}>
            <div style={{width:36,height:36,borderRadius:99,background:'var(--ember-500)',color:'#0A0B0D',display:'grid',placeItems:'center',fontWeight:700}}>JR</div>
            <div style={{flex:1}}>
              <div style={{fontSize:13,fontWeight:600}}>Jose Ramirez · assigned</div>
              <div style={{fontSize:10,color:'var(--ink-2)'}}>Started 1:58 PM · 22 min on-site</div>
            </div>
            <Icon name="arrow" size={14}/>
          </div>
        </Card>
        <Card style={{marginBottom:10}}>
          <div style={{fontFamily:'var(--font-mono)',fontSize:9,color:'var(--ink-2)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:10}}>Progress</div>
          {[['Diagnosis','done',true],['Estimate sent','done',true],['Customer approved','done',true],['Repair in progress','active',false],['Payment','pending',false]].map(([t,s,done],i)=>(
            <div key={i} style={{display:'flex',gap:10,padding:'6px 0',alignItems:'center'}}>
              <div style={{width:18,height:18,borderRadius:99,background:s==='done'?'var(--ok)':s==='active'?'var(--ember-500)':'var(--bg-2)',border:s==='pending'?'1px solid var(--line)':'none',display:'grid',placeItems:'center'}}>
                {done && <Icon name="check" size={11} color="#0A0B0D"/>}
                {s==='active' && <div style={{width:6,height:6,background:'#0A0B0D',borderRadius:99}}/>}
              </div>
              <span style={{fontSize:12,color:s==='pending'?'var(--ink-2)':'var(--ink-0)',fontWeight:s==='active'?700:400}}>{t}</span>
            </div>
          ))}
        </Card>
        <Card>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div>
              <div style={{fontSize:9,color:'var(--ink-2)',fontFamily:'var(--font-mono)',letterSpacing:'0.1em'}}>ESTIMATE · approved</div>
              <Money value="1,200" size={28}/>
            </div>
            <Btn kind="secondary" size="sm">View</Btn>
          </div>
        </Card>
      </div>
      <HI/>
    </div>
  );
}

Object.assign(window, {
  S_Splash, S_Welcome, S_OTP, S_PickMarket, S_AISetup, S_Login,
  S_Dashboard, S_DispatchMap, S_LeadInbox, S_LeadDetail, S_Takeover,
  S_Jobs, S_JobDetail,
});
