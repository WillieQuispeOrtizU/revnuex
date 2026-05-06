/* Owner screens part 2: Notifications, AI settings, Founder slot, First Job or Free, Onboarding */
/* global React, StatusBar, HomeIndicator, TabBar, Mark, Chip, MoneyTicker, Waveform */

// ═══════════════════════════════════════════════════════════════
// NOTIFICATIONS INBOX
// ═══════════════════════════════════════════════════════════════
function ScreenNotifications() {
  const items = [
    { type: 'lead', icon: '🔥', title: 'New urgent lead — AC not cooling', sub: 'Maria H. · 2204 Bouldin Ave · 2m', tag: 'NEW', tagColor: 'ember', dot: true },
    { type: 'paid', icon: '💵', title: 'Invoice paid — $1,840', sub: 'R. Patel · capacitor + freon · 12m', tag: 'PAID', tagColor: 'ok' },
    { type: 'ai',   icon: '🤖', title: 'Iris booked a job', sub: 'Wed 2–4 PM · J. Wong · 1.8 mi from RT · 18m', tag: 'AUTO', tagColor: 'info' },
    { type: 'sla',  icon: '⏱', title: 'Tech ETA slipping', sub: 'L. King is 8 min behind on Job #2840 · 24m', tag: 'WATCH', tagColor: 'warn' },
    { type: 'paid', icon: '💵', title: 'Invoice paid — $620', sub: 'S. Diaz · maintenance plan · 1h', tag: 'PAID', tagColor: 'ok' },
    { type: 'lead', icon: '📞', title: 'Missed call — voicemail captured', sub: 'Iris is calling back now · 1h', tag: 'AI', tagColor: 'info' },
    { type: 'guar', icon: '🛡', title: 'First Job or Free: 12 days left', sub: '6 of 30 day window · on track · 2h', tag: '', tagColor: '' },
  ];
  return (
    <div style={{ background: 'var(--bg-0)', height: '100%', overflow: 'hidden', position: 'relative' }}>
      <StatusBar />
      <div style={{ padding: '8px 20px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <div style={{ fontSize: 13, color: 'var(--ink-2)' }}>Inbox</div>
          <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em' }}>Today</div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <Chip color="ember" pulse>3 new</Chip>
        </div>
      </div>
      <div style={{ padding: '0 12px', display: 'flex', flexDirection: 'column', gap: 8, overflow: 'auto', maxHeight: 600 }}>
        {items.map((n, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'flex-start', gap: 12,
            padding: 14,
            background: n.dot ? 'linear-gradient(90deg, rgba(255,106,26,0.06), var(--bg-1))' : 'var(--bg-1)',
            border: `1px solid ${n.dot ? 'rgba(255,106,26,0.25)' : 'var(--line)'}`,
            borderRadius: 16,
            position: 'relative',
          }}>
            {n.dot && <span style={{ position: 'absolute', left: 6, top: 22, width: 6, height: 6, borderRadius: 99, background: 'var(--ember-500)', animation: 'pulse-ember 1.6s infinite' }}/>}
            <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--bg-2)', display: 'grid', placeItems: 'center', fontSize: 16 }}>{n.icon}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--ink-0)', marginBottom: 2 }}>{n.title}</div>
              <div style={{ fontSize: 12, color: 'var(--ink-2)' }}>{n.sub}</div>
            </div>
            {n.tag && <Chip color={n.tagColor}>{n.tag}</Chip>}
          </div>
        ))}
      </div>
      <TabBar active="leads" />
      <HomeIndicator />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// AI VOICE AGENT SETTINGS
