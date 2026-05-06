/* mockup-animation-specs.jsx — Motion design reference + live demos */
/* global React */

const MC = {
  bg:'#0A0B0D', bg1:'#14161C', bg2:'#1F2329',
  line:'#2A2F36', lineSoft:'#1E2128',
  ink:'#F5F6F8', ink2:'#B5BCC6', ink3:'#6B7280',
  ember:'#FF6A1A', ember300:'#FF9F61',
  ok:'#2BD27A', warn:'#FFC542', info:'#4DA8FF', bad:'#E74F4F',
  mono:'Geist Mono, ui-monospace, monospace',
};

const KF = `
@keyframes anim-fade-up { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
@keyframes anim-pulse-ring { 0%{transform:scale(0.7);opacity:0.8} 100%{transform:scale(2.4);opacity:0} }
@keyframes anim-shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
@keyframes anim-spin { to{transform:rotate(360deg)} }
@keyframes anim-bounce-in { 0%{transform:scale(0)} 60%{transform:scale(1.1)} 100%{transform:scale(1)} }
@keyframes anim-slide-in-right { from{transform:translateX(100%)} to{transform:translateX(0)} }
@keyframes anim-slide-up { from{transform:translateY(100%)} to{transform:translateY(0)} }
@keyframes anim-tick { 0%{stroke-dashoffset:24} 100%{stroke-dashoffset:0} }
@keyframes anim-confetti { 0%{transform:rotate(0deg) translate(0,0);opacity:1} 100%{transform:rotate(360deg) translate(40px,40px);opacity:0} }
@keyframes anim-ai-glow { 0%,100%{box-shadow:0 0 12px rgba(255,106,26,0.3),0 0 24px rgba(255,106,26,0.15)} 50%{box-shadow:0 0 24px rgba(255,106,26,0.6),0 0 48px rgba(255,106,26,0.3)} }
@keyframes anim-wave-bar { 0%,100%{transform:scaleY(0.3)} 50%{transform:scaleY(1)} }
@keyframes anim-typing { 0%,33%{opacity:0.3} 50%{opacity:1} }
@keyframes anim-money-up { 0%{transform:translateY(0);opacity:1} 100%{transform:translateY(-30px);opacity:0} }
@keyframes anim-pin-drop { 0%{transform:translateY(-40px);opacity:0} 60%{transform:translateY(4px)} 100%{transform:translateY(0);opacity:1} }
@keyframes anim-route { from{stroke-dashoffset:200} to{stroke-dashoffset:0} }
`;

// ─── Demo blocks (each ~120×80) ──────────────────────────
function Demo({ children, label, h=110 }) {
  return (
    <div style={{flex:1,minWidth:120}}>
      <div style={{
        height:h,borderRadius:10,background:MC.bg,border:`1px solid ${MC.line}`,
        display:'grid',placeItems:'center',position:'relative',overflow:'hidden',
      }}>{children}</div>
      {label && <div style={{fontSize:9,color:MC.ink3,fontFamily:MC.mono,marginTop:6,letterSpacing:0.5,textAlign:'center'}}>{label}</div>}
    </div>
  );
}

function FadeUpDemo() {
  return (
    <Demo label="FADE-UP · 240ms · ease-out">
      <div style={{display:'flex',flexDirection:'column',gap:6}}>
        {[0,1,2].map(i => (
          <div key={i} style={{
            width:80,height:14,borderRadius:4,background:MC.ember,opacity:0.7,
            animation:`anim-fade-up 1.6s infinite ${i*0.1}s`,
          }}/>
        ))}
      </div>
    </Demo>
  );
}

function PulseRingDemo() {
  return (
    <Demo label="LEAD PIN · pulse-ring 1.6s">
      <div style={{position:'relative',width:40,height:40}}>
        {[0,0.5,1].map(d => (
          <div key={d} style={{
            position:'absolute',inset:0,borderRadius:99,
            border:`2px solid ${MC.ember}`,
            animation:`anim-pulse-ring 1.6s infinite ease-out ${d}s`,
          }}/>
        ))}
        <div style={{position:'absolute',inset:'30%',borderRadius:99,background:MC.ember}}/>
      </div>
    </Demo>
  );
}

