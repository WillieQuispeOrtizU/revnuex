/* RevnueX mobile screens — shared primitives + Owner screens */
/* global React */

const { useState, useEffect, useRef, useMemo } = React;

// ─── Phone shell (custom — not iOS chrome, RevnueX-branded dark)
function Phone({ children, w = 380, h = 800, label, sublabel, scale = 1, glow = false }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
      <div style={{
        width: w * scale,
        height: h * scale,
      }}>
        <div style={{
          width: w, height: h,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          borderRadius: 44,
          background: '#000',
          padding: 8,
          boxShadow: glow
            ? '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08), 0 0 80px rgba(255,106,26,0.18)'
            : '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)',
          position: 'relative',
        }}>
          {/* dynamic island */}
          <div style={{
            position: 'absolute', top: 16, left: '50%', transform: 'translateX(-50%)',
            width: 110, height: 30, borderRadius: 20, background: '#000', zIndex: 50,
          }} />
          <div style={{
            width: '100%', height: '100%',
            borderRadius: 36,
            background: 'var(--bg-0)',
            overflow: 'hidden',
            position: 'relative',
            color: 'var(--ink-0)',
            fontFamily: 'var(--font-body)',
          }}>
            {children}
          </div>
        </div>
      </div>
      {label && (
        <div style={{ textAlign: 'center', marginTop: -((1 - scale) * h) }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ember-500)',
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4,
          }}>{label}</div>
          {sublabel && <div style={{ fontSize: 12, color: 'var(--ink-2)' }}>{sublabel}</div>}
        </div>
      )}
    </div>
  );
}

// Phone status bar (RevnueX-styled, dark)
function StatusBar({ time = '9:41' }) {
  return (
    <div style={{
      height: 50, padding: '12px 28px 0',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      fontSize: 14, fontWeight: 600, color: 'var(--ink-0)',
      position: 'relative', zIndex: 5,
    }}>
      <span style={{ fontFeatureSettings: '"tnum"' }}>{time}</span>
      <span style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        {/* signal */}
        <svg width="16" height="10" viewBox="0 0 16 10"><g fill="currentColor">
          <rect x="0" y="6" width="3" height="4" rx="0.5"/>
          <rect x="4.5" y="4" width="3" height="6" rx="0.5"/>
          <rect x="9" y="2" width="3" height="8" rx="0.5"/>
          <rect x="13" y="0" width="3" height="10" rx="0.5"/>
        </g></svg>
        {/* battery */}
        <svg width="22" height="11" viewBox="0 0 22 11">
          <rect x="0.5" y="0.5" width="18" height="10" rx="2.5" fill="none" stroke="currentColor" opacity="0.4"/>
          <rect x="2" y="2" width="15" height="7" rx="1.5" fill="currentColor"/>
          <rect x="20" y="3.5" width="1.5" height="4" rx="0.5" fill="currentColor" opacity="0.4"/>
        </svg>
      </span>
    </div>
  );
}

function HomeIndicator({ light = false }) {
  return (
    <div style={{
      position: 'absolute', bottom: 8, left: 0, right: 0,
      display: 'flex', justifyContent: 'center', zIndex: 100,
    }}>
      <div style={{
        width: 120, height: 4, borderRadius: 99,
        background: light ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.35)',
      }} />
    </div>
  );
}

