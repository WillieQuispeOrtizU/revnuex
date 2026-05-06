/* Tech screens spec slides + cross-cutting (bilingual, states, notifications, motion, a11y, handoff) */
/* global React, Slide, SpecPage, Phone, ScreenTechToday, ScreenTechJob, ScreenEstimate, ScreenInvoice, ScreenCustomerTrack, Chip */

function SlideTechToday() {
  return <Slide label="17 Tech Today"><SpecPage
    num="17" section="Tech · Today" title="Four jobs. One screen." 
    tags={[{label:'Tech', kind:'info'}, {label:'Default tab'}]}
    summary="The tech opens the app at 7 AM. They see today's run. The active job is unmistakable. Everything else is at-a-glance."
    blocks={[
      { title: 'Layout rules', list: [
        'Active job (NOW) gets ember tint + larger time block',
        'Time blocks use display weight — readable from arm\'s length',
        '"Navigate" CTA on active job only — others reveal it on tap',
        'Earnings strip pulses when a new dollar lands',
      ] },
      { title: 'Quick actions per row', kv: [
        { k: 'Tap', v: 'Open job detail' },
        { k: 'Long press', v: 'Reschedule / hand off' },
        { k: 'Swipe right', v: 'Mark on-site' },
        { k: 'Swipe left', v: 'Reorder day' },
      ] },
      { title: 'Edge', list: ['No jobs today: "Today\'s clear. Next: tomorrow 9 AM" + offer to take open jobs', 'Late jobs: red dot on time block + "8 min behind"'] },
    ]}
    foot={['v1.0', 'Eng est. 2d']}
    mockup={<Phone w={380} h={780} scale={0.9}><ScreenTechToday/></Phone>}
  /></Slide>;
}

function SlideTechJob() {
  return <Slide label="18 Tech Job"><SpecPage
    num="18" section="Tech · Job detail" title="On-site, hands greasy."
    tags={[{label:'Tech', kind:'info'}]}
    summary="Designed for one-thumb operation. The tech has a wrench in the other hand. Hit targets are 48px+ everywhere. No nested menus."
    blocks={[
      { title: 'Quick action grid', text: 'Call · Text · Photo · Note. Always 4 buttons, always in this order. Photo opens straight to the camera; note is voice-to-text by default.' },
      { title: 'Equipment block', list: [
        'Make/model/age pulled from job history',
        'Tap → full equipment record (warranty, past service, manual link)',
        'Long press → start a new equipment record (first-time customer)',
      ] },
      { title: 'Checklist', list: [
        'Linear progress: only one row "active" at a time',
        'Done rows strikethrough + dim',
        'Active row pulses ember',
        'Photos required on certain rows enforce camera open',
      ] },
      { title: 'Bottom CTA', text: 'Always one ember button: the next thing to do (Diagnose → Build estimate → Send to customer → Collect payment).' },
    ]}
    foot={['v1.0', 'Eng est. 3d', 'Offline-capable']}
    mockup={<Phone w={380} h={780} scale={0.9}><ScreenTechJob/></Phone>}
  /></Slide>;
}

function SlideEstimate() {
  return <Slide label="19 Estimate"><SpecPage
    num="19" section="Tech · Estimate builder" title="From diagnosis to dollar in 4 taps."
    tags={[{label:'Tech', kind:'info'}, {label:'AI assisted', kind:'info'}]}
    summary="AI suggests a template based on the issue + 14 similar past jobs. Tech approves, edits, signs over to customer."
    blocks={[
      { title: 'AI template', list: [
        'Suggested at top — info-blue tint, not ember (this is automation, not action)',
        'One tap to accept all four line items',
        'Each item editable inline (qty, price)',
      ] },
      { title: 'Pricing intelligence', text: 'Prices auto-pulled from contractor\'s catalog. Margin alert ember-pulses if a line is below cost. "Used 14× this month" social proof on common items.' },
      { title: 'Sign-off flow', kv: [
        { k: 'Send', v: 'SMS link to customer\'s phone' },
        { k: 'Sign here', v: 'Or hand phone over for live signature' },
        { k: 'Result', v: 'Job state moves to "Approved" → invoice unlocked' },
      ] },
    ]}
    foot={['v1.0', 'Eng est. 3d']}
    mockup={<Phone w={380} h={780} scale={0.9}><ScreenEstimate/></Phone>}
  /></Slide>;
}

