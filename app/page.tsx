'use client';

import { useState } from 'react';
import { ArrowRight, Check, ChevronDown, CircleCheck, Globe2, LockKeyhole, Menu, ShieldCheck, Sparkles, X, Zap } from 'lucide-react';

const features = [
  { icon: ShieldCheck, title: 'Privacy without compromise', text: 'Strong encryption, a privacy-first architecture, and automatic protection on untrusted networks.' },
  { icon: Zap, title: 'Built for speed', text: 'Smart routing helps choose a fast nearby server so streaming, gaming, and browsing stay responsive.' },
  { icon: Globe2, title: 'Worldwide access', text: 'Switch locations in seconds across a global server network designed for stability and performance.' },
];

const faqs = [
  ['What does AegisVPN protect?', 'AegisVPN encrypts traffic between your device and the VPN server, helping protect data on public Wi-Fi and reducing exposure of your IP address.'],
  ['Will a VPN slow down my internet?', 'Every VPN adds some overhead, but the service is designed around fast protocols and smart server selection to keep the impact low.'],
  ['How many devices can I use?', 'The Pro plan is presented for up to 10 devices, so one subscription can cover your main phones, tablets, and computers.'],
  ['Can I cancel anytime?', 'Monthly subscriptions can be canceled at any time. Annual plans remain active until the end of the paid billing period.'],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [annual, setAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const price = annual ? '$4.99' : '$9.99';

  return (
    <main>
      <div className="ambient ambientOne" />
      <div className="ambient ambientTwo" />

      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="AegisVPN home">
          <span className="brandMark"><ShieldCheck size={20} /></span>
          <span>Aegis<span>VPN</span></span>
        </a>
        <div className="navLinks">
          <a href="#features">Features</a>
          <a href="#network">Network</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="navActions">
          <a className="login" href="#pricing">Log in</a>
          <a className="button small" href="#pricing">Get AegisVPN</a>
        </div>
        <button className="menuButton" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {menuOpen && (
        <div className="mobileMenu shell">
          <a onClick={() => setMenuOpen(false)} href="#features">Features</a>
          <a onClick={() => setMenuOpen(false)} href="#network">Network</a>
          <a onClick={() => setMenuOpen(false)} href="#pricing">Pricing</a>
          <a onClick={() => setMenuOpen(false)} href="#faq">FAQ</a>
          <a className="button" href="#pricing">Get AegisVPN</a>
        </div>
      )}

      <section id="top" className="hero shell">
        <div className="heroCopy">
          <div className="eyebrow"><Sparkles size={15} /> Private by design. Fast by default.</div>
          <h1>Your internet.<br/><span>Protected everywhere.</span></h1>
          <p>Stay private, stream freely, and browse with confidence on every network. One elegant VPN for all your devices.</p>
          <div className="heroActions">
            <a className="button" href="#pricing">Get protected <ArrowRight size={18}/></a>
            <a className="textLink" href="#features">See how it works <ArrowRight size={16}/></a>
          </div>
          <div className="microTrust">
            <span><CircleCheck size={16}/> 30-day guarantee</span>
            <span><CircleCheck size={16}/> Privacy-first</span>
            <span><CircleCheck size={16}/> Up to 10 devices</span>
          </div>
        </div>

        <div className="heroVisual" aria-label="VPN dashboard preview">
          <div className="orbital orbitalA" />
          <div className="orbital orbitalB" />
          <div className="dashboard glass">
            <div className="windowDots"><i/><i/><i/></div>
            <div className="secureIcon"><LockKeyhole size={24}/></div>
            <div className="statusLabel">PROTECTED</div>
            <h3>Your connection is secure</h3>
            <div className="connectionRow">
              <div className="server"><span className="flag">🇨🇭</span><div><b>Switzerland</b><small>Zurich · Fastest server</small></div></div>
              <div className="latency"><i/> 18 ms</div>
            </div>
            <div className="statsGrid">
              <div><small>DOWNLOAD</small><b>486 <span>Mbps</span></b></div>
              <div><small>UPLOAD</small><b>112 <span>Mbps</span></b></div>
              <div><small>PROTOCOL</small><b>WireGuard</b></div>
            </div>
            <button className="disconnect">Disconnect</button>
          </div>
          <div className="floatCard cardA glass"><Zap size={17}/><span><b>Optimized</b><small>Fastest route active</small></span></div>
          <div className="floatCard cardB glass"><ShieldCheck size={17}/><span><b>Threat Shield</b><small>Trackers blocked</small></span></div>
        </div>
      </section>

      <section className="trust shell">
        <span>Engineered for modern privacy</span>
        <div><b>Secure</b><b>Fast</b><b>Private</b><b>Global</b><b>Simple</b></div>
      </section>

      <section id="features" className="section shell">
        <div className="sectionHeading center">
          <div className="eyebrow">EVERYTHING YOU NEED</div>
          <h2>Security that stays out of your way.</h2>
          <p>Powerful protection, designed to feel effortless from the first click.</p>
        </div>
        <div className="featureGrid">
          {features.map(({ icon: Icon, title, text }) => (
            <article className="featureCard" key={title}>
              <div className="iconBox"><Icon /></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#pricing">Learn more <ArrowRight size={15}/></a>
            </article>
          ))}
        </div>
      </section>

      <section id="network" className="networkWrap">
        <div className="section shell networkGrid">
          <div className="networkCopy">
            <div className="eyebrow">GLOBAL NETWORK</div>
            <h2>A fast connection,<br/>wherever life takes you.</h2>
            <p>Choose from strategically placed regions around the world. AegisVPN finds a fast route and lets you switch locations in seconds.</p>
            <div className="networkStats">
              <div><b>70+</b><span>Countries</span></div>
              <div><b>1,500+</b><span>Servers</span></div>
              <div><b>99.99%</b><span>Uptime target</span></div>
            </div>
            <a className="button outline" href="#pricing">Explore the network <ArrowRight size={17}/></a>
          </div>
          <div className="mapCard">
            <div className="mapGrid" />
            {[[22,34],[33,46],[47,28],[55,53],[68,38],[76,60],[83,27],[62,70]].map(([left,top],i)=><span key={i} className="mapDot" style={{left:`${left}%`,top:`${top}%`}}><i/></span>)}
            <div className="mapLabel labelUs">United States <small>24 locations</small></div>
            <div className="mapLabel labelEu">Europe <small>31 countries</small></div>
          </div>
        </div>
      </section>

      <section id="pricing" className="section shell pricingSection">
        <div className="sectionHeading center">
          <div className="eyebrow">SIMPLE PRICING</div>
          <h2>One plan. Everything protected.</h2>
          <p>No confusing tiers. Get every core security feature on every device.</p>
        </div>
        <div className="billingToggle">
          <button className={!annual ? 'active' : ''} onClick={() => setAnnual(false)}>Monthly</button>
          <button className={annual ? 'active' : ''} onClick={() => setAnnual(true)}>Yearly <span>Save 50%</span></button>
        </div>
        <div className="priceCard">
          <div className="popular">MOST POPULAR</div>
          <div className="priceLeft">
            <div className="brand mini"><span className="brandMark"><ShieldCheck size={18}/></span><span>Aegis<span>VPN</span> Pro</span></div>
            <p>Complete privacy and performance for all your devices.</p>
            <div className="price"><sup>$</sup>{price.replace('$','').split('.')[0]}<span>.{price.split('.')[1]}</span></div>
            <small>{annual ? '/mo, billed yearly' : '/month'}</small>
          </div>
          <div className="priceDivider"/>
          <div className="priceRight">
            {['Unlimited high-speed VPN','Access to every server location','Threat & tracker blocking','Kill switch protection','Up to 10 devices','Priority support'].map(item => <div key={item}><span className="check"><Check size={14}/></span>{item}</div>)}
            <a className="button priceButton" href="mailto:hello@example.com?subject=AegisVPN%20signup">Start your protection <ArrowRight size={17}/></a>
            <small>30-day money-back guarantee</small>
          </div>
        </div>
      </section>

      <section className="ctaWrap shell">
        <div className="cta">
          <div><div className="eyebrow light">READY WHEN YOU ARE</div><h2>Make every connection a private one.</h2><p>Join the next generation of simple, high-speed online privacy.</p></div>
          <a className="button lightButton" href="#pricing">Get AegisVPN <ArrowRight size={17}/></a>
        </div>
      </section>

      <section id="faq" className="section shell faqSection">
        <div className="sectionHeading center"><div className="eyebrow">QUESTIONS, ANSWERED</div><h2>Everything you need to know.</h2></div>
        <div className="faqList">
          {faqs.map(([q,a],i) => (
            <article className={openFaq === i ? 'faq open' : 'faq'} key={q}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)}><span>{q}</span><ChevronDown size={20}/></button>
              {openFaq === i && <p>{a}</p>}
            </article>
          ))}
        </div>
      </section>

      <footer>
        <div className="shell footerGrid">
          <div><div className="brand"><span className="brandMark"><ShieldCheck size={20}/></span><span>Aegis<span>VPN</span></span></div><p>Private by design.<br/>Fast by default.</p></div>
          <div><b>Product</b><a href="#features">Features</a><a href="#network">Network</a><a href="#pricing">Pricing</a></div>
          <div><b>Company</b><a href="#faq">FAQ</a><a href="mailto:hello@example.com">Support</a><a href="#top">About</a></div>
          <div><b>Legal</b><a href="#top">Privacy</a><a href="#top">Terms</a><a href="#top">Security</a></div>
        </div>
        <div className="shell footerBottom"><span>© 2026 AegisVPN. All rights reserved.</span><span><ShieldCheck size={13}/> Privacy-first infrastructure</span></div>
      </footer>
    </main>
  );
}
