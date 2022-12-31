import { MenuConfig } from "../components/MyMenu";
import { I18nEnum } from "./i18n";
import redBookSrc from "../static/img/redBook.png";
import kookSrc from "../static/img/kook.png";
import wbSrc from "../static/img/wb.png";

export function getMenuConfig(): MenuConfig[] {
  return [
    {
      label: I18nEnum.MIND_MAP,
      target: "/mind-map",
    },
    {
      target:
        "https://www.baidu.com/link?url=G96YGtXgzRdYloQayEjdt7lTx4gBdWglcoTWb_lIBh_&wd=&eqid=9182606d000be34100000006639eb0bf",
      label: I18nEnum.MICRO_BLOG,
      openNewWin: true,
      imgSrc: wbSrc,
      imgHeightConfig: "1.4rem",
    },
    {
      target: "https://www.kookapp.cn/",
      label: I18nEnum.KOOK,
      openNewWin: true,
      imgSrc: kookSrc,
    },
    {
      target: "https://www.xiaohongshu.com/",
      label: I18nEnum.RED_BOOK,
      openNewWin: true,
      imgSrc: redBookSrc,
    },
  ];
}