function ShimmerDemo() {
  return (
    <Demo label="SKELETON · shimmer 1.4s">
      <div style={{display:'flex',flexDirection:'column',gap:6,width:100}}>
        {[0.7,0.5,0.85].map((w,i) => (
          <div key={i} style={{
            height:8,borderRadius:4,width:`${w*100}%`,
            background:`linear-gradient(90deg, ${MC.bg2} 0%, ${MC.line} 50%, ${MC.bg2} 100%)`,
            backgroundSize:'200% 100%',
            animation:`anim-shimmer 1.4s infinite linear ${i*0.15}s`,
          }}/>
        ))}
      </div>
    </Demo>
  );
}

function SpinDemo() {
  return (
    <Demo label="SPIN · 800ms · linear">
      <div style={{
        width:30,height:30,borderRadius:99,
        border:`3px solid ${MC.line}`,borderTopColor:MC.ember,
        animation:'anim-spin 0.8s infinite linear',
      }}/>
    </Demo>
  );
}

function BounceInDemo() {
  return (
    <Demo label="BOUNCE-IN · 360ms · cubic">
      <div style={{
        width:44,height:44,borderRadius:99,background:MC.ok,
        display:'grid',placeItems:'center',
        animation:'anim-bounce-in 1.6s infinite',
      }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M5 12 L10 17 L19 7" stroke={MC.bg} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </Demo>
  );
}

function SlideUpDemo() {
  return (
    <Demo label="SHEET · slide-up 320ms">
      <div style={{position:'absolute',inset:0,padding:8}}>
        <div style={{height:'100%',background:MC.bg2,borderRadius:6,position:'relative',overflow:'hidden'}}>
          <div style={{
            position:'absolute',bottom:0,left:0,right:0,height:'60%',
            background:MC.bg1,borderTop:`1px solid ${MC.line}`,
            borderRadius:'10px 10px 0 0',
            animation:'anim-slide-up 1.4s infinite cubic-bezier(0.32, 0.72, 0, 1)',
          }}>
            <div style={{margin:'8px auto',width:24,height:3,borderRadius:99,background:MC.ink3}}/>
          </div>
        </div>
      </div>
    </Demo>
  );
}

function AIGlowDemo() {
  return (
    <Demo label="IRIS PILL · ai-glow 2.4s">
      <div style={{
        padding:'8px 14px',borderRadius:99,
        background:`linear-gradient(135deg, ${MC.ember}, #C43E04)`,
        color:'#0A0B0D',fontSize:11,fontWeight:700,
        animation:'anim-ai-glow 2.4s infinite ease-in-out',
        display:'flex',gap:6,alignItems:'center',
      }}>
        <span style={{width:6,height:6,borderRadius:99,background:'#0A0B0D'}}/>
        Iris is on the call
      </div>
    </Demo>
  );
}

function WaveDemo() {
  return (
    <Demo label="VOICE · wave-bar 480ms">
      <div style={{display:'flex',gap:3,alignItems:'center',height:32}}>
        {[0,1,2,3,4,5,6,7,8,9].map(i => (
          <div key={i} style={{
            width:3,height:24,background:MC.ember,borderRadius:2,
            animation:`anim-wave-bar 0.48s infinite ease-in-out ${(i%5)*0.08}s`,
          }}/>
        ))}
      </div>
    </Demo>
  );
}

function TypingDemo() {
  return (
    <Demo label="TYPING · 1.2s loop">
      <div style={{display:'flex',gap:5,alignItems:'center'}}>
        {[0,1,2].map(i => (
          <div key={i} style={{
            width:8,height:8,borderRadius:99,background:MC.ember300,
            animation:`anim-typing 1.2s infinite ${i*0.15}s`,
          }}/>
        ))}
      </div>
    </Demo>
  );
}

function PinDropDemo() {
  return (
    <Demo label="MAP PIN · drop 480ms">
      <div style={{position:'relative',width:80,height:80}}>
        <div style={{position:'absolute',bottom:8,left:'50%',transform:'translateX(-50%)',width:30,height:6,borderRadius:'50%',background:'rgba(0,0,0,0.4)',filter:'blur(2px)'}}/>
        <div style={{
          position:'absolute',bottom:8,left:'50%',marginLeft:-12,
          width:24,height:32,
          animation:'anim-pin-drop 1.6s infinite cubic-bezier(0.34,1.56,0.64,1)',
        }}>
          <svg viewBox="0 0 24 32" width="24" height="32">
            <path d="M12 0 C5 0 0 5 0 12 C0 22 12 32 12 32 C12 32 24 22 24 12 C24 5 19 0 12 0Z" fill={MC.ember}/>
            <circle cx="12" cy="12" r="4" fill="#0A0B0D"/>
          </svg>
        </div>
      </div>
    </Demo>
  );
}

function RouteDrawDemo() {
  return (
    <Demo label="ROUTE · stroke-draw 1.2s">
      <svg width="120" height="60" viewBox="0 0 120 60">
        <path d="M 10 50 Q 30 10, 60 30 Q 90 50, 110 10" fill="none" stroke={MC.ember} strokeWidth="3" strokeLinecap="round" strokeDasharray="200" style={{animation:'anim-route 2s infinite linear'}}/>
        <circle cx="10" cy="50" r="4" fill={MC.info}/>
        <circle cx="110" cy="10" r="5" fill={MC.ember}/>
      </svg>
    </Demo>
  );
}

function MoneyUpDemo() {
  return (
    <Demo label="REVENUE · count-up 600ms">
      <div style={{position:'relative',fontFamily:MC.mono,fontWeight:700}}>
        <div style={{fontSize:24,color:MC.ok}}>$48,294</div>
        <div style={{position:'absolute',right:-30,top:0,fontSize:11,color:MC.ok,animation:'anim-money-up 1.6s infinite ease-out'}}>+$589</div>
      </div>
    </Demo>
  );
}

function ConfettiDemo() {
  return (
    <Demo label="WIN · confetti 1.4s">
      <div style={{position:'relative',width:60,height:60}}>
        <div style={{position:'absolute',inset:0,borderRadius:99,background:MC.ok,display:'grid',placeItems:'center'}}>
          <svg width="30" height="30" viewBox="0 0 24 24"><path d="M5 12 L10 17 L19 7" stroke={MC.bg} strokeWidth="3" strokeLinecap="round" fill="none"/></svg>
        </div>
        {[0,1,2,3,4,5,6,7].map(i => (
          <div key={i} style={{
            position:'absolute',top:'50%',left:'50%',
            width:5,height:5,borderRadius:99,
            background:[MC.ember,MC.ok,MC.info,MC.warn][i%4],
            transform:`rotate(${i*45}deg)`,
            animation:`anim-confetti 1.4s infinite ease-out ${i*0.04}s`,
          }}/>
        ))}
      </div>
    </Demo>
  );
}

// ─── Easing visualizer ───────────────────────────────────
function EasingCurve({ name, cubic, color, d }) {
  return (
    <div style={{flex:1,minWidth:140,padding:14,background:MC.bg1,borderRadius:10,border:`1px solid ${MC.line}`}}>
      <svg width="100%" height="80" viewBox="0 0 120 80">
        <line x1="0" y1="70" x2="120" y2="70" stroke={MC.line} strokeWidth="0.5"/>
        <line x1="10" y1="0" x2="10" y2="80" stroke={MC.line} strokeWidth="0.5"/>
        <path d={d} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
      <div style={{fontSize:11,fontWeight:700,marginTop:6}}>{name}</div>
      <div style={{fontSize:9,color:MC.ink3,fontFamily:MC.mono,marginTop:2,letterSpacing:0.4}}>{cubic}</div>
    </div>
  );
}

// ─── Main spec doc ───────────────────────────────────────
function AnimationSpecs() {
  return (
    <div style={{width:'100%',minHeight:'100%',background:MC.bg,borderRadius:20,padding:40,fontFamily:'Geist, system-ui',color:MC.ink,position:'relative',overflow:'hidden'}}>
      <style>{KF}</style>
      <div style={{position:'absolute',top:-200,right:-200,width:500,height:500,borderRadius:'50%',background:'radial-gradient(circle, rgba(255,106,26,0.08), transparent 70%)'}}/>

      {/* Header */}
      <div style={{position:'relative',marginBottom:32}}>
        <div style={{fontSize:11,fontFamily:MC.mono,color:MC.ember300,letterSpacing:'0.15em'}}>MOTION DESIGN · v0.1</div>
        <div style={{fontSize:32,fontWeight:800,letterSpacing:'-0.03em',marginTop:6}}>Animation specs</div>
        <div style={{fontSize:13,color:MC.ink2,marginTop:4,maxWidth:600}}>Motion is structural — it tells you what just happened and what's about to happen. Every animation in RevnueX serves one of three jobs: confirm, anticipate, or reveal.</div>
      </div>

      {/* Principles */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginBottom:36}}>
        {[
          ['01','Confirm','Acknowledge user input within 100ms. Tap → press-down. Toggle → state change.','#FFC542'],
          ['02','Anticipate','Show the system is working. Iris glow during call. Skeleton while loading.',MC.info],
          ['03','Reveal','New info arrives with motion. Pin pulses. Sheet slides up. Money counts.',MC.ok],
        ].map(([n,t,d,c])=>(
          <div key={n} style={{padding:18,background:MC.bg1,borderRadius:14,border:`1px solid ${MC.line}`,position:'relative',overflow:'hidden'}}>
            <div style={{position:'absolute',top:0,left:0,width:3,height:'100%',background:c}}/>
            <div style={{fontSize:10,fontFamily:MC.mono,color:c,letterSpacing:1}}>{n}</div>
            <div style={{fontSize:18,fontWeight:700,marginTop:6,letterSpacing:'-0.01em'}}>{t}</div>
            <div style={{fontSize:11,color:MC.ink2,marginTop:6,lineHeight:1.5}}>{d}</div>
          </div>
        ))}
      </div>

      {/* Timing scale */}
      <div style={{marginBottom:36}}>
        <div style={{fontSize:11,fontFamily:MC.mono,color:MC.ink2,letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:12}}>TIMING SCALE</div>
        <div style={{display:'flex',gap:0,background:MC.bg1,borderRadius:12,border:`1px solid ${MC.line}`,overflow:'hidden'}}>
          {[
            ['80','micro','Press feedback'],
            ['160','fast','Toggle, chip select'],
            ['240','base','Most UI · fade-up, slide'],
            ['320','medium','Sheet, modal'],
            ['480','slow','Map pan, route draw'],
            ['800','epic','Confetti, success'],
          ].map(([ms,n,d],i)=>(
            <div key={ms} style={{flex:1,padding:'14px 16px',borderLeft:i?`1px solid ${MC.line}`:'none',position:'relative'}}>
              <div style={{fontSize:24,fontWeight:800,fontFamily:MC.mono,color:i===2?MC.ember:MC.ink,letterSpacing:-1}}>{ms}<span style={{fontSize:10,color:MC.ink3,fontWeight:400}}>ms</span></div>
              <div style={{fontSize:10,fontFamily:MC.mono,color:MC.ember300,letterSpacing:0.6,textTransform:'uppercase',marginTop:2}}>{n}</div>
              <div style={{fontSize:10,color:MC.ink2,marginTop:4}}>{d}</div>
              {i===2 && <div style={{position:'absolute',top:6,right:6,fontSize:8,color:MC.ember,fontFamily:MC.mono,letterSpacing:0.5}}>★ DEFAULT</div>}
            </div>
          ))}
        </div>
      </div>

      {/* Easing curves */}
      <div style={{marginBottom:36}}>
        <div style={{fontSize:11,fontFamily:MC.mono,color:MC.ink2,letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:12}}>EASING CURVES</div>
        <div style={{display:'flex',gap:12}}>
          <EasingCurve name="ease-out" cubic="cubic-bezier(0, 0, 0.2, 1)" color={MC.ember} d="M 10 70 C 30 70, 50 10, 110 10"/>
          <EasingCurve name="ease-out-back" cubic="cubic-bezier(0.34, 1.56, 0.64, 1)" color={MC.info} d="M 10 70 C 40 70, 60 -10, 110 10"/>
          <EasingCurve name="ease-in-out" cubic="cubic-bezier(0.4, 0, 0.2, 1)" color={MC.ok} d="M 10 70 C 50 70, 70 10, 110 10"/>
          <EasingCurve name="linear" cubic="linear" color={MC.warn} d="M 10 70 L 110 10"/>
          <EasingCurve name="apple-spring" cubic="cubic-bezier(0.32, 0.72, 0, 1)" color={MC.ember300} d="M 10 70 C 20 70, 35 5, 110 10"/>
        </div>
        <div style={{fontSize:10,color:MC.ink3,marginTop:8,fontFamily:MC.mono,letterSpacing:0.4}}>
          Default for entries: <span style={{color:MC.ember}}>ease-out</span> · sheets &amp; modals: <span style={{color:MC.ember300}}>apple-spring</span> · loops: <span style={{color:MC.warn}}>linear</span>
        </div>
      </div>

      {/* Pattern catalog */}
      <div style={{marginBottom:36}}>
        <div style={{fontSize:11,fontFamily:MC.mono,color:MC.ink2,letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:12}}>PATTERN CATALOG · live</div>
        <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
          <FadeUpDemo/>
          <BounceInDemo/>
          <SlideUpDemo/>
          <ShimmerDemo/>
          <SpinDemo/>
          <PulseRingDemo/>
          <PinDropDemo/>
          <RouteDrawDemo/>
          <AIGlowDemo/>
          <WaveDemo/>
          <TypingDemo/>
          <ConfettiDemo/>
          <MoneyUpDemo/>
        </div>
      </div>

      {/* Hero moments */}
      <div style={{marginBottom:36}}>
        <div style={{fontSize:11,fontFamily:MC.mono,color:MC.ink2,letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:12}}>HERO MOMENTS · the 5 animations that sell the product</div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:14}}>
          {[
            ['Lead pin lands','dispatch map','New call: pin drops + 3-ring pulse for 4s. Map auto-pans to it. Subtle haptic on owner phone.','480ms drop · 1.6s loop'],
            ['Iris listening','call audio','Bottom pill glows 0.3 → 0.6 → 0.3 box-shadow over 2.4s. Voice waveform inside renders live transcription.','2.4s loop'],
            ['Money lands','dashboard / paid','Job paid: revenue card flashes ember, +$589 floats up, total counter ticks digit-by-digit over 600ms.','600ms ease-out'],
            ['Tech ETA shrinks','customer track','ETA number transitions every 30s. Old digit slides up + fades; new slides in from below. Like a flipboard.','320ms apple-spring'],
            ['Estimate approval','tech tablet','Customer signs: green sweep across the signature line, card lifts 4px, success-ring expands behind.','480ms cubic'],
          ].map(([t,where,desc,timing])=>(
            <div key={t} style={{padding:16,background:MC.bg1,borderRadius:12,border:`1px solid ${MC.line}`}}>
              <div style={{display:'flex',alignItems:'flex-start',gap:10,marginBottom:6}}>
                <div style={{flex:1}}>
                  <div style={{fontSize:14,fontWeight:700}}>{t}</div>
                  <div style={{fontSize:9,fontFamily:MC.mono,color:MC.ember300,letterSpacing:0.6,textTransform:'uppercase',marginTop:2}}>{where}</div>
                </div>
                <div style={{padding:'4px 8px',background:MC.bg2,borderRadius:6,fontSize:9,fontFamily:MC.mono,color:MC.ink2,letterSpacing:0.4,whiteSpace:'nowrap'}}>{timing}</div>
              </div>
              <div style={{fontSize:11,color:MC.ink2,lineHeight:1.5}}>{desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Reduced motion + perf rules */}
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
        <div style={{padding:18,background:'rgba(255,197,66,0.06)',borderRadius:12,border:'1px solid rgba(255,197,66,0.2)'}}>
          <div style={{fontSize:11,fontFamily:MC.mono,color:MC.warn,letterSpacing:'0.12em',textTransform:'uppercase'}}>PREFERS-REDUCED-MOTION</div>
          <div style={{fontSize:14,fontWeight:700,marginTop:6}}>Always respect the system flag</div>
          <div style={{fontSize:11,color:MC.ink2,lineHeight:1.6,marginTop:6}}>
            Replace transforms with cross-fades · swap pulse-rings for static dots · keep skeletons (they're info, not motion) · keep confetti below 1.4s. Test with macOS Reduce Motion + iOS Settings → Accessibility.
          </div>
        </div>
        <div style={{padding:18,background:'rgba(43,210,122,0.06)',borderRadius:12,border:'1px solid rgba(43,210,122,0.2)'}}>
          <div style={{fontSize:11,fontFamily:MC.mono,color:MC.ok,letterSpacing:'0.12em',textTransform:'uppercase'}}>PERFORMANCE RULES</div>
          <div style={{fontSize:14,fontWeight:700,marginTop:6}}>Animate transform + opacity only</div>
          <div style={{fontSize:11,color:MC.ink2,lineHeight:1.6,marginTop:6}}>
            Never animate width/height/top/left — paint cost. Use will-change sparingly. Cap concurrent animations at 5. Pause map-pan + ambient glows when battery &lt; 20%.
          </div>
        </div>
      </div>

      {/* Footer / version */}
      <div style={{marginTop:32,paddingTop:20,borderTop:`1px solid ${MC.line}`,display:'flex',justifyContent:'space-between',fontSize:10,color:MC.ink3,fontFamily:MC.mono,letterSpacing:0.5}}>
        <span>REVNUEX · MOTION SPEC v0.1 · APR 2025</span>
        <span>13 PATTERNS · 5 HERO MOMENTS · 6 TIMINGS</span>
      </div>
    </div>
  );
}

window.AnimationSpecs = AnimationSpecs;
