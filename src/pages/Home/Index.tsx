import { Header } from "../../components/Header";
import { useForm, FormProvider } from "react-hook-form";
import { createContext, useContext, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { HandPalm, Play } from "phosphor-react";
import {
  HomeConainer,
  StartCountdownButton,
  StopCountdownButton,
} from "./styles";
import { NewCycleForm } from "./components/NewCycleForm";
import { Countdown } from "./components/Countdown";
import { CyclesContext } from "../../contexts/CyclesContext";

// useState / UseForm / Context

const newCycleFomrValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "O ciclo tem que ser de no mínimo 5 minutos.")
    .max(60, "O ciclo tem que ser de no máximo 60 minutos."),
});

type NewCycleFormData = zod.infer<typeof newCycleFomrValidationSchema>;

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext);

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFomrValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  const task = watch("task");

  const isSubmitDisabled = !task;

  return (
    <HomeConainer>
      <form onSubmit={handleSubmit(createNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeConainer>
  );
}
