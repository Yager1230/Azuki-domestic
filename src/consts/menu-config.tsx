import { MenuConfig } from "../components/MyMenu";
import { I18nEnum } from "./i18n";

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
    },
    {
      target: "https://im.qq.com/pcqq/",
      label: I18nEnum.TENCENT_QQ,
      openNewWin: true,
    },
  ];
}
