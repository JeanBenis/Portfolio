import { Code, Palette, Search, Server, ShoppingCart, PenToolIcon as Tool } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SkillCardProps {
  title: string
  description: string
  icon: "Code" | "Server" | "Palette" | "ShoppingCart" | "Tool" | "Search"
  skills: string[]
}

export default function SkillCard({ title, description, icon, skills }: SkillCardProps) {
  const IconComponent = () => {
    switch (icon) {
      case "Code":
        return <Code className="h-6 w-6 text-blue-600" />
      case "Server":
        return <Server className="h-6 w-6 text-blue-600" />
      case "Palette":
        return <Palette className="h-6 w-6 text-blue-600" />
      case "ShoppingCart":
        return <ShoppingCart className="h-6 w-6 text-blue-600" />
      case "Tool":
        return <Tool className="h-6 w-6 text-blue-600" />
      case "Search":
        return <Search className="h-6 w-6 text-blue-600" />
      default:
        return <Code className="h-6 w-6 text-blue-600" />
    }
  }

  return (
    <Card className="h-full transition-all duration-300 hover:shadow-md">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
          <IconComponent />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
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
