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
      <div className="grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="max-w-60 space-y-2">
          <Image
            className="mb-5 rounded-lg"
            src={anneloes}
            alt="Dr. Anneloes Kip"
          />
          <span className="block font-semibold">Dr. Anneloes Kip</span>
          <span className="block">
            Postdoctoral Researcher at Tilburg University
          </span>
        </div>

        <div className="max-w-60 space-y-2">
          <Image
            className="mb-5 rounded-lg"
            src={dongning}
            alt="Dr. Dongning Ren"
          />
          <span className="block font-semibold">Dr. Dongning Ren</span>
          <span className="block">
            Associate Professor at Maastricht University
          </span>
        </div>
      </div>
    </main>
  )
}

export default Contributors
