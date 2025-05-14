import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap } from "lucide-react"

interface EducationCardProps {
  degree: string
  school: string
  period: string
  description: string
  skills: string[]
}

export default function EducationCard({ degree, school, period, description, skills }: EducationCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
          <GraduationCap className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <CardTitle className="text-xl">{degree}</CardTitle>
          <p className="text-sm text-gray-500">
            {school} | {period}
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-gray-600">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline" className="border-blue-200 bg-blue-50">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
