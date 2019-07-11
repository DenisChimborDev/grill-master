import { MenuItem } from './menuItem';
import { MenuItemPosition } from './MenuItemPosition';

export interface CookingInstruction {

  notFitItems: MenuItem[];

  rounds: MenuItemPosition[][];
}
