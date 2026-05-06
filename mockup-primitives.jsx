/* mockup-primitives.jsx — compact primitives for all screens */
/* global React */

const { useState, useEffect, useRef } = React;

// ─── Phone shells
function IPhone({ children, w = 320, h = 680, glow = false }) {
  return (
    <div style={{
      width: w, height: h, borderRadius: w * 0.13,
      background: '#000', padding: 6,
      boxShadow: glow
        ? '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08), 0 0 60px rgba(255,106,26,0.2)'
        : '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)',
        width: 90, height: 24, borderRadius: 16, background: '#000', zIndex: 50,
      }}/>
      <div style={{
        width: '100%', height: '100%', borderRadius: w * 0.10,
        background: 'var(--bg-0)', overflow: 'hidden', position: 'relative',
        color: 'var(--ink-0)', fontFamily: 'var(--font-body)',
      }}>{children}</div>
    </div>
  );
}

function APhone({ children, w = 320, h = 680, glow = false }) {
  return (
    <div style={{
      width: w, height: h, borderRadius: 28,
      background: '#000', padding: 4,
      boxShadow: glow
        ? '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08), 0 0 60px rgba(255,106,26,0.2)'
        : '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute', top: 14, left: '50%', transform: 'translateX(-50%)',
        width: 8, height: 8, borderRadius: 99, background: '#1A1D22', zIndex: 50,
      }}/>
      <div style={{
        width: '100%', height: '100%', borderRadius: 24,
        background: 'var(--bg-0)', overflow: 'hidden', position: 'relative',
        color: 'var(--ink-0)', fontFamily: 'var(--font-body)',
      }}>{children}</div>
    </div>
  );
}

// Status bar
function SB({ time = '9:41', dark = true }) {
  return (
    <div style={{
      height: 38, padding: '8px 22px 0',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      fontSize: 12, fontWeight: 600, color: 'var(--ink-0)',
      position: 'relative', zIndex: 5,
    }}>
      <span style={{ fontFeatureSettings: '"tnum"' }}>{time}</span>
      <span style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
        <svg width="14" height="9" viewBox="0 0 16 10"><g fill="currentColor">
          <rect x="0" y="6" width="3" height="4" rx="0.5"/>
          <rect x="4.5" y="4" width="3" height="6" rx="0.5"/>
          <rect x="9" y="2" width="3" height="8" rx="0.5"/>
          <rect x="13" y="0" width="3" height="10" rx="0.5"/>
        </g></svg>
        <svg width="20" height="10" viewBox="0 0 22 11">
          <rect x="0.5" y="0.5" width="18" height="10" rx="2.5" fill="none" stroke="currentColor" opacity="0.4"/>
          <rect x="2" y="2" width="15" height="7" rx="1.5" fill="currentColor"/>
          <rect x="20" y="3.5" width="1.5" height="4" rx="0.5" fill="currentColor" opacity="0.4"/>
        </svg>
      </span>
    </div>
  );
}

function HI({ light = false }) {
  return (
    <div style={{
      position: 'absolute', bottom: 6, left: 0, right: 0,
      display: 'flex', justifyContent: 'center', zIndex: 100,
    }}>
      <div style={{
        width: 100, height: 4, borderRadius: 99,
        background: light ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.35)',
      }}/>
    </div>
  );
}

// Android nav bar
function ANav() {
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0, height: 24,
      background: 'var(--bg-0)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 40, zIndex: 100,
    }}>
      <div style={{ width: 14, height: 14, borderRadius: 3, border: '1.5px solid var(--ink-2)' }}/>
      <div style={{ width: 14, height: 14, border: '1.5px solid var(--ink-2)', transform: 'rotate(45deg)' }}/>
      <div style={{ width: 14, height: 2, borderRadius: 99, background: 'var(--ink-2)' }}/>
    </div>
  );
}

