/* Owner screens: Live map, Lead detail, Dashboard, Notifications, AI settings, Founder */
/* global React, StatusBar, HomeIndicator, TabBar, Mark, Chip, MoneyTicker, MapBg, Waveform */

// ═══════════════════════════════════════════════════════════════
// LIVE MAP / DISPATCH
// ═══════════════════════════════════════════════════════════════
function ScreenLiveMap() {
  return (
    <>
      <StatusBar />
      <MapBg />
      {/* Top header overlay */}
      <div style={{
        position: 'absolute', top: 50, left: 0, right: 0,
        padding: '12px 16px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        zIndex: 10,
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '10px 14px',
          background: 'rgba(17,19,23,0.85)',
          backdropFilter: 'blur(20px)',
          border: '1px solid var(--line)',
          borderRadius: 99,
        }}>
          <span style={{ width: 8, height: 8, borderRadius: 99, background: 'var(--ok)', animation: 'pulse-ok 2s infinite' }} />
          <span style={{ fontSize: 13, fontWeight: 600 }}>Austin TX</span>
          <span style={{ fontSize: 11, color: 'var(--ink-2)' }}>· 4 techs live</span>
        </div>
        <div style={{
          width: 40, height: 40, borderRadius: 99,
          background: 'rgba(17,19,23,0.85)',
          backdropFilter: 'blur(20px)',
          border: '1px solid var(--line)',
          display: 'grid', placeItems: 'center',
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
        </div>
      </div>

      {/* Tech pins */}
      <Pin x={70} y={250} status="ok" label="JM" />
      <Pin x={210} y={310} status="ok" label="RT" />
      <Pin x={140} y={450} status="warn" label="LK" />
      <Pin x={290} y={520} status="ok" label="DV" />

      {/* Lead pin (active, animated) */}
      <LeadPin x={185} y={380} />

      {/* Active routes */}
      <svg style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 5 }} width="380" height="800">
        <path d="M70 250 Q 130 320, 185 380" stroke="var(--ok)" strokeWidth="2" strokeDasharray="4 4" fill="none" opacity="0.5"/>
      </svg>

      {/* Bottom sheet — incoming lead */}
      <div style={{
        position: 'absolute', bottom: 90, left: 12, right: 12,
        background: 'rgba(17,19,23,0.94)',
        backdropFilter: 'blur(20px)',
        border: '1px solid var(--line)',
        borderRadius: 24,
        padding: 16,
        zIndex: 20,
        boxShadow: '0 24px 60px rgba(0,0,0,0.6)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 8, height: 8, borderRadius: 99, background: 'var(--ember-500)', animation: 'pulse-ember 1.4s infinite' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ember-300)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Incoming · live</span>
          </div>
          <span style={{ fontSize: 11, color: 'var(--ink-2)', fontFamily: 'var(--font-mono)' }}>00:42</span>
        </div>
        <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>AC not cooling · 78°F upstairs</div>
        <div style={{ fontSize: 13, color: 'var(--ink-1)', marginBottom: 12 }}>Maria H. · 2204 Bouldin Ave · 1.2 mi from Jose</div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
          <Chip color="hot" pulse>Urgent</Chip>
          <Chip color="info">AI qualified</Chip>
          <Chip color="neutral">$1,200 est.</Chip>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={btnPrimary}>Dispatch Jose →</button>
          <button style={btnGhost}>View</button>
        </div>
      </div>

      <TabBar active="map" />
      <HomeIndicator light />
    </>
  );
}

function Pin({ x, y, status, label }) {
  const colors = { ok: 'var(--ok)', warn: 'var(--warn)', hot: 'var(--hot)' };
  return (
    <div style={{
      position: 'absolute', left: x, top: y, transform: 'translate(-50%,-50%)',
      width: 36, height: 36, borderRadius: 99,
      background: 'var(--bg-1)',
      border: `2px solid ${colors[status]}`,
      display: 'grid', placeItems: 'center',
      fontSize: 11, fontWeight: 700, color: 'var(--ink-0)',
      boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
      zIndex: 4,
    }}>{label}</div>
  );
}

function LeadPin({ x, y }) {
  return (
    <div style={{ position: 'absolute', left: x, top: y, transform: 'translate(-50%,-100%)', zIndex: 6 }}>
      {/* radar */}
      <div style={{
        position: 'absolute', left: '50%', top: '100%', transform: 'translate(-50%,-50%)',
        width: 80, height: 80, borderRadius: 99,
        border: '2px solid var(--ember-500)',
        animation: 'pulse-ember 2s infinite',
      }} />
      <svg width="32" height="42" viewBox="0 0 32 42">
        <path d="M16 0 C 7 0 0 7 0 16 c0 12 16 26 16 26 s16-14 16-26 C32 7 25 0 16 0z"
              fill="var(--ember-500)" stroke="white" strokeWidth="2"/>
        <circle cx="16" cy="16" r="5" fill="white"/>
      </svg>
    </div>
  );
}

const btnPrimary = {
  flex: 1, height: 48, borderRadius: 14, border: 'none',
  background: 'var(--ember-500)', color: '#0A0B0D',
  fontSize: 15, fontWeight: 700, letterSpacing: '-0.01em',
  boxShadow: '0 8px 24px rgba(255,106,26,0.4), inset 0 1px 0 rgba(255,255,255,0.3)',
  cursor: 'pointer',
};
const btnGhost = {
  height: 48, padding: '0 20px', borderRadius: 14,
  background: 'rgba(255,255,255,0.06)', color: 'var(--ink-0)',
  border: '1px solid var(--line)',
  fontSize: 15, fontWeight: 600,
  cursor: 'pointer',
};

// ═══════════════════════════════════════════════════════════════
// LEAD DETAIL — AI CALL LIVE
// ═══════════════════════════════════════════════════════════════
function ScreenLeadDetail() {
  return (
    <div style={{ background: 'var(--bg-0)', height: '100%', overflow: 'hidden', position: 'relative' }}>
      <StatusBar />
      {/* Header */}
      <div style={{ padding: '8px 16px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ width: 36, height: 36, borderRadius: 99, background: 'var(--bg-2)', display: 'grid', placeItems: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
        </div>
        <Chip color="hot" pulse>Live · 00:38</Chip>
        <div style={{ width: 36, height: 36 }} />
      </div>

      {/* Lead identity */}
      <div style={{ padding: '0 20px 16px' }}>
        <div style={{ fontSize: 13, color: 'var(--ink-2)', marginBottom: 4 }}>Lead #2841 · web form</div>
        <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1 }}>Maria Hernández</div>
        <div style={{ fontSize: 14, color: 'var(--ink-1)', marginTop: 4 }}>2204 Bouldin Ave · Austin TX</div>
      </div>

      {/* AI call card */}
      <div style={{
        margin: '0 16px 16px',
        background: 'linear-gradient(180deg, rgba(255,106,26,0.10), rgba(255,106,26,0.02))',
        border: '1px solid rgba(255,106,26,0.3)',
        borderRadius: 20,
        padding: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 99,
              background: 'linear-gradient(135deg, var(--ember-500), var(--ember-700))',
              display: 'grid', placeItems: 'center',
              boxShadow: '0 0 20px rgba(255,106,26,0.4)',
              animation: 'breathe 2s infinite',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M3 5a2 2 0 012-2h2.5l2 5-2.5 1.5a11 11 0 005.5 5.5l1.5-2.5 5 2V17a2 2 0 01-2 2A16 16 0 013 5z"/></svg>
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>Iris · AI Voice Agent</div>
              <div style={{ fontSize: 11, color: 'var(--ink-2)' }}>Called in 47s · qualifying</div>
            </div>
          </div>
          <Waveform width={70} height={28} />
        </div>

        {/* Transcript */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 14 }}>
          <Bubble who="Iris" text="Hi Maria — RevnueX dispatching for HVAC Near Me Now. I see your AC isn't cooling. Is anyone home right now?" />
          <Bubble who="Maria" text="Yes, my kids are home. It's really hot upstairs." />
          <Bubble who="Iris" text="Got it. Can a tech come by between 2 and 4 PM today?" />
          <Bubble who="Maria" text="Yes please, sooner if you can." live />
        </div>
      </div>

      {/* Auto-fill fields */}
      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-2)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Auto-extracted</div>
        <Field label="Issue" value="AC not cooling · upstairs" />
        <Field label="Urgency" value="Today · before 4pm" badge="hot" />
        <Field label="Equipment" value="3-ton split, ~12 yrs" />
      </div>

      <HomeIndicator />
    </div>
  );
}

function Bubble({ who, text, live }) {
  const isAI = who === 'Iris';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: isAI ? 'flex-start' : 'flex-end' }}>
      <div style={{ fontSize: 10, color: 'var(--ink-2)', marginBottom: 4, fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{who}</div>
      <div style={{
        maxWidth: '85%',
        padding: '10px 12px',
        borderRadius: 14,
        background: isAI ? 'rgba(79,168,255,0.10)' : 'var(--bg-2)',
        border: `1px solid ${isAI ? 'rgba(79,168,255,0.25)' : 'var(--line)'}`,
        fontSize: 13, lineHeight: 1.45, color: 'var(--ink-0)',
      }}>
        {text}
        {live && <span style={{ display: 'inline-block', width: 6, height: 12, background: 'var(--ember-500)', marginLeft: 4, animation: 'breathe 1s infinite', verticalAlign: 'middle' }}/>}
      </div>
    </div>
  );
}

function Field({ label, value, badge }) {
  return (
    <div style={{
      padding: '10px 14px',
      background: 'var(--bg-1)',
      border: '1px solid var(--line)',
      borderRadius: 12,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    }}>
      <div>
        <div style={{ fontSize: 10, color: 'var(--ink-2)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)', marginBottom: 2 }}>{label}</div>
        <div style={{ fontSize: 14, color: 'var(--ink-0)', fontWeight: 500 }}>{value}</div>
      </div>
      {badge === 'hot' && <Chip color="hot" pulse>NOW</Chip>}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// OWNER DASHBOARD — REVENUE TICKER
// ═══════════════════════════════════════════════════════════════
function ScreenDashboard() {
  return (
    <div style={{ background: 'var(--bg-0)', height: '100%', overflow: 'hidden', position: 'relative' }}>
      <StatusBar />
      {/* Header */}
      <div style={{ padding: '10px 20px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 13, color: 'var(--ink-2)' }}>Today · Wed Apr 30</div>
          <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }}>Hey, Diego</div>
        </div>
        <Mark size={36} />
      </div>

      {/* Hero revenue card */}
      <div style={{
        margin: '0 16px 14px',
        padding: 20,
        borderRadius: 22,
        background: 'linear-gradient(160deg, #1A0F08, #0E0A07)',
        border: '1px solid rgba(255,106,26,0.25)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* glow */}
        <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, borderRadius: 99, background: 'radial-gradient(circle, rgba(255,106,26,0.25), transparent 70%)' }}/>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, position: 'relative' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ember-300)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Revenue · today</span>
          <span style={{ display: 'flex', gap: 6, alignItems: 'center', fontSize: 11, color: 'var(--ok)' }}>
            <span style={{ width: 6, height: 6, borderRadius: 99, background: 'var(--ok)' }} />
            +$1,200 booked 2m ago
          </span>
        </div>
        <MoneyTicker value="8,420" size={52} />
        <div style={{ display: 'flex', gap: 16, marginTop: 14, position: 'relative' }}>
          <Stat k="Booked" v="7" trend="+3" />
          <Stat k="Closed" v="5" trend="+2" />
          <Stat k="Avg ticket" v="$1,684" />
        </div>
      </div>

      {/* Funnel row */}
      <div style={{ padding: '0 16px', marginBottom: 14 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-2)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10, padding: '0 4px' }}>Lead → revenue · this week</div>
        <div style={{
          background: 'var(--bg-1)', border: '1px solid var(--line)',
          borderRadius: 18, padding: 16,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <FunnelStep n="42" l="Leads" />
          <Arrow />
          <FunnelStep n="38" l="AI called" pct="90%" />
          <Arrow />
          <FunnelStep n="29" l="Booked" pct="76%" />
          <Arrow />
          <FunnelStep n="22" l="Paid" pct="76%" />
        </div>
      </div>

      {/* Speed gauge */}
      <div style={{ padding: '0 16px', marginBottom: 14 }}>
        <div style={{
          background: 'var(--bg-1)', border: '1px solid var(--line)',
          borderRadius: 18, padding: 16,
          display: 'flex', alignItems: 'center', gap: 16,
        }}>
          <div style={{
            width: 64, height: 64, borderRadius: 99,
            background: 'conic-gradient(var(--ember-500) 0 280deg, var(--bg-3) 280deg 360deg)',
            display: 'grid', placeItems: 'center',
            position: 'relative',
          }}>
            <div style={{ position: 'absolute', inset: 4, borderRadius: 99, background: 'var(--bg-1)', display: 'grid', placeItems: 'center' }}>
              <span style={{ fontSize: 16, fontWeight: 800, fontFamily: 'var(--font-display)' }}>47s</span>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600 }}>Avg. AI call response</div>
            <div style={{ fontSize: 12, color: 'var(--ink-2)', marginTop: 2 }}>Goal: under 60s. Beating goal by 13s.</div>
          </div>
          <Chip color="ok">On pace</Chip>
        </div>
      </div>

      <TabBar active="leads" />
      <HomeIndicator />
    </div>
  );
}

function Stat({ k, v, trend }) {
  return (
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: 10, color: 'var(--ink-2)', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-mono)' }}>{k}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 2 }}>
        <span style={{ fontSize: 18, fontWeight: 700, fontFamily: 'var(--font-display)' }}>{v}</span>
        {trend && <span style={{ fontSize: 11, color: 'var(--ok)' }}>{trend}</span>}
      </div>
    </div>
  );
}

function FunnelStep({ n, l, pct }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <span style={{ fontSize: 22, fontWeight: 700, fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>{n}</span>
      <span style={{ fontSize: 10, color: 'var(--ink-2)' }}>{l}</span>
      {pct && <span style={{ fontSize: 9, color: 'var(--ember-300)', fontFamily: 'var(--font-mono)' }}>{pct}</span>}
    </div>
  );
}

function Arrow() {
  return <svg width="16" height="10" viewBox="0 0 16 10" fill="none"><path d="M0 5 H 14 M10 1 L14 5 L10 9" stroke="var(--ink-3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

Object.assign(window, { ScreenLiveMap, ScreenLeadDetail, ScreenDashboard });
