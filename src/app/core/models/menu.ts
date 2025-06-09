export interface IMenuItem {
  id: string;               // 菜色唯一 ID
  name: string;             // 菜名（如：紅燒排骨）
  description?: string;     // 可選：描述
  calories?: number;        // 可選：卡路里資訊
  imageUrl?: string;        // 可選：圖片
}

export interface IDailyMenu {
  date: string;             // ISO 格式日期，如 "2025-06-09"
  items: IMenuItem[];        // 該日菜色清單（多道）
}

export interface IWeeklyMenu {
  weekOf: string;           // 該週的起始日（如 2025-06-09）
  days: IDailyMenu[];        // 該週每一天的菜單
}
