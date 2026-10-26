import { Link } from "react-router-dom"
import { brand } from "../../config/brand"

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return <Link to="/about" className={`brand-logo ${compact ? "brand-logo--compact" : ""}`} aria-label="EzzyRids home">
    {brand.logo ? <img src={brand.logo} alt="EzzyRids" /> : <><span className="brand-mark">e</span><span>Ezzy<span className="brand-light">Rids</span></span></>}
  </Link>
}
