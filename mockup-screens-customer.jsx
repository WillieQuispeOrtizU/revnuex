/* mockup-screens-customer.jsx — Customer PWA (web, no download) */
/* global React, IPhone, SB, HI, Icon, Mark, Chip, Money, Btn, MapBg, MapPin, Wave, Card */

// PWA browser chrome (subtle)
function Browser({ url = 'rev.nu/v', children }) {
  return (
    <>
      <div style={{
        height: 28, padding: '0 14px',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid var(--line-soft)',
        fontSize: 10, color: 'var(--ink-2)', fontFamily: 'var(--font-mono)',
      }}>
        <Icon name="shield" size={9} color="var(--ok)"/>
        <span>{url}</span>
      </div>
      <div style={{position:'relative',height:'calc(100% - 28px)'}}>{children}</div>
    </>
  );
}

// PWA-style header
function PwaHdr({ logo = true }) {
  return (
    <div style={{padding:'14px 18px',display:'flex',alignItems:'center',gap:10,borderBottom:'1px solid var(--line-soft)'}}>
      {logo && <Mark size={26}/>}
      <div style={{fontSize:15,fontWeight:700,letterSpacing:'-0.01em'}}>Vences HVAC</div>
      <div style={{marginLeft:'auto',display:'flex',gap:4,alignItems:'center'}}>
        <Icon name="star" size={11} color="var(--warn)"/>
        <span style={{fontSize:11,fontWeight:600}}>4.9</span>
      </div>
    </div>
  );
}

// ─── Landing (from text link) ──────────────────────────────
function C_Landing() {
  return (
    <div className="screen">
      <SB/>
      <Browser url="vences.rev.nu/book">
        <div style={{padding:'24px 22px',display:'flex',flexDirection:'column',gap:18,height:'100%'}}>
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <Mark size={44}/>
            <div>
              <div style={{fontSize:17,fontWeight:700}}>Vences HVAC</div>
              <div style={{fontSize:11,color:'var(--ink-2)',display:'flex',alignItems:'center',gap:6}}>
                <Icon name="star" size={10} color="var(--warn)"/> 4.9 · 287 reviews · Austin, TX
              </div>
            </div>
          </div>
          <div style={{fontSize:30,fontWeight:800,letterSpacing:'-0.03em',lineHeight:1.1}}>What's going on with your AC?</div>
          <div style={{fontSize:13,color:'var(--ink-2)',lineHeight:1.5}}>Tell us in your own words — Diego will read it and call you back in under a minute.</div>
          <Card ember style={{padding:14,display:'flex',gap:12,alignItems:'center'}}>
            <div style={{width:44,height:44,borderRadius:99,background:'var(--ember-500)',display:'grid',placeItems:'center',flexShrink:0}}>
              <Icon name="mic" size={22} color="#0A0B0D"/>
            </div>
            <div style={{flex:1}}>
              <div style={{fontSize:13,fontWeight:600}}>Hold to describe it</div>
              <div style={{fontSize:10,color:'var(--ink-2)',marginTop:2}}>or type below</div>
            </div>
          </Card>
          <div style={{padding:'14px 14px 80px',background:'var(--bg-1)',borderRadius:12,border:'1px solid var(--line)',fontSize:13,color:'var(--ink-2)'}}>
            "My upstairs unit isn't blowing cold..."
          </div>
          <div style={{flex:1}}/>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginBottom:8}}>
            {['❄️ Not cooling','🔥 No heat','💧 Leaking','🔧 Maintenance'].map((q,i)=>(
              <div key={i} style={{padding:'10px 12px',background:'var(--bg-2)',border:'1px solid var(--line)',borderRadius:10,fontSize:12,fontWeight:500,textAlign:'center'}}>{q}</div>
            ))}
          </div>
          <Btn kind="primary" size="lg" full icon="arrow">Continue</Btn>
        </div>
      </Browser>
      <HI/>
    </div>
  );
}

