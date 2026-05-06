/* RevnueX spec — JSX-rendered slides
   These slides are appended into the <deck-stage> at runtime. */
/* global React, ReactDOM, Phone, ScreenLiveMap, ScreenLeadDetail, ScreenDashboard,
   ScreenNotifications, ScreenAISettings, ScreenFounder, ScreenFJOF, ScreenOnboarding,
   ScreenTechToday, ScreenTechJob, ScreenEstimate, ScreenInvoice, ScreenCustomerTrack,
   Mark, Chip */

// ─── Common slide chrome ────────────────────────────────────────
function SlideHeader({ num, section, title, summary, tags }) {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 4 }}>
        <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 13, color: 'var(--ember-500)', letterSpacing: '0.1em' }}>{num}</span>
        <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 12, color: 'var(--ink-2)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{section}</span>
      </div>
      <h1 className="prd-title">{title}</h1>
      {tags && (
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 4 }}>
          {tags.map((t, i) => <span key={i} className={`prd-tag ${t.kind || ''}`}>{t.label}</span>)}
        </div>
      )}
      {summary && <p className="prd-summary">{summary}</p>}
    </>
  );
}

function Block({ title, children }) {
  return (
    <div className="prd-block">
      <h4>{title}</h4>
      {children}
    </div>
  );
}

function Bullets({ items, kind = '' }) {
  return <ul className={`prd-list ${kind}`}>{items.map((x, i) => <li key={i}>{x}</li>)}</ul>;
}

function KV({ pairs }) {
  return (
    <div className="prd-grid">
      {pairs.map((p, i) => (
        <div key={i} className="prd-kv">
          <span className="k">{p.k}</span>
          <span className="v">{p.v}</span>
        </div>
      ))}
    </div>
  );
}

function Foot({ items }) {
  return <div className="prd-foot">{items.map((x, i) => <span key={i}>{x}</span>).reduce((a, b, i) => i ? [...a, <span key={`s${i}`} style={{color:'var(--ink-3)'}}>·</span>, b] : [b], [])}</div>;
}

