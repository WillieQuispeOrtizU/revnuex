/* mockup-sitemap.jsx — Sitemap & user flow diagrams */
/* global React */

const C = {
  bg:'#0A0B0D', bg1:'#14161C', bg2:'#1F2329',
  line:'#2A2F36', lineSoft:'#1E2128',
  ink:'#F5F6F8', ink2:'#B5BCC6', ink3:'#6B7280',
  ember:'#FF6A1A', ember300:'#FF9F61',
  ok:'#2BD27A', warn:'#FFC542', info:'#4DA8FF', bad:'#E74F4F',
  mono:'Geist Mono, ui-monospace, monospace',
};

function Box({ x, y, w=140, h=70, label, sub, color=C.bg1, border=C.line, accent, num }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect width={w} height={h} rx={10} fill={color} stroke={accent||border} strokeWidth={accent?2:1}/>
      {accent && <rect width={4} height={h} rx={2} fill={accent}/>}
      {num && <text x={w-10} y={14} fontSize={9} fontFamily={C.mono} fill={C.ink3} textAnchor="end" letterSpacing={0.5}>{num}</text>}
      <text x={accent?14:12} y={accent?28:24} fontSize={12} fontWeight={600} fill={C.ink}>{label}</text>
      {sub && <text x={accent?14:12} y={accent?44:40} fontSize={10} fill={C.ink2}>{sub}</text>}
    </g>
  );
}

function Line({ from, to, dash, color=C.line, arrow=true }) {
  const [x1,y1] = from, [x2,y2] = to;
  const id = `arr-${x1}-${y1}-${x2}-${y2}`;
  return (
    <>
      <defs>
        <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={color}/>
        </marker>
      </defs>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={1.5} strokeDasharray={dash?'4 4':null} markerEnd={arrow?`url(#${id})`:null} opacity={0.85}/>
    </>
  );
}

function Branch({ x, y1, y2 }) {
  return <line x1={x} y1={y1} x2={x} y2={y2} stroke={C.line} strokeWidth={1.5}/>;
}

function Header({ x, y, label, color, count }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x={-1} width={3} height={20} fill={color} rx={1.5}/>
      <text x={10} y={14} fontSize={13} fontWeight={700} fill={C.ink}>{label}</text>
      <text x={10} y={28} fontSize={9} fill={C.ink2} fontFamily={C.mono} letterSpacing={0.8}>{count} SCREENS</text>
    </g>
  );
}

