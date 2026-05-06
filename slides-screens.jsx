/* Screen-spec slides: components, IA, owner screens with PRD + mockup */
/* global React, Slide, SlideHeader, Block, Bullets, KV, Foot, Phone,
   ScreenLiveMap, ScreenLeadDetail, ScreenDashboard, ScreenNotifications,
   ScreenAISettings, ScreenFounder, ScreenFJOF, ScreenOnboarding, Chip */

// 07 · COMPONENT INVENTORY
function SlideComponents() {
  return (
    <Slide label="07 Components" full>
      <div style={{ padding: '80px 120px', display: 'flex', flexDirection: 'column', gap: 32, height: '100%' }}>
        <div>
          <div style={{display:'flex', gap:16, marginBottom:8}}>
            <span style={{fontFamily:'Geist Mono,monospace',fontSize:13,color:'var(--ember-500)'}}>07</span>
            <span style={{fontFamily:'Geist Mono,monospace',fontSize:12,color:'var(--ink-2)',letterSpacing:'0.1em',textTransform:'uppercase'}}>Foundation · Components</span>
          </div>
          <h1 style={{fontSize:56,fontWeight:700,letterSpacing:'-0.02em',margin:0}}>Component inventory</h1>
          <p style={{fontSize:16,color:'var(--ink-1)',maxWidth:780,marginTop:12}}>Every interactive surface in the app is one of these. If a screen needs something else, flag it before designing — chances are it's a variant of an existing piece.</p>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24,flex:1}}>
          {/* Buttons */}
          <CompCard title="Buttons">
            <div style={{display:'flex',flexDirection:'column',gap:10}}>
              <button style={{height:44,borderRadius:12,border:'none',background:'var(--ember-500)',color:'#0A0B0D',fontWeight:700,fontSize:14,boxShadow:'0 6px 16px rgba(255,106,26,0.35)'}}>Primary · Dispatch Jose</button>
              <button style={{height:44,borderRadius:12,background:'var(--bg-2)',color:'var(--ink-0)',border:'1px solid var(--line)',fontWeight:600,fontSize:14}}>Secondary · View</button>
              <button style={{height:44,borderRadius:12,background:'transparent',color:'var(--ember-300)',border:'1px dashed var(--line)',fontSize:13,fontWeight:600}}>+ Add line item</button>
              <button style={{height:36,borderRadius:8,background:'rgba(255,59,92,0.12)',color:'var(--hot)',border:'1px solid rgba(255,59,92,0.3)',fontWeight:600,fontSize:13}}>Destructive · Refund</button>
            </div>
            <div style={{fontSize:11,color:'var(--ink-2)',marginTop:10,fontFamily:'Geist Mono,monospace'}}>44px min · radius 12 · only ONE primary visible per screen</div>
          </CompCard>

          {/* Chips */}
          <CompCard title="Chips & badges">
            <div style={{display:'flex',gap:6,flexWrap:'wrap'}}>
              <Chip color="ember" pulse>Live</Chip>
              <Chip color="hot" pulse>Urgent</Chip>
              <Chip color="ok">Booked</Chip>
              <Chip color="info">AI auto</Chip>
              <Chip color="warn">Pending</Chip>
              <Chip color="neutral">$1,200 est.</Chip>
            </div>
            <div style={{fontSize:11,color:'var(--ink-2)',marginTop:14,fontFamily:'Geist Mono,monospace',lineHeight:1.5}}>Pulse only on items actively changing. Caps for status, sentence-case for values.</div>
          </CompCard>

          {/* Inputs */}
          <CompCard title="Inputs">
            <div style={{display:'flex',flexDirection:'column',gap:8}}>
              <div style={{padding:'12px 14px',background:'var(--bg-2)',border:'1px solid var(--line)',borderRadius:12}}>
                <div style={{fontSize:10,color:'var(--ink-2)',textTransform:'uppercase',letterSpacing:'0.06em',fontFamily:'Geist Mono,monospace'}}>Address</div>
                <div style={{fontSize:14,marginTop:2}}>2204 Bouldin Ave</div>
              </div>
              <div style={{padding:'12px 14px',background:'rgba(255,106,26,0.06)',border:'1px solid var(--ember-500)',borderRadius:12,boxShadow:'0 0 0 4px rgba(255,106,26,0.15)'}}>
                <div style={{fontSize:10,color:'var(--ember-300)',textTransform:'uppercase',letterSpacing:'0.06em',fontFamily:'Geist Mono,monospace'}}>Equipment · focused</div>
                <div style={{fontSize:14,marginTop:2}}>Carrier 24ABB6 |</div>
              </div>
              <div style={{padding:'12px 14px',background:'var(--bg-2)',border:'1px solid rgba(255,59,92,0.4)',borderRadius:12}}>
                <div style={{fontSize:10,color:'var(--hot)',textTransform:'uppercase',letterSpacing:'0.06em',fontFamily:'Geist Mono,monospace'}}>Phone · error</div>
                <div style={{fontSize:14,marginTop:2}}>(512) 555-…</div>
                <div style={{fontSize:11,color:'var(--hot)',marginTop:4}}>Number incomplete</div>
              </div>
            </div>
          </CompCard>

          {/* Cards */}
          <CompCard title="Cards">
            <div style={{padding:14,background:'var(--bg-1)',border:'1px solid var(--line)',borderRadius:14,marginBottom:8}}>
              <div style={{fontSize:11,color:'var(--ink-2)',textTransform:'uppercase',fontFamily:'Geist Mono,monospace',letterSpacing:'0.06em'}}>Today</div>
              <div style={{fontSize:24,fontWeight:700,fontFamily:'Geist'}}>$8,420</div>
            </div>
            <div style={{padding:14,background:'linear-gradient(160deg, rgba(255,106,26,0.10), var(--bg-1))',border:'1px solid rgba(255,106,26,0.3)',borderRadius:14}}>
              <div style={{fontSize:11,color:'var(--ember-300)',textTransform:'uppercase',fontFamily:'Geist Mono,monospace',letterSpacing:'0.06em'}}>Hero · ember-tinted</div>
              <div style={{fontSize:14,marginTop:4}}>Used for revenue + live items</div>
            </div>
          </CompCard>

          {/* Lists */}
          <CompCard title="List rows">
            <div style={{background:'var(--bg-1)',border:'1px solid var(--line)',borderRadius:12,overflow:'hidden'}}>
              {['AC not cooling · Maria H.','Capacitor + freon · R. Patel','Maintenance · J. Wong'].map((t,i)=>(
                <div key={i} style={{padding:'12px 14px',display:'flex',justifyContent:'space-between',alignItems:'center',borderBottom: i<2?'1px solid var(--line-soft)':'none',fontSize:13}}>
                  <span>{t}</span>
                  <svg width="10" height="14" viewBox="0 0 10 14" fill="none" stroke="var(--ink-3)" strokeWidth="2"><path d="M2 1l6 6-6 6"/></svg>
                </div>
              ))}
            </div>
            <div style={{fontSize:11,color:'var(--ink-2)',marginTop:10,fontFamily:'Geist Mono,monospace'}}>52px min row · 16px gutter · last-row no separator</div>
          </CompCard>

          {/* Sheets */}
          <CompCard title="Bottom sheets & toasts">
            <div style={{padding:12,background:'var(--bg-2)',borderRadius:12,marginBottom:8,border:'1px solid var(--line)',position:'relative'}}>
              <div style={{position:'absolute',top:6,left:'50%',transform:'translateX(-50%)',width:36,height:4,background:'var(--ink-3)',borderRadius:99}}/>
              <div style={{paddingTop:8,fontSize:13,fontWeight:600}}>Bottom sheet · drag handle 36×4</div>
            </div>
            <div style={{padding:'10px 14px',background:'rgba(43,210,122,0.12)',border:'1px solid rgba(43,210,122,0.3)',borderRadius:99,fontSize:13,color:'var(--ok)',display:'flex',alignItems:'center',gap:8}}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M2 7l3 3 7-7"/></svg>
              Paid $924 · INV-2841
            </div>
          </CompCard>
        </div>
      </div>
    </Slide>
  );
}

