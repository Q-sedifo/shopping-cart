import React from "react";

// Components
import Container from "@/shared/ui/Container";
import Categories from "@/widgets/Categories";

interface IWithSideBarLayoutProps {
  children: React.ReactNode;
}

const WithSideBarLayout = ({ children }: IWithSideBarLayoutProps) => {
  return (
    <Container className="flex flex-col gap-5 lg:flex-row">
      <Categories/>
      { children }
    </Container>
  )
}

export default WithSideBarLayout;