// Tab bar
function Tab({ active, role = 'owner' }) {
  const tabs = role === 'owner'
    ? [['leads','Leads','flame'],['map','Dispatch','map'],['jobs','Jobs','wrench'],['money','Revenue','dollar'],['me','Account','user']]
    : [['today','Today','calendar'],['job','Job','wrench'],['route','Route','map'],['me','Me','user']];
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      paddingBottom: 24, paddingTop: 8,
      background: 'linear-gradient(180deg, rgba(10,11,13,0) 0%, rgba(10,11,13,0.92) 30%, rgba(10,11,13,1) 100%)',
      borderTop: '1px solid var(--line-soft)',
      display: 'flex', justifyContent: 'space-around', zIndex: 60,
    }}>
      {tabs.map(([id, label, icon]) => (
        <div key={id} style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
          color: active === id ? 'var(--ember-500)' : 'var(--ink-2)',
          fontSize: 9, fontWeight: 600, padding: '2px 6px',
        }}>
          <Icon name={icon} active={active === id} size={20}/>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

// Icons
function Icon({ name, active = false, size = 20, color }) {
  const c = color || (active ? 'var(--ember-500)' : 'var(--ink-2)');
  const f = active ? 'rgba(255,106,26,0.15)' : 'none';
  const props = { width: size, height: size, viewBox: '0 0 24 24', fill: f, stroke: c, strokeWidth: 2, strokeLinejoin: 'round', strokeLinecap: 'round' };
  switch (name) {
    case 'flame': return <svg {...props}><path d="M12 2c1 4 5 5 5 10a5 5 0 11-10 0c0-2 1-3 2-4-1 5 3 5 3 1 0-3-1-5 0-7z"/></svg>;
    case 'map': return <svg {...props}><path d="M9 4l-6 2v14l6-2 6 2 6-2V4l-6 2zM9 4v14M15 6v14"/></svg>;
    case 'wrench': return <svg {...props} fill="none"><path d="M14.7 6.3a4 4 0 105.4 5.4l-3.7 3.7-9-9a4 4 0 005.4-5.4l1.9 1.9zm0 0L9 12l-6 6 3 3 6-6 5.7-5.7"/></svg>;
    case 'dollar': return <svg {...props}><path d="M12 2v20M17 6H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6"/></svg>;
    case 'user': return <svg {...props}><circle cx="12" cy="8" r="4"/><path d="M4 22a8 8 0 0116 0"/></svg>;
    case 'calendar': return <svg {...props}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>;
    case 'bell': return <svg {...props} fill="none"><path d="M6 8a6 6 0 1112 0v5l2 3H4l2-3z"/><path d="M10 19a2 2 0 004 0"/></svg>;
    case 'search': return <svg {...props} fill="none"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>;
    case 'phone': return <svg {...props} fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>;
    case 'msg': return <svg {...props} fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>;
    case 'cam': return <svg {...props} fill="none"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>;
    case 'mic': return <svg {...props} fill="none"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v4"/></svg>;
    case 'plus': return <svg {...props} fill="none"><path d="M12 5v14M5 12h14"/></svg>;
    case 'check': return <svg {...props} fill="none" strokeWidth="2.5"><path d="M5 12l5 5L20 6"/></svg>;
    case 'arrow': return <svg {...props} fill="none"><path d="M5 12h14M13 5l7 7-7 7"/></svg>;
    case 'back': return <svg {...props} fill="none"><path d="M19 12H5M11 19l-7-7 7-7"/></svg>;
    case 'x': return <svg {...props} fill="none"><path d="M18 6L6 18M6 6l12 12"/></svg>;
    case 'menu': return <svg {...props} fill="none"><path d="M3 6h18M3 12h18M3 18h18"/></svg>;
    case 'heart': return <svg {...props}><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>;
    case 'star': return <svg {...props}><polygon points="12 2 15 9 22 10 17 15 18 22 12 19 6 22 7 15 2 10 9 9"/></svg>;
    case 'shield': return <svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
    case 'zap': return <svg {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10"/></svg>;
    case 'clock': return <svg {...props} fill="none"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>;
    case 'pin': return <svg {...props}><path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7z"/><circle cx="12" cy="9" r="2.5" fill="white"/></svg>;
    case 'nav': return <svg {...props}><polygon points="3 11 22 2 13 21 11 13"/></svg>;
    case 'cog': return <svg {...props} fill="none"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>;
    case 'trash': return <svg {...props} fill="none"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>;
    case 'edit': return <svg {...props} fill="none"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 113 3L12 15l-4 1 1-4z"/></svg>;
    case 'card': return <svg {...props} fill="none"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>;
    case 'cash': return <svg {...props} fill="none"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/></svg>;
    case 'sig': return <svg {...props} fill="none"><path d="M3 17s2-2 5-2 4 4 7 4 6-2 6-2"/></svg>;
    case 'wifi': return <svg {...props} fill="none"><path d="M5 12.55a11 11 0 0114 0M2 8.82a15 15 0 0120 0M8.5 16.4a6 6 0 017 0"/><circle cx="12" cy="20" r="0.5"/></svg>;
    case 'globe': return <svg {...props} fill="none"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg>;
    case 'truck': return <svg {...props} fill="none"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>;
    case 'play': return <svg {...props}><polygon points="5 3 19 12 5 21"/></svg>;
    default: return <svg {...props}><circle cx="12" cy="12" r="3"/></svg>;
  }
}

// Brand mark
function Mark({ size = 28 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: size * 0.28,
      background: 'linear-gradient(135deg, #FF8A3A, #C43E04)',
      display: 'grid', placeItems: 'center',
      boxShadow: '0 4px 12px rgba(255,106,26,0.35), inset 0 1px 0 rgba(255,255,255,0.25)',
      color: 'white', fontFamily: 'var(--font-display)', fontWeight: 800,
      fontSize: size * 0.5, letterSpacing: '-0.04em',
    }}>R</div>
  );
}