function CompCard({ title, children }) {
  return (
    <div style={{padding:20,borderRadius:18,background:'var(--bg-1)',border:'1px solid var(--line)',display:'flex',flexDirection:'column'}}>
      <div style={{fontFamily:'Geist Mono,monospace',fontSize:11,color:'var(--ember-300)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:14}}>{title}</div>
      {children}
    </div>
  );
}

// 08 · INFORMATION ARCHITECTURE
function SlideIA() {
  return (
    <Slide label="08 IA" full>
      <div style={{padding:'80px 120px',display:'flex',flexDirection:'column',gap:32,height:'100%'}}>
        <div>
          <div style={{display:'flex',gap:16,marginBottom:8}}>
            <span style={{fontFamily:'Geist Mono,monospace',fontSize:13,color:'var(--ember-500)'}}>08</span>
            <span style={{fontFamily:'Geist Mono,monospace',fontSize:12,color:'var(--ink-2)',letterSpacing:'0.1em',textTransform:'uppercase'}}>Foundation · IA</span>
          </div>
          <h1 style={{fontSize:56,fontWeight:700,letterSpacing:'-0.02em',margin:0}}>Two roles. One app shell.</h1>
          <p style={{fontSize:16,color:'var(--ink-1)',maxWidth:880,marginTop:12}}>One installable app, one login. The role (Owner / Tech) is set during onboarding and the tab bar reconfigures. Owners can view-only tech mode; techs can't enter owner mode.</p>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:32,flex:1}}>
          <IAColumn title="Owner — 5 tabs" tabs={[
            ['Leads', 'Inbox · live calls · queue · search'],
            ['Dispatch', 'Map · techs · routing · ETA'],
            ['Jobs', 'Open · scheduled · history · invoices'],
            ['Revenue', 'Today · week · month · funnel'],
            ['Account', 'Founder slot · billing · AI agent · team'],
          ]} />
          <IAColumn title="Tech — 4 tabs" tabs={[
            ['Today', 'Job list · clock · earnings · break'],
            ['Job', 'Active · checklist · estimate · invoice'],
            ['Route', 'Map · navigation · next stop'],
            ['Me', 'Schedule · pay · time off · settings'],
          ]} />
        </div>

        <div style={{padding:'20px 24px',borderRadius:14,background:'var(--bg-1)',border:'1px solid var(--line)',display:'flex',gap:48}}>
          <div style={{flex:1}}>
            <h4 style={{fontFamily:'Geist Mono,monospace',fontSize:11,color:'var(--ember-300)',letterSpacing:'0.1em',textTransform:'uppercase',margin:'0 0 8px'}}>Global rules</h4>
            <ul className="prd-list">
              <li>Tab bar always visible — never push it off in modals</li>
              <li>Back chevron is never the only way out — every screen has a tab anchor</li>
              <li>Notification badge on Leads (Owner) or Today (Tech), not on a separate tab</li>
            </ul>
          </div>
          <div style={{flex:1}}>
            <h4 style={{fontFamily:'Geist Mono,monospace',fontSize:11,color:'var(--ember-300)',letterSpacing:'0.1em',textTransform:'uppercase',margin:'0 0 8px'}}>Cross-role behaviors</h4>
            <ul className="prd-list">
              <li>Owner can shadow a tech's day in read-only mode (Dispatch → tech pin → "View as Jose")</li>
              <li>Push notifications route to the role-correct screen</li>
              <li>One workspace per contractor company. Multi-tenant in v2.</li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>
  );
}

function IAColumn({ title, tabs }) {
  return (
    <div style={{padding:24,borderRadius:18,background:'var(--bg-1)',border:'1px solid var(--line)',display:'flex',flexDirection:'column',gap:14}}>
      <div style={{fontFamily:'Geist Mono,monospace',fontSize:11,color:'var(--ember-300)',letterSpacing:'0.1em',textTransform:'uppercase'}}>{title}</div>
      {tabs.map(([n, sub], i) => (
        <div key={i} style={{display:'flex',alignItems:'center',gap:14,padding:12,background:'var(--bg-2)',borderRadius:12}}>
          <div style={{width:32,height:32,borderRadius:99,background:'rgba(255,106,26,0.15)',color:'var(--ember-300)',display:'grid',placeItems:'center',fontFamily:'Geist Mono',fontSize:12,fontWeight:700}}>{i+1}</div>
          <div style={{flex:1}}>
            <div style={{fontSize:15,fontWeight:600}}>{n}</div>
            <div style={{fontSize:12,color:'var(--ink-2)',marginTop:2}}>{sub}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── PRD + Mockup template ───────────────────────────────────
function SpecPage({ num, section, title, summary, tags, blocks, foot, mockup, annotations = [] }) {
  return (
    <>
      <div className="prd">
        <SlideHeader num={num} section={section} title={title} summary={summary} tags={tags} />
        {blocks.map((b, i) => (
          <Block key={i} title={b.title}>
            {b.list && <Bullets items={b.list} kind={b.kind} />}
            {b.kv && <KV pairs={b.kv} />}
            {b.text && <p style={{fontSize:14,color:'var(--ink-1)',lineHeight:1.5,margin:0}}>{b.text}</p>}
          </Block>
        ))}
        {foot && <Foot items={foot} />}
      </div>
      <div className="mockup">
        <div className="mockup-stage">
          {mockup}
        </div>
        {annotations.map((a, i) => (
          <div key={i} className="anno" style={{ left: a.x, top: a.y }}>
            <span className="dot"/>
            <div>
              <div className="num">{a.num}</div>
              {a.text}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// 09 · ONBOARDING
function SlideOnboarding() {
  return (
    <Slide label="09 Onboarding">
      <SpecPage
        num="09"
        section="Owner · Onboarding"
        title="First 90 seconds."
        tags={[{label:'Owner', kind:'ember'}, {label:'Bilingual EN/ES'}, {label:'1 of 4 screens shown'}]}
        summary={<>The contractor just clicked "Claim my city" on the marketing site. They land here. The job of this screen is one thing: get them to <em style={{color:'var(--ember-300)',fontStyle:'normal'}}>say yes</em> within 90 seconds.</>}
        blocks={[
          { title: 'Goals', list: [
            'Confirm the value prop in one sentence the contractor can read while standing',
            'Anchor the founder-slot scarcity (3 of 10 left) without feeling pushy',
            'EN/ES toggle is visible from second one — never hidden behind a settings menu',
          ] },
          { title: 'Flow (4 steps total)', kv: [
            { k: 'Step 1', v: 'Welcome · this screen · CTA' },
            { k: 'Step 2', v: 'Phone OTP login' },
            { k: 'Step 3', v: 'Pick your market (city + ZIP radius)' },
            { k: 'Step 4', v: 'AI agent gets your business name + hours' },
          ] },
          { title: 'Edge cases', list: [
            'If selected market is taken → "Reserved by another contractor — try a different ZIP" + suggested alternates',
            'OTP fails 3× → fall back to email magic link',
            'Network timeout → cached value prop renders, retry button on bottom CTA',
          ], kind: 'muted' },
        ]}
        foot={['v1.0', 'Owns: Diego', 'Eng est. 2d', 'Built first']}
        mockup={<Phone w={380} h={780} scale={0.9} glow><ScreenOnboarding/></Phone>}
        annotations={[
          { num: 'A1', text: 'EN/ES toggle visible from frame 1 — Spanish must be a peer, not an option', x: 24, y: 80 },
          { num: 'A2', text: 'Headline is the entire value prop. Don\'t bury it under nav.', x: 24, y: 320 },
          { num: 'A3', text: 'Slot counter as a footnote, not a scare tactic. Pulse on number only.', x: 24, y: 600 },
        ]}
      />
    </Slide>
  );
}

// 10 · LIVE DISPATCH (HERO)
function SlideLiveMap() {
  return (
    <Slide label="10 Dispatch">
      <SpecPage
        num="10"
        section="Owner · Dispatch ★ HERO"
        title="The lead pin lands."
        tags={[{label:'Owner', kind:'ember'}, {label:'Hero moment', kind:'ember'}, {label:'Live'}]}
        summary={<>The signature screen. When a new lead pins their address on the marketing site, an animated pin lands on this map and an incoming-lead sheet rises from the bottom. The contractor's reflex is to tap "Dispatch [tech name]."</>}
        blocks={[
          { title: 'Hero animation (≈ 1.4s total)', list: [
            'Map zooms +1 level, easing toward the new pin',
            'Pin drops from above with a soft bounce + radar pulse around it',
            'Bottom sheet slides up from off-screen, ember pulse on "Live" tag',
            'A dashed route auto-draws from nearest tech to pin (200ms delay)',
            'Soft haptic tick on iOS, vibration tick on Android',
          ] },
          { title: 'Primary action', kv: [
            { k: 'CTA', v: 'Dispatch Jose →' },
            { k: 'Result', v: 'Sheet collapses · pin turns green · push to tech' },
            { k: 'Undo', v: '4-second toast: "Sent to Jose · Undo"' },
          ] },
          { title: 'Tech pins', list: [
            'Initials in circle, color = state (green/idle, yellow/in-route, red/late)',
            'Tap → tech sheet with current job, ETA, last update',
            'Pin radius scales with map zoom (min 28px hit target)',
          ] },
          { title: 'Empty state', text: 'When no leads are live and no techs are out: city skyline silhouette + "All quiet. Iris is listening 24/7."' },
        ]}
        foot={['v1.0', 'Hero', 'Eng est. 5d', 'Real-time WS']}
        mockup={<Phone w={380} h={780} scale={0.9} glow><ScreenLiveMap/></Phone>}
        annotations={[
          { num: 'A1', text: 'Pin pulses + radar ring — only ONE active at a time', x: 24, y: 220 },
          { num: 'A2', text: 'Auto-routed dashed line shows ML-picked nearest tech', x: 24, y: 380 },
          { num: 'A3', text: 'Sheet rises with timer counting up — "every second is money"', x: 24, y: 560 },
        ]}
      />
    </Slide>
  );
}

// 11 · LEAD DETAIL · AI CALL (HERO)
function SlideLeadDetail() {
  return (
    <Slide label="11 Lead detail">
      <SpecPage
        num="11"
        section="Owner · Lead detail ★ HERO"
        title="Iris is on the phone."
        tags={[{label:'Owner', kind:'ember'}, {label:'Hero moment', kind:'ember'}, {label:'Streaming'}]}
        summary={<>The contractor opens an active lead and watches the AI agent qualify the customer in real time. Transcript streams in word-by-word; an animated waveform shows mic activity; auto-extracted fields populate as Iris hears them.</>}
        blocks={[
          { title: 'Live elements', list: [
            'Header pulse: "Live · 00:38" timer counting up',
            'Avatar of Iris breathes (scale 1.0 ↔ 1.03 every 2s)',
            'Waveform bars dance to amplitude (or simulate when WS lags)',
            'Latest line of transcript shows a blinking caret',
          ] },
          { title: 'Auto-extracted fields', kv: [
            { k: 'Issue', v: 'NLP-tagged from caller utterance' },
            { k: 'Urgency', v: 'today / week / scheduled' },
            { k: 'Equipment', v: 'Pulled from past records or extracted' },
            { k: 'Address', v: 'From web pin · confirmed verbally' },
          ] },
          { title: 'After-call states', list: [
            'Booked → green "Booked Wed 2-4 PM" pill, sheet collapses',
            'Voicemail → AI scheduled callback in 5 min',
            'Spam / wrong-number → archived w/ reason',
            'Escalated → "Iris is calling you in 15s — pick up to take over"',
          ] },
        ]}
        foot={['v1.0', 'Hero', 'Eng est. 4d', 'Streaming WS + speech-to-text']}
        mockup={<Phone w={380} h={780} scale={0.9} glow><ScreenLeadDetail/></Phone>}
        annotations={[
          { num: 'A1', text: 'Live pill — only ember thing pulsing on screen', x: 24, y: 90 },
          { num: 'A2', text: 'Waveform feeds real audio amplitude, fallback shimmer if WS drops', x: 24, y: 280 },
          { num: 'A3', text: 'Caret on last bubble = streaming, removed on punctuation', x: 24, y: 480 },
        ]}
      />
    </Slide>
  );
}

// 12 · DASHBOARD (HERO)
function SlideDashboard() {
  return (
    <Slide label="12 Dashboard">
      <SpecPage
        num="12"
        section="Owner · Dashboard ★ HERO"
        title="Money, in motion."
        tags={[{label:'Owner', kind:'ember'}, {label:'Hero moment', kind:'ember'}, {label:'Default home'}]}
        summary={<>The first screen the contractor sees when they open the app. Every element earns its place by answering "is the system making me money right now?"</>}
        blocks={[
          { title: 'Hero card · Revenue today', list: [
            'Big counter ticks up live when invoices clear',
            '"+$1,200 booked 2m ago" toast slides in from the right',
            'Tap → today\'s invoice list, scrolled to most recent',
            'Long-press → switch to Week / Month',
          ] },
          { title: 'Funnel strip', text: 'Leads → AI called → Booked → Paid. Each number is independently tappable. Conversion % between steps shown in ember mono. If any step\'s conversion drops 20% week-over-week → red dot indicator.' },
          { title: 'Speed gauge', list: [
            'Conic-gradient ring shows avg AI response time vs 60s goal',
            'Color shifts from ember (good) to warn to hot if breach',
            'Single most diagnostic metric — the value prop made visible',
          ] },
          { title: 'Hidden / collapsed', text: 'Nothing else. No charts, no team list, no calendar widget. Owner taps tabs to drill in.' },
        ]}
        foot={['v1.0', 'Hero', 'Default tab', 'Eng est. 3d']}
        mockup={<Phone w={380} h={780} scale={0.9} glow><ScreenDashboard/></Phone>}
        annotations={[
          { num: 'A1', text: 'Money is the largest type element on screen. Tabular numerals.', x: 24, y: 240 },
          { num: 'A2', text: 'Funnel uses white space — never feels like an analytics product', x: 24, y: 440 },
          { num: 'A3', text: 'Speed gauge sells the product\'s core promise: under-60s response', x: 24, y: 600 },
        ]}
      />
    </Slide>
  );
}

// 13 · NOTIFICATIONS
function SlideNotifications() {
  return (
    <Slide label="13 Notifications">
      <SpecPage
        num="13"
        section="Owner · Inbox"
        title="One feed. Five event types."
        tags={[{label:'Owner', kind:'ember'}]}
        summary="Single chronological feed for everything the system does on the contractor's behalf. Avoid splitting into tabs — that's enterprise bloat. Filter via the chip row at top instead."
        blocks={[
          { title: 'Event types', kv: [
            { k: 'Lead', v: '🔥 New form / call / web lead' },
            { k: 'AI auto', v: '🤖 Iris booked / called back / qualified' },
            { k: 'Paid', v: '💵 Invoice cleared (always green chip)' },
            { k: 'Watch', v: '⏱ ETA slipping / SLA risk' },
            { k: 'System', v: '🛡 Guarantee progress / billing' },
          ] },
          { title: 'Behaviors', list: [
            'Unread = ember left-glow gradient + dot',
            'Tap → relevant detail screen (lead → lead detail, etc.)',
            'Pull-to-refresh checks for missed events',
            'Swipe left → archive · swipe right → mark read',
          ] },
          { title: 'Empty state', text: '"You\'re caught up. Iris is listening." — small mark + last-seen timestamp.' },
        ]}
        foot={['v1.0', 'Eng est. 2d']}
        mockup={<Phone w={380} h={780} scale={0.9}><ScreenNotifications/></Phone>}
      />
    </Slide>
  );
}

// 14 · AI SETTINGS
function SlideAISettings() {
  return (
    <Slide label="14 AI settings">
      <SpecPage
        num="14"
        section="Owner · Iris configuration"
        title="Configure the agent that closes for you."
        tags={[{label:'Owner', kind:'ember'}, {label:'Power user'}]}
        summary="The AI voice agent is the product's biggest differentiator. This screen has to feel like a power tool — not a settings panel. Every change should preview audibly."
        blocks={[
          { title: 'Editable',  list: [
            'Voice (Iris is default, 4 alternates · ES & EN samples)',
            'Greeting script with {company}, {tech_name}, {city} merge tokens',
            'Pickup speed target — slider 30–120s',
            'Booking window granularity (30/60/120 min)',
            'Escalation rules — phrases, tags, keywords',
            'Hours + after-hours surcharge toggle',
          ] },
          { title: 'Locked / read-only', list: [
            'Languages auto-detect (ES caller → ES agent, no setting)',
            'Hold music',
            'Caller ID display name (driven by business profile)',
          ], kind: 'muted' },
          { title: 'Recent calls', text: 'Inline player for last 10 calls. Tap → transcript + audio scrubber. "Train Iris" button — owner can mark a call as a good/bad outcome to fine-tune.' },
        ]}
        foot={['v1.0', 'Eng est. 4d', 'Voice samples streamed']}
        mockup={<Phone w={380} h={780} scale={0.9}><ScreenAISettings/></Phone>}
      />
    </Slide>
  );
}

// 15 · FOUNDER SLOT (HERO)
function SlideFounder() {
  return (
    <Slide label="15 Founder">
      <SpecPage
        num="15"
        section="Owner · Founder program ★"
        title="Your city is locked."
        tags={[{label:'Owner', kind:'ember'}, {label:'Hero moment', kind:'ember'}, {label:'Trust signal'}]}
        summary={<>The founder program is the marketing site's most distinctive promise — three months of geographic exclusivity. The app must make the contractor <em style={{color:'var(--ember-300)',fontStyle:'normal'}}>feel</em> that they own their city, every time they look.</>}
        blocks={[
          { title: 'Hero card', list: [
            'City name in display weight — visually equivalent to revenue',
            '"Market locked" pill with shield iconography',
            'Countdown to exclusivity end — number ticks daily',
            'Subtle radial glow behind city name',
          ] },
          { title: 'Slot counter', text: 'Shows global founder-slot status (3 of 10 left). The slot the contractor occupies is highlighted ember + pulses. Other contractors\' slots dim to neutral.' },
          { title: 'Billing inline', list: [
            'Plan, setup fee, next charge, payment method — all in this one screen',
            'No separate billing tab; this is the only place money goes out',
            'Receipts auto-emailed; in-app history one tap below',
          ] },
          { title: 'When exclusivity ends', text: 'Card transitions: shield → ⚠ "Renewal window opens in 14 days" with a single CTA: "Renew exclusivity ($297/mo add-on)". Never silently drop them.' },
        ]}
        foot={['v1.0', 'Hero', 'Stripe billing', 'Eng est. 3d']}
        mockup={<Phone w={380} h={780} scale={0.9} glow><ScreenFounder/></Phone>}
      />
    </Slide>
  );
}

// 16 · FJOF
function SlideFJOF() {
  return (
    <Slide label="16 FJOF">
      <SpecPage
        num="16"
        section="Owner · First Job or Free ★"
        title="The trust receipt."
        tags={[{label:'Owner', kind:'ember'}, {label:'Hero moment', kind:'ember'}]}
        summary="The 30-day guarantee is the marketing site's strongest objection-killer. In the app, it becomes a living progress tracker — visible during the first month, then quietly retired."
        blocks={[
          { title: 'During the 30-day window', list: [
            'Big shield + day counter ("Day 6 of 30") · always positive framing',
            'Progress bar in green (not ember — this is reassurance, not action)',
            'Auto-checking checklist of what the system has delivered so far',
            'Footnote: refund policy in plain English + ES',
          ] },
          { title: 'If the window closes WITHOUT first job', list: [
            'Card transforms to "We owe you a refund" + ember CTA "Process refund"',
            'Setup fee returned in 3-5 business days, automatic',
            'Honest follow-up: "Want to keep the platform on at no setup cost?" — rare but possible',
          ] },
          { title: 'After first job booked', list: [
            'Confetti micro-celebration (1.5s, no sound)',
            'Card collapses to small "Guarantee fulfilled · ✓" badge in account',
            'Doesn\'t come back unless they hit 6-month renewal',
          ] },
        ]}
        foot={['v1.0', 'Hero · trust', 'Eng est. 1.5d']}
        mockup={<Phone w={380} h={780} scale={0.9}><ScreenFJOF/></Phone>}
      />
    </Slide>
  );
}

Object.assign(window, {
  SlideComponents, SlideIA, SpecPage,
  SlideOnboarding, SlideLiveMap, SlideLeadDetail, SlideDashboard,
  SlideNotifications, SlideAISettings, SlideFounder, SlideFJOF,
});
