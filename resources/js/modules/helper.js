import { CONFIG } from '../modules/CONFIG';

/**
 * スケジュールと、それに合わせたAPI情報を返す
 * @param {*} allResponse
 */
export const getEventLists = (allResponse) => {
  let eventLists = [];
  let pickUpList = [];
  eventLists = allResponse.res[0]['01'];
  eventLists.forEach((item, index) => {
    pickUpList[index] = [];
    item.list.forEach((evidence, evidenceIndex) => {
      allResponse.res[1].forEach((data) => {
        if (evidence === data.spotid) {
          pickUpList[index].push([data.reinen, data.train, data.midokoro, CONFIG.LEAVE_STATUS[data.rank], CONFIG.PREFID[data.prefid], item.data[evidenceIndex].name]);
        }
      });
    });
  });
  return [pickUpList[0], eventLists[0].date];
};

export const category = {
  1: 'いちご',
  2: 'ぶどう',
  3: 'みかん',
  4: 'りんご',
  5: 'すいか'
};
