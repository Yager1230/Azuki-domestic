import { I18nEnum } from "../consts/i18n";
import {
  wishImgSrc,
  storyImgSrc,
  communityImgSrc,
} from "../static/img/mindMapImgs/index";

export const blockConfig = [
  {
    height: "360px",
    top: "5px",
    leftConfficient: 0,
    title: I18nEnum.MIND_MAP_TITLE_HOPE,
    imgSrc: wishImgSrc,
  },
  {
    height: "236px",
    top: "370px",
    leftConfficient: 0,
    title: I18nEnum.MIND_MAP_TITLE_COMMUNITY_WELFARE,
    imgSrc: communityImgSrc,
  },
  {
    height: "224px",
    top: "5px",
    leftConfficient: 1,
    title: I18nEnum.MIND_MAP_TITLE_STORY,
    imgSrc: storyImgSrc,
  },
  {
    height: "372px",
    top: "234px",
    leftConfficient: 1,
    title: "",
  },
  { height: "360px", top: "5px", leftConfficient: 2, title: "" },
  { height: "360px", top: "5px", leftConfficient: 3, title: "" },
  {
    height: "236px",
    top: "370px",
    leftConfficient: 2,
    lastOne: true,
    title: "",
  },
];
