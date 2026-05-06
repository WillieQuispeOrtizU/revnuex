/* mockup-screens-settings.jsx — Owner settings, billing, team, integrations */
/* global React, IPhone, SB, HI, ANav, Tab, Icon, Mark, Chip, Money, Btn, Card, Hdr */

// ─── Settings home ─────────────────────────────────────────
function S_Settings() {
  const sections = [
    {hdr:'Business',rows:[
      ['building','Company info','Vences HVAC · Austin TX',null],
      ['pin','Service area','78704 + 12 ZIPs · 25mi radius',null],
      ['calendar','Hours & pricing','Mon-Sat 7am-7pm',null],
    ]},
    {hdr:'Iris (AI)',rows:[
      ['zap','Voice & persona','Sarah · friendly · bilingual',{accent:true}],
      ['phone','Call routing','3 rings → Iris · M-F',null],
      ['msg','Scripts & objections','5 custom · 12 default',{badge:'2 new'}],
    ]},
    {hdr:'Team',rows:[
      ['user','Techs & dispatch','3 active · 1 invited',null],
      ['shield','Permissions','Owner · Dispatch · Tech',null],
    ]},
    {hdr:'Money',rows:[
      ['dollar','Plan & billing','Founder · $0/mo · 3 of 5',{accent:true}],
      ['card','Payouts','Stripe · ending 4242',null],
      ['file','Invoices & taxes','QuickBooks linked',null],
    ]},
    {hdr:'Other',rows:[
      ['bell','Notifications','Push + SMS · all on',null],
      ['shield','Privacy & data',null,null],
      ['msg','Help & support','24/7 founder line',null],
    ]},
  ];
  return (
    <div className="screen">
      <SB/>
      <Hdr title="Settings" trailing={<div style={{width:32,height:32,borderRadius:99,background:'linear-gradient(135deg,#FF8A3A,#C43E04)',display:'grid',placeItems:'center',fontSize:11,fontWeight:700,color:'white'}}>DM</div>}/>
      <div style={{padding:'14px 14px 0',display:'flex',flexDirection:'column',gap:18,overflow:'auto',height:'calc(100% - 158px)'}}>
        <Card ember style={{padding:14,display:'flex',gap:10,alignItems:'center'}}>
          <div style={{width:46,height:46,borderRadius:99,background:'linear-gradient(135deg,#FF8A3A,#C43E04)',display:'grid',placeItems:'center',color:'white',fontSize:16,fontWeight:700}}>DM</div>
          <div style={{flex:1}}>
            <div style={{fontSize:14,fontWeight:700}}>Diego Martinez</div>
            <div style={{fontSize:11,color:'var(--ink-2)'}}>Owner · Vences HVAC · since Mar '25</div>
          </div>
          <Chip color="ember" size="sm">Founder</Chip>
        </Card>
        {sections.map(sec=>(
          <div key={sec.hdr}>
            <div style={{fontSize:10,color:'var(--ink-2)',fontFamily:'var(--font-mono)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:6,paddingLeft:4}}>{sec.hdr}</div>
            <div style={{background:'var(--bg-1)',borderRadius:12,border:'1px solid var(--line)',overflow:'hidden'}}>
              {sec.rows.map((r,i)=>(
                <div key={i} style={{padding:'12px 14px',display:'flex',alignItems:'center',gap:10,borderTop:i?'1px solid var(--line-soft)':'none'}}>
                  <div style={{width:30,height:30,borderRadius:8,background:r[3]?.accent?'rgba(255,106,26,0.12)':'var(--bg-2)',display:'grid',placeItems:'center'}}>
                    <Icon name={r[0]} size={14} color={r[3]?.accent?'var(--ember-500)':'var(--ink-1)'}/>
                  </div>
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{fontSize:13,fontWeight:500}}>{r[1]}</div>
                    {r[2] && <div style={{fontSize:10,color:'var(--ink-2)',marginTop:1,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{r[2]}</div>}
                  </div>
                  {r[3]?.badge && <Chip color="ember" size="sm">{r[3].badge}</Chip>}
                  <Icon name="arrow" size={12} color="var(--ink-2)"/>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div style={{padding:'14px 4px 80px',textAlign:'center'}}>
          <div style={{fontSize:10,color:'var(--ink-2)',fontFamily:'var(--font-mono)'}}>RevnueX v0.4.2 · Build 1192</div>
          <div style={{fontSize:11,color:'var(--bad)',marginTop:8,fontWeight:500}}>Sign out</div>
        </div>
      </div>
      <ANav active="me"/>
      <HI/>
    </div>
  );
}

// ─── Iris settings (deeper) ────────────────────────────────
function S_IrisSettings() {
  return (
    <div className="screen">
      <SB/>
      <Hdr title="Iris (AI agent)" leading="back"/>
      <div style={{padding:'14px 14px 80px',display:'flex',flexDirection:'column',gap:14,overflow:'auto',height:'calc(100% - 100px)'}}>
        <Card ember style={{padding:14}}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:10}}>
            <div style={{width:42,height:42,borderRadius:99,background:'linear-gradient(135deg,#FF8A3A,#C43E04)',display:'grid',placeItems:'center'}}>
              <Icon name="zap" size={20} color="#0A0B0D"/>
            </div>
            <div style={{flex:1}}>
              <div style={{fontSize:14,fontWeight:700}}>Iris is live</div>
              <div style={{fontSize:10,color:'var(--ok)',display:'flex',alignItems:'center',gap:4}}>
                <div style={{width:6,height:6,borderRadius:99,background:'var(--ok)'}}/> Answering calls now
              </div>
            </div>
            <div style={{width:44,height:24,borderRadius:99,background:'var(--ok)',position:'relative'}}>
              <div style={{position:'absolute',right:2,top:2,width:20,height:20,borderRadius:99,background:'#0A0B0D'}}/>
            </div>
          </div>
          <div style={{fontSize:10,fontFamily:'var(--font-mono)',color:'var(--ink-2)',padding:8,background:'var(--bg-2)',borderRadius:6,letterSpacing:0.5}}>
            14 calls today · 11 booked · 92% capture rate
          </div>
        </Card>

        <div>
          <div style={{fontSize:10,color:'var(--ink-2)',fontFamily:'var(--font-mono)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:8,paddingLeft:4}}>Voice</div>
          <Card style={{padding:0,overflow:'hidden'}}>
            {[
              ['Sarah','Warm · upper Texan',true],
              ['Marcus','Direct · neutral',false],
              ['Elena','Bilingual EN/ES',false],
            ].map(([name,desc,sel],i)=>(
              <div key={name} style={{padding:'12px 14px',display:'flex',alignItems:'center',gap:10,borderTop:i?'1px solid var(--line-soft)':'none',background:sel?'rgba(255,106,26,0.08)':'transparent'}}>
                <div style={{width:36,height:36,borderRadius:99,background:sel?'var(--ember-500)':'var(--bg-2)',display:'grid',placeItems:'center'}}>
                  <Icon name="phone" size={14} color={sel?'#0A0B0D':'var(--ink-1)'}/>
                </div>
                <div style={{flex:1}}>
                  <div style={{fontSize:13,fontWeight:600}}>{name}</div>
                  <div style={{fontSize:10,color:'var(--ink-2)'}}>{desc}</div>
                </div>
                <div style={{width:28,height:28,borderRadius:99,background:'var(--bg-2)',display:'grid',placeItems:'center'}}>
                  <Icon name="zap" size={12} color="var(--ember-500)"/>
                </div>
                {sel && <Icon name="check" size={16} color="var(--ember-500)"/>}
              </div>
            ))}
          </Card>
        </div>

        <div>
          <div style={{fontSize:10,color:'var(--ink-2)',fontFamily:'var(--font-mono)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:8,paddingLeft:4}}>Behavior</div>
          <Card style={{padding:0,overflow:'hidden'}}>
            {[
              ['Languages','EN + ES'],
              ['Pickup speed','3 rings'],
              ['After hours','Voicemail + SMS'],
              ['Max call length','8 min'],
              ['Confidence floor','0.78 (transfer if lower)'],
            ].map(([l,v],i)=>(
              <div key={l} style={{padding:'12px 14px',display:'flex',alignItems:'center',gap:10,borderTop:i?'1px solid var(--line-soft)':'none'}}>
                <div style={{flex:1,fontSize:13,fontWeight:500}}>{l}</div>
                <div style={{fontSize:11,color:'var(--ember-300)',fontFamily:'var(--font-mono)'}}>{v}</div>
                <Icon name="arrow" size={12} color="var(--ink-2)"/>
              </div>
            ))}
          </Card>
        </div>

        <div>
          <div style={{fontSize:10,color:'var(--ink-2)',fontFamily:'var(--font-mono)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:8,paddingLeft:4}}>Scripts</div>
          <Card style={{padding:14}}>
            <div style={{fontSize:12,fontWeight:600,marginBottom:6}}>Greeting</div>
            <div style={{padding:10,background:'var(--bg-2)',borderRadius:8,fontSize:11,color:'var(--ink-1)',lineHeight:1.5,fontStyle:'italic'}}>
              "Hi, you've reached Vences HVAC. This is Sarah — I can help you book a visit or get a quote. What's going on with your AC?"
            </div>
            <Btn kind="ghost" size="sm" style={{marginTop:10}}>Edit greeting</Btn>
          </Card>
        </div>
      </div>
      <ANav active="me"/>
      <HI/>
    </div>
  );
}

// ─── Team management ──────────────────────────────────────
function S_Team() {
  const team = [
    {n:'Jose Ramirez',i:'JR',r:'Lead tech · EPA 608',s:'On site · 2204 Bouldin',c:'#FF6A1A',live:true,jobs:128,rev:'$48k',rate:4.9},
    {n:'Mike Chen',i:'MC',r:'Tech · NATE certified',s:'Available · 4 jobs today',c:'#4DA8FF',live:false,jobs:94,rev:'$31k',rate:4.8},
    {n:'Sandra Lopez',i:'SL',r:'Apprentice tech',s:'Off today',c:'#2BD27A',live:false,jobs:42,rev:'$12k',rate:4.7},
    {n:'Diego Martinez',i:'DM',r:'Owner / dispatch',s:'You',c:'#FFC542',live:false,jobs:0,rev:'—',rate:null},
  ];
  return (
    <div className="screen">
      <SB/>
      <Hdr title="Team" leading="back" trailing={<div style={{padding:'6px 10px',background:'var(--ember-500)',color:'#0A0B0D',borderRadius:8,fontSize:11,fontWeight:600,display:'flex',alignItems:'center',gap:4}}><Icon name="check" size={11} color="#0A0B0D"/> Add</div>}/>
      <div style={{padding:'14px 14px 80px',display:'flex',flexDirection:'column',gap:10,overflow:'auto',height:'calc(100% - 100px)'}}>
        <div style={{display:'flex',gap:8}}>
          {[['4','Active'],['1','Invited'],['$91k','MTD']].map(([v,l])=>(
            <Card key={l} style={{flex:1,padding:'10px 12px',textAlign:'center'}}>
              <div style={{fontSize:18,fontWeight:800,letterSpacing:'-0.02em'}}>{v}</div>
              <div style={{fontSize:9,color:'var(--ink-2)',fontFamily:'var(--font-mono)',letterSpacing:0.6,textTransform:'uppercase'}}>{l}</div>
            </Card>
          ))}
        </div>
        {team.map(t=>(
          <Card key={t.n} style={{padding:14}}>
            <div style={{display:'flex',gap:12,alignItems:'center'}}>
              <div style={{width:44,height:44,borderRadius:99,background:t.c,display:'grid',placeItems:'center',color:'#0A0B0D',fontSize:14,fontWeight:700,position:'relative'}}>
                {t.i}
                {t.live && <div style={{position:'absolute',bottom:-2,right:-2,width:14,height:14,borderRadius:99,background:'var(--ok)',border:'2px solid var(--bg-1)'}}/>}
              </div>
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontSize:13,fontWeight:700}}>{t.n}</div>
                <div style={{fontSize:10,color:'var(--ink-2)'}}>{t.r}</div>
                <div style={{fontSize:11,color:t.live?'var(--ok)':'var(--ink-2)',marginTop:4,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{t.s}</div>
              </div>
              <Icon name="msg" size={14} color="var(--ink-2)"/>
            </div>
            {t.rate && (
              <div style={{display:'flex',gap:14,marginTop:10,paddingTop:10,borderTop:'1px solid var(--line-soft)'}}>
                <div><div style={{fontSize:10,color:'var(--ink-2)',fontFamily:'var(--font-mono)'}}>JOBS</div><div style={{fontSize:13,fontWeight:600}}>{t.jobs}</div></div>
                <div><div style={{fontSize:10,color:'var(--ink-2)',fontFamily:'var(--font-mono)'}}>REVENUE</div><div style={{fontSize:13,fontWeight:600}}>{t.rev}</div></div>
                <div><div style={{fontSize:10,color:'var(--ink-2)',fontFamily:'var(--font-mono)'}}>RATING</div><div style={{fontSize:13,fontWeight:600,display:'flex',alignItems:'center',gap:3}}><Icon name="star" size={11} color="var(--warn)"/>{t.rate}</div></div>
              </div>
            )}
          </Card>
        ))}
        <Card style={{padding:14,border:'1px dashed var(--line)',background:'transparent',display:'flex',gap:10,alignItems:'center'}}>
          <div style={{width:44,height:44,borderRadius:99,background:'var(--bg-2)',border:'1px dashed var(--line)',display:'grid',placeItems:'center'}}>
            <Icon name="check" size={18} color="var(--ink-2)"/>
          </div>
          <div style={{flex:1}}>
            <div style={{fontSize:13,fontWeight:600,color:'var(--ink-2)'}}>Sarah Kim · invited</div>
            <div style={{fontSize:10,color:'var(--ink-2)'}}>Sent 2 days ago · resend</div>
          </div>
        </Card>
      </div>
      <ANav active="me"/>
      <HI/>
    </div>
  );
}

// ─── Billing / subscription ────────────────────────────────
function S_Billing() {
  return (
    <div className="screen">
      <SB/>
      <Hdr title="Plan & billing" leading="back"/>
      <div style={{padding:'14px 14px 80px',display:'flex',flexDirection:'column',gap:14,overflow:'auto',height:'calc(100% - 100px)'}}>
        <div style={{position:'relative',padding:18,borderRadius:18,background:'linear-gradient(135deg,rgba(255,106,26,0.18) 0%, rgba(255,106,26,0.05) 100%)',border:'1px solid rgba(255,106,26,0.3)',overflow:'hidden'}}>
          <div style={{position:'absolute',top:-40,right:-40,width:160,height:160,borderRadius:'50%',background:'radial-gradient(circle, rgba(255,106,26,0.25), transparent 70%)'}}/>
          <div style={{position:'relative'}}>
            <div style={{fontSize:10,color:'var(--ember-300)',fontFamily:'var(--font-mono)',letterSpacing:'0.12em',textTransform:'uppercase'}}>Founder Program · slot 3 of 5</div>
            <div style={{fontSize:30,fontWeight:800,marginTop:6,letterSpacing:'-0.02em'}}>Vences HVAC</div>
            <div style={{display:'flex',alignItems:'baseline',gap:6,marginTop:8}}>
              <Money value="0" size={36}/>
              <span style={{fontSize:12,color:'var(--ink-2)'}}>/mo · year one</span>
            </div>
            <div style={{fontSize:11,color:'var(--ink-2)',marginTop:8,lineHeight:1.5}}>
              Renews <strong style={{color:'var(--ink-1)'}}>Mar 14, 2026</strong> at $399/mo unless First-Job-or-Free clause kicks in.
            </div>
          </div>
        </div>

        <Card style={{padding:14}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
            <div style={{fontSize:12,fontWeight:600}}>First Job or Free</div>
            <Chip color="ok" size="sm">on track</Chip>
          </div>
          <div style={{height:6,background:'var(--bg-2)',borderRadius:99,overflow:'hidden',marginBottom:6}}>
            <div style={{width:'68%',height:'100%',background:'linear-gradient(90deg, var(--ok), #1bb564)'}}/>
          </div>
          <div style={{display:'flex',justifyContent:'space-between',fontSize:10,color:'var(--ink-2)',fontFamily:'var(--font-mono)'}}>
            <span>$8,420 booked</span>
            <span>goal $12,500 by May 14</span>
          </div>
        </Card>

        <div>
          <div style={{fontSize:10,color:'var(--ink-2)',fontFamily:'var(--font-mono)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:8,paddingLeft:4}}>This month's usage</div>
          <Card style={{padding:0,overflow:'hidden'}}>
            {[
              ['Iris call minutes','1,420','of 5,000','28%'],
              ['SMS sent','847','unlimited',''],
              ['Tech seats','3','of 5','60%'],
              ['Live track sessions','312','unlimited',''],
            ].map(([l,used,limit,pct],i)=>(
              <div key={l} style={{padding:'12px 14px',borderTop:i?'1px solid var(--line-soft)':'none'}}>
                <div style={{display:'flex',justifyContent:'space-between',marginBottom:pct?6:0}}>
                  <span style={{fontSize:12,color:'var(--ink-1)'}}>{l}</span>
                  <span style={{fontSize:11,fontFamily:'var(--font-mono)',color:'var(--ink-2)'}}><strong style={{color:'var(--ember-300)'}}>{used}</strong> {limit}</span>
                </div>
                {pct && <div style={{height:3,background:'var(--bg-2)',borderRadius:99,overflow:'hidden'}}><div style={{width:pct,height:'100%',background:'var(--ember-500)'}}/></div>}
              </div>
            ))}
          </Card>
        </div>

        <div>
          <div style={{fontSize:10,color:'var(--ink-2)',fontFamily:'var(--font-mono)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:8,paddingLeft:4}}>Recent invoices</div>
          <Card style={{padding:0,overflow:'hidden'}}>
            {[['Apr 1, 2025','$0.00','Founder credit','paid'],['Mar 1, 2025','$0.00','Founder credit','paid'],['Feb 14, 2025','$199.00','Setup fee','paid']].map(([d,a,l,s],i)=>(
              <div key={i} style={{padding:'12px 14px',display:'flex',alignItems:'center',gap:10,borderTop:i?'1px solid var(--line-soft)':'none'}}>
                <div style={{width:30,height:30,borderRadius:8,background:'var(--bg-2)',display:'grid',placeItems:'center'}}>
                  <Icon name="file" size={12}/>
                </div>
                <div style={{flex:1}}>
                  <div style={{fontSize:12,fontWeight:600}}>{l}</div>
                  <div style={{fontSize:10,color:'var(--ink-2)'}}>{d}</div>
                </div>
                <div style={{fontSize:13,fontWeight:600,fontFamily:'var(--font-mono)'}}>{a}</div>
                <Chip color="ok" size="sm">{s}</Chip>
              </div>
            ))}
          </Card>
        </div>
      </div>
      <ANav active="me"/>
      <HI/>
    </div>
  );
}

// ─── Integrations ──────────────────────────────────────────
function S_Integrations() {
  const apps = [
    {n:'QuickBooks',d:'Auto-sync invoices + payouts',c:'#2CA01C',ic:'QB',connected:true,sync:'30s ago'},
    {n:'Stripe',d:'Process card + ACH payments',c:'#635BFF',ic:'$',connected:true,sync:'live'},
    {n:'Google Calendar',d:'Two-way sync · tech availability',c:'#4285F4',ic:'GC',connected:true,sync:'2m ago'},
    {n:'ServiceTitan',d:'Migrate jobs + customer records',c:'#0F4DAB',ic:'ST',connected:false,sync:null,recommended:true},
    {n:'Twilio',d:'SMS + Iris voice routing',c:'#F22F46',ic:'TW',connected:true,sync:'live'},
    {n:'Zapier',d:'5,000+ app workflows',c:'#FF4F00',ic:'Z',connected:false,sync:null},
    {n:'HubSpot',d:'Push leads to CRM',c:'#FF7A59',ic:'H',connected:false,sync:null},
  ];
  return (
    <div className="screen">
      <SB/>
      <Hdr title="Integrations" leading="back"/>
      <div style={{padding:'14px 14px 80px',display:'flex',flexDirection:'column',gap:10,overflow:'auto',height:'calc(100% - 100px)'}}>
        <Card ember style={{padding:12,display:'flex',gap:10,alignItems:'center'}}>
          <div style={{width:32,height:32,borderRadius:8,background:'var(--ember-500)',display:'grid',placeItems:'center'}}>
            <Icon name="zap" size={14} color="#0A0B0D"/>
          </div>
          <div style={{flex:1,fontSize:11,color:'var(--ink-1)'}}>
            <strong>4 of 7 connected.</strong> All payment + accounting flows automated.
          </div>
        </Card>
        {apps.map(a=>(
          <Card key={a.n} style={{padding:14,display:'flex',gap:12,alignItems:'center',position:'relative',overflow:'hidden'}}>
            {a.recommended && <div style={{position:'absolute',top:0,right:0,padding:'2px 8px',background:'var(--ember-500)',color:'#0A0B0D',fontSize:9,fontWeight:700,letterSpacing:0.6,fontFamily:'var(--font-mono)',borderBottomLeftRadius:6}}>RECOMMENDED</div>}
            <div style={{width:44,height:44,borderRadius:10,background:a.c,display:'grid',placeItems:'center',color:'white',fontSize:14,fontWeight:800,letterSpacing:-0.5,flexShrink:0}}>{a.ic}</div>
            <div style={{flex:1,minWidth:0}}>
              <div style={{display:'flex',alignItems:'center',gap:8}}>
                <div style={{fontSize:13,fontWeight:700}}>{a.n}</div>
                {a.connected && <div style={{width:6,height:6,borderRadius:99,background:'var(--ok)'}}/>}
              </div>
              <div style={{fontSize:11,color:'var(--ink-2)',marginTop:2}}>{a.d}</div>
              {a.sync && <div style={{fontSize:9,color:'var(--ok)',fontFamily:'var(--font-mono)',marginTop:4,letterSpacing:0.5}}>SYNCED {a.sync.toUpperCase()}</div>}
            </div>
            {a.connected ? (
              <div style={{padding:'6px 10px',background:'var(--bg-2)',border:'1px solid var(--line)',borderRadius:8,fontSize:10,fontWeight:600,color:'var(--ink-2)'}}>Manage</div>
            ) : (
              <div style={{padding:'6px 10px',background:'var(--ember-500)',color:'#0A0B0D',borderRadius:8,fontSize:11,fontWeight:700}}>Connect</div>
            )}
          </Card>
        ))}
      </div>
      <ANav active="me"/>
      <HI/>
    </div>
  );
}

// ─── Notification preferences ─────────────────────────────
function S_NotifPrefs() {
  const groups = [
    {hdr:'Lead alerts',items:[
      ['New lead in (any value)',{push:true,sms:true,em:false}],
      ['High-value lead (>$2k est.)',{push:true,sms:true,em:true}],
      ['Iris hand-off / takeover needed',{push:true,sms:true,em:false},{urgent:true}],
      ['Missed call (after hours)',{push:true,sms:false,em:true}],
    ]},
    {hdr:'Tech updates',items:[
      ['Tech checked-in on site',{push:true,sms:false,em:false}],
      ['Estimate sent to customer',{push:false,sms:false,em:false}],
      ['Customer paid · job complete',{push:true,sms:false,em:false}],
      ['Tech needs help / stuck',{push:true,sms:true,em:true}],
    ]},
    {hdr:'Daily digests',items:[
      ['Morning briefing · 7am',{push:true,sms:false,em:true}],
      ['Evening recap · 7pm',{push:false,sms:false,em:true}],
      ['Weekly P&L · Sunday',{push:false,sms:false,em:true}],
    ]},
  ];
  const Toggle = ({on,color='var(--ember-500)'}) => (
    <div style={{width:32,height:18,borderRadius:99,background:on?color:'var(--bg-2)',position:'relative',transition:'all 0.2s',border:on?'none':'1px solid var(--line)'}}>
      <div style={{position:'absolute',top:1,left:on?15:1,width:14,height:14,borderRadius:99,background:on?'#0A0B0D':'var(--ink-2)',transition:'all 0.2s'}}/>
    </div>
  );
  return (
    <div className="screen">
      <SB/>
      <Hdr title="Notifications" leading="back"/>
      <div style={{padding:'14px 14px 80px',overflow:'auto',height:'calc(100% - 100px)',display:'flex',flexDirection:'column',gap:14}}>
        <Card style={{padding:14}}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:10}}>
            <Icon name="bell" size={16} color="var(--ember-500)"/>
            <div style={{flex:1}}>
              <div style={{fontSize:13,fontWeight:600}}>Do not disturb</div>
              <div style={{fontSize:10,color:'var(--ink-2)'}}>Mute non-urgent alerts at night</div>
            </div>
            <Toggle on={true}/>
          </div>
          <div style={{display:'flex',gap:8,padding:10,background:'var(--bg-2)',borderRadius:8,fontSize:11}}>
            <div style={{flex:1}}>
              <div style={{fontSize:9,color:'var(--ink-2)',fontFamily:'var(--font-mono)'}}>FROM</div>
              <div style={{fontWeight:600}}>10:00 PM</div>
            </div>
            <div style={{flex:1}}>
              <div style={{fontSize:9,color:'var(--ink-2)',fontFamily:'var(--font-mono)'}}>UNTIL</div>
              <div style={{fontWeight:600}}>6:30 AM</div>
            </div>
          </div>
        </Card>

        {groups.map(g=>(
          <div key={g.hdr}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:8,paddingLeft:4}}>
              <div style={{fontSize:10,color:'var(--ink-2)',fontFamily:'var(--font-mono)',letterSpacing:'0.1em',textTransform:'uppercase'}}>{g.hdr}</div>
              <div style={{display:'flex',gap:18,fontSize:8,color:'var(--ink-2)',fontFamily:'var(--font-mono)',letterSpacing:0.6}}>
                <span style={{width:32,textAlign:'center'}}>PUSH</span>
                <span style={{width:32,textAlign:'center'}}>SMS</span>
                <span style={{width:32,textAlign:'center'}}>EMAIL</span>
              </div>
            </div>
            <Card style={{padding:0,overflow:'hidden'}}>
              {g.items.map((it,i)=>(
                <div key={i} style={{padding:'12px 14px',display:'flex',alignItems:'center',gap:10,borderTop:i?'1px solid var(--line-soft)':'none'}}>
                  <div style={{flex:1,fontSize:12,fontWeight:500,color:it[2]?.urgent?'var(--ember-300)':'var(--ink-1)',display:'flex',alignItems:'center',gap:6}}>
                    {it[2]?.urgent && <span style={{width:5,height:5,borderRadius:99,background:'var(--ember-500)'}}/>}
                    {it[0]}
                  </div>
                  <div style={{display:'flex',gap:8}}>
                    <div style={{width:32,display:'flex',justifyContent:'center'}}><Toggle on={it[1].push}/></div>
                    <div style={{width:32,display:'flex',justifyContent:'center'}}><Toggle on={it[1].sms}/></div>
                    <div style={{width:32,display:'flex',justifyContent:'center'}}><Toggle on={it[1].em}/></div>
                  </div>
                </div>
              ))}
            </Card>
          </div>
        ))}
      </div>
      <ANav active="me"/>
      <HI/>
    </div>
  );
}

// ─── Hours & service area ─────────────────────────────────
function S_Hours() {
  const days = [['M','7a','7p',true],['T','7a','7p',true],['W','7a','7p',true],['Th','7a','7p',true],['F','7a','7p',true],['Sa','9a','5p',true],['Su','—','—',false]];
  return (
    <div className="screen">
      <SB/>
      <Hdr title="Hours & service area" leading="back"/>
      <div style={{padding:'14px 14px 80px',overflow:'auto',height:'calc(100% - 100px)',display:'flex',flexDirection:'column',gap:14}}>
        <div>
          <div style={{fontSize:10,color:'var(--ink-2)',fontFamily:'var(--font-mono)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:8,paddingLeft:4}}>Working hours</div>
          <Card style={{padding:0,overflow:'hidden'}}>
            {days.map((d,i)=>(
              <div key={d[0]} style={{padding:'12px 14px',display:'flex',alignItems:'center',gap:12,borderTop:i?'1px solid var(--line-soft)':'none',opacity:d[3]?1:0.5}}>
                <div style={{width:28,fontSize:12,fontWeight:700,color:d[3]?'var(--ink-1)':'var(--ink-2)'}}>{d[0]}</div>
                <div style={{flex:1,display:'flex',gap:6,alignItems:'center'}}>
                  {d[3] ? (
                    <>
                      <div style={{padding:'4px 10px',background:'var(--bg-2)',borderRadius:6,fontSize:11,fontFamily:'var(--font-mono)',fontWeight:600}}>{d[1]}</div>
                      <span style={{color:'var(--ink-2)'}}>—</span>
                      <div style={{padding:'4px 10px',background:'var(--bg-2)',borderRadius:6,fontSize:11,fontFamily:'var(--font-mono)',fontWeight:600}}>{d[2]}</div>
                    </>
                  ) : (
                    <span style={{fontSize:11,color:'var(--ink-2)',fontStyle:'italic'}}>Closed · Iris takes voicemail</span>
                  )}
                </div>
              </div>
            ))}
          </Card>
        </div>

        <div>
          <div style={{fontSize:10,color:'var(--ink-2)',fontFamily:'var(--font-mono)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:8,paddingLeft:4}}>Surge hours</div>
          <Card style={{padding:14}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
              <div>
                <div style={{fontSize:12,fontWeight:600}}>Heat advisory · auto-extend</div>
                <div style={{fontSize:10,color:'var(--ink-2)'}}>Add evening calls when temp &gt; 100°F</div>
              </div>
              <div style={{width:32,height:18,borderRadius:99,background:'var(--ember-500)',position:'relative'}}>
                <div style={{position:'absolute',top:1,left:15,width:14,height:14,borderRadius:99,background:'#0A0B0D'}}/>
              </div>
            </div>
            <div style={{display:'flex',gap:8,fontSize:11,color:'var(--ink-2)',padding:'8px 10px',background:'rgba(255,106,26,0.08)',borderRadius:8}}>
              <Icon name="zap" size={12} color="var(--ember-500)"/>
              <span>Active now: triggered by NWS · ends 9pm tonight</span>
            </div>
          </Card>
        </div>

        <div>
          <div style={{fontSize:10,color:'var(--ink-2)',fontFamily:'var(--font-mono)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:8,paddingLeft:4}}>Service area</div>
          <Card style={{padding:0,overflow:'hidden'}}>
            <div style={{height:160,background:`#1F2329 url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><circle cx='50' cy='50' r='38' fill='none' stroke='%23FF6A1A' stroke-width='1' stroke-dasharray='2 2' opacity='0.4'/></svg>") center/200px no-repeat`,position:'relative'}}>
              <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',backgroundSize:'24px 24px'}}/>
              <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:160,height:160,borderRadius:99,background:'radial-gradient(circle, rgba(255,106,26,0.18), transparent 70%)',border:'2px dashed var(--ember-500)'}}/>
              <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:14,height:14,borderRadius:99,background:'var(--ember-500)',boxShadow:'0 0 20px var(--ember-500)'}}/>
              <div style={{position:'absolute',bottom:10,left:10,padding:'4px 8px',background:'rgba(20,22,28,0.92)',borderRadius:6,fontSize:10,fontFamily:'var(--font-mono)',color:'var(--ember-300)',letterSpacing:0.5}}>25 MI · 12 ZIPS</div>
            </div>
            <div style={{padding:'12px 14px',display:'flex',alignItems:'center',gap:10}}>
              <Icon name="pin" size={14} color="var(--ember-500)"/>
              <div style={{flex:1}}>
                <div style={{fontSize:12,fontWeight:600}}>Austin TX, 25 mi radius</div>
                <div style={{fontSize:10,color:'var(--ink-2)'}}>78704 · 78745 · 78735 · +9 more</div>
              </div>
              <Icon name="arrow" size={12} color="var(--ink-2)"/>
            </div>
          </Card>
        </div>
      </div>
      <ANav active="me"/>
      <HI/>
    </div>
  );
}

Object.assign(window, {
  S_Settings, S_IrisSettings, S_Team, S_Billing, S_Integrations, S_NotifPrefs, S_Hours,
});
