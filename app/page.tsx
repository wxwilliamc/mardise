import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { perks } from "@/constants/perks";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Container>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-slate-800 sm:text-6xl">
            Empowering Your <span className="text-purple-600">Creations,</span> Every Asset Guaranteed .
          </h1>

          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to MarDise. Where every asset undergoes rigorous verification, guaranteeing top-tier quality for your creative projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <Link href='/products'>
              <Button>
                Browse Trending
              </Button>
            </Link>

            <Button variant='ghost'>
              Our quality promise &rarr;
            </Button>
          </div>
        </div>

        {/* TODO: List all products */}
      </Container>

      <section className="border-t border-gray-200 bg-gray-50">
        <Container className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {/* Map Perks */}
            {perks.map((perk, index) => (
              <div key={index} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center group transform duration-200">
                {/* shrink-0: prevent a flex item from shrinking */}
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-purple-100 text-purple-900 group-hover:bg-purple-600 transform duration-200  group-hover:scale-105 group-hover:text-purple-100">
                    {<perk.Icon className="w-1/3 h-1/3"/>}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6  transform duration-200 sm:group-hover:translate-x-2 md:group-hover:scale-105 group-hover:translate-y-1">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>

                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
