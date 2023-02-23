import { zodResolver } from "@hookform/resolvers/zod";
import { useFormContext } from "react-hook-form";
import { FormContainer, TaskInput, MinutesAmount } from "./styles";
import * as zod from "zod";
import { useContext } from "react";
import { CyclesContext } from "../../Index";

interface CountdownProps {
  activeCycle: any;
}

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <div>
        <label htmlFor="task">Vou trabalhar em</label>
        <TaskInput
          id="task"
          placeholder="Dê um nome para o seu projeto "
          disabled={!!activeCycle}
          {...register("task")}
        />

        <label htmlFor="minutesAmount">durante</label>
        <MinutesAmount
          type="number"
          id="minutesAmount"
          placeholder="00"
          disabled={!!activeCycle}
          {...register("minutesAmount", { valueAsNumber: true })}
        />

        <span>minutos .</span>
      </div>
    </FormContainer>
  );
}
