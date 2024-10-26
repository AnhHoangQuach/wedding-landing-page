'use client'

import { Button } from '@/components/ui/button'
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Fragment, useEffect, useState } from 'react'

export default function Home() {
  const [api, setApi] = useState<CarouselApi>()
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = () => {
    if (api) api.scrollPrev()
  }

  const scrollNext = () => {
    if (api) api.scrollNext()
  }

  // Update button disabled state when `api` changes or scroll position changes
  useEffect(() => {
    if (!api) return

    // Initial button state
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())

    // Set up listener for scroll events
    const onScrollChange = () => {
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }

    api.on('scroll', onScrollChange)

    // Clean up event listener
    return () => {
      api.off('scroll', onScrollChange)
    }
  }, [api])

  return (
    <Fragment>
      <section
        className="relative min-h-[850px] bg-cover bg-center px-[200px]"
        style={{
          backgroundImage:
            'linear-gradient(95.48deg, rgba(0, 0, 0, 0.4) 8.46%, rgba(0, 0, 0, 0.16) 51.77%, rgba(0, 0, 0, 0.12) 97.07%), url(/images/background.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-[#E4E4E6] absolute bottom-16">
          <div className="font-medium capitalize">wedding Studio @ 2024</div>
          <div className="font-bold text-[40px] my-6 uppercase">váy cưới sam nguyễn - biên hoà</div>
          <Button className="button-gradient rounded-full capitalize">liên hệ</Button>
        </div>
      </section>
      <section className="px-[200px] my-16">
        <div className="flex items-center">
          <div className="flex-1">
            <div className="uppercase text-[#62646C] font-normal">service</div>
            <div className="uppercase text-[28px] leading-9 font-bold">dịch vụ phóng sự cưới</div>
          </div>
          <div className="border border-[#202026] rounded-full flex items-center gap-3 p-[10px]">
            <Button
              className="rounded-full"
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              className="rounded-full"
              variant="outline"
              size="icon"
              onClick={scrollNext}
              disabled={!canScrollNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Carousel setApi={setApi}>
          <CarouselContent>
            <CarouselItem>213</CarouselItem>
            <CarouselItem>456</CarouselItem>
            <CarouselItem>789</CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>
    </Fragment>
  )
}