function SlideInvoice() {
  return <Slide label="20 Invoice"><SpecPage
    num="20" section="Tech · Payment" title="Tap to pay. Watch revenue tick."
    tags={[{label:'Tech', kind:'info'}, {label:'Stripe Tap to Pay'}]}
    summary="The closing moment of the loop. Multiple methods, but Tap to Pay is the recommended path — fastest in the field."
    blocks={[
      { title: 'Methods (in order)', kv: [
        { k: 'Tap to Pay', v: 'iPhone NFC · 0% extra · 3-second flow' },
        { k: 'Pay link via SMS', v: 'Customer pays from their phone' },
        { k: 'ACH transfer', v: '0.8% fee · 1–2 day settle' },
        { k: 'Cash / check', v: 'Mark as paid manually + photo' },
      ] },
      { title: 'Tap to Pay screen', list: [
        'Pulsing radial NFC indicator (3 expanding rings, 1.4s loop)',
        '"Hold card to back of phone" copy in display size',
        'Status flips: Searching → Reading → Approved (1.5s celebration)',
      ] },
      { title: 'Success state', text: 'Full-screen green checkmark, big "$924 PAID" tabular numerals, "+$924" toast slides up to owner\'s dashboard via push.' },
    ]}
    foot={['v1.0', 'Eng est. 4d', 'Stripe Tap to Pay SDK']}
    mockup={<Phone w={380} h={780} scale={0.9}><ScreenInvoice/></Phone>}
  /></Slide>;
}

function SlideCustomerTrack() {
  return <Slide label="21 Customer track"><SpecPage
    num="21" section="Customer · Track-my-tech" title="No app required."
    tags={[{label:'Customer', kind:'ok'}, {label:'Web link · PWA'}]}
    summary="Customers get an SMS with a link. It opens a lightweight PWA — no install. They see their tech moving, ETA, and can call/text directly."
    blocks={[
      { title: 'Components', list: [
        'Map (top half) — tech pin moves in real time',
        'ETA in display weight — the only number that matters',
        'Tech card: photo, name, rating, tenure',
        'Two buttons: Call (ember) + Text (ghost)',
        'Visit window + reported issue, no edit',
      ] },
      { title: 'States', kv: [
        { k: 'En route', v: 'Ember pulse · live ETA' },
        { k: 'Arriving', v: '< 2 min — banner: "Jose is pulling up"' },
        { k: 'On-site', v: 'ETA replaced with on-site timer' },
        { k: 'Complete', v: 'Receipt + ★ rating prompt' },
      ] },
      { title: 'Reschedule', text: 'One-tap reschedule menu: same window tomorrow / pick a new window / cancel. Cancel triggers Iris callback flow.' },
    ]}
    foot={['v1.0', 'No native install', 'Eng est. 3d']}
    mockup={<Phone w={380} h={780} scale={0.9}><ScreenCustomerTrack/></Phone>}
  /></Slide>;
}