// ─── Slide template ────────────────────────────────────────────
function Slide({ children, label, full = false }) {
  return (
    <section data-screen-label={label}>
      <div className={`slide ${full ? 'full' : ''}`}>
        {children}
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════
// 04 · BRAND & VISUAL LANGUAGE (full)
// ════════════════════════════════════════════════════════════════
function SlideBrand() {
  return (
    <Slide label="04 Brand" full>
      <div style={{ padding: '80px 120px', display: 'flex', flexDirection: 'column', gap: 32, height: '100%' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8 }}>
            <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 13, color: 'var(--ember-500)', letterSpacing: '0.1em' }}>04</span>
            <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 12, color: 'var(--ink-2)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Foundation · Brand</span>
          </div>
          <h1 style={{ fontFamily: 'Geist, sans-serif', fontWeight: 700, fontSize: 56, lineHeight: 1.05, letterSpacing: '-0.02em', margin: 0 }}>Visual language</h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48, flex: 1 }}>
          {/* Left — principles */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div>
              <h4 style={{ fontFamily: 'Geist Mono, monospace', fontSize: 11, color: 'var(--ink-2)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 12px' }}>Three rules, never broken</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <BrandRule num="01" title="Dark first." copy="The default surface is #0A0B0D. Light themes don't exist in v1. Field techs work in trucks, attics and crawlspaces — the screen is the ambient light source. Nothing should glow." />
                <BrandRule num="02" title="Ember as signal." copy="#FF6A1A is reserved. It marks one of three things: an action you can take, an item that is live right now, or a value the user must notice. If everything is ember, nothing is." />
                <BrandRule num="03" title="Money is the protagonist." copy="Currency uses display weight + tabular numerals. It animates in. It's never gray. Revenue is the largest type element on any screen it appears." />
              </div>
            </div>

            <div>
              <h4 style={{ fontFamily: 'Geist Mono, monospace', fontSize: 11, color: 'var(--ink-2)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 12px' }}>Tone &amp; voice</h4>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--ink-1)', margin: 0, maxWidth: 540 }}>
                Direct. Imperative. Built for someone holding a phone with one greasy hand. Avoid SaaS hedging ("you may want to consider…"). Prefer "<span style={{color:'var(--ember-300)'}}>Dispatch Jose</span>" over "Assign technician to job." If a label is over 4 words, rewrite it.
              </p>
            </div>
          </div>

          {/* Right — logo + sample frame */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{
              padding: 32, borderRadius: 20,
              background: 'radial-gradient(400px 300px at 50% 50%, rgba(255,106,26,0.18), transparent 70%), var(--bg-1)',
              border: '1px solid var(--line)',
              display: 'flex', alignItems: 'center', gap: 24,
            }}>
              <div style={{
                width: 80, height: 80, borderRadius: 22,
                background: 'linear-gradient(135deg, #FF8A3A, #C43E04)',
                display: 'grid', placeItems: 'center',
                color: 'white', fontFamily: 'Geist', fontWeight: 800, fontSize: 44,
                boxShadow: '0 16px 40px rgba(255,106,26,0.4), inset 0 2px 0 rgba(255,255,255,0.25)',
              }}>R</div>
              <div>
                <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 11, color: 'var(--ember-300)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>App icon</div>
                <div style={{ fontSize: 28, fontWeight: 700, marginTop: 4, letterSpacing: '-0.02em' }}>RevnueX · HVAC</div>
                <div style={{ fontSize: 13, color: 'var(--ink-2)', marginTop: 4 }}>22% radius · ember gradient · letterform R</div>
              </div>
            </div>

            {/* Do/don't */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <DoDont kind="do" title="Do" items={['Use ember on one CTA per screen', 'Pulse only on live / unread', 'Render currency w/ tabular nums']} />
              <DoDont kind="dont" title="Don't" items={['Stack multiple ember CTAs', 'Use ember for decoration', 'Use light backgrounds anywhere']} />
            </div>

            <div style={{
              padding: 16, borderRadius: 14,
              background: 'rgba(255,106,26,0.06)', border: '1px solid rgba(255,106,26,0.2)',
              fontSize: 13, color: 'var(--ink-1)', lineHeight: 1.5,
            }}>
              <strong style={{color: 'var(--ember-300)'}}>Mantra for the designer:</strong> "If a contractor at 1 PM in Phoenix sun can't tell what to do next in 3 seconds, the screen has failed."
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

function BrandRule({ num, title, copy }) {
  return (
    <div style={{
      padding: 16, borderRadius: 14, background: 'var(--bg-1)', border: '1px solid var(--line)',
      display: 'flex', gap: 14, alignItems: 'flex-start',
    }}>
      <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 12, color: 'var(--ember-500)', letterSpacing: '0.1em', flexShrink: 0, marginTop: 2 }}>{num}</span>
      <div>
        <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 4 }}>{title}</div>
        <div style={{ fontSize: 13, color: 'var(--ink-1)', lineHeight: 1.5 }}>{copy}</div>
      </div>
    </div>
  );
}

