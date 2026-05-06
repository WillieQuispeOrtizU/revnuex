/* mockup-screens-states.jsx — States catalog: empty / loading / error / permission / success / push */
/* global React, IPhone, APhone, SB, HI, Icon, Mark, Chip, Money, Btn, Card */

// ─── Empty states ──────────────────────────────────────────
function ST_EmptyLeads() {
  return (
    <div className="screen">
      <SB/>
      <div style={{padding:'18px 18px 0',display:'flex',alignItems:'center',gap:10,borderBottom:'1px solid var(--line-soft)',paddingBottom:14}}>
        <Mark size={26}/>
        <span style={{fontSize:16,fontWeight:700}}>Lead inbox</span>
      </div>
      <div style={{padding:'60px 32px',textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center',gap:14,height:'70%',justifyContent:'center'}}>
        <div style={{position:'relative',width:120,height:120}}>
          <div style={{position:'absolute',inset:0,borderRadius:99,background:'radial-gradient(circle, rgba(255,106,26,0.15), transparent 70%)'}}/>
          <div style={{position:'absolute',inset:'30%',borderRadius:99,border:'2px dashed var(--line)',display:'grid',placeItems:'center'}}>
            <Icon name="phone" size={28} color="var(--ink-2)"/>
          </div>
        </div>
        <div style={{fontSize:18,fontWeight:700,letterSpacing:'-0.01em'}}>Quiet morning</div>
        <div style={{fontSize:12,color:'var(--ink-2)',lineHeight:1.5,maxWidth:240}}>No new leads yet today. Iris is standing by — when a call comes in, you'll see it appear here in real time.</div>
        <Btn kind="secondary" size="md" style={{marginTop:8}} icon="phone">Call yourself to test</Btn>
      </div>
      <HI/>
    </div>
  );
}

function ST_EmptyEarnings() {
  return (
    <div className="screen">
      <SB/>
      <div style={{padding:18,borderBottom:'1px solid var(--line-soft)'}}>
        <span style={{fontSize:16,fontWeight:700}}>Earnings</span>
      </div>
      <div style={{padding:'48px 28px',textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center',gap:14}}>
        <div style={{width:96,height:96,borderRadius:99,background:'var(--bg-1)',border:'1px solid var(--line)',display:'grid',placeItems:'center'}}>
          <Icon name="dollar" size={36} color="var(--ink-2)"/>
        </div>
        <Money value="0" size={48}/>
        <div style={{fontSize:13,color:'var(--ink-2)',lineHeight:1.5}}>You haven't completed a job yet this week. Your earnings show up here as soon as you tap "Mark complete."</div>
        <Card style={{padding:12,marginTop:14,width:'100%',display:'flex',alignItems:'center',gap:10}}>
          <Icon name="calendar" size={18} color="var(--ember-500)"/>
          <div style={{flex:1,textAlign:'left'}}>
            <div style={{fontSize:12,fontWeight:600}}>3 jobs scheduled tomorrow</div>
            <div style={{fontSize:10,color:'var(--ink-2)'}}>Est. $1,240 in earnings</div>
          </div>
        </Card>
      </div>
      <HI/>
    </div>
  );
}

// ─── Loading ───────────────────────────────────────────────
function ST_LoadingDispatch() {
  return (
    <div className="screen">
      <SB/>
      <div style={{padding:18,borderBottom:'1px solid var(--line-soft)',display:'flex',alignItems:'center',gap:10}}>
        <div style={{width:20,height:20,borderRadius:99,border:'2px solid var(--ember-500)',borderRightColor:'transparent',animation:'spin 0.8s linear infinite'}}/>
        <span style={{fontSize:14,fontWeight:600}}>Loading dispatch map…</span>
      </div>
      <div style={{padding:18,display:'flex',flexDirection:'column',gap:14}}>
        {[1,2,3,4].map(i=>(
          <div key={i} style={{padding:14,background:'var(--bg-1)',borderRadius:12,border:'1px solid var(--line)',display:'flex',gap:12,alignItems:'center'}}>
            <div style={{width:40,height:40,borderRadius:99,background:'var(--bg-2)',animation:'shimmer 1.4s infinite linear',backgroundSize:'200% 100%'}}/>
            <div style={{flex:1}}>
              <div style={{height:10,width:`${60+i*7}%`,background:'var(--bg-2)',borderRadius:4,marginBottom:6,animation:'shimmer 1.4s infinite linear',animationDelay:`${i*0.1}s`}}/>
              <div style={{height:8,width:`${40+i*5}%`,background:'var(--bg-2)',borderRadius:4,opacity:0.6}}/>
            </div>
          </div>
        ))}
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}@keyframes shimmer{0%{opacity:.4}50%{opacity:.7}100%{opacity:.4}}`}</style>
      <HI/>
    </div>
  );
}

function ST_LoadingIris() {
  return (
    <div className="screen">
      <div style={{position:'absolute',inset:0,background:'radial-gradient(600px 500px at 50% 40%, rgba(255,106,26,0.12), #0A0B0D)'}}/>
      <SB/>
      <div style={{padding:'80px 28px',textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center',gap:18}}>
        <div style={{position:'relative',width:120,height:120}}>
          {[0,1,2].map(i=>(
            <div key={i} style={{position:'absolute',inset:0,borderRadius:99,border:'2px solid var(--ember-500)',animation:`ring-pulse 2s infinite ease-out ${i*0.6}s`,opacity:0.6}}/>
          ))}
          <div style={{position:'absolute',inset:'30%',borderRadius:99,background:'linear-gradient(135deg,#FF8A3A,#C43E04)',display:'grid',placeItems:'center',boxShadow:'0 8px 32px rgba(255,106,26,0.4)'}}>
            <Icon name="zap" size={26} color="#0A0B0D"/>
          </div>
        </div>
        <div style={{fontSize:18,fontWeight:700,marginTop:10}}>Iris is thinking…</div>
        <div style={{fontSize:12,color:'var(--ink-2)',maxWidth:240,lineHeight:1.5}}>Generating estimate from your voice notes and matching parts to inventory. Usually takes 4-6 seconds.</div>
        <div style={{display:'flex',gap:6,marginTop:14}}>
          {[0,1,2].map(i=>(
            <div key={i} style={{width:8,height:8,borderRadius:99,background:'var(--ember-500)',animation:`dot-pulse 1.2s infinite ease-in-out ${i*0.15}s`}}/>
          ))}
        </div>
      </div>
      <style>{`@keyframes ring-pulse{from{transform:scale(0.8);opacity:0.6}to{transform:scale(1.4);opacity:0}}@keyframes dot-pulse{0%,100%{opacity:0.3;transform:scale(0.8)}50%{opacity:1;transform:scale(1.2)}}`}</style>
      <HI/>
    </div>
  );
}

// ─── Errors ────────────────────────────────────────────────
function ST_NoConnection() {
  return (
    <div className="screen">
      <SB/>
      <div style={{padding:'80px 28px',textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center',gap:14}}>
        <div style={{width:88,height:88,borderRadius:99,background:'rgba(231,79,79,0.1)',border:'1px solid var(--bad)',display:'grid',placeItems:'center'}}>
          <Icon name="zap" size={36} color="var(--bad)"/>
        </div>
        <div style={{fontSize:20,fontWeight:700,letterSpacing:'-0.01em'}}>No connection</div>
        <div style={{fontSize:12,color:'var(--ink-2)',maxWidth:240,lineHeight:1.5}}>You're offline. Iris can't pick up calls or update jobs until you reconnect. Your draft estimate is saved locally.</div>
        <Card style={{padding:'10px 12px',width:'100%',display:'flex',gap:8,alignItems:'center',marginTop:8,background:'rgba(255,197,66,0.08)',border:'1px solid rgba(255,197,66,0.2)'}}>
          <Icon name="zap" size={14} color="var(--warn)"/>
          <span style={{fontSize:11,color:'var(--ink-1)',textAlign:'left'}}>3 jobs queued · will sync when you're back online</span>
        </Card>
        <Btn kind="primary" size="lg" full icon="arrow" style={{marginTop:14}}>Retry connection</Btn>
        <Btn kind="ghost" size="sm">Use offline mode</Btn>
      </div>
      <HI/>
    </div>
  );
}

function ST_PaymentFailed() {
  return (
    <div className="screen">
      <SB/>
      <div style={{padding:18,borderBottom:'1px solid var(--line-soft)',display:'flex',alignItems:'center',gap:10}}>
        <Icon name="arrow" size={16} style={{transform:'rotate(180deg)'}}/>
        <span style={{fontSize:14,fontWeight:600}}>Payment</span>
      </div>
      <div style={{padding:'40px 24px',textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center',gap:14}}>
        <div style={{width:80,height:80,borderRadius:99,background:'var(--bad)',display:'grid',placeItems:'center'}}>
          <span style={{fontSize:40,fontWeight:200,color:'#0A0B0D',lineHeight:1}}>!</span>
        </div>
        <div style={{fontSize:18,fontWeight:700}}>Card was declined</div>
        <div style={{fontSize:12,color:'var(--ink-2)',maxWidth:260,lineHeight:1.5}}>Visa ending in 4242 was declined by the bank. Try a different card or ask the customer to call their bank.</div>
        <Card style={{padding:14,width:'100%',marginTop:10,textAlign:'left'}}>
          <div style={{fontSize:10,color:'var(--ink-2)',fontFamily:'var(--font-mono)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:6}}>Decline reason</div>
          <div style={{fontSize:12,color:'var(--ink-1)',fontFamily:'var(--font-mono)'}}>insufficient_funds (do_not_honor)</div>
        </Card>
      </div>
      <div style={{position:'absolute',bottom:30,left:18,right:18,display:'flex',flexDirection:'column',gap:8}}>
        <Btn kind="primary" size="lg" full icon="card">Try different card</Btn>
        <Btn kind="secondary" size="md" full>Send invoice link instead</Btn>
      </div>
      <HI/>
    </div>
  );
}

// ─── Permissions (iOS-style sheet) ─────────────────────────
function ST_PermLocation() {
  return (
    <div className="screen" style={{background:'rgba(0,0,0,0.4)'}}>
      {/* Dimmed bg content */}
      <div style={{position:'absolute',inset:0,opacity:0.25,filter:'blur(2px)'}}>
        <SB/>
        <div style={{padding:18,fontSize:16,fontWeight:700}}>Dispatch map</div>
        <div style={{padding:18}}>
          <div style={{height:280,borderRadius:14,background:'var(--bg-1)'}}/>
        </div>
      </div>
      <SB/>
      {/* iOS-style native alert */}
      <div style={{position:'absolute',bottom:0,left:0,right:0,padding:'14px 14px 30px',display:'flex',flexDirection:'column',gap:10}}>
        <Card style={{padding:0,overflow:'hidden',background:'rgba(28,30,36,0.92)',backdropFilter:'blur(40px)',borderRadius:14,border:'1px solid rgba(255,255,255,0.08)'}}>
          <div style={{padding:'18px 20px 14px',textAlign:'center',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>
            <div style={{fontSize:14,fontWeight:600,marginBottom:4}}>Allow "RevnueX" to use your location?</div>
            <div style={{fontSize:11,color:'var(--ink-2)',lineHeight:1.4}}>Your location is used to dispatch the nearest tech and show your truck on the live map for customers.</div>
            <div style={{marginTop:10,padding:8,background:'var(--bg-1)',borderRadius:6,display:'flex',gap:8,alignItems:'center',justifyContent:'center'}}>
              <Icon name="pin" size={12} color="var(--ember-500)"/>
              <span style={{fontSize:10,color:'var(--ink-2)',fontFamily:'var(--font-mono)'}}>Used while app is open</span>
            </div>
          </div>
          {[
            ['Allow Once',false],
            ['Allow While Using App',true],
            ["Don't Allow",false],
          ].map(([l,b],i)=>(
            <div key={i} style={{padding:'14px',textAlign:'center',fontSize:14,color:'var(--info)',fontWeight:b?700:400,borderTop:i?'1px solid rgba(255,255,255,0.06)':'none'}}>{l}</div>
          ))}
        </Card>
      </div>
      <HI/>
    </div>
  );
}

function ST_PermNotif() {
  return (
    <div className="screen">
      <SB/>
      <div style={{padding:'48px 28px 0',textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center',gap:14}}>
        <div style={{position:'relative'}}>
          <div style={{width:80,height:80,borderRadius:18,background:'var(--bg-1)',border:'1px solid var(--line)',display:'grid',placeItems:'center'}}>
            <Icon name="bell" size={36} color="var(--ember-500)"/>
          </div>
          <div style={{position:'absolute',top:-4,right:-4,width:22,height:22,borderRadius:99,background:'var(--bad)',display:'grid',placeItems:'center',color:'white',fontSize:11,fontWeight:700}}>3</div>
        </div>
        <div style={{fontSize:22,fontWeight:800,letterSpacing:'-0.02em'}}>Don't miss a lead</div>
        <div style={{fontSize:13,color:'var(--ink-2)',maxWidth:280,lineHeight:1.5}}>Push notifications let Iris ping you the moment a high-value call comes in — even if the app is closed.</div>
        <div style={{display:'flex',flexDirection:'column',gap:8,width:'100%',marginTop:14}}>
          {[
            ['New lead alerts','Within 5 sec of call'],
            ['Tech updates','On-site, paid, signed'],
            ['Daily revenue','7am summary'],
          ].map(([l,d])=>(
            <Card key={l} style={{padding:'10px 12px',display:'flex',alignItems:'center',gap:10,textAlign:'left'}}>
              <div style={{width:32,height:32,borderRadius:8,background:'rgba(255,106,26,0.1)',display:'grid',placeItems:'center'}}>
                <Icon name="check" size={14} color="var(--ember-500)"/>
              </div>
              <div style={{flex:1}}>
                <div style={{fontSize:12,fontWeight:600}}>{l}</div>
                <div style={{fontSize:10,color:'var(--ink-2)'}}>{d}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div style={{position:'absolute',bottom:30,left:18,right:18,display:'flex',flexDirection:'column',gap:8}}>
        <Btn kind="primary" size="lg" full icon="bell">Turn on notifications</Btn>
        <Btn kind="ghost" size="sm">Maybe later</Btn>
      </div>
      <HI/>
    </div>
  );
}

// ─── Success ───────────────────────────────────────────────
function ST_SuccessPaid() {
  return (
    <div className="screen">
      <div style={{position:'absolute',inset:0,background:'radial-gradient(500px 400px at 50% 30%, rgba(43,210,122,0.20), #0A0B0D)'}}/>
      <SB/>
      <div style={{padding:'80px 28px',textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center',gap:14}}>
        <div style={{position:'relative',width:120,height:120}}>
          <div style={{position:'absolute',inset:0,borderRadius:99,background:'var(--ok)',animation:'success-pop 0.4s ease-out',boxShadow:'0 0 80px rgba(43,210,122,0.5)'}}/>
          <div style={{position:'absolute',inset:0,display:'grid',placeItems:'center'}}>
            <Icon name="check" size={64} color="#0A0B0D"/>
          </div>
          {/* Confetti dots */}
          {[0,1,2,3,4,5,6,7].map(i=>(
            <div key={i} style={{
              position:'absolute',
              top:'50%',left:'50%',
              width:6,height:6,borderRadius:99,
              background:['var(--ember-500)','var(--ok)','var(--info)','var(--warn)'][i%4],
              transform:`rotate(${i*45}deg) translate(80px,0)`,
            }}/>
          ))}
        </div>
        <div style={{fontSize:32,fontWeight:800,letterSpacing:'-0.02em',marginTop:10}}>Paid!</div>
        <Money value="589.00" size={42}/>
        <div style={{fontSize:12,color:'var(--ink-2)'}}>Visa •••• 4242 · 2:38 PM</div>
        <Card ember style={{padding:14,marginTop:14,width:'100%',textAlign:'left'}}>
          <div style={{fontSize:10,color:'var(--ember-300)',fontFamily:'var(--font-mono)',letterSpacing:'0.08em'}}>NEXT STOP</div>
          <div style={{fontSize:14,fontWeight:700,marginTop:4}}>Sandra Lopez · 4304 Bouldin</div>
          <div style={{fontSize:11,color:'var(--ink-2)',marginTop:2}}>4 min away · 3:00 PM window</div>
        </Card>
      </div>
      <style>{`@keyframes success-pop{from{transform:scale(0)}to{transform:scale(1)}}`}</style>
      <div style={{position:'absolute',bottom:30,left:18,right:18}}>
        <Btn kind="primary" size="lg" full icon="arrow">Next stop</Btn>
      </div>
      <HI/>
    </div>
  );
}

// ─── Push notification grid (lockscreen samples) ──────────
function ST_PushGrid() {
  const notifs = [
    {icon:'phone',color:'var(--ember-500)',title:'New lead · $4,200 est.',body:'AC not cooling · 2204 Bouldin · Iris is on the call now.',time:'now',urgent:true},
    {icon:'check',color:'var(--ok)',title:'Jose paid out',body:'$589 collected · job #8412 · Vences HVAC',time:'2m'},
    {icon:'zap',color:'var(--warn)',title:'Heat advisory · Austin',body:"Expect 3-4× call volume. Iris is staffed up.",time:'8m'},
    {icon:'star',color:'var(--info)',title:'Maria left a 5★ review',body:'"Jose was on time and explained everything..."',time:'1h'},
    {icon:'card',color:'var(--bad)',title:'Card declined · Lopez',body:'Visa 1234 was declined. Tap to send invoice link.',time:'2h',urgent:true},
    {icon:'calendar',color:'var(--ember-500)',title:'Tomorrow: 7 jobs queued',body:'Est. $4,820 · Diego, Jose, Mike on schedule.',time:'7am'},
  ];
  return (
    <div className="screen" style={{background:'linear-gradient(180deg,#1f1133 0%,#0a0b0d 100%)'}}>
      <SB/>
      <div style={{padding:'30px 22px 20px',textAlign:'center',color:'white'}}>
        <div style={{fontSize:13,opacity:0.85,marginBottom:4}}>Tuesday, April 30</div>
        <div style={{fontSize:72,fontWeight:200,letterSpacing:'-0.04em',lineHeight:1}}>2:14</div>
      </div>
      <div style={{padding:'0 12px',display:'flex',flexDirection:'column',gap:8}}>
        {notifs.map((n,i)=>(
          <div key={i} style={{
            padding:12,
            background: n.urgent?'rgba(255,106,26,0.18)':'rgba(255,255,255,0.10)',
            backdropFilter:'blur(20px)',
            border: `1px solid ${n.urgent?'rgba(255,106,26,0.4)':'rgba(255,255,255,0.15)'}`,
            borderRadius:14,
          }}>
            <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:4}}>
              <div style={{width:18,height:18,borderRadius:5,background:n.color,display:'grid',placeItems:'center'}}>
                <Icon name={n.icon} size={10} color="#0A0B0D"/>
              </div>
              <span style={{fontSize:11,fontWeight:600,color:'white'}}>RevnueX</span>
              <span style={{marginLeft:'auto',fontSize:10,color:'rgba(255,255,255,0.55)'}}>{n.time}</span>
            </div>
            <div style={{fontSize:12,fontWeight:700,color:'white'}}>{n.title}</div>
            <div style={{fontSize:11,color:'rgba(255,255,255,0.78)',marginTop:2,lineHeight:1.4}}>{n.body}</div>
          </div>
        ))}
      </div>
      <HI light/>
    </div>
  );
}

// ─── Toast / inline feedback ───────────────────────────────
function ST_Toasts() {
  const toasts = [
    {kind:'success',icon:'check',color:'var(--ok)',title:'Estimate sent',body:'Maria will get a text in ~3 sec.'},
    {kind:'info',icon:'zap',color:'var(--info)',title:'Auto-saving…',body:'Voice notes synced to job #8412.'},
    {kind:'warn',icon:'zap',color:'var(--warn)',title:'Low refrigerant in truck',body:'2 lb left · reorder soon.'},
    {kind:'error',icon:'zap',color:'var(--bad)',title:'Couldn\'t upload photo',body:'No signal — saved locally.'},
  ];
  return (
    <div className="screen">
      <SB/>
      <div style={{padding:18,borderBottom:'1px solid var(--line-soft)'}}>
        <span style={{fontSize:16,fontWeight:700}}>Toast variants</span>
        <div style={{fontSize:11,color:'var(--ink-2)',marginTop:2}}>Inline feedback patterns</div>
      </div>
      <div style={{padding:'20px 18px',display:'flex',flexDirection:'column',gap:12}}>
        {toasts.map((t,i)=>(
          <div key={i} style={{
            padding:'12px 14px',borderRadius:12,
            background:'var(--bg-1)',
            border:`1px solid ${t.color}`,
            display:'flex',gap:10,alignItems:'flex-start',
            position:'relative',overflow:'hidden',
          }}>
            <div style={{position:'absolute',left:0,top:0,bottom:0,width:3,background:t.color}}/>
            <div style={{width:24,height:24,borderRadius:99,background:`${t.color}22`,display:'grid',placeItems:'center',flexShrink:0,marginLeft:4}}>
              <Icon name={t.icon} size={12} color={t.color}/>
            </div>
            <div style={{flex:1}}>
              <div style={{fontSize:12,fontWeight:700,color:t.color,textTransform:'uppercase',fontFamily:'var(--font-mono)',letterSpacing:'0.08em',marginBottom:2}}>{t.kind}</div>
              <div style={{fontSize:13,fontWeight:600}}>{t.title}</div>
              <div style={{fontSize:11,color:'var(--ink-2)',marginTop:2}}>{t.body}</div>
            </div>
            <Icon name="arrow" size={14} color="var(--ink-2)" style={{transform:'rotate(45deg)',cursor:'pointer'}}/>
          </div>
        ))}
        <div style={{marginTop:14,padding:'10px 12px',background:'var(--bg-2)',borderRadius:10,fontSize:10,color:'var(--ink-2)',fontFamily:'var(--font-mono)',lineHeight:1.6}}>
          AUTO-DISMISS: 4s (success) · 6s (info) · sticky (warn/error)<br/>
          POSITION: top-center, slide-in from above<br/>
          STACK: max 3 visible, oldest collapses
        </div>
      </div>
      <HI/>
    </div>
  );
}

Object.assign(window, {
  ST_EmptyLeads, ST_EmptyEarnings,
  ST_LoadingDispatch, ST_LoadingIris,
  ST_NoConnection, ST_PaymentFailed,
  ST_PermLocation, ST_PermNotif,
  ST_SuccessPaid, ST_PushGrid, ST_Toasts,
});