// ═══════════════════════════════════════════════════════════════
function ScreenAISettings() {
  return (
    <div style={{ background: 'var(--bg-0)', height: '100%', overflow: 'hidden', position: 'relative' }}>
      <StatusBar />
      <div style={{ padding: '8px 20px 14px' }}>
        <div style={{ fontSize: 13, color: 'var(--ink-2)' }}>Settings</div>
        <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.02em' }}>Iris · AI Voice Agent</div>
      </div>

      {/* Status card */}
      <div style={{
        margin: '0 16px 14px',
        padding: 16,
        borderRadius: 18,
        background: 'linear-gradient(160deg, rgba(79,168,255,0.10), rgba(79,168,255,0.02))',
        border: '1px solid rgba(79,168,255,0.25)',
        display: 'flex', alignItems: 'center', gap: 14,
      }}>
        <div style={{
          width: 48, height: 48, borderRadius: 14,
          background: 'linear-gradient(135deg, #4FA8FF, #2271D1)',
          display: 'grid', placeItems: 'center',
          boxShadow: '0 0 24px rgba(79,168,255,0.4)',
          animation: 'breathe 2.4s infinite',
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2"><circle cx="12" cy="12" r="3"/><path d="M3 12c4-8 14-8 18 0M3 12c4 8 14 8 18 0"/></svg>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 600 }}>Active · answering for you</div>
          <div style={{ fontSize: 12, color: 'var(--ink-2)' }}>38 calls today · avg. pickup 47s</div>
        </div>
        <div style={{
          width: 44, height: 26, borderRadius: 99,
          background: 'var(--ok)',
          position: 'relative',
        }}>
          <div style={{ position: 'absolute', right: 2, top: 2, width: 22, height: 22, borderRadius: 99, background: '#fff' }}/>
        </div>
      </div>

      {/* Settings list */}
      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <SettingRow label="Voice" value="Iris (warm, ES/EN)" />
        <SettingRow label="Greeting script" value='"Hi, this is Iris from {company}…"' edit />
        <SettingRow label="Pickup speed target" value="< 60 seconds" />
        <SettingRow label="Booking window offered" value="Today · 2-hour slots" />
        <SettingRow label="Languages" value="English + Español" badge="auto-detect" />
        <SettingRow label="Escalate to human if…" value="Caller says 'agent' · refunds · gas smell" />
        <SettingRow label="Hours" value="24/7 (after-hours surcharge ON)" />
      </div>

      {/* Recent call sample */}
      <div style={{
        margin: '14px 16px 0',
        padding: 14,
        background: 'var(--bg-1)', border: '1px solid var(--line)',
        borderRadius: 16,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-2)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Last call · 4 min ago</span>
          <Chip color="ok">Booked</Chip>
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <button style={{
            width: 36, height: 36, borderRadius: 99,
            background: 'var(--ember-500)', border: 'none',
            display: 'grid', placeItems: 'center',
          }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="#0A0B0D"><path d="M2 1L11 6 2 11z"/></svg>
          </button>
          <Waveform width={180} height={28} live={false} color="var(--info)"/>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-2)' }}>1:42</span>
        </div>
      </div>

      <HomeIndicator />
    </div>
  );
}

function SettingRow({ label, value, edit, badge }) {
  return (
    <div style={{
      padding: '12px 14px',
      background: 'var(--bg-1)', border: '1px solid var(--line)',
      borderRadius: 14,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 11, color: 'var(--ink-2)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>{label}</div>
        <div style={{ fontSize: 13.5, color: 'var(--ink-0)', marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{value}</div>
      </div>
      {badge && <Chip color="info" style={{ marginRight: 8 }}>{badge}</Chip>}
      {edit ? (
        <span style={{ fontSize: 12, color: 'var(--ember-300)', fontWeight: 600 }}>Edit</span>
      ) : (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="var(--ink-3)" strokeWidth="2"><path d="M4 1l6 6-6 6"/></svg>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// FOUNDER SLOT / BILLING
// ═══════════════════════════════════════════════════════════════
function ScreenFounder() {
  return (
    <div style={{ background: 'var(--bg-0)', height: '100%', overflow: 'hidden', position: 'relative' }}>
      <StatusBar />
      <div style={{ padding: '8px 20px 16px' }}>
        <div style={{ fontSize: 13, color: 'var(--ink-2)' }}>Account</div>
        <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.02em' }}>Founder Program</div>
      </div>

      {/* Market exclusivity card */}
      <div style={{
        margin: '0 16px 14px',
        padding: 18,
        borderRadius: 22,
        background: 'linear-gradient(135deg, #1A0F08 0%, #0E0A07 100%)',
        border: '1px solid rgba(255,106,26,0.4)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* radial glow */}
        <div style={{ position: 'absolute', top: -60, right: -60, width: 240, height: 240, borderRadius: 99, background: 'radial-gradient(circle, rgba(255,106,26,0.25), transparent 70%)' }}/>
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--ember-500)"><path d="M12 2L3 7v6c0 5 4 8 9 9 5-1 9-4 9-9V7l-9-5z"/></svg>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ember-300)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Market locked</span>
          </div>
          <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.05, fontFamily: 'var(--font-display)' }}>Austin, TX</div>
          <div style={{ fontSize: 13, color: 'var(--ink-1)', marginTop: 6 }}>You're the only HVAC contractor running this stack in your city.</div>

          <div style={{ marginTop: 16, padding: 12, background: 'rgba(0,0,0,0.4)', borderRadius: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 11, color: 'var(--ink-2)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em' }}>Exclusivity ends</div>
              <div style={{ fontSize: 16, fontWeight: 700 }}>Jul 14, 2026</div>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--ember-300)' }}>74 days</div>
          </div>
        </div>
      </div>

      {/* Slot remaining */}
      <div style={{ padding: '0 16px', marginBottom: 14 }}>
        <div style={{
          padding: 14,
          background: 'var(--bg-1)', border: '1px solid var(--line)',
          borderRadius: 16,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <span style={{ fontSize: 13, fontWeight: 600 }}>Founder slots</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ember-300)' }}>3 of 10 left</span>
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            {Array.from({length:10}).map((_,i)=>(
              <div key={i} style={{
                flex: 1, height: 6, borderRadius: 3,
                background: i < 7 ? 'var(--ember-500)' : 'var(--bg-3)',
                animation: i === 6 ? 'pulse-ember 2s infinite' : 'none',
              }}/>
            ))}
          </div>
        </div>
      </div>

      {/* Plan */}
      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <PlanRow label="Plan" value="Founder · $397/mo" tag="ACTIVE" tagColor="ok"/>
        <PlanRow label="Setup fee" value="$997 · paid Mar 14" tag="✓" tagColor="ok"/>
        <PlanRow label="Next charge" value="May 14, 2026 · $397"/>
        <PlanRow label="Payment method" value="Visa ending 4242"/>
      </div>

      <TabBar active="me" />
      <HomeIndicator />
    </div>
  );
}

function PlanRow({ label, value, tag, tagColor }) {
  return (
    <div style={{
      padding: '12px 14px',
      background: 'var(--bg-1)', border: '1px solid var(--line)',
      borderRadius: 14,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    }}>
      <div>
        <div style={{ fontSize: 11, color: 'var(--ink-2)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>{label}</div>
        <div style={{ fontSize: 13.5, color: 'var(--ink-0)', marginTop: 2 }}>{value}</div>
      </div>
      {tag && <Chip color={tagColor}>{tag}</Chip>}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// FIRST JOB OR FREE TRACKER
// ═══════════════════════════════════════════════════════════════
function ScreenFJOF() {
  return (
    <div style={{ background: 'var(--bg-0)', height: '100%', overflow: 'hidden', position: 'relative' }}>
      <StatusBar />
      <div style={{ padding: '8px 20px 16px' }}>
        <div style={{ fontSize: 13, color: 'var(--ink-2)' }}>Guarantee</div>
        <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.02em' }}>First Job or Free</div>
      </div>

      {/* Big shield + counter */}
      <div style={{
        margin: '0 16px 16px',
        padding: 24,
        borderRadius: 24,
        background: 'linear-gradient(180deg, rgba(43,210,122,0.10), rgba(43,210,122,0.02))',
        border: '1px solid rgba(43,210,122,0.3)',
        textAlign: 'center',
        position: 'relative',
      }}>
        <div style={{
          width: 84, height: 84, margin: '0 auto 14px',
          borderRadius: 99,
          background: 'linear-gradient(135deg, var(--ok), #1A9956)',
          display: 'grid', placeItems: 'center',
          boxShadow: '0 0 40px rgba(43,210,122,0.35)',
          animation: 'breathe 2.6s infinite',
        }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M12 2L3 7v6c0 5 4 8 9 9 5-1 9-4 9-9V7l-9-5z"/><path d="M9 12l2 2 4-4"/></svg>
        </div>
        <div style={{ fontSize: 14, color: 'var(--ink-1)', marginBottom: 6 }}>Day 6 of 30</div>
        <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-0.02em', fontFamily: 'var(--font-display)' }}>You're covered.</div>
        <div style={{ fontSize: 13, color: 'var(--ink-1)', marginTop: 8, maxWidth: 260, marginLeft: 'auto', marginRight: 'auto' }}>If we don't book your first visit by May 24, your $997 setup fee is refunded automatically.</div>

        {/* Progress */}
        <div style={{ marginTop: 18, position: 'relative', height: 10, background: 'var(--bg-2)', borderRadius: 99, overflow: 'hidden' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '20%', background: 'linear-gradient(90deg, var(--ok), #4DE090)' }}/>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: 11, color: 'var(--ink-2)', fontFamily: 'var(--font-mono)' }}>
          <span>Started Apr 24</span><span>24 days left</span>
        </div>
      </div>

      {/* Status checklist */}
      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <Check ok>AI agent live</Check>
        <Check ok>Landing page deployed</Check>
        <Check ok>3 leads received</Check>
        <Check>First visit booked</Check>
      </div>

      <HomeIndicator />
    </div>
  );
}

function Check({ ok, children }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      padding: 14,
      background: 'var(--bg-1)', border: '1px solid var(--line)',
      borderRadius: 14,
    }}>
      <div style={{
        width: 22, height: 22, borderRadius: 99,
        background: ok ? 'var(--ok)' : 'var(--bg-3)',
        display: 'grid', placeItems: 'center',
      }}>
        {ok && <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#0A0B0D" strokeWidth="2.5"><path d="M2 6l3 3 5-7"/></svg>}
      </div>
      <span style={{ fontSize: 14, color: ok ? 'var(--ink-0)' : 'var(--ink-2)' }}>{children}</span>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// ONBOARDING
// ═══════════════════════════════════════════════════════════════
function ScreenOnboarding() {
  return (
    <div style={{
      background: 'radial-gradient(800px 600px at 50% 30%, rgba(255,106,26,0.18), transparent 60%), var(--bg-0)',
      height: '100%', overflow: 'hidden', position: 'relative',
      display: 'flex', flexDirection: 'column',
    }}>
      <StatusBar />
      {/* Top — language toggle */}
      <div style={{ position: 'absolute', top: 56, right: 16, display: 'flex', gap: 0, padding: 3, background: 'var(--bg-2)', border: '1px solid var(--line)', borderRadius: 99 }}>
        <span style={{ padding: '4px 12px', borderRadius: 99, background: 'var(--ember-500)', color: '#0A0B0D', fontSize: 11, fontWeight: 700 }}>EN</span>
        <span style={{ padding: '4px 12px', fontSize: 11, color: 'var(--ink-2)', fontWeight: 600 }}>ES</span>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 28px', textAlign: 'center', gap: 20 }}>
        <Mark size={64} />
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ember-300)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>HVAC Near Me Now</div>
          <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.05, fontFamily: 'var(--font-display)' }}>Stop losing<br/>$1,200 calls.</div>
          <div style={{ fontSize: 15, color: 'var(--ink-1)', marginTop: 12, lineHeight: 1.5, maxWidth: 280, marginLeft: 'auto', marginRight: 'auto' }}>Your AI agent answers in under 60 seconds, books the visit, and dispatches the nearest tech.</div>
        </div>

        {/* hero illustration */}
        <div style={{ position: 'relative', height: 120, width: '100%', display: 'grid', placeItems: 'center' }}>
          <div style={{
            width: 120, height: 120, borderRadius: 99,
            background: 'radial-gradient(circle, rgba(255,106,26,0.3), transparent 70%)',
            position: 'absolute',
            animation: 'breathe 2.4s infinite',
          }}/>
          <div style={{
            width: 64, height: 64, borderRadius: 22,
            background: 'linear-gradient(135deg, var(--ember-500), var(--ember-700))',
            display: 'grid', placeItems: 'center',
            boxShadow: '0 16px 40px rgba(255,106,26,0.4)',
          }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M3 5a2 2 0 012-2h2.5l2 5-2.5 1.5a11 11 0 005.5 5.5l1.5-2.5 5 2V17a2 2 0 01-2 2A16 16 0 013 5z"/></svg>
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div style={{ padding: '0 20px 28px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <button style={{
          height: 56, borderRadius: 16, border: 'none',
          background: 'var(--ember-500)', color: '#0A0B0D',
          fontSize: 16, fontWeight: 700, letterSpacing: '-0.01em',
          boxShadow: '0 12px 32px rgba(255,106,26,0.4), inset 0 1px 0 rgba(255,255,255,0.3)',
        }}>Claim my city →</button>
        <button style={{
          height: 56, borderRadius: 16,
          background: 'transparent', color: 'var(--ink-0)',
          border: '1px solid var(--line)',
          fontSize: 15, fontWeight: 600,
        }}>Watch the 3-min explainer</button>
        <div style={{ textAlign: 'center', fontSize: 11, color: 'var(--ink-2)', marginTop: 6, fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>3 of 10 founder slots left</div>
      </div>
      <HomeIndicator />
    </div>
  );
}

Object.assign(window, { ScreenNotifications, ScreenAISettings, ScreenFounder, ScreenFJOF, ScreenOnboarding });
