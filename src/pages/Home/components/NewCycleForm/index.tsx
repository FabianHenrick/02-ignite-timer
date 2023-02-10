import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormContainer, TaskInput, MinutesAmount } from "./styles";
import * as zod from "zod";

const newCycleFomrValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "O ciclo tem que ser de no mínimo 5 minutos.")
    .max(60, "O ciclo tem que ser de no máximo 60 minutos."),
});

type NewCycleFormData = zod.infer<typeof newCycleFomrValidationSchema>;

export function NewCycleForm() {
  const { register, handleSubmit, watch, formState, reset } =
    useForm<NewCycleFormData>({
      resolver: zodResolver(newCycleFomrValidationSchema),
      defaultValues: {
        task: "",
        minutesAmount: 0,
      },
    });

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
