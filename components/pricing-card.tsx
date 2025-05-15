import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface PricingFeature {
  text: string
  included: boolean
}

interface PricingCardProps {
  title: string
  price: number
  description: string
  features: PricingFeature[]
  popular?: boolean
  buttonText?: string
  buttonLink?: string
  duration?: string
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  popular = false,
  buttonText = "Me contacter",
  buttonLink = "#contact",
  duration = "projet",
}: PricingCardProps) {
  return (
    <Card
      className={`flex h-full flex-col transition-all duration-200 ${
        popular
          ? "relative scale-105 border-blue-500 shadow-lg shadow-blue-100 hover:shadow-blue-200"
          : "hover:border-blue-300 hover:shadow-md"
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-blue-600 px-4 py-1 text-sm font-medium text-white">
          Recommandé
        </div>
      )}

      <CardHeader className={popular ? "pt-8" : ""}>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="pt-1.5">{description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <div className="mb-6 flex items-baseline">
          <span className="text-3xl font-bold">{price === 0 ? "Sur devis" : `${price} €`}</span>
          {price > 0 && <span className="ml-1 text-sm text-gray-500">/ {duration}</span>}
        </div>

        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className={`mr-2 mt-1 ${feature.included ? "text-blue-600" : "text-gray-300"}`}>
                <Check className="h-4 w-4" />
              </div>
              <span className={feature.included ? "text-gray-700" : "text-gray-400"}>{feature.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="pt-4">
        <Button
          asChild
          className={`w-full ${
            popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          <Link href={buttonLink}>{buttonText}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
