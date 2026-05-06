/* Tech screens: Today, Job detail + checklist, Estimate builder, Invoice/payment, Customer track */
/* global React, StatusBar, HomeIndicator, TabBar, Mark, Chip, MoneyTicker */

// ═══════════════════════════════════════════════════════════════
// TECH — TODAY (job list)
// ═══════════════════════════════════════════════════════════════
function ScreenTechToday() {
  const jobs = [
    { time: 'NOW', addr: '2204 Bouldin Ave', cust: 'Maria H.', issue: 'AC not cooling', dist: '1.2 mi', status: 'enroute', urgent: true },
    { time: '11:30', addr: '410 W Live Oak', cust: 'R. Patel', issue: 'Capacitor + freon', dist: '3.4 mi' },
    { time: '2:00',  addr: '88 Bluebonnet Ln', cust: 'J. Wong', issue: 'Maintenance', dist: '5.1 mi' },
    { time: '4:00',  addr: '512 Oltorf St', cust: 'S. Diaz', issue: 'No heat (?)', dist: '2.8 mi' },
  ];
  return (
    <div style={{ background: 'var(--bg-0)', height: '100%', overflow: 'hidden', position: 'relative' }}>
      <StatusBar />
      <div style={{ padding: '8px 20px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <div style={{ fontSize: 13, color: 'var(--ink-2)' }}>Wed Apr 30 · Jose M.</div>
          <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em' }}>4 jobs today</div>
        </div>
        <Chip color="ok">Clocked in</Chip>
      </div>

      {/* Earnings strip */}
      <div style={{ margin: '0 16px 14px', padding: '12px 16px', background: 'var(--bg-1)', border: '1px solid var(--line)', borderRadius: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 10, color: 'var(--ink-2)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em' }}>Today's est. earnings</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 2 }}>
            <span style={{ fontSize: 22, fontWeight: 700, fontFamily: 'var(--font-display)' }}>$5,840</span>
            <span style={{ fontSize: 11, color: 'var(--ok)' }}>+$1,200 just added</span>
          </div>
        </div>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: 'var(--bg-2)', display: 'grid', placeItems: 'center' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 17l6-6 4 4 8-8M14 7h7v7"/></svg>
        </div>
      </div>

      {/* Jobs list */}
      <div style={{ padding: '0 12px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {jobs.map((j, i) => (
          <div key={i} style={{
            padding: 14,
            background: j.urgent ? 'linear-gradient(90deg, rgba(255,106,26,0.10), var(--bg-1) 60%)' : 'var(--bg-1)',
            border: `1px solid ${j.urgent ? 'rgba(255,106,26,0.35)' : 'var(--line)'}`,
            borderRadius: 16,
            display: 'flex', gap: 14, alignItems: 'center',
            position: 'relative',
          }}>
            <div style={{
              width: 56, padding: '8px 0', borderRadius: 10,
              background: j.urgent ? 'var(--ember-500)' : 'var(--bg-2)',
              color: j.urgent ? '#0A0B0D' : 'var(--ink-0)',
              textAlign: 'center', fontWeight: 700,
              fontSize: j.time === 'NOW' ? 12 : 16,
              fontFamily: j.time === 'NOW' ? 'var(--font-mono)' : 'var(--font-display)',
              letterSpacing: j.time === 'NOW' ? '0.1em' : '-0.02em',
            }}>{j.time}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink-0)' }}>{j.cust}</div>
              <div style={{ fontSize: 12, color: 'var(--ink-1)', marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{j.issue} · {j.addr}</div>
              <div style={{ fontSize: 11, color: 'var(--ink-2)', marginTop: 4, fontFamily: 'var(--font-mono)' }}>{j.dist}</div>
            </div>
            {j.status === 'enroute' && (
              <button style={{
                padding: '8px 14px', borderRadius: 10,
                background: 'var(--ember-500)', color: '#0A0B0D',
                border: 'none', fontSize: 12, fontWeight: 700,
              }}>Navigate</button>
            )}
          </div>
        ))}
      </div>

      <TabBar active="today" role="tech" />
      <HomeIndicator />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// TECH — JOB DETAIL + ON-SITE CHECKLIST
// ═══════════════════════════════════════════════════════════════
function ScreenTechJob() {
  return (
    <div style={{ background: 'var(--bg-0)', height: '100%', overflow: 'hidden', position: 'relative' }}>
      <StatusBar />
      {/* Top bar */}
      <div style={{ padding: '8px 16px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ width: 36, height: 36, borderRadius: 99, background: 'var(--bg-2)', display: 'grid', placeItems: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
        </div>
        <Chip color="ember" pulse>On-site</Chip>
        <div style={{ width: 36, height: 36, borderRadius: 99, background: 'var(--bg-2)', display: 'grid', placeItems: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
        </div>
      </div>

      {/* Customer block */}
      <div style={{ padding: '0 20px 14px' }}>
        <div style={{ fontSize: 13, color: 'var(--ink-2)' }}>Job #2841</div>
        <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em' }}>Maria Hernández</div>
        <div style={{ fontSize: 13, color: 'var(--ink-1)', marginTop: 2 }}>2204 Bouldin Ave · AC not cooling</div>
        {/* big quick actions */}
        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <QuickBtn label="Call" icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M3 5a2 2 0 012-2h2.5l2 5-2.5 1.5a11 11 0 005.5 5.5l1.5-2.5 5 2V17a2 2 0 01-2 2A16 16 0 013 5z"/></svg>}/>
          <QuickBtn label="Text" icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M3 5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H8l-5 4z"/></svg>}/>
          <QuickBtn label="Photo" icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="3" y="6" width="18" height="14" rx="2"/><circle cx="12" cy="13" r="3"/><path d="M9 6l1.5-2h3L15 6"/></svg>}/>
          <QuickBtn label="Note" icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 2L4 6v6c0 5 3 9 8 10 5-1 8-5 8-10V6z"/></svg>}/>
        </div>
      </div>

      {/* Equipment */}
      <div style={{ margin: '0 16px 12px', padding: 14, background: 'var(--bg-1)', border: '1px solid var(--line)', borderRadius: 14 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--ink-2)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>Equipment on file</div>
        <div style={{ fontSize: 14, fontWeight: 600 }}>Carrier 24ABB6 · 3-ton split</div>
        <div style={{ fontSize: 12, color: 'var(--ink-2)', marginTop: 2 }}>Installed 2014 · last service 2024-08-12 (capacitor)</div>
      </div>

      {/* Checklist */}
      <div style={{ padding: '0 16px' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-2)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10, padding: '0 4px' }}>On-site checklist</div>
        <div style={{ background: 'var(--bg-1)', border: '1px solid var(--line)', borderRadius: 16, overflow: 'hidden' }}>
          <CheckRow done text="Greet customer & confirm issue" />
          <CheckRow done text="Photo: thermostat reading" />
          <CheckRow active text="Diagnose: refrigerant + capacitor" />
          <CheckRow text="Photo: condenser unit" />
          <CheckRow text="Build estimate" />
          <CheckRow text="Customer signature" last />
        </div>
      </div>

      {/* Big CTA */}
      <div style={{ position: 'absolute', bottom: 30, left: 16, right: 16 }}>
        <button style={{
          width: '100%', height: 56, borderRadius: 16, border: 'none',
          background: 'var(--ember-500)', color: '#0A0B0D',
          fontSize: 16, fontWeight: 700,
          boxShadow: '0 12px 32px rgba(255,106,26,0.4), inset 0 1px 0 rgba(255,255,255,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>Build estimate <span>→</span></button>
      </div>
      <HomeIndicator />
    </div>
  );
}

function QuickBtn({ label, icon }) {
  return (
    <div style={{
      flex: 1, padding: '12px 0', borderRadius: 12,
      background: 'var(--bg-1)', border: '1px solid var(--line)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
      color: 'var(--ink-0)',
    }}>
      {icon}
      <span style={{ fontSize: 11, fontWeight: 600 }}>{label}</span>
    </div>
  );
}

function CheckRow({ done, active, text, last }) {
  return (
    <div style={{
      padding: '14px 16px',
      display: 'flex', alignItems: 'center', gap: 12,
      borderBottom: last ? 'none' : '1px solid var(--line-soft)',
      background: active ? 'rgba(255,106,26,0.06)' : 'transparent',
    }}>
      <div style={{
        width: 22, height: 22, borderRadius: 99,
        background: done ? 'var(--ok)' : active ? 'var(--ember-500)' : 'var(--bg-3)',
        border: active ? 'none' : 'none',
        display: 'grid', placeItems: 'center',
        animation: active ? 'pulse-ember 2s infinite' : 'none',
      }}>
        {done && <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#0A0B0D" strokeWidth="2.5"><path d="M2 6l3 3 5-7"/></svg>}
        {active && <span style={{ width: 6, height: 6, borderRadius: 99, background: '#0A0B0D' }}/>}
      </div>
      <span style={{
        fontSize: 14,
        color: done ? 'var(--ink-2)' : 'var(--ink-0)',
        fontWeight: active ? 600 : 400,
        textDecoration: done ? 'line-through' : 'none',
      }}>{text}</span>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// ESTIMATE BUILDER
// ═══════════════════════════════════════════════════════════════
function ScreenEstimate() {
  const items = [
    { name: 'Diagnostic visit', price: 89 },
    { name: 'Capacitor (45/5 MFD)', price: 245 },
    { name: 'Refrigerant R-410A · 2 lb', price: 320 },
    { name: 'Labor · 1.5 hr', price: 270 },
  ];
  const total = items.reduce((a, i) => a + i.price, 0);
  return (
    <div style={{ background: 'var(--bg-0)', height: '100%', overflow: 'hidden', position: 'relative' }}>
      <StatusBar />
      <div style={{ padding: '8px 16px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 13, color: 'var(--ink-2)' }}>Job #2841</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-2)', letterSpacing: '0.06em' }}>EST-1142</span>
      </div>
      <div style={{ padding: '0 20px 16px' }}>
        <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.02em' }}>Estimate</div>
        <div style={{ fontSize: 13, color: 'var(--ink-1)', marginTop: 2 }}>Maria H. · 2204 Bouldin Ave</div>
      </div>

      {/* Suggested template */}
      <div style={{
        margin: '0 16px 14px', padding: 12,
        background: 'rgba(79,168,255,0.08)', border: '1px solid rgba(79,168,255,0.25)',
        borderRadius: 12, display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--info)"><circle cx="12" cy="12" r="10"/><path d="M12 7v6M12 16v.5" stroke="#0A0B0D" strokeWidth="2" strokeLinecap="round"/></svg>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, fontWeight: 600 }}>AI suggested: AC won't cool · capacitor + freon</div>
          <div style={{ fontSize: 11, color: 'var(--ink-2)' }}>From 14 similar jobs · 4 line items pre-filled</div>
        </div>
      </div>

      {/* Line items */}
      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {items.map((it, i) => (
          <div key={i} style={{
            padding: '14px 16px',
            background: 'var(--bg-1)', border: '1px solid var(--line)',
            borderRadius: 12,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <span style={{ fontSize: 14, color: 'var(--ink-0)' }}>{it.name}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 600 }}>${it.price}</span>
          </div>
        ))}
        <button style={{
          padding: '12px 16px', borderRadius: 12,
          background: 'transparent', border: '1px dashed var(--line)',
          color: 'var(--ember-300)', fontSize: 13, fontWeight: 600,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        }}>+ Add line item</button>
      </div>

      {/* Total + CTA */}
      <div style={{ position: 'absolute', bottom: 30, left: 16, right: 16 }}>
        <div style={{
          padding: 16, background: 'var(--bg-1)', border: '1px solid var(--line)',
          borderRadius: 16, marginBottom: 10,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <span style={{ fontSize: 13, color: 'var(--ink-2)' }}>Total · taxes incl.</span>
          <MoneyTicker value={total.toLocaleString()} size={28} />
        </div>
        <button style={{
          width: '100%', height: 56, borderRadius: 16, border: 'none',
          background: 'var(--ember-500)', color: '#0A0B0D',
          fontSize: 16, fontWeight: 700,
          boxShadow: '0 12px 32px rgba(255,106,26,0.4), inset 0 1px 0 rgba(255,255,255,0.3)',
        }}>Send to Maria · sign on phone</button>
      </div>
      <HomeIndicator />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// INVOICE + PAYMENT
// ═══════════════════════════════════════════════════════════════
function ScreenInvoice() {
  return (
    <div style={{ background: 'var(--bg-0)', height: '100%', overflow: 'hidden', position: 'relative' }}>
      <StatusBar />
      <div style={{ padding: '8px 16px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 13, color: 'var(--ink-2)' }}>Invoice INV-2841</span>
        <Chip color="ok" pulse>Approved by customer</Chip>
      </div>

      <div style={{ padding: '0 20px 16px' }}>
        <div style={{ fontSize: 13, color: 'var(--ink-2)' }}>Collect payment</div>
        <MoneyTicker value="924" size={56} />
      </div>

      {/* Pay methods */}
      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <PayRow icon="card" title="Tap to pay (NFC)" sub="iPhone reads chip card or phone" recommended />
        <PayRow icon="link" title="Send pay link via SMS" sub="Maria pays from her phone" />
        <PayRow icon="ach" title="ACH bank transfer" sub="0.8% fee · 1–2 days" />
        <PayRow icon="cash" title="Cash / check" sub="Mark as paid manually" />
      </div>

      {/* Tap to pay illustration */}
      <div style={{
        margin: '20px 16px 0', padding: 28,
        background: 'linear-gradient(180deg, rgba(255,106,26,0.10), transparent)',
        border: '1px solid rgba(255,106,26,0.25)',
        borderRadius: 20, textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          width: 96, height: 96, margin: '0 auto 12px', borderRadius: 99,
          background: 'radial-gradient(circle, rgba(255,106,26,0.4), transparent 70%)',
          display: 'grid', placeItems: 'center', position: 'relative',
        }}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="var(--ember-500)" strokeWidth="3" strokeLinecap="round">
            <path d="M16 24 a8 8 0 0116 0"/>
            <path d="M10 24 a14 14 0 0128 0"/>
            <path d="M22 24 a2 2 0 014 0"/>
          </svg>
        </div>
        <div style={{ fontSize: 16, fontWeight: 700 }}>Hold card to back of phone</div>
        <div style={{ fontSize: 12, color: 'var(--ink-2)', marginTop: 4 }}>Searching for card…</div>
      </div>

      <HomeIndicator />
    </div>
  );
}

function PayRow({ icon, title, sub, recommended }) {
  const icons = {
    card: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M2 11h20"/></svg>,
    link: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1"/></svg>,
    ach: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M5 21V10M9 21V10M15 21V10M19 21V10M2 10l10-7 10 7"/></svg>,
    cash: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/></svg>,
  };
  return (
    <div style={{
      padding: 14,
      background: recommended ? 'linear-gradient(90deg, rgba(255,106,26,0.06), var(--bg-1) 60%)' : 'var(--bg-1)',
      border: `1px solid ${recommended ? 'rgba(255,106,26,0.3)' : 'var(--line)'}`,
      borderRadius: 14,
      display: 'flex', alignItems: 'center', gap: 14,
    }}>
      <div style={{
        width: 40, height: 40, borderRadius: 10,
        background: recommended ? 'rgba(255,106,26,0.15)' : 'var(--bg-2)',
        color: recommended ? 'var(--ember-300)' : 'var(--ink-1)',
        display: 'grid', placeItems: 'center',
      }}>{icons[icon]}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 600 }}>{title}</div>
        <div style={{ fontSize: 12, color: 'var(--ink-2)', marginTop: 2 }}>{sub}</div>
      </div>
      {recommended && <Chip color="ember">Fastest</Chip>}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// CUSTOMER — TRACK MY TECH
// ═══════════════════════════════════════════════════════════════
function ScreenCustomerTrack() {
  return (
    <div style={{ background: 'var(--bg-0)', height: '100%', overflow: 'hidden', position: 'relative' }}>
      <StatusBar />
      {/* Mini map up top */}
      <div style={{ height: 320, position: 'relative', background: 'var(--map-bg)', borderBottom: '1px solid var(--line)' }}>
        <svg width="100%" height="100%" viewBox="0 0 380 320" preserveAspectRatio="xMidYMid slice">
          <rect width="100%" height="100%" fill="#0E1115"/>
          <g stroke="#1F242C" strokeWidth="5" fill="none" strokeLinecap="round">
            <path d="M-20 100 L 420 130"/>
            <path d="M-20 220 L 420 200"/>
            <path d="M120 -20 L 100 340"/>
          </g>
          <g stroke="#161A20" strokeWidth="2.5" fill="none">
            <path d="M-20 60 L 420 80"/>
            <path d="M280 -20 L 320 340"/>
          </g>
          {/* route */}
          <path d="M70 80 Q 150 130, 220 200" stroke="var(--ember-500)" strokeWidth="3" fill="none" strokeDasharray="6 4"/>
        </svg>
        {/* tech pin */}
        <div style={{ position: 'absolute', left: 70, top: 80, transform: 'translate(-50%,-50%)' }}>
          <div style={{
            width: 44, height: 44, borderRadius: 99,
            background: 'var(--ember-500)', display: 'grid', placeItems: 'center',
            border: '3px solid white', boxShadow: '0 4px 16px rgba(0,0,0,0.5)',
            fontSize: 12, fontWeight: 700, color: '#0A0B0D',
          }}>JM</div>
        </div>
        {/* home pin */}
        <div style={{ position: 'absolute', left: 220, top: 200, transform: 'translate(-50%,-100%)' }}>
          <svg width="32" height="42" viewBox="0 0 32 42">
            <path d="M16 0 C 7 0 0 7 0 16 c0 12 16 26 16 26 s16-14 16-26 C32 7 25 0 16 0z" fill="var(--ok)" stroke="white" strokeWidth="2"/>
            <path d="M11 18 L16 13 L21 18 V25 H11z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* ETA card */}
      <div style={{ padding: '20px 20px 16px' }}>
        <div style={{ fontSize: 13, color: 'var(--ink-2)' }}>Your technician</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 4 }}>
          <span style={{ fontSize: 32, fontWeight: 800, fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>8 min</span>
          <Chip color="ember" pulse>En route</Chip>
        </div>
      </div>

      {/* Tech card */}
      <div style={{
        margin: '0 16px 14px', padding: 14,
        background: 'var(--bg-1)', border: '1px solid var(--line)',
        borderRadius: 16, display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <div style={{
          width: 52, height: 52, borderRadius: 99,
          background: 'linear-gradient(135deg, #FF8A3A, #C43E04)',
          display: 'grid', placeItems: 'center',
          fontSize: 18, fontWeight: 700, color: 'white',
        }}>JM</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 15, fontWeight: 600 }}>Jose M.</div>
          <div style={{ fontSize: 12, color: 'var(--ink-2)' }}>★ 4.9 · 12 yrs experience</div>
        </div>
        <button style={{ width: 40, height: 40, borderRadius: 99, background: 'var(--ember-500)', border: 'none', display: 'grid', placeItems: 'center' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A0B0D" strokeWidth="2.5"><path d="M3 5a2 2 0 012-2h2.5l2 5-2.5 1.5a11 11 0 005.5 5.5l1.5-2.5 5 2V17a2 2 0 01-2 2A16 16 0 013 5z"/></svg>
        </button>
        <button style={{ width: 40, height: 40, borderRadius: 99, background: 'var(--bg-2)', border: '1px solid var(--line)', display: 'grid', placeItems: 'center' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M3 5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H8l-5 4z"/></svg>
        </button>
      </div>

      {/* Job summary */}
      <div style={{ padding: '0 16px' }}>
        <div style={{ padding: 14, background: 'var(--bg-1)', border: '1px solid var(--line)', borderRadius: 14 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--ink-2)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Visit window</div>
          <div style={{ fontSize: 14, fontWeight: 600, marginTop: 2 }}>Today · 2:00 — 4:00 PM</div>
          <div style={{ height: 1, background: 'var(--line-soft)', margin: '12px 0' }}/>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--ink-2)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Issue</div>
          <div style={{ fontSize: 14, fontWeight: 600, marginTop: 2 }}>AC not cooling · upstairs</div>
        </div>
      </div>

      <HomeIndicator />
    </div>
  );
}

Object.assign(window, { ScreenTechToday, ScreenTechJob, ScreenEstimate, ScreenInvoice, ScreenCustomerTrack });