// ─── Diagnose / pick window ────────────────────────────────
function C_PickTime() {
  return (
    <div className="screen">
      <SB/>
      <Browser url="vences.rev.nu/book">
        <div style={{padding:'18px 22px',display:'flex',flexDirection:'column',gap:14,height:'100%'}}>
          <div>
            <div style={{fontSize:11,color:'var(--ember-300)',fontFamily:'var(--font-mono)',letterSpacing:'0.08em',textTransform:'uppercase'}}>Step 2 of 3</div>
            <div style={{fontSize:24,fontWeight:800,marginTop:4,letterSpacing:'-0.02em'}}>When works for you?</div>
          </div>
          <Card ember style={{padding:'10px 12px',display:'flex',gap:10,alignItems:'center'}}>
            <Icon name="zap" size={18} color="var(--ember-500)"/>
            <div style={{flex:1,fontSize:11,color:'var(--ink-1)'}}>
              <strong style={{color:'var(--ember-300)'}}>Heat advisory in your area.</strong> Same-day slots are filling up fast.
            </div>
          </Card>
          <div style={{display:'flex',flexDirection:'column',gap:8}}>
            {[
              ['TODAY','Tue · Apr 30','2:00 - 4:00 PM','Available now',true,'$0 visit fee'],
              ['TODAY','Tue · Apr 30','4:00 - 6:00 PM','Available',false,'$0 visit fee'],
              ['TOMORROW','Wed · May 1','9:00 - 11:00 AM','Available',false,''],
              ['TOMORROW','Wed · May 1','12:00 - 2:00 PM','Available',false,''],
            ].map(([t,d,w,s,sel,perk],i)=>(
              <div key={i} style={{
                padding:'12px 14px',borderRadius:12,
                background: sel ? 'rgba(255,106,26,0.10)' : 'var(--bg-1)',
                border: `${sel?2:1}px solid ${sel?'var(--ember-500)':'var(--line)'}`,
                boxShadow: sel ? '0 0 0 4px rgba(255,106,26,0.1)' : 'none',
              }}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:4}}>
                  <span style={{fontFamily:'var(--font-mono)',fontSize:9,color:t==='TODAY'?'var(--ember-300)':'var(--ink-2)',fontWeight:700,letterSpacing:'0.08em'}}>{t}</span>
                  {sel && <Chip color="ember" size="sm">selected</Chip>}
                </div>
                <div style={{fontSize:14,fontWeight:700}}>{w}</div>
                <div style={{fontSize:10,color:'var(--ink-2)',marginTop:2,display:'flex',justifyContent:'space-between'}}>
                  <span>{d} · {s}</span>
                  {perk && <span style={{color:'var(--ok)',fontWeight:600}}>{perk}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Browser>
      <div style={{position:'absolute',bottom:30,left:18,right:18}}>
        <Btn kind="primary" size="lg" full icon="arrow">Continue · 2-4 PM today</Btn>
      </div>
      <HI/>
    </div>
  );
}

// ─── Confirm / contact ─────────────────────────────────────
function C_Confirm() {
  return (
    <div className="screen">
      <SB/>
      <Browser url="vences.rev.nu/book">
        <div style={{padding:'18px 22px',display:'flex',flexDirection:'column',gap:14,height:'100%'}}>
          <div>
            <div style={{fontSize:11,color:'var(--ember-300)',fontFamily:'var(--font-mono)',letterSpacing:'0.08em',textTransform:'uppercase'}}>Step 3 of 3</div>
            <div style={{fontSize:24,fontWeight:800,marginTop:4,letterSpacing:'-0.02em'}}>Almost done</div>
          </div>
          <Card style={{padding:14}}>
            <div style={{fontSize:11,color:'var(--ink-2)',marginBottom:6,fontFamily:'var(--font-mono)',letterSpacing:'0.08em',textTransform:'uppercase'}}>Booking summary</div>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:6}}>
              <span style={{fontSize:13,color:'var(--ink-1)'}}>Issue</span>
              <span style={{fontSize:13,fontWeight:600}}>AC not cooling</span>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:6}}>
              <span style={{fontSize:13,color:'var(--ink-1)'}}>When</span>
              <span style={{fontSize:13,fontWeight:600}}>Today, 2-4 PM</span>
            </div>
            <div style={{display:'flex',justifyContent:'space-between'}}>
              <span style={{fontSize:13,color:'var(--ink-1)'}}>Diagnostic fee</span>
              <span style={{fontSize:13,fontWeight:600,color:'var(--ok)'}}>$0 · waived</span>
            </div>
          </Card>
          <div>
            <div style={{fontSize:11,color:'var(--ink-2)',marginBottom:6,fontFamily:'var(--font-mono)',letterSpacing:'0.08em',textTransform:'uppercase'}}>Address</div>
            <div style={{padding:'12px 14px',background:'var(--bg-1)',borderRadius:10,border:'1px solid var(--line)',fontSize:13,display:'flex',alignItems:'center',gap:8}}>
              <Icon name="pin" size={14} color="var(--ember-500)"/>
              2204 Bouldin Ave, Austin TX 78704
            </div>
          </div>
          <div>
            <div style={{fontSize:11,color:'var(--ink-2)',marginBottom:6,fontFamily:'var(--font-mono)',letterSpacing:'0.08em',textTransform:'uppercase'}}>Phone (we'll text updates)</div>
            <div style={{padding:'12px 14px',background:'var(--bg-1)',borderRadius:10,border:'2px solid var(--ember-500)',fontSize:14,fontWeight:600,fontFamily:'var(--font-mono)'}}>
              (512) 555 0142
            </div>
          </div>
          <Card style={{padding:10,fontSize:11,color:'var(--ink-2)',display:'flex',gap:8,alignItems:'flex-start'}}>
            <Icon name="shield" size={14} color="var(--ok)"/>
            <span>Free to book · pay only when work is approved · cancel anytime before tech arrives.</span>
          </Card>
        </div>
      </Browser>
      <div style={{position:'absolute',bottom:30,left:18,right:18}}>
        <Btn kind="primary" size="lg" full icon="check">Confirm booking</Btn>
      </div>
      <HI/>
    </div>
  );
}

