import { Header } from "../../components/Header";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
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
import { useState } from "react";

/*
 * function register(name:string){
 *    return{
 *        onChange:()=>
 *        onBlur:()=>
 *        onFocus()=>
 *  }
 * }
 *  */

const newCycleFomrValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "O ciclo tem que ser de no mínimo 5 minutos.")
    .max(60, "O ciclo tem que ser de no máximo 60 minutos."),
});

type NewCycleFormData = zod.infer<typeof newCycleFomrValidationSchema>;

export function Home() {
  interface Cycle {
    id: string;
    task: string;
    minutesAmount: number;
  }

  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const { register, handleSubmit, watch, formState, reset } =
    useForm<NewCycleFormData>({
      resolver: zodResolver(newCycleFomrValidationSchema),
      defaultValues: {
        task: "",
        minutesAmount: 0,
      },
    });

  function handleCreateNewCycle(data: NewCycleFormData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
    };

    setCycles((state) => [...state, newCycle]);
    setActiveCycleId(newCycle.id);
    reset();
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;
  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  console.log(activeCycle);

  const task = watch("task");

  const isSubmitDisabled = !task;

  return (
    <HomeConainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <div>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput
              id="task"
              placeholder="Dê um nome para o seu projeto "
              {...register("task")}
            />

            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmount
              type="number"
              id="minutesAmount"
              placeholder="00"
              {...register("minutesAmount", { valueAsNumber: true })}
            />

            <span>minutos .</span>
          </div>
        </FormContainer>

        <CountDownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountDownContainer>

        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeConainer>
  );
}
