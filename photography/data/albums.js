/* 作品集数据源
 * 每新增一次拍摄:在数组开头插入一条(最新在前),
 * 并在 photography/albums/<slug>/ 下放 show.jpg。
 */
window.ALBUMS = [
  {
    date: "2026-04-18",
    title: "UNSWFC Home Game",
    location: "Village Green, UNSW",
    slug: "20240418_UNSWFC_VillageGreen",
    cover: "albums/20240418_UNSWFC_VillageGreen/show.jpg",
    description: "A Victory at home!",
    drive_url: "https://drive.google.com/drive/folders/1suxjeiUmGSgLJP-tW9fqdTsvatXDivMg?usp=sharing"
  },
  {
    date: "2026-04-11",
    title: "UNSWFC Home Game",
    location: "Village Green, UNSW",
    slug: "20240411_UNSWFC_VillageGreen",
    cover: "albums/20240411_UNSWFC_VillageGreen/show.jpg",
    description: "A Victory at home!",
    drive_url: "https://drive.google.com/drive/folders/1y54xyAducuTrsZM8pTG_XV-AkgsZ7bvE?usp=sharing"
  }
];