// ─── Confirmation ──────────────────────────────────────────
function C_Booked() {
  return (
    <div className="screen">
      <div style={{position:'absolute',inset:0,background:'radial-gradient(600px 400px at 50% 30%, rgba(43,210,122,0.18), #0A0B0D)'}}/>
      <SB/>
      <Browser url="vences.rev.nu/booking/8412">
        <div style={{padding:'40px 24px',textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center',gap:18,height:'100%'}}>
          <div style={{width:88,height:88,borderRadius:99,background:'var(--ok)',display:'grid',placeItems:'center',boxShadow:'0 0 60px rgba(43,210,122,0.4)'}}>
            <Icon name="check" size={48} color="#0A0B0D"/>
          </div>
          <div>
            <div style={{fontSize:24,fontWeight:800,letterSpacing:'-0.02em'}}>You're booked</div>
            <div style={{fontSize:12,color:'var(--ink-2)',marginTop:6}}>Confirmation #8412 · Today 2-4 PM</div>
          </div>
          <Card ember style={{textAlign:'left',width:'100%'}}>
            <div style={{display:'flex',gap:10,alignItems:'center',marginBottom:8}}>
              <div style={{width:38,height:38,borderRadius:99,background:'var(--ember-500)',color:'#0A0B0D',display:'grid',placeItems:'center',fontWeight:700,fontSize:13}}>JR</div>
              <div style={{flex:1}}>
                <div style={{fontSize:13,fontWeight:700}}>Jose Ramirez · your tech</div>
                <div style={{fontSize:10,color:'var(--ink-2)'}}>EPA 608 · ★ 4.9 (54 reviews)</div>
              </div>
            </div>
            <div style={{fontSize:11,color:'var(--ink-1)',lineHeight:1.4,padding:10,background:'var(--bg-2)',borderRadius:8,marginTop:6}}>
              "Hi Maria, looking forward to fixing your AC today! I'll send you my live location when I'm 30 min out."
            </div>
          </Card>
          <Card style={{textAlign:'left',width:'100%',padding:12,fontSize:11,color:'var(--ink-1)'}}>
            <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:6}}>
              <Icon name="msg" size={14} color="var(--info)"/>
              <strong style={{color:'var(--info)'}}>Text confirmation sent to (512) 555 0142</strong>
            </div>
            We'll buzz you when Jose is on the way.
          </Card>
        </div>
      </Browser>
      <div style={{position:'absolute',bottom:30,left:18,right:18,display:'flex',flexDirection:'column',gap:8}}>
        <Btn kind="primary" size="lg" full icon="map">Track Jose</Btn>
        <Btn kind="ghost" size="md" full>Add to calendar</Btn>
      </div>
      <HI/>
    </div>
  );
}

