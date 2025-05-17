// Components
import Container from "@/shared/ui/Container";
import { CartToggleBtn } from "./ui/CartToggleBtn";
import { InputSearch } from "@/features/inputSearch/ui";

const Header = () => {
  return (
    <header className="w-full sticky left-[0] top-[0] z-[50] text-white bg-black">
      <Container className="flex flex-col gap-5 items-center justify-between !py-5 md:flex-row">
        <InputSearch 
          className="w-full text-white border-white md:w-[400px]" 
          icon={true}
        />
        <CartToggleBtn/>
      </Container>
    </header>
  )
}

export default Header;