// Chip
function Chip({ children, color = 'neutral', solid = false, pulse = false, size = 'md' }) {
  const palette = {
    neutral: { bg: 'rgba(255,255,255,0.06)', fg: 'var(--ink-1)', bd: 'rgba(255,255,255,0.08)' },
    ember:   { bg: 'rgba(255,106,26,0.12)',  fg: 'var(--ember-300)', bd: 'rgba(255,106,26,0.3)' },
    ok:      { bg: 'rgba(43,210,122,0.12)',  fg: 'var(--ok)', bd: 'rgba(43,210,122,0.3)' },
    hot:     { bg: 'rgba(255,59,92,0.12)',   fg: 'var(--hot)', bd: 'rgba(255,59,92,0.3)' },
    info:    { bg: 'rgba(79,168,255,0.12)',  fg: 'var(--info)', bd: 'rgba(79,168,255,0.3)' },
    warn:    { bg: 'rgba(255,197,66,0.12)',  fg: 'var(--warn)', bd: 'rgba(255,197,66,0.3)' },
  };
  const p = palette[color] || palette.neutral;
  const sz = size === 'sm' ? { fs: 9, pad: '2px 6px' } : { fs: 10, pad: '3px 8px' };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: sz.pad, borderRadius: 99,
      background: solid ? p.fg : p.bg,
      color: solid ? '#0A0B0D' : p.fg,
      border: `1px solid ${solid ? 'transparent' : p.bd}`,
      fontSize: sz.fs, fontWeight: 600, letterSpacing: '0.02em',
      lineHeight: 1, whiteSpace: 'nowrap',
    }}>
      {pulse && <span style={{ width: 5, height: 5, borderRadius: 99, background: 'currentColor', animation: 'pulse-ember 1.6s infinite' }}/>}
      {children}
    </span>
  );
}

// Money
function Money({ value, size = 44, prefix = '$' }) {
  return (
    <div style={{
      fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: size, lineHeight: 1,
      letterSpacing: '-0.03em', color: 'var(--ink-0)', fontFeatureSettings: '"tnum"',
      display: 'flex', alignItems: 'baseline', gap: 1,
    }}>
      <span style={{ color: 'var(--ink-2)', fontSize: size * 0.5 }}>{prefix}</span>
      <span>{value}</span>
    </div>
  );
}

