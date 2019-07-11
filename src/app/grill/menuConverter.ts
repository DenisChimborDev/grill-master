import { Menu } from './Menu';
import { RawMenu } from './RawMenu';

export function convertMenu(rawMenu: RawMenu): Menu {
  return {
    items: rawMenu.items.map(item => ({
      length: item.Length,
      name: item.Name,
      quantity: item.Quantity,
      width: item.Width,
    })),
    name: rawMenu.menu,
  };
}
