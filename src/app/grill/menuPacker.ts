import { Item, Packer } from './binpacking';
import { Menu } from './Menu';
import { MenuPackerItem } from './menuPackerItem';

export function getPackerItems(menu: Menu): MenuPackerItem[] {
  const packerItems: MenuPackerItem[] = [];
  menu.items.forEach(menuItem => {
    let count = 0;
    while (count < menuItem.quantity) {
      packerItems.push({
        h: menuItem.length,
        menuItem,
        w: menuItem.width,
      });
      count++;
    }
  });
  return packerItems;
}

export function packItems(grillWidth: number, grillHeight: number, items: Item[]): void {
  const packer = new Packer(grillWidth, grillHeight);
  packer.fit(items);
}