// Btn
function Btn({ children, kind = 'primary', size = 'md', icon, full = false, style = {} }) {
  const bg = kind === 'primary' ? 'var(--ember-500)' : kind === 'ghost' ? 'transparent' : kind === 'danger' ? 'rgba(255,59,92,0.15)' : 'var(--bg-2)';
  const fg = kind === 'primary' ? '#0A0B0D' : kind === 'danger' ? 'var(--hot)' : 'var(--ink-0)';
  const bd = kind === 'primary' ? 'none' : kind === 'ghost' ? '1px dashed var(--line)' : kind === 'danger' ? '1px solid rgba(255,59,92,0.3)' : '1px solid var(--line)';
  const sz = size === 'lg' ? { h: 44, fs: 14, pad: '0 18px', rd: 12 } : size === 'sm' ? { h: 30, fs: 11, pad: '0 12px', rd: 8 } : { h: 38, fs: 13, pad: '0 14px', rd: 10 };
  return (
    <button style={{
      height: sz.h, padding: sz.pad, borderRadius: sz.rd,
      background: bg, color: fg, border: bd, fontWeight: 700, fontSize: sz.fs,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
      cursor: 'pointer', width: full ? '100%' : 'auto',
      boxShadow: kind === 'primary' ? '0 4px 12px rgba(255,106,26,0.3)' : 'none',
      ...style,
    }}>
      {icon && <Icon name={icon} size={14} color={fg}/>}
      {children}
    </button>
  );
}

// Map BG
function MapBg({ children, w = 308, h = 600 }) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'var(--map-bg)', overflow: 'hidden' }}>
      <svg width="100%" height="100%" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid slice"
           style={{ position: 'absolute', inset: 0 }}>
        <defs>
          <radialGradient id="mg" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#1A1F26" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#0A0B0D" stopOpacity="1"/>
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#mg)"/>
        <path d="M-20 90 L 60 80 L 110 140 L 50 170 Z" fill="#11261A" opacity="0.6"/>
        <path d="M210 380 L 320 360 L 360 460 L 230 480 Z" fill="#11261A" opacity="0.6"/>
        <path d="M-20 480 L 80 460 L 150 560 L 60 660 L -20 660 Z" fill="#0A1419"/>
        <g stroke="#1F242C" strokeWidth="5" fill="none" strokeLinecap="round">
          <path d="M-20 220 L 340 250"/>
          <path d="M-20 360 L 340 340"/>
          <path d="M100 -20 L 80 660"/>
          <path d="M230 -20 L 260 660"/>
        </g>
        <g stroke="#161A20" strokeWidth="2.5" fill="none" strokeLinecap="round">
          <path d="M-20 140 L 340 150"/>
          <path d="M-20 300 L 340 280"/>
          <path d="M-20 430 L 340 440"/>
          <path d="M-20 540 L 340 550"/>
          <path d="M30 -20 L 50 660"/>
          <path d="M170 -20 L 170 660"/>
          <path d="M290 -20 L 310 660"/>
        </g>
      </svg>
      {children}
    </div>
  );
}

// Pin
function MapPin({ x, y, color = 'var(--ember-500)', label, pulse = false, drop = false }) {
  return (
    <div style={{ position: 'absolute', left: x, top: y, transform: 'translate(-50%, -100%)', zIndex: 5 }}>
      {pulse && (
        <>
          <div style={{ position: 'absolute', left: '50%', top: 'calc(100% - 6px)', transform: 'translate(-50%, -50%)', width: 30, height: 30, borderRadius: 99, border: `2px solid ${color}`, animation: 'radar 1.6s infinite' }}/>
          <div style={{ position: 'absolute', left: '50%', top: 'calc(100% - 6px)', transform: 'translate(-50%, -50%)', width: 30, height: 30, borderRadius: 99, border: `2px solid ${color}`, animation: 'radar 1.6s infinite', animationDelay: '0.8s' }}/>
        </>
      )}
      <div style={{
        animation: drop ? 'pin-drop 0.8s ease-out' : undefined,
        filter: `drop-shadow(0 4px 8px ${color === 'var(--ember-500)' ? 'rgba(255,106,26,0.5)' : 'rgba(0,0,0,0.5)'})`,
      }}>
        <svg width="26" height="32" viewBox="0 0 26 32">
          <path d="M13 0a13 13 0 0113 13c0 9-13 19-13 19S0 22 0 13A13 13 0 0113 0z" fill={color}/>
          <circle cx="13" cy="13" r="5" fill="white"/>
          {label && <text x="13" y="16" fontFamily="Geist Mono" fontSize="8" fontWeight="700" textAnchor="middle" fill={color}>{label}</text>}
        </svg>
      </div>
    </div>
  );
}

