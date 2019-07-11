import { CookingInstruction } from './cookingInstruction';
import { Menu } from './Menu';
import { MenuItem } from './menuItem';
import { MenuItemPosition } from './MenuItemPosition';
import { getPackerItems, packItems } from './menuPacker';
import { MenuPackerItem } from './menuPackerItem';

export function getCookingInstruction(grillWidth: number, grillHeight: number, menu: Menu): CookingInstruction {
  const rounds: MenuItemPosition[][] = [];
  let remainingItems: MenuPackerItem[] = getPackerItems(menu);
  do {
    packItems(grillWidth, grillHeight, remainingItems);
    const roundItems = remainingItems
      .filter(item => item.fit !== undefined)
      .map(getMenuItemPosition);
    if (roundItems.length > 0) {
      remainingItems = remainingItems.filter(item => item.fit === undefined);
      rounds.push(roundItems);
    } else {
      break;
    }
  } while (remainingItems.length > 0);
  const notFitItems = getUniqueMenuItems(remainingItems);
  return {
    notFitItems,
    rounds,
  };
}

function getUniqueMenuItems(packerItems: MenuPackerItem[]): MenuItem[] {
  const uniqueItems: MenuItem[] = [];
  packerItems.forEach(packerItem => {
    if (uniqueItems.indexOf(packerItem.menuItem) === -1) {
      uniqueItems.push(packerItem.menuItem);
    }
  });
  return uniqueItems;
}

function getMenuItemPosition(packerItem: MenuPackerItem): MenuItemPosition {
  const { x, y } = packerItem.fit as { x: number; y: number };
  return {
    menuItem: packerItem.menuItem,
    x,
    y,
  };
}