// ─── Full sitemap (single big artboard) ──────────────────
function Sitemap() {
  const W = 1800, H = 1100;
  // helpers
  const COL_W = 150, COL_GAP = 24;
  const colX = i => 70 + i * (COL_W + COL_GAP);

  return (
    <div style={{width:'100%',height:'100%',background:C.bg,borderRadius:20,position:'relative',overflow:'hidden',fontFamily:'Geist, system-ui'}}>
      {/* Subtle grid */}
      <div style={{position:'absolute',inset:0,backgroundImage:`linear-gradient(${C.lineSoft} 1px, transparent 1px),linear-gradient(90deg, ${C.lineSoft} 1px, transparent 1px)`,backgroundSize:'40px 40px',opacity:0.4}}/>
      {/* Glow */}
      <div style={{position:'absolute',top:-200,right:-200,width:600,height:600,borderRadius:'50%',background:'radial-gradient(circle, rgba(255,106,26,0.08), transparent 70%)'}}/>

      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{position:'relative'}}>
        {/* Title */}
        <text x={70} y={40} fontSize={26} fontWeight={800} fill={C.ink} letterSpacing={-0.6}>RevnueX · Sitemap</text>
        <text x={70} y={62} fontSize={12} fill={C.ink2}>47 screens across 3 personas — flat overview, hover any node to trace flow</text>
        <text x={W-70} y={40} fontSize={11} fontFamily={C.mono} fill={C.ember300} textAnchor="end" letterSpacing={1}>v0.1 · APR 2025</text>

        {/* ─── OWNER LANE ─────────────────────────── */}
        <g>
          <Header x={70} y={100} label="OWNER · iOS" color={C.ember} count={13}/>
          <rect x={60} y={140} width={W-120} height={210} rx={14} fill={C.bg1} fillOpacity={0.5} stroke={C.lineSoft}/>

          {/* Onboarding column */}
          <text x={colX(0)} y={166} fontSize={10} fontFamily={C.mono} fill={C.ember300} letterSpacing={0.8}>ONBOARDING</text>
          <Box x={colX(0)} y={176} label="Splash" num="01" accent={C.ember}/>
          <Box x={colX(0)} y={258} label="Hook" sub="Founder offer" num="02"/>

          <Box x={colX(1)} y={176} label="OTP" sub="SMS verify" num="03"/>
          <Box x={colX(1)} y={258} label="Pick market" sub="ZIP + radius" num="04"/>

          <Box x={colX(2)} y={176} label="Iris setup" sub="Voice + persona" num="05" accent={C.ember}/>
          <Box x={colX(2)} y={258} label="Login" sub="Returning · Face ID" num="06"/>

          {/* Daily home column */}
          <text x={colX(3)+30} y={166} fontSize={10} fontFamily={C.mono} fill={C.ember300} letterSpacing={0.8}>DAILY HOME</text>
          <Box x={colX(3)} y={176} label="Dashboard" sub="Revenue ticker" num="07" accent={C.ember}/>
          <Box x={colX(3)} y={258} label="Lead inbox" sub="All calls" num="08"/>

          <Box x={colX(4)} y={176} label="Jobs list" sub="Pipeline" num="09"/>

          {/* Live AI hero column */}
          <text x={colX(5)+10} y={166} fontSize={10} fontFamily={C.mono} fill={C.ember300} letterSpacing={0.8}>LIVE DISPATCH ★</text>
          <Box x={colX(5)} y={176} label="Dispatch map" sub="Hero · live" num="10" accent={C.ember}/>
          <Box x={colX(5)} y={258} label="Lead detail" sub="Live transcript" num="11" accent={C.ember}/>

          <Box x={colX(6)} y={176} label="Take over" sub="Manual override" num="12"/>
          <Box x={colX(6)} y={258} label="Job detail" sub="Live progress" num="13"/>

          {/* Onboarding flow arrows */}
          <Line from={[colX(0)+140,200]} to={[colX(1),200]}/>
          <Line from={[colX(0)+140,282]} to={[colX(1),282]}/>
          <Line from={[colX(1)+140,200]} to={[colX(2),200]}/>
          <Line from={[colX(1)+140,282]} to={[colX(2),282]}/>
          <Line from={[colX(2)+140,200]} to={[colX(3),200]}/>
          <Line from={[colX(2)+140,282]} to={[colX(3),282]} dash/>
          <Line from={[colX(3)+140,200]} to={[colX(4),200]} dash/>
          <Line from={[colX(3)+140,282]} to={[colX(4),200]} dash/>
          <Line from={[colX(4)+140,200]} to={[colX(5),200]}/>
          <Line from={[colX(4)+140,200]} to={[colX(5),282]}/>
          <Line from={[colX(5)+140,200]} to={[colX(6),200]}/>
          <Line from={[colX(5)+140,282]} to={[colX(6),282]}/>
        </g>

        {/* ─── TECH LANE ──────────────────────────── */}
        <g>
          <Header x={70} y={400} label="TECH · ANDROID" color={C.info} count={14}/>
          <rect x={60} y={440} width={W-120} height={300} rx={14} fill={C.bg1} fillOpacity={0.5} stroke={C.lineSoft}/>

          <text x={colX(0)} y={466} fontSize={10} fontFamily={C.mono} fill="#9ECCFF" letterSpacing={0.8}>DAY START</text>
          <Box x={colX(0)} y={476} label="Login" sub="Clock-in" num="14" accent={C.info}/>
          <Box x={colX(0)} y={558} label="Today queue" sub="4 stops" num="15" accent={C.info}/>
          <Box x={colX(0)} y={640} label="Empty" sub="No jobs" num="16"/>

          <text x={colX(1)+50} y={466} fontSize={10} fontFamily={C.mono} fill="#9ECCFF" letterSpacing={0.8}>ON-SITE FLOW (HERO)</text>
          <Box x={colX(1)} y={476} label="En route" sub="Turn-by-turn" num="17"/>
          <Box x={colX(1)} y={558} label="On-site hub" sub="Step tracker" num="18" accent={C.info}/>

          <Box x={colX(2)} y={476} label="Voice diag." sub="Iris transcribes" num="19" accent={C.info}/>
          <Box x={colX(2)} y={558} label="Photo capture" sub="Before/after" num="20"/>
          <Box x={colX(2)} y={640} label="Build estimate" sub="Iris suggests" num="21" accent={C.info}/>

          <Box x={colX(3)} y={476} label="Customer sign" sub="Hand-phone" num="22"/>

          <text x={colX(4)+30} y={466} fontSize={10} fontFamily={C.mono} fill="#9ECCFF" letterSpacing={0.8}>PAYMENT</text>
          <Box x={colX(4)} y={476} label="Pay options" sub="3 methods" num="23"/>
          <Box x={colX(4)} y={558} label="Tap-to-pay" sub="NFC ring" num="24" accent={C.info}/>
          <Box x={colX(4)} y={640} label="Paid" sub="Earnings + next" num="25"/>

          <text x={colX(5)+10} y={466} fontSize={10} fontFamily={C.mono} fill="#9ECCFF" letterSpacing={0.8}>DAY END + ME</text>
          <Box x={colX(5)} y={476} label="End of day" sub="Summary" num="26"/>
          <Box x={colX(5)} y={558} label="Account" sub="Profile" num="27"/>

          {/* Tech flow */}
          <Line from={[colX(0)+140,500]} to={[colX(1),500]}/>
          <Line from={[colX(0)+140,582]} to={[colX(1),582]}/>
          <Line from={[colX(1)+140,500]} to={[colX(2),500]}/>
          <Line from={[colX(1)+140,582]} to={[colX(2),582]}/>
          <Line from={[colX(1)+140,582]} to={[colX(2),664]}/>
          <Line from={[colX(2)+140,500]} to={[colX(3),500]}/>
          <Line from={[colX(2)+140,582]} to={[colX(3),500]} dash/>
          <Line from={[colX(2)+140,664]} to={[colX(3),500]} dash/>
          <Line from={[colX(3)+140,500]} to={[colX(4),500]}/>
          <Line from={[colX(4)+140,500]} to={[colX(4)+70,558]} dash/>
          <Line from={[colX(4)+140,582]} to={[colX(5),582]}/>
          <Line from={[colX(4)+140,664]} to={[colX(5),582]}/>
        </g>

        {/* ─── CUSTOMER LANE ──────────────────────── */}
        <g>
          <Header x={70} y={790} label="CUSTOMER · PWA (NO DOWNLOAD)" color={C.ok} count={9}/>
          <rect x={60} y={830} width={W-120} height={210} rx={14} fill={C.bg1} fillOpacity={0.5} stroke={C.lineSoft}/>

          <text x={colX(0)} y={856} fontSize={10} fontFamily={C.mono} fill="#7DECB3" letterSpacing={0.8}>BOOK A VISIT</text>
          <Box x={colX(0)} y={866} label="Landing" sub="From SMS link" num="28" accent={C.ok}/>
          <Box x={colX(1)} y={866} label="Pick window" sub="Slots" num="29"/>
          <Box x={colX(2)} y={866} label="Confirm" sub="Address+phone" num="30"/>
          <Box x={colX(3)} y={866} label="Booked" sub="Tech assigned" num="31"/>

          <text x={colX(4)} y={856} fontSize={10} fontFamily={C.mono} fill="#7DECB3" letterSpacing={0.8}>DAY-OF</text>
          <Box x={colX(4)} y={866} label="SMS push" sub="Lockscreen" num="32"/>
          <Box x={colX(5)} y={866} label="Live track" sub="Uber-style ★" num="33" accent={C.ok}/>
          <Box x={colX(6)} y={866} label="Estimate" sub="Approve" num="34"/>
          <Box x={colX(7)} y={866} label="Pay" sub="Apple Pay/card" num="35"/>
          <Box x={colX(8)} y={866} label="Receipt" sub="+ review" num="36"/>

          {[0,1,2,3,4,5,6,7].map(i => (
            <Line key={i} from={[colX(i)+140,890]} to={[colX(i+1),890]}/>
          ))}
        </g>

        {/* ─── Cross-persona links ────────────────── */}
        <g opacity={0.5}>
          {/* Owner dispatches → Tech receives */}
          <path d={`M ${colX(5)+40} 350 Q ${colX(5)+40} 415, ${colX(0)+40} 440`} fill="none" stroke={C.ember} strokeWidth={1.5} strokeDasharray="4 4"/>
          <text x={colX(2)+40} y={395} fontSize={9} fontFamily={C.mono} fill={C.ember} letterSpacing={1}>DISPATCH →</text>
          {/* Tech estimate → Customer estimate */}
          <path d={`M ${colX(2)+70} 740 Q ${colX(2)+70} 805, ${colX(6)+40} 830`} fill="none" stroke={C.ok} strokeWidth={1.5} strokeDasharray="4 4"/>
          <text x={colX(4)+0} y={780} fontSize={9} fontFamily={C.mono} fill={C.ok} letterSpacing={1}>QUOTE → SMS LINK</text>
          {/* Customer book → Owner inbox */}
          <path d={`M ${colX(0)+70} 866 Q ${colX(0)-10} 600, ${colX(3)+40} 350`} fill="none" stroke={C.info} strokeWidth={1.5} strokeDasharray="4 4"/>
        </g>

        {/* States note */}
        <g transform="translate(60,1060)">
          <rect width={W-120} height={28} rx={6} fill={C.bg1} stroke={C.lineSoft}/>
          <text x={14} y={18} fontSize={11} fill={C.ink2}>
            <tspan fontFamily={C.mono} fill={C.warn} letterSpacing={1}>+ STATES (11):</tspan>
            <tspan> Empty (2) · Loading (2) · Error (2) · Permissions (2) · Success/feedback (3) — overlay on any flow above</tspan>
          </text>
        </g>

        {/* Legend */}
        <g transform={`translate(${W-380},66)`}>
          <rect width={310} height={26} rx={6} fill={C.bg1} stroke={C.lineSoft}/>
          <circle cx={14} cy={13} r={4} fill={C.ember}/><text x={24} y={17} fontSize={10} fill={C.ink2}>Hero</text>
          <line x1={62} y1={13} x2={84} y2={13} stroke={C.line}/><text x={92} y={17} fontSize={10} fill={C.ink2}>Primary</text>
          <line x1={140} y1={13} x2={162} y2={13} stroke={C.line} strokeDasharray="3 3"/><text x={170} y={17} fontSize={10} fill={C.ink2}>Optional</text>
          <line x1={222} y1={13} x2={244} y2={13} stroke={C.ember} strokeDasharray="3 3"/><text x={252} y={17} fontSize={10} fill={C.ink2}>Cross-flow</text>
        </g>
      </svg>
    </div>
  );
}

window.Sitemap = Sitemap;
