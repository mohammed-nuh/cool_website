import React from 'react'
import WrapButton from "@/components/ui/wrap-button"
import { Globe } from "lucide-react";

const WrapButtonComopent = () => {
  return (
    <div className="w-full flex ">
        <WrapButton className="mt-10" href="/docs/components/card-carousel" >
            <Globe className="animate-spin " />
            Get started
        </WrapButton>
    </div>
  )
}

export default WrapButtonComopent