"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TimelineStep {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  const steps: TimelineStep[] = [
    {
      id: 1,
      title: "Découverte",
      description: "Analyse des besoins, objectifs et public cible. Élaboration du cahier des charges.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Planification",
      description: "Définition du périmètre, estimation des coûts, choix des technologies et création du planning.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Conception",
      description: "Création des wireframes, design de l'interface utilisateur et prototypage interactif avec l'aide d'une IA.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Développement",
      description: "Intégration frontend, développement backend, connexion aux API et optimisation des performances.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Tests",
      description: "Tests fonctionnels, de compatibilité, de performance et d'accessibilité. Correction des bugs.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Déploiement",
      description: "Configuration du serveur, mise en ligne du site et vérifications post-déploiement.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      ),
    },
    {
      id: 7,
      title: "Livraison",
      description: "Formation, documentation, remise des accès et transfert complet au client.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
  ]

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12">
      {/* Timeline pour desktop */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Ligne horizontale */}
          <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 transform bg-blue-200"></div>

          {/* Étapes */}
          <div className="relative flex justify-between">
            {steps.map((step) => (
              <div
                key={step.id}
                className="relative flex flex-col items-center"
                onMouseEnter={() => setActiveStep(step.id)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Cercle */}
                <div
                  className={cn(
                    "z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-blue-200 bg-white transition-all duration-300",
                    activeStep === step.id ? "border-blue-600 text-blue-600" : "text-blue-400",
                  )}
                >
                  {step.icon}
                </div>

                {/* Titre */}
                <div className="mt-4 text-center font-medium">{step.title}</div>

                {/* Description (visible au survol) */}
                {activeStep === step.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-20 z-20 w-64 rounded-lg bg-white p-4 text-sm shadow-lg"
                  >
                    {step.description}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline pour mobile */}
      <div className="md:hidden">
        <div className="relative">
          {/* Ligne verticale */}
          <div className="absolute left-6 top-0 h-full w-1 bg-blue-200"></div>

          {/* Étapes */}
          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.id} className="relative flex items-start">
                {/* Cercle */}
                <div className="z-10 mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-4 border-blue-200 bg-white text-blue-500">
                  {step.icon}
                </div>

                {/* Contenu */}
                <div>
                  <h3 className="text-lg font-medium">{step.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
