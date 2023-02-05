import { Header } from "../../components/Header";
import { HistoryContainer, HistoryList } from "./styles";

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Ínicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20 Minutos</td>
              <td>há 2 meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 Minutos</td>
              <td>há 2 meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 Minutos</td>
              <td>há 2 meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 Minutos</td>
              <td>há 2 meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 Minutos</td>
              <td>há 2 meses</td>
              <td>Concluido</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