function DoDont({ kind, title, items }) {
  const ok = kind === 'do';
  return (
    <div style={{
      padding: 14, borderRadius: 12,
      background: ok ? 'rgba(43,210,122,0.06)' : 'rgba(255,59,92,0.06)',
      border: `1px solid ${ok ? 'rgba(43,210,122,0.25)' : 'rgba(255,59,92,0.25)'}`,
    }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: ok ? 'var(--ok)' : 'var(--hot)', marginBottom: 8 }}>{title}</div>
      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
        {items.map((x, i) => <li key={i} style={{ fontSize: 12, color: 'var(--ink-1)', paddingLeft: 14, position: 'relative', lineHeight: 1.4 }}>
          <span style={{ position: 'absolute', left: 0, top: 4, width: 6, height: 6, background: ok ? 'var(--ok)' : 'var(--hot)', borderRadius: 99 }}/>
          {x}
        </li>)}
      </ul>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════
// 05 · TYPE SYSTEM (full)
// ════════════════════════════════════════════════════════════════
function SlideType() {
  return (
    <Slide label="05 Type" full>
      <div style={{ padding: '80px 120px', display: 'flex', flexDirection: 'column', gap: 32, height: '100%' }}>
        <div>
          <div style={{ display: 'flex', gap: 16, marginBottom: 8 }}>
            <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 13, color: 'var(--ember-500)' }}>05</span>
            <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 12, color: 'var(--ink-2)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Foundation · Type</span>
          </div>
          <h1 style={{ fontSize: 56, fontWeight: 700, letterSpacing: '-0.02em', margin: 0 }}>Two faces. Six sizes.</h1>
          <p style={{ fontSize: 16, color: 'var(--ink-1)', maxWidth: 700, marginTop: 12 }}>Geist for everything. Geist Mono for system labels, IDs, and timestamps. Don't introduce a third family.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 48, flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <TypeRow size={64} weight={800} label="Display · 64/1.0/-0.03" sample="$8,420" mono={false} />
            <TypeRow size={40} weight={700} label="H1 · 40/1.1/-0.02" sample="Hey, Diego" />
            <TypeRow size={28} weight={650} label="H2 · 28/1.15/-0.015" sample="4 jobs today" />
            <TypeRow size={20} weight={600} label="H3 · 20/1.25/-0.01" sample="AC not cooling · upstairs" />
            <TypeRow size={15} weight={400} label="Body · 15/1.55" sample="Iris is calling Maria right now. AI extracted urgency." />
            <TypeRow size={13} weight={400} label="Body sm · 13/1.5" sample="2204 Bouldin Ave · 1.2 mi from Jose" />
            <TypeRow size={12} weight={500} label="Caption · 12/1.4 · UPPERCASE" sample="REVENUE · TODAY" mono caps />
            <TypeRow size={13} weight={500} label="Mono · 13" sample="EST-1142 · 00:47" mono />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Block title="Numerals">
              <p style={{ fontSize: 13, color: 'var(--ink-1)', margin: 0, lineHeight: 1.5 }}>Always tabular: <code style={{ fontFamily: 'Geist Mono', color: 'var(--ember-300)' }}>font-feature-settings: "tnum"</code>. Currency, counters and timers must not jitter when digits change.</p>
            </Block>
            <Block title="Bilingual">
              <p style={{ fontSize: 13, color: 'var(--ink-1)', margin: 0, lineHeight: 1.5 }}>Spanish strings run 15–25% longer. Allocate <strong style={{color:'var(--ember-300)'}}>+30% width</strong> on labels and never truncate currency. Test the AI agent name "Iris" — works in both languages.</p>
            </Block>
            <Block title="Iconography">
              <p style={{ fontSize: 13, color: 'var(--ink-1)', margin: 0, lineHeight: 1.5 }}>2px stroke, 24px grid, rounded caps + joins. Filled = active state, stroked = idle. No emoji except in user-generated content.</p>
            </Block>
          </div>
        </div>
      </div>
    </Slide>
  );
}

function TypeRow({ size, weight, label, sample, mono = false, caps = false }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, paddingBottom: 14, borderBottom: '1px solid var(--line-soft)' }}>
      <div style={{ width: 220, fontFamily: 'Geist Mono, monospace', fontSize: 11, color: 'var(--ink-2)', letterSpacing: '0.05em', flexShrink: 0 }}>{label}</div>
      <div style={{
        fontFamily: mono ? 'Geist Mono, monospace' : 'Geist, sans-serif',
        fontSize: size, fontWeight: weight, lineHeight: 1.1,
        letterSpacing: size > 30 ? '-0.02em' : '-0.005em',
        textTransform: caps ? 'uppercase' : 'none',
        color: 'var(--ink-0)',
      }}>{sample}</div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════
