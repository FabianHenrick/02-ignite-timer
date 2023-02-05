import { Header } from "../../components/Header";
import { Play } from "phosphor-react";
import {
  CountDownContainer,
  FormContainer,
  HomeConainer,
  Separator,
} from "./styles";

export function Home() {
  return (
    <HomeConainer>
      <form action="">
        <FormContainer>
          <div>
            <label htmlFor="task">Vou trabalhar em</label>
            <input id="task" />

            <label htmlFor="minutesAmount">Durante</label>
            <input type="number" id="minutesAmount" />

            <span>minutos .</span>
          </div>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <button type="submit">
          <Play size={24} />
          Começar
        </button>
      </form>
    </HomeConainer>
  );
}
