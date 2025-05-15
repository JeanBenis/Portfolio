import { cn } from "@/lib/utils"

interface LanguageCardProps {
  language: string
  level: number // 1-5 où 5 est natif/bilingue
  description?: string
  flag?: string
}

export default function LanguageCard({ language, level, description, flag }: LanguageCardProps) {
  // Convertir le niveau numérique en texte descriptif
  const getLevelText = (level: number) => {
    switch (level) {
      case 1:
        return "Notions de base"
      case 2:
        return "Niveau intermédiaire"
      case 3:
        return "Niveau avancé"
      case 4:
        return "Courant"
      case 5:
        return "Bilingue / Natif"
      default:
        return "Non spécifié"
    }
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {flag && <span className="text-2xl">{flag}</span>}
          <h3 className="text-xl font-semibold text-gray-800">{language}</h3>
        </div>
        <span className="text-sm font-medium text-blue-600">{getLevelText(level)}</span>
      </div>

      <div className="mb-2 h-2 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className={cn(
            "h-full rounded-full bg-blue-600",
            level === 1 && "w-1/5",
            level === 2 && "w-2/5",
            level === 3 && "w-3/5",
            level === 4 && "w-4/5",
            level === 5 && "w-full",
          )}
        ></div>
      </div>

      {description && <p className="mt-3 text-sm text-gray-600">{description}</p>}
    </div>
  )
}