// ─── Live tracking (Uber-style) ────────────────────────────
function C_Tracking() {
  return (
    <div className="screen">
      <MapBg/>
      <SB/>
      <Browser url="vences.rev.nu/track">
        <div style={{position:'relative',height:'100%'}}>
          <div style={{position:'absolute',top:14,left:14,right:14,zIndex:10,padding:'10px 14px',background:'rgba(20,22,28,0.92)',backdropFilter:'blur(8px)',borderRadius:12,border:'1px solid var(--line)',display:'flex',alignItems:'center',gap:10}}>
            <div style={{width:8,height:8,borderRadius:99,background:'var(--ok)',animation:'pulse-ember 1.5s infinite'}}/>
            <span style={{fontSize:12,fontWeight:600}}>Jose is on the way</span>
            <span style={{marginLeft:'auto',fontFamily:'var(--font-mono)',fontSize:13,fontWeight:700,color:'var(--ember-500)'}}>4 min</span>
          </div>
          {/* Route */}
          <svg style={{position:'absolute',inset:0,zIndex:3,pointerEvents:'none'}} width="100%" height="100%">
            <path d="M 80 480 Q 120 400, 170 320 Q 200 270, 220 230" stroke="var(--ember-500)" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.85"/>
          </svg>
          <div style={{position:'absolute',left:'24%',top:'72%',transform:'translate(-50%,-50%)',width:36,height:36,borderRadius:99,background:'var(--info)',border:'3px solid #0A0B0D',display:'grid',placeItems:'center',color:'#0A0B0D',fontWeight:700,fontSize:11,zIndex:5}}>JR</div>
          <MapPin x={222} y={232} pulse/>
          <div style={{position:'absolute',bottom:14,left:14,right:14,padding:14,background:'rgba(20,22,28,0.96)',backdropFilter:'blur(20px)',borderRadius:18,border:'1px solid var(--line)',zIndex:55}}>
            <div style={{display:'flex',gap:12,alignItems:'center',marginBottom:12}}>
              <div style={{width:48,height:48,borderRadius:99,background:'linear-gradient(135deg,#FF8A3A,#C43E04)',display:'grid',placeItems:'center',color:'white',fontSize:16,fontWeight:700}}>JR</div>
              <div style={{flex:1}}>
                <div style={{fontSize:14,fontWeight:700}}>Jose Ramirez</div>
                <div style={{fontSize:10,color:'var(--ink-2)',display:'flex',alignItems:'center',gap:4}}>
                  <Icon name="star" size={9} color="var(--warn)"/> 4.9 · White Ford F-150 · TXR-4892
                </div>
              </div>
              <div style={{display:'flex',gap:6}}>
                <div style={{width:36,height:36,borderRadius:99,background:'var(--bg-2)',display:'grid',placeItems:'center'}}><Icon name="phone" size={14}/></div>
                <div style={{width:36,height:36,borderRadius:99,background:'var(--bg-2)',display:'grid',placeItems:'center'}}><Icon name="msg" size={14}/></div>
              </div>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',padding:'8px 10px',background:'rgba(255,106,26,0.08)',border:'1px solid rgba(255,106,26,0.2)',borderRadius:10}}>
              <span style={{fontSize:11,color:'var(--ink-1)'}}>Window</span>
              <span style={{fontSize:11,fontWeight:600,color:'var(--ember-300)'}}>2:00 - 4:00 PM today</span>
            </div>
          </div>
        </div>
      </Browser>
      <HI light/>
    </div>
  );
}

