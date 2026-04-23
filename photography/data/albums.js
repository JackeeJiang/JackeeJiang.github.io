/* 作品集数据源
 * 每新增一次拍摄:在数组开头插入一条(最新在前),
 * 并在 photography/albums/<slug>/ 下放 show.jpg。
 */
window.ALBUMS = [
  {
    date: "2026-04-05",
    title: "Kings Canyon Autumn",
    location: "Central Australia",
    slug: "05042026-kings-canyon-autumn",
    cover: "albums/05042026-kings-canyon-autumn/show.jpg",
    description: "Ochre walls under a quiet autumn sky.",
    drive_url: "https://drive.google.com/drive/folders/placeholder-01"
  },
  {
    date: "2025-12-20",
    title: "Sydney Harbour at Dusk",
    location: "Sydney, Australia",
    slug: "20122025-sydney-harbour-at-dusk",
    cover: "albums/20122025-sydney-harbour-at-dusk/show.jpg",
    description: "Golden hour drifting over the bridge.",
    drive_url: "https://drive.google.com/drive/folders/placeholder-02"
  }
];