// ─── Cross-cutting ────────────────────────────────────────────
function SlideBilingual() {
  return <Slide label="22 Bilingual" full>
    <div style={{padding:'80px 120px',display:'flex',flexDirection:'column',gap:32,height:'100%'}}>
      <div>
        <div style={{display:'flex',gap:16,marginBottom:8}}><span style={{fontFamily:'Geist Mono,monospace',fontSize:13,color:'var(--ember-500)'}}>22</span><span style={{fontFamily:'Geist Mono,monospace',fontSize:12,color:'var(--ink-2)',letterSpacing:'0.1em',textTransform:'uppercase'}}>Cross-cutting · EN/ES</span></div>
        <h1 style={{fontSize:56,fontWeight:700,letterSpacing:'-0.02em',margin:0}}>Spanish is a peer, not an option.</h1>
        <p style={{fontSize:16,color:'var(--ink-1)',maxWidth:880,marginTop:12}}>~40% of US residential HVAC owner-operators are bilingual or Spanish-dominant. The app must feel native in both languages from day one.</p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:24,flex:1}}>
        <CCCard title="Toggle pattern">
          <p style={{fontSize:13,color:'var(--ink-1)',lineHeight:1.5,margin:0}}>Pill-style EN/ES segmented control top-right of any screen with significant copy. Persisted per-user. Customer-facing PWA auto-detects from device locale.</p>
          <div style={{marginTop:12,padding:3,background:'var(--bg-2)',border:'1px solid var(--line)',borderRadius:99,display:'inline-flex'}}>
            <span style={{padding:'4px 14px',borderRadius:99,background:'var(--ember-500)',color:'#0A0B0D',fontSize:11,fontWeight:700}}>EN</span>
            <span style={{padding:'4px 14px',fontSize:11,color:'var(--ink-2)',fontWeight:600}}>ES</span>
          </div>
        </CCCard>
        <CCCard title="Copy parity">
          <p style={{fontSize:13,color:'var(--ink-1)',lineHeight:1.5,margin:0}}>Spanish is +15-25% longer. Reserve 30% extra width on labels. Never truncate currency. CTAs use imperative voice in both ("Dispatch Jose" / "Despachar a Jose").</p>
          <div style={{marginTop:12,padding:10,background:'var(--bg-2)',borderRadius:8,fontSize:12,fontFamily:'Geist Mono,monospace',color:'var(--ink-1)'}}>
            <div>EN: "Dispatch Jose"</div>
            <div style={{color:'var(--ember-300)'}}>ES: "Despachar a Jose"</div>
          </div>
        </CCCard>
        <CCCard title="AI agent">
          <p style={{fontSize:13,color:'var(--ink-1)',lineHeight:1.5,margin:0}}>Iris detects caller language in &lt; 2s. Switches mid-call if needed. Owner sees the call in their preferred language; transcripts include both.</p>
          <div style={{marginTop:12,padding:10,background:'rgba(79,168,255,0.08)',border:'1px solid rgba(79,168,255,0.25)',borderRadius:8,fontSize:11,color:'var(--info)'}}>auto-detect · zero config</div>
        </CCCard>
      </div>
    </div>
  </Slide>;
}

function CCCard({ title, children }) {
  return <div style={{padding:24,borderRadius:18,background:'var(--bg-1)',border:'1px solid var(--line)',display:'flex',flexDirection:'column'}}>
    <div style={{fontFamily:'Geist Mono,monospace',fontSize:11,color:'var(--ember-300)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:14}}>{title}</div>
    {children}
  </div>;
}

function SlideStates() {
  return <Slide label="23 States" full>
    <div style={{padding:'80px 120px',display:'flex',flexDirection:'column',gap:32,height:'100%'}}>
      <div>
        <div style={{display:'flex',gap:16,marginBottom:8}}><span style={{fontFamily:'Geist Mono,monospace',fontSize:13,color:'var(--ember-500)'}}>23</span><span style={{fontFamily:'Geist Mono,monospace',fontSize:12,color:'var(--ink-2)',letterSpacing:'0.1em',textTransform:'uppercase'}}>Cross-cutting · States</span></div>
        <h1 style={{fontSize:56,fontWeight:700,letterSpacing:'-0.02em',margin:0}}>Empty, loading, error.</h1>
        <p style={{fontSize:16,color:'var(--ink-1)',maxWidth:880,marginTop:12}}>Three states no contractor wants to see. Each one should still earn the brand — never apologetic, never enterprise-flat.</p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24,flex:1}}>
        <StateCard kind="empty" title="Empty" mood="Reassuring" lines={[
          ['Leads (Owner)', '"All quiet. Iris is listening 24/7." Subtle radio-tower glyph + last-seen ts.'],
          ['Today (Tech)', '"Today\'s clear. Next: tomorrow 9 AM." Ember CTA: "Take open job (1.4mi)".'],
          ['Map · no techs', 'City silhouette + "No techs on the road. Clock someone in."'],
        ]}/>
        <StateCard kind="loading" title="Loading" mood="In motion" lines={[
          ['Default', 'Skeleton blocks shimmer (200% offset, 1.6s loop). Never spinners.'],
          ['Live data', 'Ember pulse on the value being fetched, not on the whole card.'],
          ['Map', 'Map renders immediately at last cached zoom; pins fade in.'],
        ]}/>
        <StateCard kind="error" title="Error" mood="Honest" lines={[
          ['Network', '"Can\'t reach the server. We\'re holding your data — try again." Retry CTA.'],
          ['Payment failed', 'Hot tint, NEVER ember. "Card declined · try another method." No blame.'],
          ['Permission', '"Iris needs microphone access to play call recordings. Open settings."'],
        ]}/>
      </div>
      <div style={{padding:'20px 24px',background:'var(--bg-1)',border:'1px solid var(--line)',borderRadius:14,fontSize:14,color:'var(--ink-1)'}}>
        <strong style={{color:'var(--ember-300)'}}>Universal rule:</strong> every empty/error state must offer one tappable action. No dead ends.
      </div>
    </div>
  </Slide>;
}