// ─── Estimate review ───────────────────────────────────────
function C_Estimate() {
  return (
    <div className="screen">
      <SB/>
      <Browser url="vences.rev.nu/quote/8412">
        <div style={{padding:'18px 22px',display:'flex',flexDirection:'column',gap:14,height:'100%',overflow:'auto'}}>
          <div>
            <div style={{fontSize:11,color:'var(--ember-300)',fontFamily:'var(--font-mono)',letterSpacing:'0.08em',textTransform:'uppercase'}}>From Jose · just now</div>
            <div style={{fontSize:22,fontWeight:800,marginTop:4,letterSpacing:'-0.02em'}}>Your repair estimate</div>
          </div>
          <Card style={{padding:14}}>
            <div style={{fontSize:11,color:'var(--ink-2)',marginBottom:8,fontFamily:'var(--font-mono)',letterSpacing:'0.08em',textTransform:'uppercase'}}>What's wrong</div>
            <div style={{fontSize:13,color:'var(--ink-1)',lineHeight:1.5,marginBottom:12}}>
              The capacitor on your upstairs condenser is bulging — that's why the fan runs but no cold air. Refrigerant also tested low.
            </div>
            <div style={{display:'flex',gap:6}}>
              {[1,2,3].map(i=>(
                <div key={i} style={{width:54,height:54,borderRadius:8,background:'#1F2329',position:'relative',overflow:'hidden'}}>
                  <div style={{position:'absolute',inset:0,background:`linear-gradient(135deg,#2A2F36 25%,transparent 25%,transparent 75%,#2A2F36 75%) 0 0/12px 12px`,opacity:0.4}}/>
                  <div style={{position:'absolute',bottom:2,right:3,fontSize:8,color:'var(--ink-2)',fontFamily:'var(--font-mono)'}}>BEFORE</div>
                </div>
              ))}
            </div>
          </Card>
          <Card style={{padding:14}}>
            <div style={{fontSize:11,color:'var(--ink-2)',marginBottom:10,fontFamily:'var(--font-mono)',letterSpacing:'0.08em',textTransform:'uppercase'}}>Line items</div>
            {[['Capacitor (45/5 µF)','$84'],['R-410A refrigerant · 2lb','$120'],['Diagnostic + labor','$340']].map(([l,a],i)=>(
              <div key={i} style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:i<2?'1px solid var(--line-soft)':'none'}}>
                <span style={{fontSize:13,color:'var(--ink-1)'}}>{l}</span>
                <span style={{fontSize:13,fontWeight:600,fontFamily:'var(--font-mono)'}}>{a}</span>
              </div>
            ))}
          </Card>
          <Card ember style={{padding:14}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div>
                <div style={{fontSize:10,color:'var(--ember-300)',fontFamily:'var(--font-mono)',letterSpacing:'0.08em'}}>TOTAL · TAX INC.</div>
                <Money value="589" size={36}/>
              </div>
              <div style={{textAlign:'right'}}>
                <div style={{fontSize:10,color:'var(--ink-2)'}}>Time to repair</div>
                <div style={{fontSize:14,fontWeight:700}}>~45 min</div>
              </div>
            </div>
          </Card>
          <div style={{padding:'10px 12px',background:'rgba(43,210,122,0.08)',border:'1px solid rgba(43,210,122,0.2)',borderRadius:10,fontSize:11,color:'var(--ink-1)',display:'flex',gap:8,alignItems:'flex-start'}}>
            <Icon name="shield" size={14} color="var(--ok)"/>
            <span><strong style={{color:'var(--ok)'}}>1-year warranty</strong> on parts and labor. Pay only after work is done to your satisfaction.</span>
          </div>
        </div>
      </Browser>
      <div style={{position:'absolute',bottom:30,left:18,right:18,display:'flex',gap:8}}>
        <Btn kind="secondary" size="lg" style={{flex:1}}>Decline</Btn>
        <Btn kind="primary" size="lg" icon="check" style={{flex:1.6}}>Approve · $589</Btn>
      </div>
      <HI/>
    </div>
  );
}

