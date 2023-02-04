// Este é um arquivo de definição de tipos para o styled-components

import "styled-components";
import { defaultTheme } from "../../styles/themes/default";

type themeType = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends themeType {}
}