function StateCard({ kind, title, mood, lines }) {
  const colors = { empty: 'var(--ink-2)', loading: 'var(--info)', error: 'var(--hot)' };
  return <div style={{padding:20,borderRadius:18,background:'var(--bg-1)',border:'1px solid var(--line)'}}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginBottom:14}}>
      <div style={{fontFamily:'Geist Mono,monospace',fontSize:11,color:colors[kind],letterSpacing:'0.1em',textTransform:'uppercase'}}>{title}</div>
      <div style={{fontSize:11,color:'var(--ink-2)',fontStyle:'italic'}}>{mood}</div>
    </div>
    <div style={{display:'flex',flexDirection:'column',gap:12}}>
      {lines.map(([k,v],i)=>(
        <div key={i}>
          <div style={{fontSize:12,fontWeight:600,marginBottom:3}}>{k}</div>
          <div style={{fontSize:12,color:'var(--ink-2)',lineHeight:1.5}}>{v}</div>
        </div>
      ))}
    </div>
  </div>;
}

function SlidePush() {
  const items = [
    { type:'Lead', en:'🔥 New urgent lead — Maria H., 1.2 mi from Jose', es:'🔥 Lead urgente — Maria H., 1.2 mi de Jose', tap:'Lead detail · live AI call' },
    { type:'Booked', en:'✅ Iris booked Wed 2-4 PM · J. Wong · $1,684', es:'✅ Iris agendó Mié 2-4 PM · J. Wong · $1,684', tap:'Job detail (scheduled)' },
    { type:'Paid',  en:'💵 +$924 just paid — INV-2841 · Maria H.', es:'💵 +$924 pagado — FAC-2841 · Maria H.', tap:'Revenue tab, scrolled to entry' },
    { type:'ETA',   en:'⏱ Jose is 8 min behind on Job #2840', es:'⏱ Jose va 8 min retrasado en Trabajo #2840', tap:'Tech card on map' },
    { type:'Iris',  en:'📞 Missed call — Iris is calling back in 30s', es:'📞 Llamada perdida — Iris devuelve en 30s', tap:'Live AI call' },
    { type:'Slot',  en:'🛡 Founder slot reserved · Austin TX is yours', es:'🛡 Plaza fundador reservada · Austin TX es tuya', tap:'Founder card' },
    { type:'FJOF',  en:'🎉 First job booked — guarantee fulfilled', es:'🎉 Primer trabajo · garantía cumplida', tap:'FJOF card' },
  ];
  return <Slide label="24 Push" full>
    <div style={{padding:'80px 120px',display:'flex',flexDirection:'column',gap:24,height:'100%'}}>
      <div>
        <div style={{display:'flex',gap:16,marginBottom:8}}><span style={{fontFamily:'Geist Mono,monospace',fontSize:13,color:'var(--ember-500)'}}>24</span><span style={{fontFamily:'Geist Mono,monospace',fontSize:12,color:'var(--ink-2)',letterSpacing:'0.1em',textTransform:'uppercase'}}>Cross-cutting · Push</span></div>
        <h1 style={{fontSize:56,fontWeight:700,letterSpacing:'-0.02em',margin:0}}>Push copy patterns</h1>
        <p style={{fontSize:16,color:'var(--ink-1)',maxWidth:880,marginTop:12}}>Every push must lead with a money or action verb. Emoji as a glanceable category, not decoration. ≤ 60 chars.</p>
      </div>
      <div style={{flex:1,overflow:'auto'}}>
        <div style={{background:'var(--bg-1)',border:'1px solid var(--line)',borderRadius:16,overflow:'hidden'}}>
          <div style={{display:'grid',gridTemplateColumns:'80px 1fr 1fr 240px',padding:'14px 20px',borderBottom:'1px solid var(--line)',fontFamily:'Geist Mono,monospace',fontSize:11,color:'var(--ink-2)',letterSpacing:'0.1em',textTransform:'uppercase'}}>
            <div>Type</div><div>EN</div><div>ES</div><div>Deep link</div>
          </div>
          {items.map((p,i)=>(
            <div key={i} style={{display:'grid',gridTemplateColumns:'80px 1fr 1fr 240px',padding:'14px 20px',borderBottom:i<items.length-1?'1px solid var(--line-soft)':'none',fontSize:13,alignItems:'center',gap:16}}>
              <div><Chip color={p.type==='Paid'?'ok':p.type==='ETA'?'warn':p.type==='Iris'?'info':'ember'}>{p.type}</Chip></div>
              <div style={{color:'var(--ink-0)'}}>{p.en}</div>
              <div style={{color:'var(--ink-1)'}}>{p.es}</div>
              <div style={{fontFamily:'Geist Mono,monospace',fontSize:11,color:'var(--ink-2)'}}>{p.tap}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Slide>;
}

function SlideMotionA11y() {
  return <Slide label="25 Motion + a11y" full>
    <div style={{padding:'80px 120px',display:'flex',flexDirection:'column',gap:32,height:'100%'}}>
      <div>
        <div style={{display:'flex',gap:16,marginBottom:8}}><span style={{fontFamily:'Geist Mono,monospace',fontSize:13,color:'var(--ember-500)'}}>25</span><span style={{fontFamily:'Geist Mono,monospace',fontSize:12,color:'var(--ink-2)',letterSpacing:'0.1em',textTransform:'uppercase'}}>Cross-cutting · Motion + a11y</span></div>
        <h1 style={{fontSize:56,fontWeight:700,letterSpacing:'-0.02em',margin:0}}>How it moves. How it reads.</h1>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:32,flex:1}}>
        <div style={{padding:24,background:'var(--bg-1)',border:'1px solid var(--line)',borderRadius:18,display:'flex',flexDirection:'column',gap:16}}>
          <div style={{fontFamily:'Geist Mono,monospace',fontSize:11,color:'var(--ember-300)',letterSpacing:'0.1em',textTransform:'uppercase'}}>Motion</div>
          <ul className="prd-list">
            <li><strong style={{color:'var(--ink-0)'}}>Durations.</strong> Fast 140ms (taps), Base 240ms (sheets), Slow 420ms (page transitions). Never longer than 600ms.</li>
            <li><strong style={{color:'var(--ink-0)'}}>Easing.</strong> ease-out for entries (snappy in), ease-in for exits. Spring (cubic-bezier 0.34, 1.56, 0.64, 1) for celebrations only.</li>
            <li><strong style={{color:'var(--ink-0)'}}>Pulse.</strong> 1.6s ember pulse on live items. Never more than 2 pulsing items per screen.</li>
            <li><strong style={{color:'var(--ink-0)'}}>Counters.</strong> Tabular numerals tween between values over 600ms with count-up easing.</li>
            <li><strong style={{color:'var(--ink-0)'}}>Map.</strong> Pin drop = 480ms ease-out + 1 bounce. Route draw = 800ms strokeDashoffset.</li>
            <li><strong style={{color:'var(--ink-0)'}}>Haptics.</strong> Light tick on dispatch, success on payment, warning on SLA breach.</li>
            <li><strong style={{color:'var(--ink-0)'}}>Reduced motion.</strong> Respect prefers-reduced-motion: pulses become static dots, transitions become opacity fades.</li>
          </ul>
        </div>
        <div style={{padding:24,background:'var(--bg-1)',border:'1px solid var(--line)',borderRadius:18,display:'flex',flexDirection:'column',gap:16}}>
          <div style={{fontFamily:'Geist Mono,monospace',fontSize:11,color:'var(--ember-300)',letterSpacing:'0.1em',textTransform:'uppercase'}}>Accessibility</div>
          <ul className="prd-list">
            <li><strong style={{color:'var(--ink-0)'}}>Contrast.</strong> Body text on bg-0 hits WCAG AA (7.1:1). Ember on bg-0 = AAA for large text.</li>
            <li><strong style={{color:'var(--ink-0)'}}>Hit targets.</strong> 44×44 minimum, 48×48 for tech screens (gloves, sweat).</li>
            <li><strong style={{color:'var(--ink-0)'}}>Screen reader.</strong> Every icon-only button gets aria-label. Live regions on incoming-lead sheet, AI transcript, payment status.</li>
            <li><strong style={{color:'var(--ink-0)'}}>Focus order.</strong> Sheets trap focus; back chevron is always first focusable.</li>
            <li><strong style={{color:'var(--ink-0)'}}>Color independence.</strong> Status uses icon + color, never color alone (paid = ✓ + green, urgent = pulse + dot + red).</li>
            <li><strong style={{color:'var(--ink-0)'}}>Dynamic type.</strong> Support iOS up to XXL, Android up to 1.3×. Cards reflow vertically.</li>
            <li><strong style={{color:'var(--ink-0)'}}>Voice control.</strong> All primary CTAs have spoken labels matching button text.</li>
          </ul>
        </div>
      </div>
    </div>
  </Slide>;
}

function SlideHandoff() {
  return <Slide label="26 Handoff" full>
    <div style={{padding:'80px 120px',display:'flex',flexDirection:'column',gap:32,height:'100%'}}>
      <div>
        <div style={{display:'flex',gap:16,marginBottom:8}}><span style={{fontFamily:'Geist Mono,monospace',fontSize:13,color:'var(--ember-500)'}}>26</span><span style={{fontFamily:'Geist Mono,monospace',fontSize:12,color:'var(--ink-2)',letterSpacing:'0.1em',textTransform:'uppercase'}}>Cross-cutting · Handoff</span></div>
        <h1 style={{fontSize:56,fontWeight:700,letterSpacing:'-0.02em',margin:0}}>What the cloud designer needs to deliver.</h1>
        <p style={{fontSize:16,color:'var(--ink-1)',maxWidth:880,marginTop:12}}>Concrete checklist. Anything not on this list is not in v1.</p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:24,flex:1}}>
        <HandoffCol title="Must ship · v1" items={[
          'Onboarding 4 screens (Welcome → OTP → Market → AI setup)',
          'Owner: Dispatch map (★ hero, full motion spec)',
          'Owner: Lead detail w/ live AI call (★ hero)',
          'Owner: Revenue dashboard (★ hero, default tab)',
          'Owner: Notifications inbox',
          'Owner: AI agent settings',
          'Owner: Founder slot + billing (★)',
          'Owner: First Job or Free tracker (★)',
          'Tech: Today, Job detail, Estimate, Invoice',
          'Customer: track-my-tech PWA',
          'EN + ES copy decks',
          'Empty / loading / error per screen',
        ]} kind="ember"/>
        <HandoffCol title="Deliverables format" items={[
          'Figma file with 1 page per section here',
          'Components library with the 6 surfaces in §07',
          '2 themes: dark (default) — light only if v2',
          'Lottie for: pin drop, payment success, FJOF confetti',
          'Push copy CSV (EN/ES), routing keys',
          'Icon set as SVG — 2px stroke, 24px frame',
          'Spec annotations on all hero screens',
          'Prototype links: 3 hero flows clickable',
        ]}/>
        <HandoffCol title="Out of scope · v2" items={[
          'Multi-company workspaces',
          'Light mode',
          'Apple Watch / Wear OS',
          'Inventory / parts purchasing',
          'Customer self-serve booking from PWA',
          'Marketing analytics tab',
          'Team chat / internal messaging',
          'Custom AI voice training UI',
        ]} kind="muted"/>
      </div>
      <div style={{padding:'20px 28px',borderRadius:14,background:'linear-gradient(90deg, rgba(255,106,26,0.10), rgba(255,106,26,0.02))',border:'1px solid rgba(255,106,26,0.3)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div>
          <div style={{fontFamily:'Geist Mono,monospace',fontSize:11,color:'var(--ember-300)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:4}}>One last thing</div>
          <div style={{fontSize:18,fontWeight:600}}>If a screen doesn't make money visibly move, ask if it should exist.</div>
        </div>
        <div style={{fontFamily:'Geist Mono,monospace',fontSize:11,color:'var(--ink-2)'}}>— Diego</div>
      </div>
    </div>
  </Slide>;
}

function HandoffCol({ title, items, kind }) {
  return <div style={{padding:24,borderRadius:18,background:'var(--bg-1)',border:'1px solid var(--line)'}}>
    <div style={{fontFamily:'Geist Mono,monospace',fontSize:11,color:kind==='ember'?'var(--ember-300)':kind==='muted'?'var(--ink-3)':'var(--info)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:14}}>{title}</div>
    <ul className={`prd-list ${kind==='muted'?'muted':''}`} style={{gap:8}}>
      {items.map((x,i)=><li key={i} style={{fontSize:13,lineHeight:1.45}}>{x}</li>)}
    </ul>
  </div>;
}

Object.assign(window, {
  SlideTechToday, SlideTechJob, SlideEstimate, SlideInvoice, SlideCustomerTrack,
  SlideBilingual, SlideStates, SlidePush, SlideMotionA11y, SlideHandoff,
});