// ─── Pay ───────────────────────────────────────────────────
function C_Pay() {
  return (
    <div className="screen">
      <SB/>
      <Browser url="vences.rev.nu/pay/8412">
        <div style={{padding:'18px 22px',display:'flex',flexDirection:'column',gap:14,height:'100%'}}>
          <div>
            <div style={{fontSize:11,color:'var(--ok)',fontFamily:'var(--font-mono)',letterSpacing:'0.08em',textTransform:'uppercase'}}>Repair complete</div>
            <div style={{fontSize:22,fontWeight:800,marginTop:4}}>Pay Jose</div>
          </div>
          <Card ember style={{textAlign:'center',padding:'18px 14px'}}>
            <Money value="589.00" size={44}/>
            <div style={{fontSize:11,color:'var(--ink-2)',marginTop:6}}>Vences HVAC · Job #8412</div>
          </Card>
          <div style={{fontSize:11,color:'var(--ink-2)',fontFamily:'var(--font-mono)',letterSpacing:'0.08em',textTransform:'uppercase'}}>Pay with</div>
          <div style={{display:'flex',flexDirection:'column',gap:8}}>
            <div style={{padding:'14px',borderRadius:12,background:'#000',border:'1px solid var(--line)',display:'flex',alignItems:'center',gap:10}}>
              <div style={{width:36,height:24,background:'white',borderRadius:4,display:'grid',placeItems:'center',fontSize:10,fontWeight:700,color:'#000'}}> Pay</div>
              <span style={{fontSize:14,fontWeight:600,color:'white'}}>Apple Pay</span>
              <Icon name="arrow" size={14} color="var(--ink-2)" style={{marginLeft:'auto'}}/>
            </div>
            <div style={{padding:'14px',borderRadius:12,background:'var(--bg-1)',border:'2px solid var(--ember-500)',display:'flex',alignItems:'center',gap:10}}>
              <Icon name="card" size={20} color="var(--ember-500)"/>
              <div style={{flex:1}}>
                <div style={{fontSize:13,fontWeight:600}}>Card on file</div>
                <div style={{fontSize:10,color:'var(--ink-2)',fontFamily:'var(--font-mono)'}}>•••• 4242</div>
              </div>
              <Chip color="ember" size="sm">selected</Chip>
            </div>
            <div style={{padding:'14px',borderRadius:12,background:'var(--bg-1)',border:'1px solid var(--line)',display:'flex',alignItems:'center',gap:10}}>
              <Icon name="dollar" size={20}/>
              <span style={{fontSize:13,fontWeight:500}}>Bank transfer (ACH)</span>
              <Icon name="arrow" size={14} color="var(--ink-2)" style={{marginLeft:'auto'}}/>
            </div>
          </div>
          <Card style={{padding:10,marginTop:'auto'}}>
            <label style={{display:'flex',gap:8,alignItems:'center',fontSize:11,color:'var(--ink-1)'}}>
              <div style={{width:18,height:18,borderRadius:4,background:'var(--bg-2)',border:'1px solid var(--line)'}}/>
              Tip 18% · $106 (suggested)
            </label>
          </Card>
        </div>
      </Browser>
      <div style={{position:'absolute',bottom:30,left:18,right:18}}>
        <Btn kind="primary" size="lg" full icon="check">Pay $589</Btn>
      </div>
      <HI/>
    </div>
  );
}

