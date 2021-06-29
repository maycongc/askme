import 'styled-components';

import { lightTheme } from './themes/light';

declare module 'styled-components' {
  type Theme = typeof lightTheme;
  export interface DefaultTheme extends Theme {}
}
