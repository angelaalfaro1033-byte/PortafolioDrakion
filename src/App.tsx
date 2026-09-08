import React, { useState, useEffect } from 'react'
import { useI18n } from './i18n'
import dragonMascotImg from '@/imports/ChatGPT_Image_13_ago_2026__09_46_17-removebg-preview.png'
import logoImg from '@/imports/Recurso-2.png'
import isotipoImg from '@/imports/cropped-Dragon-2.png'

type SectionId = 'quienes' | 'como' | 'modelo' | 'lineas' | 'experiencia' | 'clientes' | 'gestion' | 'tecnologias' | 'contacto'

const C = {
  navy: '#071947',
  navyMid: '#0d2460',
  navyLight: '#1a3480',
  blue: '#2A3EF4',
  blueGlass: 'rgba(42,62,244,0.1)',
  blueBorder: 'rgba(42,62,244,0.28)',
  pink: '#FF004F',
  pinkGlass: 'rgba(255,0,79,0.1)',
  pinkBorder: 'rgba(255,0,79,0.28)',
  // Text palette: high contrast on the navy background, with clear hierarchy.
  secondary: '#D1D5DB',
  tertiary: '#A1A1AA',
  lavender: '#D1D5DB',
  white: '#ffffff',
  border: 'rgba(255,255,255,0.1)',
}

// ─────────────────────────────────────────────
// Drakion logo — real brand asset (white version)
// ─────────────────────────────────────────────
function DrakionLogo({ scale = 1 }: { scale?: number }) {
  return (
    <img
      src={logoImg}
      alt="Drakion Tech"
      style={{ height: 38 * scale, width: 'auto', display: 'block', objectFit: 'contain' }}
    />
  )
}

// Isotipo solo (dragon head badge)
function DragonBadge({ size = 36 }: { size?: number }) {
  return (
    <img
      src={isotipoImg}
      alt="Drakion isotipo"
      width={size}
      height={size}
      style={{ objectFit: 'contain', display: 'block' }}
    />
  )
}

// ─────────────────────────────────────────────
// Dragon mascot — real brand asset
// ─────────────────────────────────────────────
function DragonMascot({ size = 280, style }: { size?: number; style?: React.CSSProperties }) {
  return (
    <img
      src={dragonMascotImg}
      alt="Drakion Tech mascot dragon"
      width={size}
      height={size}
      style={{ objectFit: 'contain', display: 'block', ...style }}
    />
  )
}

function LanguageSelector() {
  const { language, setLanguage, t } = useI18n()
  const flags = { es: '🇨🇴', en: '🇺🇸' } as const
  return (
    <div aria-label={t('language.label')} style={{ display: 'flex', alignItems: 'center', padding: '4px', border: `1px solid ${C.border}`, borderRadius: '9px', background: 'rgba(7,25,71,0.82)', backdropFilter: 'blur(12px)', flexShrink: 0 }}>
      {(['es', 'en'] as const).map((option, index) => (
        <React.Fragment key={option}>
          {index > 0 && <span aria-hidden="true" style={{ width: '1px', height: '17px', background: 'rgba(228,229,242,0.2)', margin: '0 2px' }} />}
          <button type="button" onClick={() => setLanguage(option)} aria-pressed={language === option}
            style={{ border: 'none', borderRadius: '6px', padding: '6px 9px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', color: C.white, background: language === option ? C.pink : 'transparent', transition: 'all 0.2s' }}>
            <span aria-hidden="true" style={{ fontSize: '14px', lineHeight: 1 }}>{flags[option]}</span>
            <span>{t(`language.${option}`)}</span>
          </button>
        </React.Fragment>
      ))}
    </div>
  )
}

// ─────────────────────────────────────────────
// Section icon map
// ─────────────────────────────────────────────
function SectionIcon({ id, size = 26 }: { id: SectionId; size?: number }) {
  const p = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  const map: Record<SectionId, React.ReactElement> = {
    quienes: <svg {...p}><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>,
    como: <svg {...p}><circle cx="12" cy="12" r="3" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5.6 5.6l1.4 1.4M16.9 16.9l1.5 1.5M5.6 18.4l1.4-1.4M16.9 7.1l1.5-1.5" /></svg>,
    modelo: <svg {...p}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
    lineas: <svg {...p}><rect x="3" y="3" width="8" height="8" rx="1" /><rect x="13" y="3" width="8" height="8" rx="1" /><rect x="3" y="13" width="8" height="8" rx="1" /><rect x="13" y="13" width="8" height="8" rx="1" /></svg>,
    experiencia: <svg {...p}><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20" /><path d="M2 12h20" /></svg>,
    clientes: <svg {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
    gestion: <svg {...p}><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>,
    tecnologias: <svg {...p}><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
    contacto: <svg {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.47 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6.29 6.29l.8-.8a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
  }
  return map[id]
}

// ─────────────────────────────────────────────
// Background decoration layer
// ─────────────────────────────────────────────
function BgDecor() {
  return (
    <>
      {/* Dot grid */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, backgroundImage: 'radial-gradient(circle, rgba(228,229,242,0.07) 1px, transparent 1px)', backgroundSize: '26px 26px' }} />
      {/* Top-right stripes */}
      <div style={{ position: 'fixed', top: 18, right: 26, zIndex: 0, pointerEvents: 'none', display: 'flex', gap: '6px', transform: 'rotate(-28deg)', transformOrigin: 'top right' }}>
        {[C.navyLight, C.navyMid, 'rgba(228,229,242,0.35)'].map((c, i) => (
          <div key={i} style={{ width: '10px', height: '62px', borderRadius: '5px', background: c, opacity: 1 - i * 0.18 }} />
        ))}
      </div>
      {/* Bottom-left stripes */}
      <div style={{ position: 'fixed', bottom: 18, left: 18, zIndex: 0, pointerEvents: 'none', display: 'flex', gap: '6px', transform: 'rotate(-28deg)', transformOrigin: 'bottom left' }}>
        {[C.pink, C.navyMid, C.navyLight].map((c, i) => (
          <div key={i} style={{ width: '10px', height: '56px', borderRadius: '5px', background: c, opacity: 1 - i * 0.2 }} />
        ))}
      </div>
      {/* Dot cluster right */}
      <div style={{ position: 'fixed', right: 22, top: '42%', zIndex: 0, pointerEvents: 'none' }}>
        {[0, 1, 2, 3, 4].map(r => (
          <div key={r} style={{ display: 'flex', gap: '9px', marginBottom: '9px' }}>
            {[0, 1, 2].map(c => (
              <div key={c} style={{ width: '4px', height: '4px', borderRadius: '50%', background: C.lavender, opacity: 0.18 - (r + c) * 0.015 }} />
            ))}
          </div>
        ))}
      </div>
      {/* Ghost dragon watermark */}
      <div style={{ position: 'fixed', right: '-10%', top: '-2%', zIndex: 0, pointerEvents: 'none', opacity: 0.06 }}>
        <DragonMascot size={520} />
      </div>
    </>
  )
}

// ─────────────────────────────────────────────
// Shared: back button
// ─────────────────────────────────────────────
function BackBtn({ onClick }: { onClick: () => void }) {
  const { t } = useI18n()
  const [h, setH] = useState(false)
  return (
    <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: 'flex', alignItems: 'center', gap: '7px', background: h ? C.pinkGlass : 'rgba(255,255,255,0.06)', border: `1px solid ${h ? C.pinkBorder : C.border}`, borderRadius: '8px', color: h ? C.white : C.lavender, fontWeight: 500, fontSize: '14px', padding: '8px 16px', cursor: 'pointer', transition: 'all 0.2s' }}>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M19 12H5M12 5l-7 7 7 7" />
      </svg>
      {t('navigation.back')}
    </button>
  )
}

