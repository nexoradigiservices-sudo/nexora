"use client";
import { useState } from "react";

export function ChatWidget(){
  const [open,setOpen] = useState(false);
  return (
    <div style={{position:'fixed',right:20,bottom:20,zIndex:80}}>
      {open && (
        <div className="glass" style={{width:320,maxWidth:'calc(100vw - 40px)'}}>
          <strong>Chat with us</strong>
          <p style={{color:'var(--muted)'}}>Ask about pricing, timelines, or schedule a strategy call.</p>
          <div style={{display:'flex',gap:8}}>
            <a className="btn primary" href="/contact">Message</a>
            <a className="btn ghost" href="https://wa.me/9025110370">WhatsApp</a>
          </div>
        </div>
      )}
      <button onClick={()=>setOpen(v=>!v)} style={{marginTop:8,padding:12,borderRadius:12,background:'var(--accent)',border:'none',color:'#021024',fontWeight:700}}>💬</button>
    </div>
  );
}
