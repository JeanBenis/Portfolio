import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

interface ExperienceCardProps {
  position: string
  company: string
  period: string
  description: string
  achievements: string[]
  technologies: string[]
}

export default function ExperienceCard({
  position,
  company,
  period,
  description,
  achievements,
  technologies,
}: ExperienceCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
          <Briefcase className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <CardTitle className="text-xl">{position}</CardTitle>
          <p className="text-sm text-gray-500">
            {company} | {period}
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-gray-600">{description}</p>

        <h4 className="mb-2 font-semibold text-blue-700">Réalisations clés:</h4>
        <ul className="mb-4 list-inside list-disc space-y-1 text-gray-600">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="border-blue-200 bg-blue-50">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
