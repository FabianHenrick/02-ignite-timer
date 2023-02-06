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

export function Home() {
  const { register, handleSubmit, watch, formState } = useForm({
    resolver: zodResolver(newCycleFomrValidationSchema),
  });

  function handleCreateNewCycle(data: any) {
    console.log(data);
  }

  console.log(formState.errors);

  const task = watch("task", "MinutesAmount");
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
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeConainer>
  );
}
