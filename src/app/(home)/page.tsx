import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductCard, { Product } from "./components/product-card"

const products: Product[] = [
  {
    id: "1",
    name: "Margherita Pizza",
    description:
      "A classic Italian pizza topped with tomato sauce, fresh mozzarella cheese, basil leaves, and a drizzle of olive oil. Simple yet delicious!",
    image: "/pizza-main.png",
    price: 500
  },
  {
    id: "2",
    name: "Pepperoni Pizza",
    description:
      "A timeless favorite featuring tomato sauce, generous amounts of pepperoni slices, and mozzarella cheese. It's savory, spicy, and always satisfying.",
    image: "/pizza-main.png",
    price: 500
  },
  {
    id: "3",
    name: "Four Cheese Pizza",
    description:
      "A cheese lover's paradise featuring a blend of four cheeses such as mozzarella, cheddar, provolone, and Parmesan, melted over a rich tomato sauce base. Creamy, gooey, and utterly satisfying.",
    image: "/pizza-main.png",
    price: 500
  },
  {
    id: "4",
    name: "Mediterranean Pizza",
    description:
      " A taste of the Mediterranean with toppings like sun-dried tomatoes, kalamata olives, artichoke hearts, feta cheese, red onions, and a drizzle of olive oil, all on a thin crust brushed with garlic sauce.",
    image: "/pizza-main.png",
    price: 500
  },
  {
    id: "5",
    name: "Supreme Pizza",
    description:
      "The ultimate pizza experience with a little bit of everything - pepperoni, sausage, bell peppers, onions, black olives, mushrooms, and mozzarella cheese, all harmoniously combined for a burst of flavor in every bite.",
    image: "/pizza-main.png",
    price: 500
  }
]

export default function Home() {
  return (
    <>
      <section className="bg-white">
        <div className="container flex items-center justify-between py-24">
          <div>
            <h1 className="text-7xl font-black font-sans leading-2">
              Delicious Pizzas, Ready in
              <br />
              <span className="text-primary">Only 45 Minutes!</span>
            </h1>
            <p className="text-2xl mt-8 max-w-lg leading-snug">
              Enjoy a Complimentary Meal if Your Order Takes Longer Than 45
              Minutes!
            </p>
            <Button className="mt-8 text-lg rounded-full py-7 px-6 font-bold">
              Get your pizza now
            </Button>
          </div>
          <div>
            <Image
              alt="pizza-main"
              src={"/pizza-main.png"}
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container py-12">
          <Tabs defaultValue="pizza">
            <TabsList>
              <TabsTrigger value="pizza" className="text-md">
                Pizza
              </TabsTrigger>
              <TabsTrigger value="beverages" className="text-md">
                Beverages
              </TabsTrigger>
            </TabsList>
            <TabsContent value="pizza">
              <div className="grid grid-cols-4 gap-6 mt-6">
                {products.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="beverages">
              <div className="grid grid-cols-4 gap-6 mt-6">
                {products.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
}
