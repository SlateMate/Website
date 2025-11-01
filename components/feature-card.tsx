"use client"

import type React from "react"

import { useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  color?: "blue" | "orange" | "green"
}

export function FeatureCard({ title, description, icon: Icon, color }: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20

    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
    setIsHovered(false)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  // gradient overlay based on color
  const overlayClass =
    color === "orange"
      ? "bg-gradient-to-br from-orangeLight/40 to-orange/30"
      : color === "blue"
      ? "bg-gradient-to-br from-blueLight/40 to-bluePrimary/30"
      : "bg-gradient-to-br from-emerald/30 to-emerald/10"

  return (
    <Card
      ref={cardRef}
      className={`group relative overflow-hidden border border-border/50 transition-transform duration-500 transform-gpu origin-center ${
        color === "blue" ? "shadow-lg" : "shadow-sm"
      }`}
      style={{
        transform: `perspective(1000px) scale(${isHovered ? 1.5 : 1}) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: "transform 0.25s cubic-bezier(.2,.9,.2,1), box-shadow 0.4s ease",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {/* Inner gradient overlay - appears on hover */}
      <div
        className={`absolute inset-0 rounded-xl opacity-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-100 ${overlayClass} mix-blend-overlay`}
      />

      <CardHeader className="pb-2 relative z-10">
        <div className="w-12 h-12 rounded-full bg-electric/10 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-electric" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="relative z-10">
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
