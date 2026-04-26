import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { LinkIcon } from "lucide-react"

import anneloes from "@/assets/images/anneloes.jpg"
import dongning from "@/assets/images/dongning.jpg"

const Contributors = () => {
  return (
    <main className="page-width page-container text-center space-y-6">
      <h1 className="text-page-title">Contributors</h1>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="max-w-60 space-y-2">
          <div className="mb-5 w-full aspect-square overflow-hidden rounded-lg">
            <Image
              className="w-full h-full object-cover"
              src={anneloes}
              alt="Dr. Anneloes Kip"
            />
          </div>
          <span className="block font-semibold">Dr. Anneloes Kip</span>
          <span className="block">
            Postdoctoral Researcher at Tilburg University
          </span>
        </div>

        <div className="max-w-60 space-y-2">
          <div className="mb-5 w-full aspect-square overflow-hidden rounded-lg">
            <Image
              className="w-full h-full object-cover"
              src={dongning}
              alt="Dr. Dongning Ren"
            />
          </div>
          <span className="block font-semibold">Dr. Dongning Ren</span>
          <span className="block">
            Associate Professor at Maastricht University
          </span>
        </div>
      </div>
      <div className="space-y-4 pt-4">
        <h2 className="text-subsection-title">Consultants</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="max-w-60 space-y-2">
            <span className="block font-semibold">Dr. Manuel Oliveira</span>
            <span className="block">
              Postdoctoral Researcher at Eindhoven University of Technology
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contributors
