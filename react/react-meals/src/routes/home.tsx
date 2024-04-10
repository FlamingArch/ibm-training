import { FoodItem } from "../types"
import AppBar from "../views/appbar"
import Button from "../views/button"
import { IconCart } from "../views/icons"
import SectionList from "../views/list"

function HomeAppBar() {
  return <AppBar title="React Meals">
    <Button primary>
      <IconCart className="w-6 h-6 fill-white" />
      Your Cart
      <div className="rounded-full bg-red-800 w-8 h-8 grid place-content-center">0</div>
    </Button>
  </AppBar>
}

export default function PageHome() {
  const sample_item = {
    title: "Sushi",
    description: "Finest Fish and Veggies",
    price: 29.99
  } as FoodItem

  return (
    <>
      <HomeAppBar />
      <SectionList.List>
        <SectionList.Item item={sample_item} />
      </SectionList.List>
    </>
  )
}
