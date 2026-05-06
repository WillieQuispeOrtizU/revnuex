// Shared toolbar + nav for the split mockup files.
// Adds a small header pill with title and a back button to the index.
(function(){
  function makeToolbar(label){
    const wrap = document.createElement('div');
    wrap.style.cssText = 'position:fixed;top:16px;left:16px;z-index:1000;display:flex;gap:8px;align-items:center;padding:6px 6px 6px 14px;background:rgba(255,255,255,0.95);border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,0.1);backdrop-filter:blur(8px);font-family:-apple-system,BlinkMacSystemFont,system-ui,sans-serif;font-size:12px;';
    wrap.innerHTML = `
      <a href="../RevnueX Mockup Index.html" style="text-decoration:none;color:#5a4a2a;font-weight:600;display:flex;align-items:center;gap:6px;">← Index</a>
      <span style="width:1px;height:18px;background:rgba(0,0,0,0.1);"></span>
      <span style="font-weight:600;color:#0A0B0D;">${label}</span>
      <button id="toggleAnno" style="margin-left:8px;padding:6px 12px;border-radius:8px;background:transparent;border:none;cursor:pointer;font-size:12px;font-weight:600;color:#5a4a2a;">Show notes</button>
    `;
    document.body.appendChild(wrap);
    document.body.classList.add('no-anno');
    wrap.querySelector('#toggleAnno').addEventListener('click', (e) => {
      document.body.classList.toggle('no-anno');
      e.target.textContent = document.body.classList.contains('no-anno') ? 'Show notes' : 'Hide notes';
    });
  }
  window.__mockupToolbar = makeToolbar;
})();
