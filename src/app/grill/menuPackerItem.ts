import { Item } from './binpacking';
import { MenuItem } from './menuItem';

export interface MenuPackerItem extends Item {

  menuItem: MenuItem;
}
