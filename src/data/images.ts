// ===== Imagens (CDN Unsplash – substituir pelas fotos reais da IPSO) =====
// Fotos dos exames ficam em public/images/exames (banco de imagens livre):
//   clinico, acuidade-visual, ecg, raio-x, toxicologico → Pexels (licença Pexels, uso livre)
//   audiometria → Wikimedia Commons "Exame de Audiometria.jpg" (CC0)
//   espirometria → Wikimedia Commons "DoingSpirometry.JPG" (CC BY-SA 3.0)
import { asset } from "../utils/asset";

export const images = {
  heroWorkers:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1920&auto=format&fit=crop",
  heroSafety:
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920&auto=format&fit=crop",
  about:
    "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1200&auto=format&fit=crop",
  services:
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=900&auto=format&fit=crop",
  examClinical: asset("images/exames/clinico.jpg"),
  examAudiometry: asset("images/exames/audiometria.jpg"),
  examSpirometry: asset("images/exames/espirometria.jpg"),
  examVision: asset("images/exames/acuidade-visual.jpg"),
  examEcg: asset("images/exames/ecg.jpg"),
  examXray: asset("images/exames/raio-x.jpg"),
  examLab:
    "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?q=80&w=900&auto=format&fit=crop",
  examToxic: asset("images/exames/toxicologico.jpg"),
  articleAep:
    "https://images.unsplash.com/photo-1472745433479-4556f22e32c2?q=80&w=800&auto=format&fit=crop",
  articleSafety:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
  articleTraining:
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
  eSocialHero:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1920&auto=format&fit=crop",
};