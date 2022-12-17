import { Logo } from "../Header/Logo";
import { ToastMainPage } from "./ToastMainPage";
import  img  from "../../assets/img/img.svg";
import { AsideStyled } from "./AsideStyled";

export const AsideMainPages = () => {
  return (
    <AsideStyled>
      <Logo />

      <ToastMainPage />

      <figure>
        <img src={img} alt="Dots" />
      </figure>
    </AsideStyled>
  );
};