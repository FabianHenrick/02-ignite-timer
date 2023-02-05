import { Header } from "../../components/Header";
import { Play } from "phosphor-react";
import {
  CountDownContainer,
  FormContainer,
  HomeConainer,
  MinutesAmount,
  Separator,
  StartCountdownButton,
  TaskInput,
} from "./styles";

export function Home() {
  return (
    <HomeConainer>
      <form action="">
        <FormContainer>
          <div>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput id="task" placeholder="Dê um nome para o seu projeto " />

            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmount type="number" id="minutesAmount" placeholder="00" />

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

        <StartCountdownButton type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeConainer>
  );
}