// 06 · COLOR (full)
// ════════════════════════════════════════════════════════════════
function SlideColor() {
  const surface = [
    { name: 'bg-0', hex: '#0A0B0D', use: 'App bg, deepest' },
    { name: 'bg-1', hex: '#111317', use: 'Cards, sheets' },
    { name: 'bg-2', hex: '#181B20', use: 'Elevated' },
    { name: 'bg-3', hex: '#20242A', use: 'Hover / pressed' },
    { name: 'line', hex: '#2A2F36', use: 'Hairlines' },
  ];
  const ember = [
    { name: 'ember-50',  hex: '#FFF1E8' },
    { name: 'ember-100', hex: '#FFD9BF' },
    { name: 'ember-300', hex: '#FF9F61', use: 'Accent text' },
    { name: 'ember-500', hex: '#FF6A1A', use: 'PRIMARY action' },
    { name: 'ember-600', hex: '#E5560B', use: 'Pressed' },
    { name: 'ember-700', hex: '#B83F03', use: 'Deep gradient' },
  ];
  const status = [
    { name: 'ok',   hex: '#2BD27A', use: 'Booked, paid, completed' },
    { name: 'warn', hex: '#FFC542', use: 'Pending, ETA slipping' },
    { name: 'hot',  hex: '#FF3B5C', use: 'Missed call, SLA breach' },
    { name: 'info', hex: '#4FA8FF', use: 'AI / automation events' },
  ];
  return (
    <Slide label="06 Color" full>
      <div style={{ padding: '80px 120px', display: 'flex', flexDirection: 'column', gap: 32, height: '100%' }}>
        <div>
          <div style={{ display: 'flex', gap: 16, marginBottom: 8 }}>
            <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 13, color: 'var(--ember-500)' }}>06</span>
            <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 12, color: 'var(--ink-2)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Foundation · Color</span>
          </div>
          <h1 style={{ fontSize: 56, fontWeight: 700, letterSpacing: '-0.02em', margin: 0 }}>Ember earns its place.</h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32, flex: 1 }}>
          <SwatchCol title="Surface · ink" rows={surface} />
          <SwatchCol title="Ember · signal" rows={ember} highlight />
          <SwatchCol title="Status · sparingly" rows={status} />
        </div>

        <div style={{
          padding: 20, borderRadius: 14,
          background: 'var(--bg-1)', border: '1px solid var(--line)',
          display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 32, alignItems: 'center',
        }}>
          <div>
            <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 11, color: 'var(--ember-300)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>Ember semantics — pick one</div>
            <div style={{ fontSize: 22, fontWeight: 700 }}>Action · Live · Required attention</div>
          </div>
          <div style={{ fontSize: 13, color: 'var(--ink-1)', lineHeight: 1.55 }}>
            One ember CTA per screen. Pulses are reserved for elements that are <em style={{color: 'var(--ember-300)', fontStyle: 'normal'}}>actively changing right now</em> (a call coming in, a tech moving, a slot remaining). Never use ember for decoration, headers or borders that aren't interactive.
          </div>
        </div>
      </div>
    </Slide>
  );
}

function SwatchCol({ title, rows, highlight }) {
  return (
    <div>
      <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 11, color: 'var(--ink-2)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>{title}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {rows.map((s, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 14,
            padding: 12, borderRadius: 10,
            background: highlight && s.name === 'ember-500' ? 'rgba(255,106,26,0.08)' : 'var(--bg-1)',
            border: '1px solid var(--line)',
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: 8, background: s.hex,
              border: s.hex === '#0A0B0D' ? '1px solid var(--line)' : 'none',
              flexShrink: 0,
            }}/>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{s.name}</div>
              <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 11, color: 'var(--ink-2)' }}>{s.hex}</div>
            </div>
            {s.use && <div style={{ fontSize: 11, color: 'var(--ink-2)', textAlign: 'right', maxWidth: 100, lineHeight: 1.3 }}>{s.use}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { Slide, SlideHeader, Block, Bullets, KV, Foot, SlideBrand, SlideType, SlideColor });
