// Components
import Container from "@/shared/ui/Container";
import { BaseButton } from "@/shared/ui/Buttons/BaseButton";
import { BaseInput } from "@/shared/ui/Inputs/BaseInput";

const Header = () => {
  return (
    <header className="w-full sticky">
      <Container className="flex flex-col gap-5 items-center justify-between !py-5 md:flex-row">
        <BaseInput placeholder="Search..." className="w-full md:w-[400px]"/>
        <BaseButton text="Open Cart"/>
      </Container>
    </header>
  )
}

export default Header;