// Section panel top bar
function SectionBar({ id, onBack }: { id: SectionId; onBack: () => void }) {
  const { t } = useI18n()
  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 20, background: 'rgba(7,25,71,0.94)', backdropFilter: 'blur(14px)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '14px 32px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
      <BackBtn onClick={onBack} />
      <div style={{ width: '1px', height: '22px', background: 'rgba(255,255,255,0.1)' }} />
      <div style={{ color: C.white }}><SectionIcon id={id} size={20} /></div>
      <span style={{ fontWeight: 600, fontSize: '16px', color: C.white }}>{t(`navigation.${id}`)}</span>
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '18px' }}>
        <LanguageSelector />
        <DrakionLogo scale={0.82} />
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// COVER SCREEN
// ─────────────────────────────────────────────
function CoverScreen({ onExplore }: { onExplore: () => void }) {
  const { t } = useI18n()
  const [btnH, setBtnH] = useState(false)
  return (
    <div style={{ position: 'relative', minHeight: '100vh', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 48px 60px' }}>
      <div style={{ position: 'absolute', top: 18, right: 24 }}>
        <LanguageSelector />
      </div>
      {/* Chevrons top-right */}
      <div style={{ position: 'absolute', top: 20, right: 108, display: 'flex', gap: '3px', opacity: 0.16 }}>
        {[0, 1, 2, 3].map(i => (
          <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ opacity: 1 - i * 0.22 }}>
            <path d="M9 18l6-6-6-6" stroke={C.lavender} strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '60px', maxWidth: '1100px', width: '100%' }}>
        {/* Dragon */}
        <div className="anim-float" style={{ flexShrink: 0, filter: 'drop-shadow(0 24px 44px rgba(42,62,244,0.14))' }}>
          <DragonMascot size={265} />
        </div>

        {/* Text */}
        <div style={{ flex: 1 }}>
          <div className="anim-fade-up" style={{ animationDelay: '0.05s', fontWeight: 600, fontSize: '13px', letterSpacing: '0.22em', color: C.pink, textTransform: 'uppercase', marginBottom: '18px' }}>
            {t('cover.eyebrow')}
          </div>

          <div className="anim-fade-up" style={{ animationDelay: '0.12s', marginBottom: '18px' }}>
            <h1 style={{ fontWeight: 800, fontSize: 'clamp(38px, 5.4vw, 72px)', color: C.white, lineHeight: 1.0, margin: 0 }}>
              {t('cover.title1')}
            </h1>
            <h1 style={{ fontWeight: 300, fontSize: 'clamp(38px, 5.4vw, 72px)', color: C.lavender, lineHeight: 1.0, margin: 0, opacity: 0.85 }}>
              {t('cover.title2')}
            </h1>
          </div>

          <div className="anim-fade-up" style={{ animationDelay: '0.22s', marginBottom: '44px' }}>
            <p style={{ fontWeight: 500, fontSize: 'clamp(15px, 1.5vw, 17px)', color: C.white, margin: '0 0 5px', lineHeight: 1.5 }}>
              {t('cover.lead')}
            </p>
            <p style={{ fontWeight: 400, fontSize: 'clamp(15px, 1.5vw, 17px)', color: C.secondary, margin: '0 0 18px', opacity: 1, lineHeight: 1.5 }}>
              {t('cover.description')}
            </p>
          </div>

          <div className="anim-fade-up" style={{ animationDelay: '0.32s' }}>
            <button
              onClick={onExplore}
              onMouseEnter={() => setBtnH(true)}
              onMouseLeave={() => setBtnH(false)}
              style={{ fontWeight: 700, fontSize: '15px', letterSpacing: '0.13em', textTransform: 'uppercase', color: C.white, background: `linear-gradient(135deg, ${C.pink}, #d4003a)`, border: 'none', borderRadius: '10px', padding: '15px 34px', cursor: 'pointer', transition: 'all 0.25s', transform: btnH ? 'translateY(-3px) scale(1.02)' : 'none', boxShadow: btnH ? '0 14px 40px rgba(255,0,79,0.52)' : '0 6px 22px rgba(255,0,79,0.3)', display: 'inline-flex', alignItems: 'center', gap: '11px' }}>
              {t('cover.cta')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 22, left: '50%', transform: 'translateX(-50%)' }}>
        <DrakionLogo scale={0.8} />
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// MENU SCREEN
// ─────────────────────────────────────────────
const MENU: Array<{ id: Exclude<SectionId, 'contacto'>; accent: 'blue' | 'pink' }> = [
  { id: 'quienes', accent: 'blue' }, { id: 'como', accent: 'blue' }, { id: 'modelo', accent: 'blue' },
  { id: 'lineas', accent: 'pink' }, { id: 'experiencia', accent: 'blue' }, { id: 'clientes', accent: 'blue' },
  { id: 'gestion', accent: 'blue' }, { id: 'tecnologias', accent: 'pink' },
]

function MenuCard({ item, hov, setHov, onSelect }: {
  item: typeof MENU[0]; hov: boolean
  setHov: (id: SectionId | null) => void; onSelect: (id: SectionId) => void
}) {
  const { t } = useI18n()
  const isPink = item.accent === 'pink'
  return (
    <button
      onClick={() => onSelect(item.id)}
      onMouseEnter={() => setHov(item.id)}
      onMouseLeave={() => setHov(null)}
      style={{ background: hov ? (isPink ? C.pinkGlass : C.blueGlass) : 'rgba(255,255,255,0.04)', border: `1px solid ${hov ? (isPink ? C.pinkBorder : C.blueBorder) : C.border}`, borderRadius: '14px', padding: '22px 18px', cursor: 'pointer', textAlign: 'left', transition: 'all 0.22s ease', transform: hov ? 'translateY(-4px)' : 'none', boxShadow: hov ? `0 14px 36px ${isPink ? 'rgba(255,0,79,0.16)' : 'rgba(42,62,244,0.16)'}` : 'none', display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
      <div style={{ color: hov ? (isPink ? C.pink : C.blue) : C.lavender, opacity: hov ? 1 : 0.62, transition: 'all 0.22s' }}>
        <SectionIcon id={item.id} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 600, fontSize: '14px', color: C.white, lineHeight: 1.3 }}>{t(`navigation.${item.id}`)}</div>
        <div style={{ fontSize: '13px', color: C.tertiary, opacity: 1, marginTop: '3px' }}>{t(`menu.${item.id}`)}</div>
      </div>
      <div style={{ color: isPink ? C.pink : C.blue, opacity: hov ? 1 : 0, transform: hov ? 'translateX(0)' : 'translateX(-5px)', transition: 'all 0.22s' }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  )
}

function MenuScreen({ onSelect }: { onSelect: (id: SectionId) => void }) {
  const { t } = useI18n()
  const [hov, setHov] = useState<SectionId | null>(null)
  const [hovContact, setHovContact] = useState(false)
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 24px 40px', position: 'relative', zIndex: 1 }}>
      <div style={{ position: 'absolute', top: 20, left: 26 }}>
        <DrakionLogo scale={0.88} />
      </div>
      <div style={{ position: 'absolute', top: 18, right: 24 }}>
        <LanguageSelector />
      </div>

      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h2 style={{ fontWeight: 700, fontSize: 'clamp(24px, 3.2vw, 34px)', color: C.white, margin: '0 0 7px' }}>
          {t('menu.title')}
        </h2>
        <p style={{ fontSize: '15px', color: C.secondary, opacity: 1, margin: 0 }}>
          {t('menu.description')}
        </p>
      </div>

      {/* 3x3 grid with center logo */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '13px', maxWidth: '840px', width: '100%' }}>
        {MENU.slice(0, 3).map(item => (
          <MenuCard key={item.id} item={item} hov={hov === item.id} setHov={setHov} onSelect={onSelect} />
        ))}
        <MenuCard item={MENU[3]} hov={hov === MENU[3].id} setHov={setHov} onSelect={onSelect} />
        {/* Center: dragon logo */}
        <div style={{ background: 'rgba(42,62,244,0.07)', border: '1px solid rgba(42,62,244,0.17)', borderRadius: '14px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '9px', padding: '14px' }}>
          <div className="anim-float" style={{ display: 'flex', justifyContent: 'center' }}>
            <DragonMascot size={76} />
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: 700, fontSize: '12px', color: C.white }}>Drakion Tech</div>
            <div style={{ fontWeight: 300, fontSize: '10px', color: C.pink, letterSpacing: '0.2em' }}>{t('menu.portfolio')}</div>
          </div>
        </div>
        <MenuCard item={MENU[4]} hov={hov === MENU[4].id} setHov={setHov} onSelect={onSelect} />
        {MENU.slice(5).map(item => (
          <MenuCard key={item.id} item={item} hov={hov === item.id} setHov={setHov} onSelect={onSelect} />
        ))}
      </div>

      {/* Contacto — wide bottom card */}
      <div style={{ maxWidth: '840px', width: '100%', marginTop: '13px' }}>
        <button
          onClick={() => onSelect('contacto')}
          onMouseEnter={() => setHovContact(true)}
          onMouseLeave={() => setHovContact(false)}
          style={{ width: '100%', background: hovContact ? C.pinkGlass : 'rgba(255,255,255,0.04)', border: `1px solid ${hovContact ? C.pinkBorder : C.border}`, borderRadius: '14px', padding: '18px 24px', cursor: 'pointer', transition: 'all 0.22s', transform: hovContact ? 'translateY(-2px)' : 'none', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ color: hovContact ? C.pink : C.lavender, opacity: hovContact ? 1 : 0.6, transition: 'all 0.22s' }}>
            <SectionIcon id="contacto" />
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 600, fontSize: '14px', color: C.white }}>{t('navigation.contacto')}</div>
            <div style={{ fontSize: '13px', color: C.tertiary, opacity: 1, marginTop: '2px' }}>{t('menu.contact')}</div>
          </div>
          <div style={{ marginLeft: 'auto', color: C.pink, opacity: hovContact ? 1 : 0, transition: 'all 0.22s' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </button>
      </div>

      {/* Chevron hint */}
      <div style={{ position: 'absolute', right: '4%', top: '50%', transform: 'translateY(-50%)', display: 'flex', gap: '3px', opacity: 0.12 }}>
        {[0, 1, 2].map(i => (
          <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ opacity: 1 - i * 0.3 }}>
            <path d="M9 18l6-6-6-6" stroke={C.lavender} strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        ))}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// SECTION PANEL WRAPPER
// ─────────────────────────────────────────────
function SectionPanel({ id, onBack }: { id: SectionId; onBack: () => void }) {
  const ContentMap: Record<SectionId, () => React.ReactElement> = {
    quienes: QuienesSomos, como: ComoLoHacemos, modelo: ModeloServicio,
    lineas: LineasNegocio, experiencia: ExperienciaAlianzas, clientes: ClientesAlianzas,
    gestion: GestionProyectos, tecnologias: TecnologiasHerramientas, contacto: Contacto,
  }
  const Content = ContentMap[id]
  return (
    <div className="anim-panel" style={{ position: 'fixed', inset: 0, background: C.navy, zIndex: 10, overflowY: 'auto' }}>
      <div style={{ position: 'fixed', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(228,229,242,0.055) 1px, transparent 1px)', backgroundSize: '26px 26px', pointerEvents: 'none', zIndex: 0 }} />
      <SectionBar id={id} onBack={onBack} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Content />
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// SECTION: Quiénes somos
// ─────────────────────────────────────────────
function QuienesSomos() {
  const { t } = useI18n()
  const [expanded, setExpanded] = useState<string | null>(null)
  const cards = [
    {
      id: 'vision', title: t('about.vision.title'),
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="3" /><path d="M12 5C7.25 5 3.09 8.13 2 12c1.09 3.87 5.25 7 10 7s8.91-3.13 10-7c-1.09-3.87-5.25-7-10-7z" /></svg>,
      preview: t('about.vision.preview'), content: t('about.vision.content')
    },
    {
      id: 'mision', title: t('about.mission.title'),
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
      preview: t('about.mission.preview'), content: t('about.mission.content')
    },
    {
      id: 'valores', title: t('about.values.title'),
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
      preview: t('about.values.preview'), content: t('about.values.content')
    },
  ]
  return (
    <div style={{ padding: '48px 40px', maxWidth: '1080px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>
        <div>
          <h2 style={{ fontWeight: 300, fontSize: '36px', color: C.white, margin: '0 0 6px' }}>
            {t('about.title1')} <span style={{ color: C.pink, fontWeight: 700 }}>{t('about.title2')}</span>
          </h2>
          <p style={{ fontSize: '15px', color: C.tertiary, opacity: 1, marginBottom: '28px' }}>
            {t('common.selectCard')}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
            {cards.map(card => {
              const open = expanded === card.id
              return (
                <button key={card.id} onClick={() => setExpanded(open ? null : card.id)}
                  style={{ background: open ? 'rgba(10,24,80,0.9)' : 'rgba(255,255,255,0.04)', border: `1px solid ${open ? C.blueBorder : C.border}`, borderRadius: '12px', padding: '18px', cursor: 'pointer', textAlign: 'left', transition: 'all 0.3s', width: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ background: open ? C.blue : 'rgba(42,62,244,0.14)', borderRadius: '10px', padding: '10px', color: open ? C.white : C.blue, transition: 'all 0.3s', flexShrink: 0 }}>
                      {card.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: '16px', color: C.white }}>{card.title}</div>
                      <div style={{ fontSize: '14px', color: C.tertiary, opacity: 1, marginTop: '2px' }}>{card.preview}</div>
                    </div>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={C.lavender} strokeWidth="2" strokeLinecap="round" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s', opacity: 0.55, flexShrink: 0 }}>
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                  {open && (
                    <div style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px solid rgba(42,62,244,0.2)', fontSize: '16px', color: C.secondary, lineHeight: 1.75, animation: 'fadeInUp 0.3s ease' }}>
                      {card.content}
                    </div>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        <div>
          <div style={{ background: 'rgba(42,62,244,0.07)', border: '1px solid rgba(42,62,244,0.16)', borderRadius: '16px', padding: '30px', marginBottom: '24px' }}>
            <p style={{ fontSize: '18px', lineHeight: 1.85, color: C.white, margin: 0 }}>
              {t('about.statement')}
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', opacity: 0.55 }}>
            <DragonMascot size={170} />
          </div>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// SECTION: Cómo lo hacemos
// ─────────────────────────────────────────────
function ComoLoHacemos() {
  const { t, list } = useI18n()
  const [hov, setHov] = useState<number | null>(null)
  const caps = [
    { label: 'Optimización de procesos', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><circle cx="12" cy="12" r="3" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5.6 5.6l1.4 1.4M16.9 16.9l1.5 1.5M5.6 18.4l1.4-1.4M16.9 7.1l1.5-1.5" /></svg> },
    { label: 'Escalabilidad y flexibilidad', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg> },
    { label: 'Seguridad de la información', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> },
    { label: 'Desarrollo de aplicaciones web y móviles', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg> },
    { label: 'Acceso y disponibilidad', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><circle cx="12" cy="20" r="1" fill="currentColor" /></svg> },
    { label: 'Experiencia de usuario', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg> },
    { label: 'Funciones interactivas', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg> },
    { label: 'Investigación de nuevas tecnologías y metodologías', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg> },
  ].map((cap, index) => ({ ...cap, label: list('how.capabilities')[index] }))
  return (
    <div style={{ padding: '48px 40px', maxWidth: '1080px', margin: '0 auto' }}>
      <h2 style={{ fontWeight: 300, fontSize: '36px', color: C.white, margin: '0 0 28px' }}>
        {t('how.title1')} <span style={{ color: C.pink, fontWeight: 700 }}>{t('how.title2')}</span>
      </h2>
      <div style={{ background: 'rgba(228,229,242,0.04)', border: '1px solid rgba(228,229,242,0.09)', borderRadius: '16px', padding: '26px', marginBottom: '40px' }}>
        <p style={{ fontSize: '17px', lineHeight: 1.9, color: C.secondary, margin: 0 }}>
          {t('how.description')}
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px' }}>
        {caps.map((cap, i) => (
          <div key={i} onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}
            style={{ background: hov === i ? C.blueGlass : 'rgba(255,255,255,0.04)', border: `1px solid ${hov === i ? C.blueBorder : C.border}`, borderRadius: '13px', padding: '22px 14px', textAlign: 'center', transition: 'all 0.22s', transform: hov === i ? 'translateY(-4px)' : 'none' }}>
            <div style={{ color: hov === i ? C.blue : C.lavender, opacity: hov === i ? 1 : 0.6, transition: 'all 0.22s', marginBottom: '12px', display: 'flex', justifyContent: 'center' }}>
              {cap.icon}
            </div>
            <div style={{ fontSize: '14px', fontWeight: 500, color: hov === i ? C.white : C.secondary, lineHeight: 1.4, transition: 'color 0.22s' }}>{cap.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// SECTION: Modelo de servicio
// ─────────────────────────────────────────────
function ModeloServicio() {
  const { t } = useI18n()
  const [active, setActive] = useState<number | null>(null)
  const pillars = [
    {
      title: t('model.pillars.0.title'), desc: t('model.pillars.0.description'),
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2" /><path d="M9 7l2 2 4-4" /></svg>
    },
    {
      title: t('model.pillars.1.title'), desc: t('model.pillars.1.description'),
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
    },
    {
      title: t('model.pillars.2.title'), desc: t('model.pillars.2.description'),
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" /><path d="M13 2.05A10 10 0 0 1 22 12" /><path d="M18 15l4 4-4 4" /><line x1="22" y1="19" x2="14" y2="19" /></svg>
    },
  ]
  return (
    <div style={{ padding: '48px 40px', maxWidth: '1080px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: '60px', alignItems: 'start' }}>
        <div>
          <div style={{ background: C.navyMid, borderRadius: '16px', padding: '36px 32px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px', opacity: 0.7 }}>
              <DragonMascot size={130} />
            </div>
            <h2 style={{ fontWeight: 300, fontSize: '30px', color: C.white, margin: '0 0 12px', lineHeight: 1.2 }}>
              {t('model.title1')} <br /><span style={{ fontWeight: 700 }}>{t('model.title2')}</span>
            </h2>
            <p style={{ fontSize: '16px', color: C.secondary, opacity: 1, margin: 0, lineHeight: 1.6 }}>
              {t('model.description')}
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '8px' }}>
          {pillars.map((p, i) => {
            const open = active === i
            return (
              <div key={i} onClick={() => setActive(open ? null : i)}
                style={{ background: open ? 'rgba(42,62,244,0.1)' : 'rgba(255,255,255,0.04)', border: `1px solid ${open ? C.blueBorder : C.border}`, borderRadius: '14px', padding: '22px', cursor: 'pointer', transition: 'all 0.28s', transform: open ? 'translateX(6px)' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  {/* Dot connector */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0', flexShrink: 0 }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', border: `2px solid ${open ? C.blue : 'rgba(42,62,244,0.4)'}`, background: open ? C.blue : 'transparent', transition: 'all 0.28s' }} />
                  </div>
                  <div style={{ color: open ? C.blue : C.lavender, opacity: open ? 1 : 0.55, transition: 'all 0.28s', flexShrink: 0 }}>
                    {p.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '16px', color: C.white, lineHeight: 1.3 }}>{p.title}</div>
                    {open && (
                      <div style={{ fontSize: '15px', color: C.secondary, lineHeight: 1.7, marginTop: '10px', animation: 'fadeInUp 0.3s ease' }}>
                        {p.desc}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// SECTION: Líneas de negocio
// ─────────────────────────────────────────────
function DrakionTapFeature() {
  const { t } = useI18n()
  const steps = [
    { label: t('tap.steps.0'), icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="12" rx="2" /><path d="M7 10h5M7 14h8" /></svg> },
    { label: t('tap.steps.1'), icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M4 9c1.7-1.7 3-2.5 4-2.5M4 15c1.7 1.7 3 2.5 4 2.5" /></svg> },
    { label: t('tap.steps.2'), icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M8 12h8M12 8v8" /></svg> },
  ]

  return (
    <aside aria-label="Drakion Tap" style={{ marginTop: '30px', marginBottom: '30px', background: 'rgba(42,62,244,0.07)', border: `1px solid ${C.blueBorder}`, borderRadius: '16px', padding: '24px 26px', overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'absolute', width: '170px', height: '170px', borderRadius: '50%', background: 'rgba(255,0,79,0.06)', right: '-70px', top: '-75px', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', display: 'flex', gap: '28px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 420px', minWidth: 'min(100%, 280px)' }}>
          <div style={{ color: C.pink, fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '8px' }}>{t('tap.eyebrow')}</div>
          <h3 style={{ color: C.white, fontWeight: 700, fontSize: '23px', lineHeight: 1.2, margin: '0 0 8px' }}>{t('tap.title')}</h3>
          <p style={{ color: C.secondary, fontSize: '14px', lineHeight: 1.65, margin: 0, maxWidth: '570px' }}>{t('tap.description')}</p>
        </div>

        <div style={{ flex: '1 1 330px', minWidth: 'min(100%, 280px)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          {steps.map((step, index) => (
            <React.Fragment key={step.label}>
              <div style={{ minWidth: 0, flex: 1, maxWidth: '112px', textAlign: 'center' }}>
                <div style={{ width: '42px', height: '42px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: index === 1 ? C.pink : C.blue, background: index === 1 ? C.pinkGlass : C.blueGlass, border: `1px solid ${index === 1 ? C.pinkBorder : C.blueBorder}`, borderRadius: '11px', marginBottom: '8px' }}>{step.icon}</div>
                <div style={{ color: C.secondary, fontSize: '11px', lineHeight: 1.35 }}>{step.label}</div>
              </div>
              {index < steps.length - 1 && (
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.lavender} strokeWidth="1.8" strokeLinecap="round" style={{ flexShrink: 0, opacity: 0.55 }}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </aside>
  )
}

function LineasNegocio() {
  const { t, list } = useI18n()
  const [active, setActive] = useState<number | null>(null)
  const lines = [
    {
      title: 'Desarrollo de software ágil y personalizado',
      items: ['Aplicaciones web y móviles.', 'Integraciones tecnológicas adaptadas a cada entorno operativo.'],
      image: new URL('./imports/Desarrollode softwareAgil.png', import.meta.url).href,
      accent: C.blue,
    },
    {
      title: 'Staff Augmentation',
      items: ['Provisión de talento para proyectos puntuales.', 'Escalabilidad de equipos según las necesidades del proyecto.'],
      image: new URL('./imports/Staff.png', import.meta.url).href,
      accent: C.blue,
    },
    {
      title: 'Soluciones Low-Cost',
      items: ['Servicios accesibles para PYMES y startups.', 'Desarrollo optimizado para una inversión inicial controlada.'],
      image: new URL('./imports/Low-cost.png', import.meta.url).href,
      accent: C.pink,
    },
    {
      title: 'Inteligencia Artificial y Ciencia de Datos',
      items: ['Modelos predictivos y analíticos.', 'Automatización de procesos.'],
      image: new URL('./imports/CienciadeDatos.png', import.meta.url).href,
      accent: C.blue,
    },
    {
      title: 'Asesoría en Apropiación Digital',
      items: ['Capacitación en nuevas tecnologías.', 'Acompañamiento para la adopción de herramientas digitales.'],
      image: new URL('./imports/asesoria.png', import.meta.url).href,
      accent: C.pink,
    },
    {
      title: 'Soporte gestionado 24/7 y alta confiabilidad',
      items: [
        'Monitoreo y soporte continuo para garantizar la operación de los servicios.',
        'Atención 24/7 orientada a la continuidad, disponibilidad y confiabilidad tecnológica.',
      ],
      image: new URL('./imports/soporte.png', import.meta.url).href,
      accent: C.blue,
    },
  ].map((line, index) => ({ ...line, title: t(`business.lines.${index}.title`), items: list(`business.lines.${index}.items`) }))
  return (
    <div style={{ padding: '48px 40px', maxWidth: '1080px', margin: '0 auto' }}>
      <h2 style={{ fontWeight: 300, fontSize: '36px', color: C.white, margin: '0 0 8px' }}>
        {t('business.title1')} <span style={{ color: C.pink, fontWeight: 700 }}>{t('business.title2')}</span>
      </h2>
      <p style={{ fontSize: '15px', color: C.tertiary, opacity: 1, marginBottom: '36px' }}>
        {t('common.selectLine')}
      </p>
      <DrakionTapFeature />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '14px' }}>
        {lines.map((line, i) => {
          const open = active === i
          const isPink = line.accent === C.pink
          return (
            <div key={i} onClick={() => setActive(open ? null : i)}
              style={{ background: open ? (isPink ? C.pinkGlass : C.blueGlass) : 'rgba(255,255,255,0.04)', border: `1px solid ${open ? (isPink ? C.pinkBorder : C.blueBorder) : C.border}`, borderRadius: '16px', padding: '26px', cursor: 'pointer', transition: 'all 0.28s', transform: open ? 'scale(1.02)' : 'none', boxShadow: open ? `0 14px 40px ${isPink ? 'rgba(255,0,79,0.16)' : 'rgba(42,62,244,0.16)'}` : 'none' }}>
              <div style={{ marginBottom: '16px' }}>
                <img src={line.image} alt={line.title} style={{ width: '120px', height: '120px', objectFit: 'contain', display: 'block' }} />
              </div>
              <div style={{ fontWeight: 700, fontSize: '15px', color: C.white, lineHeight: 1.35, marginBottom: open ? '14px' : '0' }}>
                {line.title}
              </div>
              {open && (
                <div style={{ animation: 'fadeInUp 0.3s ease' }}>
                  <div style={{ width: '32px', height: '2px', background: line.accent, margin: '12px 0', borderRadius: '1px' }} />
                  <ul style={{ margin: 0, paddingLeft: '18px' }}>
                    {line.items.map((item, j) => (
                      <li key={j} style={{ fontSize: '15px', color: C.secondary, lineHeight: 1.7, marginBottom: '4px' }}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div style={{ marginTop: '14px', fontSize: '12px', color: C.white, opacity: open ? 1 : 0.72, fontWeight: 500, display: 'flex', alignItems: 'center', gap: '4px' }}>
                {open ? t('common.close') : t('common.details')}
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d={open ? 'M6 9l6 6 6-6' : 'M9 18l6-6-6-6'} />
                </svg>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// SECTION: Experiencia y alianzas
// ─────────────────────────────────────────────
function ExperienciaAlianzas() {
  const { t, list } = useI18n()
  const [hovInd, setHovInd] = useState<number | null>(null)
  const industries = [
    { name: 'Seguros', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> },
    { name: 'Agro', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 22V12M12 12C12 7 17 3 17 3s0 9-5 9zM12 12C12 7 7 3 7 3s0 9 5 9z" /></svg> },
    { name: 'Hidrocarburos', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg> },
    { name: 'Tecnología', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg> },
    { name: 'Salud', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg> },
    { name: 'Educación', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg> },
    { name: 'Retail', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg> },
    { name: 'Servicios financieros', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg> },
  ].map((industry, index) => ({ ...industry, name: list('experience.industries')[index] }))
  return (
    <div style={{ padding: '48px 40px', maxWidth: '1080px', margin: '0 auto' }}>
      <h2 style={{ fontWeight: 300, fontSize: '34px', color: C.white, margin: '0 0 32px' }}>
        {t('experience.title1')} <span style={{ color: C.pink, fontWeight: 700 }}>{t('experience.title2')}</span>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '44px' }}>
        <div>
          <div style={{ background: 'rgba(42,62,244,0.07)', border: '1px solid rgba(42,62,244,0.16)', borderRadius: '16px', padding: '28px', marginBottom: '20px' }}>
            <p style={{ fontSize: '15px', lineHeight: 1.85, color: C.white, margin: 0 }}>
              {t('experience.description1')}
            </p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${C.border}`, borderRadius: '16px', padding: '28px' }}>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: C.secondary, margin: 0, opacity: 1 }}>
              {t('experience.description2')}
            </p>
          </div>
        </div>
        <div>
          <div style={{ fontWeight: 600, fontSize: '14px', color: C.tertiary, opacity: 1, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
            {t('experience.industriesTitle')}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {industries.map((ind, i) => (
              <div key={i} onMouseEnter={() => setHovInd(i)} onMouseLeave={() => setHovInd(null)}
                style={{ display: 'flex', alignItems: 'center', gap: '10px', background: hovInd === i ? C.blueGlass : 'rgba(255,255,255,0.04)', border: `1px solid ${hovInd === i ? C.blueBorder : C.border}`, borderRadius: '10px', padding: '12px 14px', transition: 'all 0.2s', cursor: 'default' }}>
                <div style={{ color: hovInd === i ? C.blue : C.lavender, opacity: hovInd === i ? 1 : 0.55, transition: 'all 0.2s', flexShrink: 0 }}>{ind.icon}</div>
                <span style={{ fontSize: '13px', fontWeight: 500, color: hovInd === i ? C.white : C.secondary, transition: 'color 0.2s' }}>{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// SECTION: Clientes y alianzas
// ─────────────────────────────────────────────
function ClientesAlianzas() {
  const { t } = useI18n()
  const [hov, setHov] = useState<string | null>(null)
  const clientes = [
    { name: 'Advance The Next Level', logo: new URL('./imports/Advance.png', import.meta.url).href },
    { name: 'RES Resource Energy Solutions', logo: new URL('./imports/Res.png', import.meta.url).href },
    { name: 'BairesDev', logo: new URL('./imports/BairesDev.png', import.meta.url).href },
    { name: 'US MED', logo: new URL('./imports/Usmed.png', import.meta.url).href },
    { name: 'Inversiones y Planes de La Paz', logo: new URL('./imports/InversionesPaz.png', import.meta.url).href },
    { name: 'CoverWallet', logo: new URL('./imports/Coverwallet.png', import.meta.url).href },
    { name: 'Soft Soluciones', logo: new URL('./imports/SoftSoluciones.png', import.meta.url).href },
    { name: 'Infobase', logo: new URL('./imports/Infobase.png', import.meta.url).href },
    { name: 'Soluciones Móviles Areamovil', logo: new URL('./imports/AreaMovil.png', import.meta.url).href },
    { name: 'FI Group', logo: new URL('./imports/FiGroup.png', import.meta.url).href },
    { name: 'Deloitte', logo: new URL('./imports/Deloitte.png', import.meta.url).href },
    { name: 'OrthoFi', logo: new URL('./imports/Orthofi.png', import.meta.url).href },
    { name: 'Terrassil', logo: new URL('./imports/Terrasil.png', import.meta.url).href },
    { name: 'Cámara de Comercio de Ibagué', logo: new URL('./imports/CamaraComercio.png', import.meta.url).href },
  ]
  const alianzas = [
    { name: 'Cámara de Comercio de Ibagué', logo: new URL('./imports/CamaraComercio.png', import.meta.url).href },
    { name: 'Universidad de Ibagué', logo: new URL('./imports/UniversidadIbague.png', import.meta.url).href },
    { name: 'Excelsior', logo: new URL('./imports/excelsior.png', import.meta.url).href },
  ]
  const ClientCard = ({ name, logo, id }: { name: string; logo: string; id: string }) => (
    <div onMouseEnter={() => setHov(id)} onMouseLeave={() => setHov(null)}
      style={{ background: hov === id ? C.blueGlass : 'rgba(255,255,255,0.05)', border: `1px solid ${hov === id ? C.blueBorder : C.border}`, borderRadius: '10px', padding: '18px', minHeight: '130px', transition: 'transform 0.2s, background 0.2s, border-color 0.2s, box-shadow 0.2s', transform: hov === id ? 'scale(1.025)' : 'scale(1)', boxShadow: hov === id ? `0 8px 24px ${C.blueGlass}` : 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src={logo} alt={name} style={{ width: '100%', height: '92px', objectFit: 'contain', display: 'block' }} />
    </div>
  )
  return (
    <div style={{ padding: '48px 40px', maxWidth: '1080px', margin: '0 auto' }}>
      <h2 style={{ fontWeight: 300, fontSize: '34px', color: C.white, margin: '0 0 36px' }}>
        {t('common.clients')} <span style={{ color: C.pink, fontWeight: 700 }}>{t('common.partnerships').toLowerCase()}</span>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '36px' }}>
        <div>
          <div style={{ fontWeight: 600, fontSize: '13px', color: C.tertiary, opacity: 1, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '14px' }}>
            {t('common.clients')} — {clientes.length}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(138px, 1fr))', gap: '10px' }}>
            {clientes.map((c, i) => <ClientCard key={i} name={c.name} logo={c.logo} id={`c-${i}`} />)}
          </div>
        </div>
        <div>
          <div style={{ fontWeight: 600, fontSize: '13px', color: C.tertiary, opacity: 1, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '14px' }}>
            {t('common.partnerships')}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(138px, 1fr))', gap: '10px' }}>
            {alianzas.map((a, i) => <ClientCard key={i} name={a.name} logo={a.logo} id={`a-${i}`} />)}
          </div>
          <div style={{ marginTop: '32px', background: 'rgba(255,0,79,0.07)', border: `1px solid ${C.pinkBorder}`, borderRadius: '12px', padding: '20px' }}>
            <div style={{ fontWeight: 700, fontSize: '28px', color: C.pink, lineHeight: 1 }}>14</div>
            <div style={{ fontSize: '13px', color: C.secondary, opacity: 1, marginTop: '4px' }}>{t('common.activeClients')}</div>
            <div style={{ width: '100%', height: '1px', background: 'rgba(255,0,79,0.15)', margin: '14px 0' }} />
            <div style={{ fontWeight: 700, fontSize: '28px', color: C.white, lineHeight: 1 }}>3</div>
            <div style={{ fontSize: '13px', color: C.secondary, opacity: 1, marginTop: '4px' }}>{t('common.strategicPartnerships')}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// SECTION: Gestión de proyectos
// ─────────────────────────────────────────────
function GestionProyectos() {
  const { t, list } = useI18n()
  const [hov, setHov] = useState<number | null>(null)
  const benefits = [
    {
      title: 'Gestión de riesgos y costos',
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
      accent: C.blue,
    },
    {
      title: 'Transparencia en la gestión',
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>,
      accent: C.pink,
    },
    {
      title: 'Calidad y cumplimiento de plazos',
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><path d="M9 16l2 2 4-4" /></svg>,
      accent: C.blue,
    },
    {
      title: 'Ciclo de vida de un proyecto de desarrollo web',
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>,
      accent: C.pink,
    },
  ].map((benefit, index) => ({ ...benefit, title: list('projects.benefits')[index] }))
  return (
    <div style={{ padding: '48px 40px', maxWidth: '1080px', margin: '0 auto' }}>
      <h2 style={{ fontWeight: 300, fontSize: '34px', color: C.white, margin: '0 0 10px' }}>
        {t('projects.title1')} <br />
        <span style={{ color: C.pink, fontWeight: 700 }}>{t('projects.title2')}</span>
      </h2>
      <p style={{ fontSize: '15px', color: C.secondary, opacity: 1, marginBottom: '36px', lineHeight: 1.7, maxWidth: '680px' }}>
        {t('projects.description')}
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        {benefits.map((b, i) => {
          const isPink = b.accent === C.pink
          return (
            <div key={i} onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}
              style={{ display: 'flex', alignItems: 'center', gap: '18px', background: hov === i ? (isPink ? C.pinkGlass : C.blueGlass) : 'rgba(255,255,255,0.04)', border: `1px solid ${hov === i ? (isPink ? C.pinkBorder : C.blueBorder) : C.border}`, borderRadius: '14px', padding: '22px', transition: 'all 0.22s', transform: hov === i ? 'translateY(-3px)' : 'none', cursor: 'default' }}>
              <div style={{ color: hov === i ? b.accent : C.lavender, opacity: hov === i ? 1 : 0.58, transition: 'all 0.22s', flexShrink: 0, background: hov === i ? (isPink ? C.pinkGlass : C.blueGlass) : 'rgba(255,255,255,0.06)', borderRadius: '12px', padding: '12px' }}>
                {b.icon}
              </div>
              <div style={{ fontWeight: 600, fontSize: '14px', color: hov === i ? C.white : C.lavender, lineHeight: 1.4, transition: 'color 0.22s' }}>
                {b.title}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// SECTION: Tecnologías y herramientas
// ─────────────────────────────────────────────
function TecnologiasHerramientas() {
  const { t, list } = useI18n()
  const [hovTech, setHovTech] = useState<string | null>(null)
  const [activeGroup, setActiveGroup] = useState<string | null>(null)

  const groups = [
    {
      name: 'IA & Data',
      techs: [
        { name: 'Artificial Intelligence', logo: new URL('./imports/AI.png', import.meta.url).href },
        { name: 'Machine Learning', logo: new URL('./imports/MachineLearning.png', import.meta.url).href },
        { name: 'Data Science', logo: new URL('./imports/DataScience.png', import.meta.url).href },
        { name: 'Power BI', logo: new URL('./imports/PowerBi.png', import.meta.url).href },
      ],
    },
    {
      name: 'Infraestructura & Cloud',
      techs: [
        { name: 'Kubernetes', logo: new URL('./imports/Kubernetes.png', import.meta.url).href },
        { name: 'Docker', logo: new URL('./imports/docker.png', import.meta.url).href },
        { name: 'AWS', logo: new URL('./imports/aws.png', import.meta.url).href },
        { name: 'Google Cloud', logo: new URL('./imports/GoogleCloud.png', import.meta.url).href },
      ],
    },
    {
      name: 'Backend & Lenguajes',
      techs: [
        { name: 'Go', logo: new URL('./imports/go.png', import.meta.url).href },
        { name: 'Java', logo: new URL('./imports/java.png', import.meta.url).href },
        { name: 'Python', logo: new URL('./imports/python.png', import.meta.url).href },
        { name: 'Microsoft .NET', logo: new URL('./imports/MicrosoftNet.png', import.meta.url).href },
        { name: 'Spring', logo: new URL('./imports/spring.png', import.meta.url).href },
        { name: 'Node.js', logo: new URL('./imports/NodeJs.png', import.meta.url).href },
        { name: 'SQL', logo: new URL('./imports/Sql.png', import.meta.url).href },
      ],
    },
    {
      name: 'Frontend & Móvil',
      techs: [
        { name: 'Angular', logo: new URL('./imports/angular.png', import.meta.url).href },
        { name: 'React', logo: new URL('./imports/react.png', import.meta.url).href },
        { name: 'Flutter', logo: new URL('./imports/flutter.png', import.meta.url).href },
        { name: 'Android', logo: new URL('./imports/developers.png', import.meta.url).href },
      ],
    },
  ]

  const translatedGroups = groups.map((group, index) => ({ ...group, name: list('technology.groups')[index] }))
  const allTechs = translatedGroups.flatMap(g => g.techs)
  const displayGroups = activeGroup ? translatedGroups.filter(g => g.name === activeGroup) : translatedGroups

  return (
    <div style={{ padding: '48px 40px', maxWidth: '1080px', margin: '0 auto' }}>
      <h2 style={{ fontWeight: 300, fontSize: '34px', color: C.white, margin: '0 0 10px' }}>
        {t('technology.title1')} <span style={{ color: C.pink, fontWeight: 700 }}>{t('technology.title2')}</span>
      </h2>
      <p style={{ fontSize: '15px', color: C.secondary, opacity: 1, marginBottom: '12px', lineHeight: 1.7, maxWidth: '720px' }}>
        {t('technology.description')}
      </p>

      {/* Filter chips */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
        <button onClick={() => setActiveGroup(null)}
          style={{ fontWeight: 600, fontSize: '13px', color: activeGroup === null ? C.white : C.secondary, background: activeGroup === null ? C.blue : 'rgba(255,255,255,0.06)', border: `1px solid ${activeGroup === null ? C.blue : C.border}`, borderRadius: '20px', padding: '6px 14px', cursor: 'pointer', transition: 'all 0.2s' }}>
          {t('common.all')} — {allTechs.length}
        </button>
        {translatedGroups.map(g => (
          <button key={g.name} onClick={() => setActiveGroup(activeGroup === g.name ? null : g.name)}
            style={{ fontWeight: 500, fontSize: '13px', color: activeGroup === g.name ? C.white : C.secondary, background: activeGroup === g.name ? C.pink : 'rgba(255,255,255,0.06)', border: `1px solid ${activeGroup === g.name ? C.pink : C.border}`, borderRadius: '20px', padding: '6px 14px', cursor: 'pointer', transition: 'all 0.2s' }}>
            {g.name}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {displayGroups.map(group => (
          <div key={group.name}>
            <div style={{ fontSize: '13px', fontWeight: 600, color: C.white, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '10px', opacity: 1 }}>
              {group.name}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 132px), 1fr))', gap: '12px' }}>
              {group.techs.map(tech => {
                const isHov = hovTech === tech.name
                return (
                  <div key={tech.name}
                    aria-label={tech.name}
                    onMouseEnter={() => setHovTech(tech.name)}
                    onMouseLeave={() => setHovTech(null)}
                    style={{ aspectRatio: '1 / 1', minHeight: '118px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px', background: isHov ? C.blueGlass : 'rgba(255,255,255,0.06)', border: `1px solid ${isHov ? C.pinkBorder : C.border}`, borderRadius: '12px', boxShadow: isHov ? `0 8px 24px ${C.blueGlass}` : 'none', transition: 'transform 0.22s ease, border-color 0.22s ease, background 0.22s ease, box-shadow 0.22s ease', cursor: 'default', transform: isHov ? 'translateY(-3px) scale(1.025)' : 'none' }}>
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', opacity: isHov ? 1 : 0.9, transition: 'opacity 0.22s ease, transform 0.22s ease', transform: isHov ? 'scale(1.05)' : 'none' }}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// SECTION: Contacto
// ─────────────────────────────────────────────
function Contacto() {
  const { t } = useI18n()
  const [hovContact, setHovContact] = useState<number | null>(null)
  const items = [
    { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" /></svg>, label: t('contact.phone'), value: '(+57) 311 885 2679' },
    { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>, label: t('contact.email'), value: 'contacto@drakiontech.com' },
    { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>, label: t('contact.location'), value: t('contact.locationValue') },
    { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20" /><path d="M2 12h20" /></svg>, label: t('contact.website'), value: 'www.drakiontech.com' },
  ]
  const contactLinks = [
    'https://api.whatsapp.com/send/?phone=573118852679&text=Hola%2C+me+gustar%C3%ADa+obtener+m%C3%A1s+informaci%C3%B3n+sobre+sus+servicios&type=phone_number&app_absent=0',
    'https://mail.google.com/mail/u/0/?fs=1&to=contacto@drakiontech.com&tf=cm',
    'https://maps.app.goo.gl/P46udin1trMNifJeA',
    'https://www.drakiontech.com',
  ]
  return (
    <div style={{ padding: '48px 40px', maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontWeight: 300, fontSize: '34px', color: C.white, margin: '0 0 10px' }}>
            {t('contact.title')}
          </h2>
          <p style={{ fontSize: '16px', color: C.secondary, opacity: 1, marginBottom: '36px', lineHeight: 1.75 }}>
            {t('contact.description')}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {items.map((item, i) => {
              const isHov = hovContact === i
              return (
              <a key={i} href={contactLinks[i]} target="_blank" rel="noopener noreferrer" aria-label={`Abrir ${item.label}: ${item.value} en una nueva pestaña`}
                onMouseEnter={() => setHovContact(i)}
                onMouseLeave={() => setHovContact(null)}
                style={{ display: 'flex', alignItems: 'center', gap: '16px', background: isHov ? C.blueGlass : 'rgba(255,255,255,0.05)', border: `1px solid ${isHov ? C.blueBorder : C.border}`, borderRadius: '12px', padding: '16px 20px', textDecoration: 'none', cursor: 'pointer', transform: isHov ? 'translateY(-2px)' : 'none', transition: 'transform 0.2s ease, border-color 0.2s ease, background 0.2s ease' }}>
                <div style={{ color: C.blue, flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: '12px', color: C.tertiary, opacity: 1, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{item.label}</div>
                  <div style={{ fontSize: '15px', fontWeight: 500, color: C.white, marginTop: '2px' }}>{item.value}</div>
                </div>
              </a>
              )
            })}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
          <div style={{ opacity: 0.7 }}>
            <DragonMascot size={210} />
          </div>
          <div style={{ textAlign: 'center' }}>
            <DrakionLogo scale={1.3} />
          </div>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// ROOT APP
// ─────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState<'cover' | 'menu'>('cover')
  const [section, setSection] = useState<SectionId | null>(null)

  useEffect(() => {
    if (section || screen === 'menu') {
      document.body.style.overflow = section ? 'hidden' : 'auto'
    }
    return () => { document.body.style.overflow = 'auto' }
  }, [section, screen])

  return (
    <div style={{ minHeight: '100vh', background: C.navy, color: C.white, position: 'relative' }}>
      <BgDecor />

      {screen === 'cover' && (
        <CoverScreen onExplore={() => setScreen('menu')} />
      )}

      {screen === 'menu' && !section && (
        <MenuScreen onSelect={id => setSection(id)} />
      )}

      {section && (
        <SectionPanel id={section} onBack={() => setSection(null)} />
      )}
    </div>
  )
}