// Bottom tab bar (Owner)
function TabBar({ active = 'leads', dark = true, role = 'owner' }) {
  const tabs = role === 'owner'
    ? [
        { id: 'leads', label: 'Leads', icon: 'flame' },
        { id: 'map',   label: 'Dispatch', icon: 'map' },
        { id: 'jobs',  label: 'Jobs', icon: 'wrench' },
        { id: 'money', label: 'Revenue', icon: 'dollar' },
        { id: 'me',    label: 'Account', icon: 'user' },
      ]
    : [
        { id: 'today', label: 'Today', icon: 'calendar' },
        { id: 'job',   label: 'Job', icon: 'wrench' },
        { id: 'route', label: 'Route', icon: 'map' },
        { id: 'me',    label: 'Me', icon: 'user' },
      ];

  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      paddingBottom: 28, paddingTop: 10,
      background: 'linear-gradient(180deg, rgba(10,11,13,0) 0%, rgba(10,11,13,0.9) 30%, rgba(10,11,13,1) 100%)',
      backdropFilter: 'blur(20px)',
      borderTop: '1px solid var(--line-soft)',
      display: 'flex',
      justifyContent: 'space-around',
      zIndex: 60,
    }}>
      {tabs.map(t => (
        <div key={t.id} style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
          color: active === t.id ? 'var(--ember-500)' : 'var(--ink-2)',
          fontSize: 10, fontWeight: 600, letterSpacing: '0.02em',
          padding: '4px 8px',
        }}>
          <TabIcon name={t.icon} active={active === t.id} />
          <span>{t.label}</span>
        </div>
      ))}
    </div>
  );
}

function TabIcon({ name, active }) {
  const stroke = active ? 'var(--ember-500)' : 'var(--ink-2)';
  const fill = active ? 'var(--ember-500)' : 'none';
  const fillBg = active ? 'rgba(255,106,26,0.15)' : 'none';
  switch (name) {
    case 'flame':
      return <svg width="22" height="22" viewBox="0 0 24 24" fill={fillBg} stroke={stroke} strokeWidth="2" strokeLinejoin="round"><path d="M12 2c1 4 5 5 5 10a5 5 0 11-10 0c0-2 1-3 2-4-1 5 3 5 3 1 0-3-1-5 0-7z"/></svg>;
    case 'map':
      return <svg width="22" height="22" viewBox="0 0 24 24" fill={fillBg} stroke={stroke} strokeWidth="2" strokeLinejoin="round"><path d="M9 4l-6 2v14l6-2 6 2 6-2V4l-6 2zM9 4v14M15 6v14"/></svg>;
    case 'wrench':
      return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"><path d="M14.7 6.3a4 4 0 105.4 5.4l-3.7 3.7-9-9a4 4 0 005.4-5.4l1.9 1.9zm0 0L9 12l-6 6 3 3 6-6 5.7-5.7"/></svg>;
    case 'dollar':
      return <svg width="22" height="22" viewBox="0 0 24 24" fill={fillBg} stroke={stroke} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"><path d="M12 2v20M17 6H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6"/></svg>;
    case 'user':
      return <svg width="22" height="22" viewBox="0 0 24 24" fill={fillBg} stroke={stroke} strokeWidth="2" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 22a8 8 0 0116 0"/></svg>;
    case 'calendar':
      return <svg width="22" height="22" viewBox="0 0 24 24" fill={fillBg} stroke={stroke} strokeWidth="2" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>;
    default: return null;
  }
}

// ─── Brand mark
function Mark({ size = 32 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: size * 0.28,
      background: 'linear-gradient(135deg, #FF8A3A, #C43E04)',
      display: 'grid', placeItems: 'center',
      boxShadow: '0 4px 16px rgba(255,106,26,0.35), inset 0 1px 0 rgba(255,255,255,0.25)',
      color: 'white',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: size * 0.5,
      letterSpacing: '-0.04em',
    }}>R</div>
  );
}

// ─── Generic chip
function Chip({ children, color = 'neutral', solid = false, pulse = false, style = {} }) {
  const palette = {
    neutral: { bg: 'rgba(255,255,255,0.06)', fg: 'var(--ink-1)', bd: 'rgba(255,255,255,0.08)' },
    ember:   { bg: 'rgba(255,106,26,0.12)',  fg: 'var(--ember-300)', bd: 'rgba(255,106,26,0.3)' },
    ok:      { bg: 'rgba(43,210,122,0.12)',  fg: 'var(--ok)', bd: 'rgba(43,210,122,0.3)' },
    hot:     { bg: 'rgba(255,59,92,0.12)',   fg: 'var(--hot)', bd: 'rgba(255,59,92,0.3)' },
    info:    { bg: 'rgba(79,168,255,0.12)',  fg: 'var(--info)', bd: 'rgba(79,168,255,0.3)' },
    warn:    { bg: 'rgba(255,197,66,0.12)',  fg: 'var(--warn)', bd: 'rgba(255,197,66,0.3)' },
  };
  const p = palette[color] || palette.neutral;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '4px 10px', borderRadius: 99,
      background: solid ? p.fg : p.bg,
      color: solid ? '#0A0B0D' : p.fg,
      border: `1px solid ${solid ? 'transparent' : p.bd}`,
      fontSize: 11, fontWeight: 600, letterSpacing: '0.02em',
      lineHeight: 1, whiteSpace: 'nowrap',
      ...style,
    }}>
      {pulse && (
        <span style={{
          width: 6, height: 6, borderRadius: 99,
          background: 'currentColor',
          animation: 'pulse-ember 1.6s infinite',
        }} />
      )}
      {children}
    </span>
  );
}

