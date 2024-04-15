import AppBar from "../views/appbar"
import Button from "../views/button"
import { IconCart } from "../views/icons"
import SectionList from "../views/list"

function CartAppBar() {
  return <AppBar title="React Meals">
    <Button primary>
      <IconCart className="w-6 h-6 fill-white" />
      Your Cart
      <div className="rounded-full bg-red-800 w-8 h-8 grid place-content-center">0</div>
    </Button>
  </AppBar>
}

export default function PageCart() {
  return (
    <>
      <CartAppBar />
      <SectionList.List>
        <div className="text-2xl font-bold text-center">Cart is Empty!</div>
      </SectionList.List>
    </>
  )
}