// ─── Receipt + review ──────────────────────────────────────
function C_Receipt() {
  return (
    <div className="screen">
      <SB/>
      <Browser url="vences.rev.nu/receipt/8412">
        <div style={{padding:'18px 22px',display:'flex',flexDirection:'column',gap:14,height:'100%',overflow:'auto'}}>
          <div style={{display:'flex',alignItems:'center',gap:10}}>
            <div style={{width:38,height:38,borderRadius:99,background:'var(--ok)',display:'grid',placeItems:'center'}}>
              <Icon name="check" size={22} color="#0A0B0D"/>
            </div>
            <div>
              <div style={{fontSize:18,fontWeight:700}}>Paid · thanks Maria!</div>
              <div style={{fontSize:11,color:'var(--ink-2)'}}>$589 · Visa 4242 · 2:38 PM</div>
            </div>
          </div>
          <Card ember style={{padding:16}}>
            <div style={{fontSize:11,color:'var(--ember-300)',fontFamily:'var(--font-mono)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:8}}>How did Jose do?</div>
            <div style={{display:'flex',gap:6,marginBottom:10}}>
              {[1,2,3,4,5].map(i=>(
                <div key={i} style={{width:36,height:36,borderRadius:8,background:i<=5?'rgba(255,197,66,0.15)':'var(--bg-2)',border:`1px solid ${i<=5?'var(--warn)':'var(--line)'}`,display:'grid',placeItems:'center'}}>
                  <Icon name="star" size={20} color={i<=5?'var(--warn)':'var(--ink-2)'}/>
                </div>
              ))}
            </div>
            <div style={{padding:'10px 12px',background:'var(--bg-2)',borderRadius:8,fontSize:12,color:'var(--ink-2)',minHeight:50}}>
              Add a note (optional)…
            </div>
            <div style={{display:'flex',gap:6,marginTop:10,flexWrap:'wrap'}}>
              {['On time','Polite','Explained well','Tidy'].map(t=>(
                <Chip key={t} color="ok" size="sm">+ {t}</Chip>
              ))}
            </div>
          </Card>
          <div>
            <div style={{fontSize:11,color:'var(--ink-2)',fontFamily:'var(--font-mono)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:8}}>Receipt</div>
            <div style={{padding:14,background:'var(--bg-1)',borderRadius:12,border:'1px solid var(--line)'}}>
              {[['Capacitor (45/5 µF)','$84'],['R-410A refrigerant','$120'],['Diagnostic + labor','$340'],['Tax (8.25%)','$45']].map(([l,a],i)=>(
                <div key={i} style={{display:'flex',justifyContent:'space-between',padding:'5px 0',fontSize:11,color:'var(--ink-1)'}}><span>{l}</span><span style={{fontFamily:'var(--font-mono)'}}>{a}</span></div>
              ))}
              <div style={{display:'flex',justifyContent:'space-between',padding:'10px 0 0',marginTop:6,borderTop:'1px solid var(--line-soft)'}}>
                <span style={{fontSize:13,fontWeight:700}}>Total</span>
                <span style={{fontSize:13,fontWeight:700,fontFamily:'var(--font-mono)'}}>$589.00</span>
              </div>
            </div>
            <div style={{display:'flex',gap:8,marginTop:10}}>
              <Btn kind="ghost" size="sm" full icon="msg">Email me</Btn>
              <Btn kind="ghost" size="sm" full>Save PDF</Btn>
            </div>
          </div>
          <Card style={{padding:'10px 12px',display:'flex',gap:8,alignItems:'center'}}>
            <Icon name="shield" size={14} color="var(--ok)"/>
            <span style={{fontSize:11,color:'var(--ink-1)'}}>1-year warranty active until <strong>Apr 30, 2026</strong></span>
          </Card>
        </div>
      </Browser>
      <div style={{position:'absolute',bottom:30,left:18,right:18}}>
        <Btn kind="primary" size="lg" full icon="check">Submit review</Btn>
      </div>
      <HI/>
    </div>
  );
}

// ─── SMS notification (lockscreen) ─────────────────────────
function C_SMS() {
  return (
    <div className="screen" style={{background:'linear-gradient(180deg,#1a1a2e,#0a0b0d)'}}>
      <SB/>
      <div style={{padding:'40px 22px 20px',textAlign:'center',color:'white'}}>
        <div style={{fontSize:64,fontWeight:200,letterSpacing:'-0.04em',lineHeight:1}}>2:14</div>
        <div style={{fontSize:14,marginTop:8,opacity:0.85}}>Tuesday, April 30</div>
      </div>
      <div style={{padding:'0 14px',display:'flex',flexDirection:'column',gap:10}}>
        <Card style={{padding:14,background:'rgba(255,255,255,0.10)',backdropFilter:'blur(20px)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:18}}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8}}>
            <div style={{width:24,height:24,borderRadius:6,background:'#00C853',display:'grid',placeItems:'center'}}>
              <Icon name="msg" size={14} color="white"/>
            </div>
            <span style={{fontSize:12,fontWeight:600,color:'white'}}>Messages</span>
            <span style={{marginLeft:'auto',fontSize:10,color:'rgba(255,255,255,0.6)'}}>now</span>
          </div>
          <div style={{fontSize:13,fontWeight:700,color:'white',marginBottom:4}}>Vences HVAC</div>
          <div style={{fontSize:12,color:'rgba(255,255,255,0.85)',lineHeight:1.4}}>
            Hi Maria — Jose is on his way to fix your AC. Track him live: rev.nu/v/8412
          </div>
        </Card>
        <Card style={{padding:14,background:'rgba(255,106,26,0.18)',backdropFilter:'blur(20px)',border:'1px solid rgba(255,106,26,0.4)',borderRadius:18}}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8}}>
            <Mark size={24}/>
            <span style={{fontSize:12,fontWeight:600,color:'white'}}>RevnueX · Vences HVAC</span>
            <span style={{marginLeft:'auto',fontSize:10,color:'rgba(255,255,255,0.6)'}}>2m ago</span>
          </div>
          <div style={{fontSize:13,fontWeight:700,color:'white',marginBottom:4}}>Jose is 4 min away 🚐</div>
          <div style={{fontSize:12,color:'rgba(255,255,255,0.85)',lineHeight:1.4}}>White Ford F-150 · TXR-4892. Tap to track him live.</div>
        </Card>
      </div>
      <HI light/>
    </div>
  );
}

Object.assign(window, {
  C_Landing, C_PickTime, C_Confirm, C_Booked, C_Tracking, C_Estimate, C_Pay, C_Receipt, C_SMS,
  Browser, PwaHdr,
});