// ─── Currency / counter
function MoneyTicker({ value, size = 56, prefix = '$' }) {
  return (
    <div style={{
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: size,
      lineHeight: 1,
      letterSpacing: '-0.03em',
      color: 'var(--ink-0)',
      fontFeatureSettings: '"tnum"',
      display: 'flex', alignItems: 'baseline', gap: 2,
    }}>
      <span style={{ color: 'var(--ink-2)', fontSize: size * 0.55 }}>{prefix}</span>
      <span>{value}</span>
    </div>
  );
}

// ─── Map background (custom dark RevnueX style)
function MapBg({ children, style = {} }) {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: 'var(--map-bg)',
      overflow: 'hidden',
      ...style,
    }}>
      <svg width="100%" height="100%" viewBox="0 0 380 800" preserveAspectRatio="xMidYMid slice"
           style={{ position: 'absolute', inset: 0 }}>
        <defs>
          <radialGradient id="mapglow" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#1A1F26" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#0A0B0D" stopOpacity="1"/>
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#mapglow)"/>
        {/* parks */}
        <path d="M-20 120 L 80 100 L 140 180 L 60 220 Z" fill="#11261A" opacity="0.6"/>
        <path d="M260 480 L 380 460 L 420 580 L 280 600 Z" fill="#11261A" opacity="0.6"/>
        {/* water */}
        <path d="M-20 600 L 100 580 L 180 700 L 80 820 L -20 820 Z" fill="#0A1419"/>
        {/* roads — major */}
        <g stroke="#1F242C" strokeWidth="6" fill="none" strokeLinecap="round">
          <path d="M-20 280 L 420 320"/>
          <path d="M-20 460 L 420 440"/>
          <path d="M120 -20 L 100 820"/>
          <path d="M280 -20 L 320 820"/>
        </g>
        {/* roads — minor */}
        <g stroke="#161A20" strokeWidth="3" fill="none" strokeLinecap="round">
          <path d="M-20 180 L 420 200"/>
          <path d="M-20 380 L 420 360"/>
          <path d="M-20 540 L 420 560"/>
          <path d="M-20 680 L 420 700"/>
          <path d="M40 -20 L 60 820"/>
          <path d="M200 -20 L 200 820"/>
          <path d="M360 -20 L 380 820"/>
        </g>
      </svg>
      {children}
    </div>
  );
}

// ─── Audio waveform (animated bars)
function Waveform({ live = true, width = 200, height = 40, color = 'var(--ember-500)' }) {
  const bars = 28;
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 3,
      width, height,
    }}>
      {Array.from({ length: bars }).map((_, i) => {
        const seed = (Math.sin(i * 1.7) + Math.cos(i * 0.9)) * 0.5 + 0.5;
        const h = Math.max(4, seed * height * 0.9);
        return (
          <div key={i} style={{
            flex: 1, height: h,
            background: color,
            borderRadius: 2,
            opacity: 0.4 + seed * 0.6,
            animation: live ? `breathe ${1 + (i % 5) * 0.2}s ease-in-out infinite` : 'none',
            animationDelay: `${i * 0.05}s`,
          }}/>
        );
      })}
    </div>
  );
}

Object.assign(window, { Phone, StatusBar, HomeIndicator, TabBar, Mark, Chip, MoneyTicker, MapBg, Waveform });