// Tech pin (initials in circle)
function TechPin({ x, y, initials, status = 'idle' }) {
  const colors = { idle: '#2BD27A', enroute: '#FFC542', late: '#FF3B5C', onsite: '#4FA8FF' };
  const c = colors[status];
  return (
    <div style={{
      position: 'absolute', left: x, top: y, transform: 'translate(-50%, -50%)',
      width: 32, height: 32, borderRadius: 99,
      background: c, color: '#0A0B0D',
      display: 'grid', placeItems: 'center',
      fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12,
      border: '2px solid #0A0B0D',
      boxShadow: `0 0 0 2px ${c}, 0 4px 8px rgba(0,0,0,0.4)`,
      zIndex: 4,
    }}>{initials}</div>
  );
}

// Waveform
function Wave({ live = true, w = 180, h = 28, color = 'var(--ember-500)' }) {
  const bars = 24;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 2, width: w, height: h }}>
      {Array.from({ length: bars }).map((_, i) => {
        const seed = (Math.sin(i * 1.7) + Math.cos(i * 0.9)) * 0.5 + 0.5;
        const bh = Math.max(3, seed * h * 0.9);
        return <div key={i} style={{
          flex: 1, height: bh, background: color, borderRadius: 1.5,
          opacity: 0.4 + seed * 0.6,
          animation: live ? `breathe ${1 + (i % 5) * 0.2}s ease-in-out infinite` : 'none',
          animationDelay: `${i * 0.05}s`,
        }}/>;
      })}
    </div>
  );
}

// Header (with back button)
function Hdr({ title, sub, onBack = true, right }) {
  return (
    <div style={{ padding: '4px 16px 12px', display: 'flex', alignItems: 'center', gap: 12 }}>
      {onBack && <Icon name="back" size={20} color="var(--ink-0)"/>}
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-0.01em' }}>{title}</div>
        {sub && <div style={{ fontSize: 11, color: 'var(--ink-2)', marginTop: 2 }}>{sub}</div>}
      </div>
      {right}
    </div>
  );
}

// Card
function Card({ children, style = {}, glow = false, ember = false }) {
  return (
    <div style={{
      padding: 14, borderRadius: 14,
      background: ember ? 'linear-gradient(160deg, rgba(255,106,26,0.10), var(--bg-1))' : 'var(--bg-1)',
      border: `1px solid ${ember ? 'rgba(255,106,26,0.3)' : 'var(--line)'}`,
      boxShadow: glow ? '0 8px 24px rgba(255,106,26,0.15)' : 'none',
      ...style,
    }}>{children}</div>
  );
}

// Annotation
function Note({ x, y, num, children, w = 200 }) {
  return (
    <div className="anno" style={{
      position: 'absolute', left: x, top: y, width: w,
      display: 'flex', gap: 8, alignItems: 'flex-start',
      pointerEvents: 'none', zIndex: 200,
    }}>
      <div style={{
        width: 22, height: 22, borderRadius: 99, background: 'var(--ember-500)',
        color: '#0A0B0D', fontSize: 10, fontWeight: 800,
        display: 'grid', placeItems: 'center', flexShrink: 0,
        fontFamily: 'var(--font-mono)',
        boxShadow: '0 4px 12px rgba(255,106,26,0.4)',
      }}>{num}</div>
      <div style={{
        padding: '6px 10px', borderRadius: 8,
        background: 'rgba(20,22,28,0.95)', border: '1px solid var(--line)',
        fontSize: 11, color: 'var(--ink-1)', lineHeight: 1.4,
        backdropFilter: 'blur(8px)',
      }}>{children}</div>
    </div>
  );
}

Object.assign(window, { IPhone, APhone, SB, HI, ANav, Tab, Icon, Mark, Chip, Money, Btn, MapBg, MapPin, TechPin, Wave, Hdr, Card, Note });
